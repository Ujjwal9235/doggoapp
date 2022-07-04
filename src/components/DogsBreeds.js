import Select from "react-select";
import { useState, useEffect } from "react";

const DogBreeds = () => {
    
    let breedNames = []
    let breedImgaes = []
    const [options, setOptions] = useState()
    const [im, setIm] = useState()
    const url = "https://api.thedogapi.com/v1/breeds?api_key=a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf";
    fetch(url, {
        // body: {
        //     api_key:'a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf'
        // }
    }).then(resp => resp.json())
    .then(data => {
        breedNames = data.filter(i => breedNames.push(i.name))
        breedImgaes = data.filter(i => breedImgaes.push(i.image.url))
        setOptions(breedNames.map(b => ({value: b.name, label: b.name})))
        setIm(breedImgaes.map(b=>({value: b.image.url, label: b.image.url})))
        
    })
    //console.log(breedImgaes);

    // function handleNameChange(i){
    //     setNa(b => b)
    // }
    return (
        <div>
    <Select
          options={options}
        />

        
        </div>
    
    )
}

export default DogBreeds