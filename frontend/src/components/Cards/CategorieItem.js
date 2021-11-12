import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  @media only screen and (max-width:420px){
           height: 30vh;
        }
  @media only screen and (max-width:768px){
           height: 50vh;
        }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })};

 
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    @media only screen and (max-width:420px){
          font-size: 10px;
        }
    @media only screen and (max-width:768px){
          font-size: 15px;
        }
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    @media only screen and (max-width:420px){
          padding: 5px;
          font-weight: 200;
          font-size: 12px;
        }
`;

const CategorieItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/categories/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Parcourir</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategorieItem;