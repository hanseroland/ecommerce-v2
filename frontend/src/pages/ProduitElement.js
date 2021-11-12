import styled from 'styled-components';
import { mobile } from '../responsive';



export const Container = styled.div``;

export const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:"10px",flexDirection:"column"})};
`;

export const ImgContainer = styled.div`
    flex:1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Image = styled.img`
    width: 95%;
    height: 100%;
    object-fit: cover;
    justify-content: center;
    align-items: center;
   

    @media screen and (max-width: 768px){
        width: 50%;
        height: 70%;
    }
   
`;

export const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})};

`;

export const Title = styled.h1`
    font-weight: 200;
    @media screen and (max-width: 768px){
        font-size: 15px;
        font-weight: bold;
    }
`;

export const ContainerTitle = styled.div`
    display: flex;
`;

export const Icon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 background-color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 margin:10px;
 transition: all 0.5s ease;
 &:hover{
     background-color:#e9f5f5;
     transform:scale(1.1)
 }


`;

export const Desc = styled.p`
    margin: 20px 0px;
    text-align: justify;
    @media only screen and (max-width:420px){
            font-size: 12px;
        }
`;

export const Price = styled.span`
    font-weight:100;
    font-size: 40px;

    @media only screen and (max-width:768px){
            font-size: 15px;
            font-weight: bold;
        }
`;

export const FilterContainer = styled.div`
    width: 50%;
    margin:30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`;


export const Filter = styled.div`
    display: flex;
    align-items: center;

`;

export const FilterTitle = styled.span`
    font-weight:200;
    font-size: 20px;

    @media only screen and (max-width:768px){
            font-size: 15px;
            font-weight: bold;
        }

`;


export const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    margin:0px 5px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid black;
    background-color: ${(props)=>props.color};
`;

export const FilterSize = styled.select`
   margin-left:10px;
   padding: 5px;
`;


export const FilterOption = styled.option``;

export const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
    margin-bottom:10px

    
`;

export const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 100;
    width: 100%;
    
`;


export const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border:1px solid #632ce4;
    margin:0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Button = styled.button`
    padding: 15px;
    border:2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }

    @media only screen and (max-width:420px){
           padding: 0px;
           font-size: 12;
           width: 200px;
           font-weight: 100;
        }
`;

