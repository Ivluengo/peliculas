import { useState } from "react";

interface AddMovieProps {
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const AddMovie: React.FC<AddMovieProps> = ( {setQuery} ) => {
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery(inputText);
        setInputText('');
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }
    

    return (
        <form onSubmit={(e)=> handleSubmit(e) } >
            <input 
                value={ inputText }                    
                onChange={ (e)=> handleChange(e) }
                className='mr-8' 
                type='text' 
                placeholder='¡Busca tu película'
            />
            <button>Buscar</button>
        </form>
    )
}

export default AddMovie;
