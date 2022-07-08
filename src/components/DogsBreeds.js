import React, {Component} from "react";
import App from "../App.css";

export default class DogsBreeds extends Component{
    render(){

        let {name,imgu} = this.props;
        return (
            <div className="card" >
                
                <img style={{ height: 40, width: 60

                }} src={imgu}/>
                
                <div className="container">
                    {name}
                </div>
            </div>
        )

    }
}