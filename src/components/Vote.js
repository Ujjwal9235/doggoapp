import React,{Component} from "react";

export default class Vote extends Component{
    state = {
        loading: true,
        dogo: null,
        dogobreeds: null,
    };

    async componentDidMount(){

        const url = "https://api.thedogapi.com/v1/images/search?api_key=a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({dogo: data[0], loading: false,dogobreeds: data[0].breeds[0]})

    }

    render() {
        return (
            
        <div>{
            this.state.loading || !this.state.dogo ? (<div>loading...</div>) : (
            <div>
                
                <img margin='12px' height='500px' src = {this.state.dogo.url}/>
                <div style={{fontSize: 38,fontFamily: "cursive", fontWeight: "bold"}}>{this.state.dogobreeds.name}</div>
            </div>)}
        </div>
        );
    }
}