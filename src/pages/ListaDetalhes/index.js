import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, LoginContainer, HeaderTop ,  Rodape, CamposPreenche } from './styles';

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import  logo from '../../assets/images/logo.png';
import  imgDetalhe from '../../assets/images/fundo.jpg';
import  downloads from '../../assets/images/mobile2.png';

import  telaApp01 from '../../assets/images/img01.png';
import api from "../../services/api";
import history from "../../services/history";

const ListaDetalhes = ({ match }) => {

    useEffect(() => {
      console.log(match)
    }, []);

    const [dimmer, setDimmer] = useState('blurring');//blurring
    const [open, setOpen] = useState(true);// false & true
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [immobile, setImmobile] = useState(null);
    useState(() => {
      const { id } = match.params;

      if(id !== null) {
        setImmobile(id);
      }
    }, []);

    const itemParams = params => {
      setDimmer(params.effect);
      setOpen(params.openabrir);
    };

    const onHandleSubmit = async () =>{
      if (name === null || phone === null || immobile === null ) {
        return;
      };

      await api.post('/match', {name, phone, immobile });
      setOpen(false);
    };

    return (
    <Container >
        <HeaderTop>
            <div className="divLogo">
                <img src={logo} border="0" alt="" />
            </div>
            <div className="buttonLogin">
                <Link to="/" > Back </Link>
            </div>
        </HeaderTop>
        <LoginContainer>
            <div className="areaAppAbout">
                <div className="areaAppImage">
                    <img src={telaApp01} border="0" alt="" />
                </div>
                <div className="areaAppDownload">
                    <img src={downloads} border="0" alt="" />
                </div>
            </div>
            <div className="areaTextAbout">
                <div className="areaImagemLogo">
                    <img src={imgDetalhe} border="0" alt="" />
                </div>
                <br />
                <label className="titleAbout">Casa localizada na Rua X nº 35
Bairro Amazonas</label>
                <br />
                <br />
                <label className="titleAbout">ALUGUEL: R$ 500,00</label>
            </div>
        </LoginContainer>
        <Rodape>
            Real Estate Solution All rights reserved
        </Rodape>
        <Modal dimmer={dimmer} open={open} size="mini" >  {/* onClick={() => close()} */}
          <Modal.Header>Preencha os Campos</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Informações</Header>
                <CamposPreenche>
                    <strong>NOME:</strong> <br/> 
                    <input type="text" placeholder="Name" className="inputCamp" required onChange={e => setName(e.target.value)} /> <br /><br />

                    <strong>TELEFONE:</strong> <br/> 
                    <input type="text" placeholder="Phone" className="inputCamp" required onChange={e => setPhone(e.target.value)} /> <br />

                    <br />

                    <Button color='red' onClick={onHandleSubmit} >
                        Enviar
                    </Button>

                </CamposPreenche>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
      
          </Modal.Actions>
        </Modal>
    </Container>
    )
}


export default ListaDetalhes;
