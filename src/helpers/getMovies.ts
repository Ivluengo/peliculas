interface MovieItem {
    id: string,
    title: string,
    nota: number,
    resumen: string,
    fechaEstreno: string,
    poster: string,
    backdrop: string
}

const getMovies = async (query: string) => {
    const apiKey: string = '594939a196832017634a0d7b0271311b' ;

    const resp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const { results } = await resp.json();
    
    const movies: MovieItem[] = results.map( (movie: any): MovieItem => {
        return {
            id: movie.id,
            title: movie.title,
            nota: movie.vote_average,
            resumen: movie.overview,
            fechaEstreno: movie.release_date,
            poster: movie.poster_path 
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'Sin poster',

            backdrop: movie.backdrop_path 
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : 'Sin backdrop',

        }
    } )
    return movies;

}
export type { MovieItem };
export { getMovies };