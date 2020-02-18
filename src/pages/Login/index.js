import React, { useStae, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, LoginContainer, HeaderTop ,  Rodape } from './styles';

import  logo from '../../assets/images/logo.png';
import  downloads from '../../assets/images/mobile2.png';

import  telaApp01 from '../../assets/images/img01.png';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');

    const valorEmail = value => {
        setEmail(value);
    }

    const valorPassword = value => {
        setPassWord(value);
    }

    const loginNow = () => {

        if(email == 'teste@gmail.com' && password == 'teste@123'){
            
        }

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
                    <img src={logo} border="0" alt="" />
                </div>
                <label className="titleAbout">LOGIN</label>
                <form className="areaFormAbout">
                    <div className="groupLadoALado">
                        <input type="email"  onChange={(e) => valorEmail(e.target.value)} placeholder="E-mail" required  />
                    </div>
                    <div className="groupLadoALado">
                        <input type="password" onChange={(e) => valorPassword(e.target.value)} placeholder="Password" required  />
                    </div>
                    <div className="groupLadoALado">
                        <input type="submit" onClick={() => loginNow()} value="Access Panel" /><br/><br/>
                    </div>
                    <div className="groupLadoALado">
                        <p style={{ fontSize: '15px', marginRight: '10px' }} ><strong>USER:</strong> teste@gmail.com</p> 
                        <p style={{ fontSize: '15px' }} ><strong>PASS:</strong> teste@123</p>
                    </div>
                </form>
            </div>
        </LoginContainer>
        <Rodape>
            Real Estate Solution All rights reserved
        </Rodape>
    </Container>
    )
}


export default Login;
