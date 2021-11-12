import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const CardItem = styled.div`
    //display: flex;
    flex: 1;
    margin: 0 1rem;
    margin-bottom: 10px;
    //border-radius: 10px;

`;

const CardItemLink = styled(Link)`
    display: flex;
    flex-flow: column;
    max-width: 400px;
    height: 150%;
    box-shadow: 0 6px 20px rgba(18, 21, 28, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(16, 19, 24, 0.017));
   // border-radius: 10px;
    overflow: hidden;
    text-decoration: none;  

`;

const CardItemPicture = styled.figure`
    position: relative;
    width: 100%;
    min-height: 350;
    padding-top: 67%;
    overflow: hidden;

    &::after{
        content: attr(data-category);
        position: absolute;
        bottom: 0;
        margin-left: 10px;
        padding: 6px 8px;
        max-width: calc((100%) - 20px);
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background-color: #9b2632;
        box-sizing: border-box;
    }

`;

const CardItemImg  = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;

    &:hover{
        transform: scale(1.1);
    }
`

const CardItemInfo = styled.div`
        padding: 10px 0px 20px;
       font-weight: bold;
       color: #050505;
       font-size: 12px;
        

`;

const cardItemInfoText = styled.p`
    color: #050505;
    font-weight: bold;
    line-height: 24px;
    
`;

function CategorieCard(props) {
    return (
        <CardItem>
                <CardItemLink>
                    <CardItemPicture
                        data-category={props.label}
                    >
                        <CardItemImg 
                            src={props.src}
                            alt={props.alt}
                        />
                    </CardItemPicture>
                    <CardItemInfo>
                        <cardItemInfoText> {props.info} </cardItemInfoText>
                    </CardItemInfo>
                </CardItemLink>
        </CardItem>
    )
}

export default CategorieCard
