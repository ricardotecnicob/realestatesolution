import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from "../../services/api";

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import { Container, HeaderTop, ContainerOrg, ContainerMenu, ContainerListInteresse, CardImoveis, ContainerListInteresseContainer, Rodape } from './styles';

import  logo from '../../assets/images/logo.png';
import  avatar from '../../assets/images/default_user_profile.png';
import  imovel from '../../assets/images/home-photo.png';

import { useDispatch } from "react-redux";
import { signOut } from '../../store/modules/auth/actions';
import { store } from "../../store";

export default function Dashboard() {

  const [dimmer, setDimmer] = useState('');
  const [open, setOpen] = useState(false);
  const [properties, setProperties] = useState([]);
  const [user, setUser] = useState([]);

  const close = () => {
    setDimmer('');
    setOpen(false);
  };

  useEffect(() => {
    async function callProperties() {
      const response = await api.get('/match');
      setProperties(response.data);
    }

    callProperties();
  }, []);

  const onChangeUser = (name, email, phone) => {
    setUser({name, email, phone});
  };

  const itemParams = params => {
    onChangeUser(params.name, params.email, params.phone);
    setDimmer(params.effect);
    setOpen(params.openabrir);
  };

  const dispatch = useDispatch();
  const { name } = store.getState().auth.user;

  const onHandleLogOut = async () => {
    await dispatch(signOut());
  };

  return (
    <Container>
      <Container>
        <HeaderTop>
          <div className="divLogo">
            <img src={logo} border="0" alt="" />
          </div>
          <div>
            <div className="divAvatar">
              <img src={avatar} border="0" alt="" /> <br /> <label>{name}</label>
            </div>
            <br />
            <div className="buttonLogin">
              <Link to="/" onClick={onHandleLogOut} > Close </Link>
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
            <h1>Lista de Pessoas Interessadas</h1>
            <ContainerListInteresseContainer>
              {properties.map(({ _id, preco, cidade, bairro, estado, name, email, phone, images }) => (
                <CardImoveis key={_id}>
                  <div className="areaImg">
                    <img src={imovel} border="0" alt="" height="120px" width="170px" />
                  </div>
                  <div className="areaAdressValue">
                    Casa localizada no Bairro {bairro} em {cidade}/{estado}.

                    <br />
                    <br />

                    Aluguel: R$ {preco?.toLocaleString('de-DE', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                  </div>
                  <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true, name, email, phone }) } >Dados Interessado</button>
                </CardImoveis>
              ))}
            </ContainerListInteresseContainer>
          </ContainerListInteresse>
        </ContainerOrg>
      </Container>
      <Rodape>
        Real Estate Solution All rights reserved
      </Rodape>
      <Modal dimmer={dimmer} open={open} size="mini" onClick={() => close()}>
        <Modal.Header>Detalhes Interessado</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Informações</Header>
            <strong>NOME:</strong> <label>{user?.name}</label><br />
            <strong>TELEFONE:</strong> <label>{user.phone}</label><br/>
            <strong>EMAIL:</strong> <label>{user.email}</label>
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