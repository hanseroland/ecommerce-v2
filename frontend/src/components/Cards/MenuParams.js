import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ArrowForward } from '@material-ui/icons';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  linkStyle:{
      textDecoration:'none',
      color: 'black'
      
  }
}));

export default function MenuParams() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <ArrowForward  />
        </ListItemIcon>
       <Link to="/conditions-generales" className={classes.linkStyle}  >
       <ListItemText primary="Conditions Générales" />
       </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ArrowForward />
        </ListItemIcon>
        <Link to="/donnees-personnelles"  className={classes.linkStyle}>
             <ListItemText primary="Données personnelles" />
        </Link>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ArrowForward />
        </ListItemIcon>
        <Link to="/aide" className={classes.linkStyle} >
           <ListItemText primary="Aide" />
        </Link>
      </ListItem>
     
    </List>
  );
}