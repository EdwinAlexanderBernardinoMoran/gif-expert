import { useState } from "react";

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('One Punch'); // Input value state

    const onInputChange = ({target}) => {
        console.log(target.value);
        setInputValue(target.value); // Update input value state
    }

    const onSubmit = (event) => {
        
        event.preventDefault(); // Prevent default form submission
        console.log('Submit Form', inputValue);
    }
    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={ onInputChange}/>
        </form>
    )
}