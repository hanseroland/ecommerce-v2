import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { 
   Nav, 
   NavBtn,
   Span,
   NavBtnLink,
   NavIcon, 
   NavItem, 
   NavLinkR,
   NavMenu, 
   SidebarNav, 
   SidebarWrap,
   ButtonClick,
   NavBtnMobile
   } 
from './SidebarElements';
import { Badge, MenuItem, Select, TextField,makeStyles, Button } from '@material-ui/core';
import {FaSearch} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/userActions';

const useStyles = makeStyles((theme) => ({
   
  textField:{
    height:'35px',
    backgroundColor: "#FFF",
    fontSize:"12px",
    width:"100%",
    margin: theme.spacing(1),
   
  }

}));



const Sidebar = () => {

  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  //const quantity = useSelector(state=>state.cart.quantity);
  const panier = useSelector(state=>state.panier);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(logout())
  };
 
  
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav> 
          <NavIcon >
            <FaIcons.FaBars onClick={showSidebar} />
            <NavLinkR  to="/" >ecommerce</NavLinkR>
          </NavIcon>
          
          <NavMenu>
            <NavItem>
                <TextField
                  variant="outlined"
                  label="Rechercher..."
                  name="categorie"
                  size="small"
                  className={classes.textField}
                  //disableUnderline
                >
                </TextField>
            </NavItem>
            <ButtonClick >
                Rechercher
           </ButtonClick>
          </NavMenu>
          <NavBtnMobile>
          <NavIcon to='/panier'>
              <Badge badgeContent={panier.addedItems.length} color="error"
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              >
                 <AiIcons.AiOutlineShoppingCart  />
              </Badge> 
             
            </NavIcon> 
          </NavBtnMobile>
          <NavBtn>
            <NavIcon to='/panier'>
              <Badge badgeContent={panier.addedItems.length} color="error"
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              >
                 <AiIcons.AiOutlineShoppingCart  />
                 panier 
              </Badge> 
             
            </NavIcon>
            {userInfo ? (
              <>
              <NavIcon to='#'>
                 <FaIcons.FaUser/>
                  {userInfo.username}
              </NavIcon>
               <NavIcon to='#'>
                 <Button
                   variant="text"
                   color="inherit"
                   startIcon={<AiIcons.AiOutlineLogout/>}
                   onClick={()=>handleLogout()}

                   
                 />
              </NavIcon>
              </>
            ) : (
              <>
              <NavIcon to='/connexion'>
                  <FaIcons.FaUser  />
                  Se connecter
              </NavIcon>
              <NavIcon to='/inscription'>
                S'inscrire
              </NavIcon>  
              </>
             )} 
          </NavBtn>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='/'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu  item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
