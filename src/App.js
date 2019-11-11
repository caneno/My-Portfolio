import React, {Component} from 'react';
import './styles/App.css';
import {Grid, Cell} from 'react-mdl';
import Main from './components/Main';
import NavDrawer from './components/NavDrawer';

class App extends Component {
  state = {  }
   
  render() { 
    return ( 
      <div className="App" style={{width: '100%', height: '100%', margin: 'auto'}}>
        <NavDrawer />
        <Grid className="body-grid demo-grid-2" noSpacing>
          <Cell className="web-body" col={10}>
           <Main/>
           
          </Cell>
          {/* <Cell className="web-nav" col={2} hidePhone>
            <NavBar/>
          </Cell> */}
        </Grid> 
      </div>
     );
  }
}
 

export default App;