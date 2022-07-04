import Select from "react-select";
import { useState, useEffect } from "react";

const DogBreeds = () => {
    let breedNames = []
    const [options, setOptions] = useState()
    const url = "https://api.thedogapi.com/v1/breeds?api_key=a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf";
    fetch(url, {
        // body: {
        //     api_key:'a75dc5be-ed7a-4ea0-9c74-10ed2648c2bf'
        // }
    }).then(resp => resp.json())
    .then(data => {
        breedNames = data.filter(i => breedNames.push(i.name))
        setOptions(breedNames.map(b => ({value: b.name, label: b.name})),)
    })

    return (
    <Select
          options={options}
        />
    )
}

export default DogBreeds