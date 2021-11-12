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
import { useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import { useSelector } from 'react-redux';

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

function Inscription(props) {
 
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const redirect = props.location.search?props.location.search.split("=")[1] : '/';



    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
  }, [userInfo]);


    const handleClick = async (e) => {
        e.preventDefault();
        if (rePassword !== password) {
            alert("Le mot de passe ne correspond pas!");
        } else {
            dispatch(register(username,email,password));
            history.push("/connexion");
        }
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
                           Creer votre compte
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
                                    label="Nom d'utilisateur"
                                    margin="normal"
                                    type="text"
                                    onChange={(e)=> setUsername(e.target.value)}
                                    variant="outlined"
                                    fullWidth
                                    required
                                    />
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

                                    <TextField
                                        label="Saisir à nouveau le mot de passe"
                                        margin="normal"
                                        type="password"
                                        onChange={(e)=> setRePassword(e.target.value)}
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
                                S'inscrire
                            </Button>
                            </Box>
                            <Typography
                                color="textSecondary"
                                variant="body1"
                                >
                                Vous avez déjà un compte?
                                {' '}
                                <Link
                                   
                                   to={redirect === "/" ? "connexion" : "connexion?redirect=" + redirect}
                                    variant="h6"
                                    className={classes.textPrimary}
                                >
                                    Se connecter
                                </Link>
                            </Typography>
                        
                        </form>
                    
           </Container>
       </Box>
    )
}

export default Inscription
  