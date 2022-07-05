import Select from "react-select";
import { useState, useEffect } from "react";

const Breeds = () => {
    let breedNames = []
    const [options, setOptions] = useState()
    const [selectedBreed, seSselectedBreed] = useState('')
    const url = "https://api.thedogapi.com/v1/breeds?api_key=a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf";
    useEffect(() => {
        fetch(url, {
            // body: {
            //     api_key:'a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf'
            // }
        }).then(resp => resp.json())
        .then(data => {
            data.forEach(element => {
                const {name, image, id, temperament, origin, weight, height, life_span} = element 
                breedNames.push({name, label: name, url: image.url, id: id, temperament: temperament, origin: origin, metricw: weight.metric, metrich: height.metric, life_span: life_span})
                setOptions(breedNames)

            });
            
        })
    
    }, [])


    const changeHandler = (e) => {
        seSselectedBreed(e)
    }

    return (
    <>
    <Select
          options={options}
          onChange={changeHandler}
        />
        <br/>
        <img margin='12px' height='500px' src={selectedBreed.url}/>
        <div style={{fontSize: 38,fontFamily: "cursive", fontWeight: "bold"}}>{selectedBreed.name}</div>
        <div style={{fontWeight: "bold"}}>id: {selectedBreed.id}</div>
        <div>---</div>
        <div style={{fontStyle: "italic"}} >{selectedBreed.temperament}</div>
        <div style={{fontStyle: "italic"}}>{selectedBreed.origin}</div>
        <div style={{}}>{selectedBreed.metricw} kgs</div>
        <div style={{}}>{selectedBreed.metrich} cm at the withers</div>
        <div>{selectedBreed.life_span} avg life span</div>

    </>
    )
}

export default Breeds