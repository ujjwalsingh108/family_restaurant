import React from 'react';
import Main from './Component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends React.Component{
  
  render(){    
    return(
        <BrowserRouter>
          <div className='App'>
            <Main />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;


/**
 * To traverse between different views inside our application, we use react-router.
 * 
 * To install react-router into our application, we do --> npm install react-router-dom --save
 * 
 * 
 * After importing the 'BrowserRouter' from react-router-dom, we've to surround the div element within browserRouter element.
 * 
 * Now we can use its properties inside any component.
 */