import React,{useState,useEffect} from 'react'
import { Box,makeStyles, Card, CardContent, CardHeader, Container, Divider, Grid, Typography } from '@material-ui/core'
import MenuParams from '../components/Cards/MenuParams'
import { useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    cardHeader: {
      backgroundColor: "#882b2d",
      color:'white'
    },
  }));

function Aide() {
    const location = useLocation();
    const pageTitle = location.pathname.split("/")[1];
    const classes = useStyles();
    
    return (
        <Box mt={4} mb={4}>
           <Container maxWidth={false} >
                 <Grid container spacing={2} >
                     <Grid item lg={8} md={6} xs={12} >
                            <Card>
                                <CardHeader 
                                   title={pageTitle.toUpperCase()}
                                   
                                />
                                <Divider/>
                                
                                <CardContent >
                                  
                                      <Typography align="justify" >
                                           Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                           Nulla ea laboriosam deleniti a esse, ullam molestias.
                                           Id voluptas nam consequatur velit sunt, aperiam quam magni 
                                           numquam officiis reiciendis? Quaerat, laudantium.
                                       </Typography>       
                                </CardContent>
                              
                            </Card>
                     </Grid>
                     <Grid item  lg={4} md={6} xs={12}>
                        <Card>
                                <CardHeader 
                                   title="Menu"
                                   className={classes.cardHeader}
                                />
                                <Divider/>
                               <CardContent>
                                  <MenuParams/>
                               </CardContent>
                        </Card>
                     </Grid>
                 </Grid>
            </Container>
        </Box>
    ) 
}

export default Aide
