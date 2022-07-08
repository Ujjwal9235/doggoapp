import React, { Component } from "react"; 
import './App.css';
import Breeds from "./components/Breeds";
import Vote from "./components/Vote";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import ImageSearch from "./components/ImageSearch";

class App extends Component{

  state = {
    whichComponentToShow: "Votes",
    isLiked: "Like",
    isDisliked: "Dislike"
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
        <button onClick={()=>{
          this.setState({whichComponentToShow: "ImageSearch"})
        }} style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>IMAGE/SEARCH</button>
      
      </div>
      <br/>
      <div className="rowC" style={{}}>
        <button onClick={()=> this.setState({isLiked: "Liked"})} style={{borderRadius: 10, backgroundColor: "green", height: "50px", width: "200px",marginLeft:"30%", fontSize:"120%", fontWeight: "bold"}}>
          <FaThumbsUp/> {this.state.isLiked}
        </button>
        <button onClick={()=> this.setState({isDisliked: "Disliked"})}style={{borderRadius: 10, backgroundColor: "red", height: "50px", width: "200px",marginRight:"30%", fontSize:"120%", fontWeight: "bold"}}>
          <FaThumbsDown/> {this.state.isDisliked}
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
        <button onClick={()=>{
          this.setState({whichComponentToShow: "ImageSearch"})
        }} style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>IMAGE/SEARCH</button>
      
      </div>
      
    
    <div id="test1" class="col s12">{<Breeds/>}</div>

    </div>
  
);
  }

  else if(this.state.whichComponentToShow === "ImageSearch")
  {
    return(
    <div className="App">
      <div className='rowC' style={{backgroundColor: "black"}}>
        <button onClick={()=>{
          this.setState({whichComponentToShow: "Votes"})
        }} style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>VOTES</button>
        <button onClick={()=>{
          this.setState({whichComponentToShow: "Breed"})
        }} style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>BREEDS</button>
        <button style={{backgroundColor: "black", color: "pink", height: "50%", margin: "auto", padding: 15}}>IMAGE/SEARCH</button>
      
      </div>

      <br/>
    <ImageSearch/>

    </div>

    );
  }

  return null;
}

}


export default App;