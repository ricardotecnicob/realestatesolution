import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


import { Container, HeaderTop, ContainerOrg, ContainerMenu, ContainerListInteresse, CardImoveis, ContainerListInteresseContainer, Rodape } from './styles';

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import  logo from '../../assets/images/logo.png';
import  avatar from '../../assets/images/default_user_profile.png';
import  imovel from '../../assets/images/home-photo.png';
import api from "../../services/api";

export default function ListaImoveis() {


  const [dimmer, setDimmer] = useState('');
  const [open, setOpen] = useState(false);
  const [immobile, setImmobile] = useState([]);
  const [movel, setMovel] = useState({});

  useEffect(()=> {
    async function handleUpdateImmobile() {
      const response = await api.get('/immobile');
      setImmobile(response.data);
    }
    handleUpdateImmobile();
  }, []);

  const itemParams = params => {
    setDimmer(params.effect);
    setOpen(params.openabrir);
    setMovel(params.payload);
  }


  const close = () => {
    setDimmer('');
    setOpen(false);

  }



  return (
    <Container>
      <Container>
          <HeaderTop>
            <div className="divLogo">
                <img src={logo} border="0" alt="" />
            </div>
            <div>
                <div className="divAvatar">
                        <img src={avatar} border="0" alt="" /> <br /> <label>User Name</label>
                </div>
                <br />
                <div className="buttonLogin">
                    <Link to="/" > Close </Link>
                </div>
            </div>
        </HeaderTop>
        <ContainerOrg>
            <ContainerMenu>
                <ul>
                    <Link to="/dashboard"><li>Dashboard</li></Link>
                    <hr />
                    <Link to="/listimoveis"><li>Lista de Imóveis</li></Link>
                </ul>
            </ContainerMenu>
            <ContainerListInteresse>
                <h1>Lista de Imóveis</h1>
                <ContainerListInteresseContainer>
                  {immobile.map(({ _id, preco, bairro, cidade, estado, images, tamanho, quarto, suite, banheiro, garagem, piscina, moveisImbutidos }) => (
                    <CardImoveis key={_id}>
                      <div className="areaImg">
                        <img src={images !== null ? require(`../../assets/images/${images[0]}`) : imovel } border="0" alt="" height="120px" width="170px" />
                      </div>
                      <div className="areaAdressValue">
                        Casa localizada no bairro {bairro} em {cidade}/{estado}.

                        <br />
                        <br />

                        Aluguel: R$ {preco?.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                      </div>
                      <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true, payload: { _id, preco, bairro,
                          cidade, estado, tamanho, quarto, suite, banheiro, garagem, piscina, moveisImbutidos } }) } >Detalhes</button>
                    </CardImoveis>
                  ))}
                </ContainerListInteresseContainer>
            </ContainerListInteresse>
        </ContainerOrg>
    </Container>
      <Rodape>
          Real Estate Solution All rights reserved
      </Rodape>
      <Modal dimmer={dimmer} open={open} onClick={() => close()}>
        <Modal.Header>Detalhes Imóvel</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={imovel} />
          <Modal.Description>
            <Header>Casa localizada no bairro {movel.bairro} na cidade de {movel.cidade} em {movel.estado}</Header>
            <p>
            O imóvel possuí {movel.quarto} quarto(s), {movel.banheiro === 0 ? 'não possuí banheiros' : `${movel.banheiro} banheiro(s)`},
              {movel.suite === 'sim' ? ' com suíte' : 'não possuí suíte'} e {movel.garagem === 0 ? 'não possuí garagem' : `${movel.garagem} garagem(ns).`}
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color='red' onClick={() => close()}>
              Sair
            </Button>
          </Modal.Actions>
      </Modal>
    </Container>
  );
}
