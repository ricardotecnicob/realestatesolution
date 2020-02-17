import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, LoginContainer, HeaderTop ,  Rodape, CamposPreenche } from './styles';

import { Button, Header, Image, Modal } from 'semantic-ui-react'

import  logo from '../../assets/images/logo.png';
import  imgDetalhe from '../../assets/images/fundo.jpg';
import  downloads from '../../assets/images/mobile2.png';

import  telaApp01 from '../../assets/images/img01.png';

const ListaDetalhes = () => {

    const [dimmer, setDimmer] = useState('');//blurring
    const [open, setOpen] = useState(false);// false & true
  
    const itemParams = params => {
      setDimmer(params.effect);
      setOpen(params.openabrir);
  
    }
  
  
    // const close = () => {
    //   setDimmer('');
    //   setOpen(false);
  
    // }

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
                    <input type="text" placeholder="Name" className="inputCamp" required  /> <br /><br />

                    <strong>TELEFONE:</strong> <br/> 
                    <input type="text" placeholder="Phone" className="inputCamp" required  /> <br />

                    <br />

                    <Button color='red' >
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
