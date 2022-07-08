import React,{Component} from 'react'
import DogsBreeds from './DogsBreeds';

export default class ImageSearch extends Component {


    state = {
        dogs: [],
        isase: "asec"
    }
    

    async componentDidMount() {
        const url = "https://api.thedogapi.com/v1/breeds?api_key=a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({dogs: data});
        console.log(data);
    }
render(){
    if(this.state.isase === "asec")
    {
        return (
<>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between",}}>
        <button style={{backgroundColor: "pink", color: "black", marginLeft: "30%", height: "50px", width: "200px", borderRadius: 10}}>ACEND</button>
        <button onClick={()=> this.setState({isase: "desc"})} style={{backgroundColor: "pink", color: "black", marginRight: " 30%", height: "50px", width: "200px",borderRadius: 10}}>DCEND</button>
      </div>
    <br/>
            <div style={{marginTop: 30, display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}} >
                <div>
                {this.state.dogs.map((e) => {
                    return (
                        <DogsBreeds name= {e.name} imgu = {e.image.url}/>
                    )
                })}
                </div>
            </div>
        </>
          )
    }
    else if(this.state.isase === "desc"){
  return (
    <>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between",}}>
        <button onClick={()=> this.setState({isase: "asec"})} style={{backgroundColor: "pink", color: "black", marginLeft: "30%", height: "50px", width: "200px", borderRadius: 10}}>ACEND</button>
        <button style={{backgroundColor: "pink", color: "black", marginRight: " 30%", height: "50px", width: "200px",borderRadius: 10}}>DCEND</button>
      </div>
      <br/>
    <div style={{marginTop: 30, display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}} >
        <div>
        {this.state.dogs.reverse().map((e) => {
            return (
                <DogsBreeds name= {e.name}imgu= {e.image.url}/>
            )
        })}
        </div>
    </div>

    </>

  )
    }
return null;
}
}

