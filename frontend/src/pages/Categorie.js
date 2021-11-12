import { Box ,Container,Grid} from '@material-ui/core';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import Products from '../components/Cards/Products';
import { mobile } from '../responsive';



const Title = styled.h1`
    margin:20px;
`;

const FilterContainer = styled.div`
      display: flex;
      justify-content: space-between;
`;

const Filter = styled.div`
    margin:20px;
    ${mobile({width:"0px 20px", display:"flex",flexDirection:"column"})}
`;

const FilterText = styled.span`
      font-size: 20px;
      font-weight: 600;
      margin-right: 20px;
      ${mobile({marginRight:"0px"})}

`;

const Select = styled.select`
       padding: 10px;
       margin-right:20px;
       ${mobile({margin:"10px 0px"})}
`;

const Option = styled.option``;



function Categorie(props) {

    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [trie, setTrie] = useState("recent");
    const [filters, setFilters] = useState({}); 
  

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        });
    };

   


    return (
        <Box
        mt={2}
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
            <Container>
                <Title> {cat}</Title>
                <Grid  container>
                       
                        <FilterContainer>
                            <Filter>
                                <FilterText>Filtrer les produits: </FilterText>
                                <Select name="color" onChange={handleFilters}>
                                    <Option disabled >Couleur</Option>
                                    <Option value="white" > Blanc</Option>
                                    <Option value="black"> Noir</Option>
                                    <Option value="red" > Rouge</Option>
                                    <Option  value="blue"> Bleu</Option>
                                    <Option value="yellow" > Jaune</Option>
                                    <Option value="greeb" > Vert</Option>
                                    <Option value="gray" > Gris</Option>
                                    <Option value="orange" > Orange</Option>
                                </Select>
                                <Select name="size" onChange={handleFilters}>
                                    <Option disabled >Taille</Option>
                                    <Option> XS</Option>
                                    <Option> S</Option>
                                    <Option> M</Option>
                                    <Option> L</Option>
                                    <Option> XL</Option>
                                </Select>
                            </Filter> 
                            <Filter>
                                <FilterText>Trier les produits :</FilterText>
                                <Select onChange={(e)=> setTrie(e.target.value)}>
                                    <Option value="recent" >Récent</Option>
                                    <Option value="asc" > Plus chère </Option>
                                    <Option value="desc" > Moins Chère </Option>
                                </Select>
                            </Filter>
                        </FilterContainer>
                        <Products  
                         cat={cat} 
                         filters={filters} 
                         trie={trie} 
                          />
                </Grid>
              
            </Container>
        </Box>
    )
}

export default Categorie 
 