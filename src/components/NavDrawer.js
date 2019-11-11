import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles} from '@material-ui/core/styles';
import {NavLink } from 'react-router-dom';
import '../styles/NavDrawer.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'fixed',
    zIndex: '2',
    
  },
  navWrapper:{
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLink:{
    fontSize: '35px',
    fontWeight: 'bolder',
  },
  navSubItems:{
    [theme.breakpoints.up('sm')]:{
      fontSize: '1.5em',
      textAlign: 'left',
    },
    color: '#BBB2AB',
    fontSize: '1.3em',
    textAlign: 'left',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  closeBtn: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color: 'white',
    background: 'rgba(25, 10, 0, .6)',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function NavDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.navWrapper}>
        <div className={classes.closeBtn}>
          <IconButton >
            { <ChevronRightIcon />}
          </IconButton>
        </div>
      <Divider />
      <List>
              <ListItem >
                <ListItemText primary={<NavLink 
                  exact to="/" 
                  activeClassName='nav-link-active' 
                  className={classes.navLink} >Hello</NavLink>}
                  secondary={<div className={classes.navSubItems}>Me in a Nutshell</div>} />
                
              </ListItem>
              <ListItem>
                <ListItemText primary={<NavLink 
                  exact to="/projects" 
                  className={classes.navLink} 
                  activeClassName='nav-link-active'>Projects</NavLink>}
                  secondary={<div className={classes.navSubItems}>This is My Work</div>} />
                
                
              </ListItem>
              <ListItem>
                
                <ListItemText primary={<NavLink 
                  exact to="/about" 
                  className={classes.navLink}
                  activeClassName='nav-link-active'>About</NavLink>}
                  secondary={<div className={classes.navSubItems}>Bit More About Me</div>} />
                
                
              </ListItem>
              <ListItem>
                
               
                <ListItemText primary={<NavLink 
                  exact to="/contact" 
                  className={classes.navLink}
                  activeClassName='nav-link-active'>Contact</NavLink>}
                  secondary={<div className={classes.navSubItems}>Say Hi</div>} />
                
                
              </ListItem>
            </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor='right'
            open={mobileOpen}
            onClick={handleDrawerToggle}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
    </div>
  );
}
