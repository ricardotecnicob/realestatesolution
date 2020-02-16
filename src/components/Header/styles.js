import styled from 'styled-components';

import fundo from '../../assets/images/fundo2.png';

export const Container = styled.div`

background-image: linear-gradient(to right, rgba(241, 90, 34, 0.9), rgba(247, 148, 29, 0.9)), url(${fundo});
    width: 100%;
    min-height: 600px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;


export const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    height: 150px;
    border-bottom: 2px solid #fff;
    background: #000;
    

    .divLogo{
        height: 150px;
    }

    .divLogo img{
        height: 100%;
    }

    .buttonLogin{
        background: linear-gradient(to right, rgba(241, 90, 34, 0.9), rgba(247, 148, 29, 0.9));
        display: flex;
        justify-content: center;
        align-itens: center;
        border-radius: 5px;
        text-align: center;
        line-height: 50px; 

        a{
            color: #fff;
            text-decoration: none;
            width: 150px;
            height: 50px;
        }

    }

    .buttonLogin:hover{
        background: linear-gradient(to right, rgba(241, 90, 34, 1), rgba(247, 148, 29, 1));
    }   
    
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    items-align: center;
    font-size: 2.5em;
    color: white;
    text-transform: uppercase;
    text-align: center;
    padding: 30px;

    .imgKey{
        height: 150px;
        width: 150px;
        border-radius: 100%;
    }

    .imgKey img{
        height: 100%;
        width: 100%;
    }

    .arae2Content{
        
    }
    
    .areaText{
        padding: 150px;
    }

    .fotoApp{
        height: 400px;
        width: 320px;
        background: red;
    }

    .btnDownload{
        margin-top: 20px;
        width: 320px;
    }

    .btnDownload img{
        height: 100%;
        width: 100%;
    }

`;