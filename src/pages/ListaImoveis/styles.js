import styled from 'styled-components';

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
        margin-top: 5px;

        a{
            color: #fff;
            text-decoration: none;
        }

    }

    .divAvatar{
        height: 80px;

        label{
            color: white;
        }

    }

    .divAvatar img{
        height: 100%;
    }
    
`;

export const ContainerOrg = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ContainerMenu = styled.div`
    background: #000;
    height: 800px;
    width: 20%;
    margin-top: -0px;

    ul{
        list-styles: none;
        a{
            text-decoration: none;
            li{
                color: white;
                background: linear-gradient(to right, rgba(241, 90, 34, 0.9), rgba(247, 148, 29, 0.9));
                padding: 10px;
            }
        }
        
    }

`;

export const ContainerListInteresse = styled.div`
    width: 80%;

        h1{
            text-align: center;
        }

`;


export const ContainerListInteresseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
`;


export const CardImoveis = styled.div`
    background: #682407;
    width: 200px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 30px;

    .areaImg{
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
    }

    .areaAdressValue{
        color: white;
        margin-bottom: 10px;
    }


    button{
        background: #000;
        padding: 10px;
        color: white;
        border: 1px solid #000;
        border-radius: 5px;
    }

    button:hover{
        background: #292929;
        border: 1px solid #292929;
        cursor: pointer;
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



