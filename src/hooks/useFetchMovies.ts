import { useState, useEffect } from 'react';
import { getMovies, MovieItem } from '../helpers/getMovies';

interface useFetchState {
    data: MovieItem[];
    loading: boolean;
}

const useFetchMovies = ( query: string ) => {
    const [datosFetch, setDatosFetch] = useState<useFetchState>({
        data: [],
        loading: true
    })

    useEffect( () => {
        if(datosFetch.data[0]){
            setDatosFetch( { data: [], loading: true } )
        }

        getMovies(query)
            .then( (movies) =>
                setTimeout( ()=> {
                    setDatosFetch({ 
                      data: movies, loading: false 
                    });
                }, 2000 ))

    }, [query] )

    return datosFetch;
}

export default useFetchMovies
