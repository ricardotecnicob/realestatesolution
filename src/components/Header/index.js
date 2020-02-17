import React from 'react';
import { Link } from 'react-router-dom';

import { Container, HeaderTop, HeaderContent } from './styles';

import  logo from '../../assets/images/logo.png';
import  telaApp from '../../assets/images/teste.jpg';
import  keyEntregue from '../../assets/images/key.png';
import  downloads from '../../assets/images/mobile2.png';

export default function Header() {
  return (
    <Container >
        <HeaderTop>
            <div className="divLogo">
                <img src={logo} border="0" alt="" />
            </div>
            <div className="buttonLogin">
                <Link to="/login" > Login </Link>
            </div>
        </HeaderTop>
        <HeaderContent>
            <div className="areaText">
                <div className="imgKey">
                    <img src={keyEntregue} border="0" alt="" />
                </div>
                Discover the best app to <br /> find the home of your dreams
            </div>
            <div className="arae2Content">
                <div className="fotoApp">
                    
                </div>
                <a href="" className="btnDownload">
                    <img src={downloads} border="0" alt="" />
                </a>
            </div>
        </HeaderContent>
    </Container>
  );
}
