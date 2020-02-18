import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const itemParams = params => {
    setDimmer(params.effect);
    setOpen(params.openabrir);
  };

  const close = () => {
    setDimmer('');
    setOpen(false);
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
                    <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Dados Interessado</button>
                    </CardImoveis>
                    <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Dados Interessado</button>
                    </CardImoveis>
                    <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Dados Interessado</button>
                    </CardImoveis>
                    <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Dados Interessado</button>
                    </CardImoveis>
                    <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Dados Interessado</button>
                    </CardImoveis> <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Dados Interessado</button>
                    </CardImoveis> <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Dados Interessado</button>
                    </CardImoveis> <CardImoveis>
                        <div className="areaImg">
                          <img src={imovel} border="0" alt="" height="120px" width="170px" />
                        </div>
                        <div className="areaAdressValue">
                            Casa localizada na Rua X nº 35 Bairro Amazonas

                              <br />
                              <br />

                            Aluguel:  R$ 500,00

                            <br />
                        </div>
                        <button type="button" onClick={() => itemParams({ effect: 'blurring', openabrir: true }) } >Dados Interessado</button>
                    </CardImoveis>
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
              <strong>NOME:</strong> <label>Ricardo Alves</label><br />
              <strong>TELEFONE:</strong> <label>(031) 99999-9999</label>
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
