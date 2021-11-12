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
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';

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


function Connexion(props) {

    const classes = useStyles();
    const [email, setEmail] = useState('') ;
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {loading,userInfo, error} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/';


    useEffect(() => { 

        if(userInfo){
            props.history.push(redirect);
        }
       
  }, [userInfo]);

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(signin(email,password))
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
                          Connectez vous et faites vos courses !!!
                            </Typography>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="body2"
                            >
                                {loading && <div>Chargement...</div> }
                                 {error && <div>{error}</div> }
                            </Typography>
                           
                            </Box>
                        
                        <Grid  container >
                        
                            <Grid item lg={12} md={12} xs={12} >
                                
                                    <TextField
                                        label="Email"
                                        margin="normal"
                                        type="email"
                                        onChange={(e)=> setEmail(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                        required
                                    />
                        
                                    <TextField
                                            label="Mot de passe"
                                            margin="normal"
                                            type="password"
                                            onChange={(e)=> setPassword(e.target.value)}
                                            variant="outlined"
                                            fullWidth
                                            required
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
                                Se connecter
                            </Button>
                            </Box>
                            <Typography
                                color="textSecondary"
                                variant="body1"
                                >
                                Vous n'avez pas de compte?
                                {' '}
                                <Link
                                   
                                    to={redirect === "/" ? "inscription" : "inscription?redirect=" + redirect}
                                    variant="h6"
                                    className={classes.textPrimary}
                                >
                                    S'inscrire
                                </Link>
                            </Typography>
                        
                        </form>
                    
           </Container>
       </Box>
    )
}

export default Connexion 
