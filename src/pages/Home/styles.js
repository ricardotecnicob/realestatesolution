import styled from 'styled-components';

import fundo from '../../assets/images/fundo2.png';

export const Container = styled.div`

`;

export const About = styled.div`
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

        .areaDescAbout{
            font-size: 30px;
            color: white;
            width: 80%;
            margin: auto;
            margin-top: 15px;
        }

    }


`;

export const Depositions = styled.div`
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
    flex-direction: row-reverse;
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
            margin-top: 50px;
        }

        .areaImagemLogo img{
            width: 400px;
        }

        .titleAbout{
            font-size: 1.8em;
            font-weight: bold;
            color: white;
        }

        .areaDescAbout{
            font-size: 30px;
            color: white;
            width: 80%;
            margin: auto;
            margin-top: 50px;

            .areaNomeImagem{
                margin-top: 30px;
                margin-bottom: 30px;

                label{
                    font-weight: bold;
                    font-size: 20px;
                }

            }

        }

    }


`;

export const Contact = styled.div`
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
