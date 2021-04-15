import MovieGridItem from './MovieGridItem';
import useFetchMovies from './../hooks/useFetchMovies';

interface MovieGridProps {
    query: string;
}

const MovieGrid: React.FC<MovieGridProps> = ( {query} ) => {
    
    const { loading, data } = useFetchMovies( query );

    return (
        <div>
            <h4>{query}</h4>
            {loading && 'Cargando datos...'}
            <div className='gridImages grid gap-8'>
                { data.map(movie => {
                    return (
                        movie.poster !== 'Sin poster' && (
                            <MovieGridItem key={movie.id} movie={movie} />
                        )
                    )
                }) }
            </div>            
        </div>
    )
}

export default MovieGrid
