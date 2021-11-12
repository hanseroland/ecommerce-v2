import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  background: #882b2d;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  position:fixed;
  z-index: 10;
  top:0;
  width: 100%;
 
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 50%;
   /* @media screen  and (max-width:768px){
        display:none;
    }*/
`;

export const NavItem = styled.div`
    display:flex;
    margin: 5px;
    position: relative;
    height: 50px;
    width:50%;
    justify-content: center;
    align-items: center;
    @media screen  and (max-width:768px){
        height: 20px;
        width:250px;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    text-decoration: none;

    @media screen and (max-width: 768px){
        display:none;
    }
`;
export const NavBtnMobile = styled.nav`
    display:none;
    align-items: center;
    text-decoration: none;

    @media screen and (max-width: 768px){
        display:flex;
    }
`;

export const Span = styled.span`
    color: #008647;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`;


export const ButtonClick = styled.button`
    height:38px;
    width:25%;
    background:  ${({primary}) => (primary ? '#fbf000' : "#882b2d")};
    white-space: nowrap;
    padding: 5px 22px;
    color: ${({whiteBlue}) => (whiteBlue ? '#1a1359' : "#fff")};
    font-size: 16px;
    border: 2px solid #fff;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #15171c;
        color:#ffffff; 
    }

    @media screen and (max-width: 768px){
        width: 90px;
        height: 30px;
        font-size: 10px;
        padding: 5px;

    }
`



export const NavLinkR = styled(Link)`
    color:  #fff ;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

  

    &.active {
        border-bottom: 4px solid #fbf000;
    }

    @media screen and (max-width: 950px){
        height: 70%;
        font-size: 12px;
        padding: 5 2rem;
    }
    @media screen  and (max-width:768px){
        display: none;
    }
`

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  margin-right: 0.5rem;
  font-size: 1.2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  text-decoration: none;

 
`;

export const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;

`;



export const NavBtnLink = styled(Link)`
    background: #178253;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #1a1359;
        color:#ffffff;
    }

    @media screen and (max-width: 950px){
        padding: 5px 12px;
        font-size: 12px;
    }
`; 

export const NavBtnLogout = styled.button`
    background: #008647;
    white-space: nowrap;
    padding: 10px 22px;
    margin-right:5px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #1a1359;
        color:#ffffff;
    }

    @media screen and (max-width: 950px){
        padding: 5px 12px;
        font-size: 12px;
    }
`;

export const SidebarWrap = styled.div`
  width: 100%;
  z-index: 10;
  overflow: auto;
`;