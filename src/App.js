

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import {DISHES} from './shared/dishes';
  class App extends Component {
    constructor(props) {
      super(props);
       this.state = {
      dishes: DISHES
    };
    }
    state = {  }
    render() { 
      return ( 
          <div className="App">
 
              <Navbar />
              <Menu />
             <Menu dishes={this.state.dishes} />

          </div>

       );
    }
  }
   
  export default App;