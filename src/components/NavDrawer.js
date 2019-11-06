import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import '../styles/NavDrawer.css'

const useStyles = makeStyles({
  list: {
    width: 200,

  },
  fullList: {
    width: 'auto',
  },
  drawerBg: {
    background: 'inherit',
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div >
            <IconButton >
              { <ChevronRightIcon />}
            </IconButton>
        </div>
        <Divider />
        <List>
              <ListItem >
                <div className="nav-items hello">
                <ListItemText primary={<Link to="/" className="nav-link">Hello</Link>} />
                </div>
              </ListItem>
              <ListItem>
                <div className="nav-items">
                <ListItemText primary={<Link to="/projects" className="nav-link">Projects</Link>} />
                </div>
                
              </ListItem>
              <ListItem>
                <div className="nav-items">
                <ListItemText primary={<Link to="/about" className="nav-link">About</Link>} />
                </div>
                
              </ListItem>
              <ListItem>
                
                <div className="nav-items contact">
                <ListItemText primary={<Link to="/contact" className="nav-link">Contact</Link>} />
                </div>
                
              </ListItem>
            </List>
    </div>
  );



  return (
    <div style={{background: 'rgba(25, 10, 0, .6)', position:'fixed', zIndex:'2'}} className="navDrawer" >
      <Button style={{color: 'white', top: '10px'}} onClick={toggleDrawer('right', true)}>
        <MenuIcon/>
      </Button>
      <Drawer className={classes.drawerBg} anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        
        {sideList('right')}
      </Drawer>
    </div>
  );
}