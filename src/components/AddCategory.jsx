import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('One Punch'); // Input value state

    const onInputChange = ({target}) => {
        console.log(target.value);
        setInputValue(target.value); // Update input value state
    }

    const onSubmit = (event) => {
        
        event.preventDefault(); // Prevent default form submission
        console.log('Submit Form', inputValue);

        if(inputValue.trim().length <= 1) return; // Validate input length
        setCategories(categories => [inputValue, ...categories]); // Update categories state
        setInputValue(''); // Reset input value
    }

    return (
        <form onSubmit={ onSubmit }>
            <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={ onInputChange}/>
        </form>
    )
}