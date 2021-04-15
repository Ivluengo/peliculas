import { useState } from "react";
import AddMovie from './components/AddMovie';
import MovieGrid from './components/MovieGrid';
// import AddMovieClass from './components/AddMovieClass';

const MovieApp: React.FC = () => {
    const [query, setQuery] = useState('Matrix');

    return (
        <div className='mt-24 text-center'>
            <h1>MovieApp</h1>
            <AddMovie setQuery={setQuery} />    
            {/* <AddMovieClass setQuery={setQuery} /> */}
            <MovieGrid query={query} />        
        </div>
    );
}

export default MovieApp;
