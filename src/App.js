import React, {Component} from 'react';
import './App.css';
import {Grid, Cell} from 'react-mdl';
import NavBar from './components/NavBar';
import Main from './components/Main';
import NavDrawer from './components/NavDrawer';

class App extends Component {
  state = {  }
    onDrawerClose = (e) => {
      console.log(e.target.innerHTML);
      
    }
  render() { 
    return ( 
      <div className="App" style={{width: '100%', height: '100%', margin: 'auto'}}>
        <NavDrawer DrawerClose={this.onDrawerClose}/>
        <Grid className="body-grid demo-grid-2" noSpacing>
          <Cell className="web-body" col={10}>
           <Main/>
           
          </Cell>
          <Cell className="web-nav" col={2} hidePhone>
            <NavBar/>
          </Cell>
        </Grid> 
      </div>
     );
  }
}
 

export default App;