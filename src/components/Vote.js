import React,{Component} from "react";

export default class Vote extends Component{
    state = {
        loading: true,
        dogo: null,
        dogobreeds: null,
    };

    async componentDidMount(){

        const url = "https://api.thedogapi.com/v1/images/search"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({dogo: data[0], loading: false,dogobreeds: data[0].breeds[0]})
        //console.log(data)

    }

    render() {
        return (
        <div>{
            this.state.loading || !this.state.dogo ? (<div>loading...</div>) : (<div>
                <img style={{maxHeight: "40%",maxWidth: "80%"}} src = {this.state.dogo.url}/>
                <div style={{fontSize: 38,fontFamily: "sans-serif", fontWeight: "bold"}}>{this.state.dogobreeds.name}</div>
                <div style={{fontWieght: "bold"}}>id: {this.state.dogobreeds.id}</div>
                <div>---</div>
                <div style={{fontStyle: "italic"}}>{this.state.dogobreeds.bred_for}</div>
                <div >{this.state.dogobreeds.life_span} average life span</div>
                <div >{this.state.dogobreeds.life_span}</div>
                <div >{this.state.dogobreeds.life_span}</div>
                <div >{this.state.dogobreeds.temperament}</div>
                </div>)}</div>
        );
    }
}