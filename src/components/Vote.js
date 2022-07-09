import React,{useEffect, useState} from "react";

const onClick = () =>{
    
}
const Vote = () => {
    const[dogo,setDogo]=useState('');
    const[dogon,setDogon]=useState();
    // const url = "https://api.thedogapi.com/v1/images/search/";
    useEffect(() => {
        const url = "https://api.thedogapi.com/v1/images/search/";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setDogo(json[0].url);
                setDogon(json[0].breeds[0].name);
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchData();
    },[]);

    return (
        <div >
            <img margin='1%' height='80%' width='60%' src={dogo}/>
            <br/>
            <div style={{fontSize: 38,fontFamily: "cursive", fontWeight: "bold"}}>{dogon}</div>
        <br/>
            
                {/* <button onClick={() => window.location.reload(false)} style={{marginLeft: "35%", borderRadius: 5, backgroundColor: "GrayText", width: "10%", height: 40, color: "white"}}>PREVIOUS</button> */}
                <button onClick={() => window.location.reload(false)} style={{borderRadius: 8, backgroundColor: "GrayText", width: "40%", height: "80%", color: "white"}}>NEXT</button>
            

        </div>
    );
}

export default Vote;
// export default class Vote extends Component{
//     state = {
//         loading: true,
//         dogo: null,
//         dogobreeds: null,
//     };

//     async componentDidMount(){

//         const url = "https://api.thedogapi.com/v1/images/search?api_key=a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf"
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         this.setState({dogo: data[0], loading: false,dogobreeds: data[0].breeds[0]})

//     }

//     render() {
//         return (
            
//         <div>{
//             this.state.loading || !this.state.dogo ? (<div>loading...</div>) : (
//             <div>
                
//                 <img margin='12px' height='500px' src = {this.state.dogo.url}/>
//                 <div style={{fontSize: 38,fontFamily: "cursive", fontWeight: "bold"}}>{this.state.dogobreeds.name}</div>
//             </div>)}
//         </div>
//         );
//     }
// }