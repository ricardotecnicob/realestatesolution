import React from 'react';

import { Container, About, Depositions, Contact, Rodape } from './styles';

import Header from '../../components/Header';

import  logo from '../../assets/images/logo.png';
import  downloads from '../../assets/images/mobile2.png';
import  avatar from '../../assets/images/default_user_profile.png';


export default function Home() {

  return (
    <>
        <Container >
            <Header />
            <About>
                <div className="areaAppAbout">
                    <div className="areaAppImage">
                         
                    </div>
                    <div className="areaAppDownload">
                        <img src={downloads} border="0" alt="" />
                    </div>
                </div>
                <div className="areaTextAbout">
                    <div className="areaImagemLogo">
                        <img src={logo} border="0" alt="" />
                    </div>
                    <label className="titleAbout">ABOUT</label>
                    <div className="areaDescAbout">
                        You know that desire to have a house or apartment, but there is no way to pay? Your problem is solved with Real Estate Solution, we make the house available according to your interest and install it in a way that your pocket can afford come and meet us!
                    </div>
                </div>
            </About>
            <Depositions>
                <div className="areaAppAbout">
                    <div className="areaAppImage">
                         
                    </div>
                    <div className="areaAppDownload">
                        <img src={downloads} border="0" alt="" />
                    </div>
                </div>
                <div className="areaTextAbout">
                    <div className="areaImagemLogo">
                        <img src={logo} border="0" alt="" />
                    </div>
                    <label className="titleAbout">DEPOSITIONS</label>
                    <div className="areaDescAbout">
                        <div>
                            You know that desire to have a house or apartment, but there is no way to pay? Your problem is solved with Real Estate Solution, we make the house available according to your interest and install it in a way that your pocket can afford come and meet us!
                        </div>
                        <div className="areaNomeImagem">
                            <img src={avatar} border="0" alt="" /><br />
                            <label>Debora Fernandes</label>    
                        </div>
                    </div>
                </div>
            </Depositions>
            <Contact>
                <div className="areaAppAbout">
                    <div className="areaAppImage">
                         
                    </div>
                    <div className="areaAppDownload">
                        <img src={downloads} border="0" alt="" />
                    </div>
                </div>
                <div className="areaTextAbout">
                    <div className="areaImagemLogo">
                        <img src={logo} border="0" alt="" />
                    </div>
                    <label className="titleAbout">CONTACT</label>
                    <form className="areaFormAbout">
                        <div className="groupLadoALado">
                            <input type="text" placeholder="Name" required  />
                            <input type="email" placeholder="E-mail" required  />
                        </div>
                        <div className="groupLadoALado">
                            <input type="text" placeholder="Phone" required  />
                            <input type="text" placeholder="Subject" required  />
                        </div>
                        <div className="groupLadoALado" >
                            <textarea placeholder="Message" ></textarea>
                        </div>
                        <div className="groupLadoALado">
                            <input type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </Contact>
            <Rodape>
                Real Estate Solution All rights reserved
            </Rodape>
        </Container>
    </>
  );
}
