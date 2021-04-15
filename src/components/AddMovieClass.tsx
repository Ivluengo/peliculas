import React, {Component} from 'react';

interface AddMovieProps {
    setQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface AddMovieState {
    inputText: string;
}

class AddMovieClass extends Component<AddMovieProps, AddMovieState> {
    state = {
        inputText: ''
    }
    
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.setQuery(this.state.inputText);
        this.setState({ inputText: '' });
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputText: e.target.value }, () => {
            console.log(this.state.inputText);
        })
        
    }

    render(){
        return (
            <form onSubmit={(e)=> this.handleSubmit(e) } >
                <input 
                    value={ this.state.inputText }                    
                    onChange={ (e)=> this.handleChange(e) }
                    className='mr-8' 
                    type='text' 
                    placeholder='¡Busca tu película'
                />
                <button>Buscar</button>
            </form>
        )
    }
}

export default AddMovieClass;