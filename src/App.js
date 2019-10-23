import React from 'react';
import './App.css';
import {Grid, Cell} from 'react-mdl';
import Navigation from './components/Navigation';
import Main from './components/Main';


function App() {
  return (
      <div className="App" style={{width: '100%', height: '100%', margin: 'auto'}}>
        <Grid className="body-grid demo-grid-2" noSpacing>
          <Cell className="web-body" col={10}>
           <Main/>
          </Cell>
          <Cell className="web-nav" col={2}>
            <Navigation/>
          </Cell>
        </Grid> 
      </div>
  );
}

export default App;