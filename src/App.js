import React from 'react';
import Menu from './Component/MenuComponent';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import {DISHES} from './Shared/dishes';
class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      dishes: DISHES
    }
  }

  render(){
    return(
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Restaurant</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
