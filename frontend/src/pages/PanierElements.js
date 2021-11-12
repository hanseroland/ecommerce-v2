import styled from "styled-components";
import { mobile } from '../responsive';



export const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  ${mobile({ flexDirection: "column" })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;

  @media only screen and (max-width:768px){
          width: 100px;
        }
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media only screen and (max-width:768px){
          padding: 10px;
        }
`;

export const ProductName = styled.span`
 @media only screen and (max-width:768px){
            font-size: 12px;
        }
`;

export const ProductId = styled.span`
 @media only screen and (max-width:768px){
            font-size: 12px;
        }
`;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: ${(props) => props.color};
  @media only screen and (max-width:768px){
            width: 10px;
            height: 10px;
        }
`;

export const ProductSize = styled.span`
@media only screen and (max-width:768px){
            font-size:12px;
        }
`;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media only screen and (max-width:768px){
            margin-bottom: 10px;
        }
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
  @media only screen and (max-width:768px){
            font-size: 14px;
        }

`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
  @media only screen and (max-width:768px){
            font-size: 20px;
        }
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  @media only screen and (max-width:768px){
            padding: 10px;
            height: 30vh;
        }
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
  @media only screen and (max-width:768px){
            font-size: 20px;
        }
  
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  @media only screen and (max-width:768px){
           margin: 20px 0px;
           font-weight: 200;
           font-size: 14px;

        }
`;

export const SummaryItemText = styled.span`
 @media only screen and (max-width:768px){
          
           font-size: 12px;

        }
`;

export const SummaryItemPrice = styled.span`
 @media only screen and (max-width:768px){
          
          font-size: 12px;

       }
`;

export const Button = styled.button`
  width: 150px;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  @media only screen and (max-width:768px){
          
          font-size: 12px;

       }
`;

export const BtnRemove = styled.button`
  width: 50%;
  border-radius: 10px;
  background-color: #882b2d;
  color: white;
  cursor: pointer;
`;
