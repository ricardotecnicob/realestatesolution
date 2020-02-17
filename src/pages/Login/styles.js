import styled from 'styled-components';

import fundo from '../../assets/images/fundo2.png';

export const Container = styled.div`

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

export const LoginContainer = styled.div`
    background-image: linear-gradient(to right, rgba(241, 90, 34, 0.9), rgba(247, 148, 29, 0.9)), url(${fundo});
    width: 100%;
    min-height: 600px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top: 5px solid #fff;

    border-bottom: 5px solid #fff;

    display: flex;
    justify-content: space-bewteen;

    .areaAppAbout{

        width: 400px;
        margin-right: 30px;
        margin-left: 50px;
    
        .areaAppImage{
            height: 400px;
            width: 320px;
            background: red;
        }
    
        .areaAppDownload{
            margin-top: 20px;
            width: 320px;
        }
    
        .areaAppDownload img{
            height: 100%;
            width: 100%;
        }


        .areaTextAbout{

        }

    }


    .areaTextAbout{

        text-align: center;

        .areaImagemLogo{
            
        }

        .areaImagemLogo img{
            width: 400px;
        }

        .titleAbout{
            font-size: 1.8em;
            font-weight: bold;
            color: white;
        }

        .areaFormAbout{
            font-size: 30px;
            color: white;
            width: 100%;
            margin: auto;
            margin-top: 15px;


            .groupLadoALado{
                display: flex;
            }

            .groupLadoALado input{
                margin-bottom: 15px;
                padding: 10px;
            }

            .groupLadoALado textarea{
                margin-bottom: 15px;
                padding: 10px;
                width: 100%;
                height: 150px;
            }

            .groupLadoALado input[type=submit]{
                background: orange;
                border: 2px solid orange;
                padding: 10px;
                color: white;
                cursor: pointer;
                font-weight: bold;
            }

        }

    }


`;

export const Rodape = styled.div`
    text-align: center;
    background: #000;
    height: 50px;
    line-height: 50px;
    font-size: 15px;
    color: white;
`;
