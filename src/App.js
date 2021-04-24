import logo from './logo.svg';
import './App.css';

import { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/headercomponent';
import Cards from './components/cards';

class App extends Component {
 
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Cards/>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
