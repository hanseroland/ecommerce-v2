import React,{useEffect,useRef, useState} from 'react'
import {   
    Paper,
    makeStyles,
    Container,
    Box,
    Grid,
    TextField,
    Typography,
    Button,
    } from '@material-ui/core'
import { Link} from 'react-router-dom';
import axios from "axios";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 250,
    },
   
    buttonStyle: {
        backgroundColor: "#882b2d",
        color: "#fff",
        "&:hover":{
            backgroundColor: "#15171c",
        }
    },
   
      textPrimary:{
  
        color: 'blue',
        textDecoration:'none',
  
       '&:hover':{
           color: '#882b2d'
       }
  
    }
  }));


function Contact() {

    const classes = useStyles();
    const email = useRef();
    const objet = useRef();
    const message = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e)
       // loginCall(
         // { email: email.current.value, password: password.current.value },
          //dispatch
        //);
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
           <Container  maxWidth="sm">
                
                    
                 <form onSubmit={handleClick}>
                        <Box mb={3}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                                
                            >
                          Connectez nous !!!
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                               
                            </Typography>
                           
                            </Box>
                        
                        <Grid  container >
                        
                            <Grid item lg={12} md={12} xs={12} >
                                
                                    <TextField
                                        label="Votre email"
                                        margin="normal"
                                        type="email"
                                        ref={email}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                        
                                    <TextField
                                            label="Objet du message"
                                            margin="normal"
                                            type="text"
                                            ref={objet}
                                            variant="outlined"
                                            fullWidth
                                            required
                                    />
                                     <TextField
                                            label="Saisissez votre message"
                                            margin="normal"
                                            type="text"
                                            ref={message}
                                            variant="outlined"
                                            fullWidth
                                            required
                                            multiline
                                            rows={7}
                                    />

                            
                                </Grid>
                            </Grid>
                        
                            <Box my={2}>
                            <Button
                                className={classes.buttonStyle}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Envoyer
                            </Button>
                            </Box>
                        
                        </form>
                    
           </Container>
       </Box>
    )
}

export default Contact 
