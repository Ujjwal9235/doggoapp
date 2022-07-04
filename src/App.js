import React, { Component } from "react"; 
import './App.css';
import DogBreeds from "./components/DogsBreeds";
import Breeds from "./components/Breeds";
import Vote from "./components/Vote";

class App extends Component{

  render() {  
    
    return(
    <div className="App">
      <div className='rowC' style={{backgroundColor: "black"}}>
        <button style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>VOTES</button>
        <button style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>BREEDS</button>
      
      </div>
    
    <div id="test1" class="col s12">{<Breeds/>}</div>
    </div>
  
);
  }
}


export default App;