import React, { Component } from "react"; 
import './App.css';
import DogBreeds from "./components/DogsBreeds";
import Breeds from "./components/Breeds";
import Vote from "./components/Vote";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

class App extends Component{

  state = {
    whichComponentToShow: "Votes"
  }
  

  render() {  

    if(this.state.whichComponentToShow === "Votes")
    {
      return (
        <div className="App">
          <div className='rowC' style={{backgroundColor: "black"}}>
        <button style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>VOTES</button>
        <button onClick={() => {
          this.setState({ whichComponentToShow: "Breed" });

        }} style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>BREEDS</button>
      
      </div>
      <br/>
      <div className="rowC" style={{}}>
        <button style={{backgroundColor: "green", height: "50px", width: "200px",marginLeft:"35%", fontSize:"120%"}}>
          <FaThumbsUp/> Like
        </button>
        <button style={{backgroundColor: "red", height: "50px", width: "200px",marginRight:"35%", fontSize:"120%"}}>
          <FaThumbsDown/> DisLike
        </button>
      </div>
      <br/>
          <Vote/>
        </div>
      );
    }
    else if(this.state.whichComponentToShow === "Breed")
    {
    return(
    <div className="App">
      <div className='rowC' style={{backgroundColor: "black"}}>
        <button onClick={()=>{
          this.setState({whichComponentToShow: "Votes"})
        }} style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>VOTES</button>
        <button style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>BREEDS</button>
      
      </div>
    
    <div id="test1" class="col s12">{<Breeds/>}</div>

    </div>
  
);
  }
  return null;
}

}


export default App;