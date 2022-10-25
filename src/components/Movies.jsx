import {Movie} from './Movie'

function Movies(props) {
    const {movies, filter} = props;

    const filteredMovies = movies.filter(movie => {
        if (filter === 'all') {
            return (movie.Type === 'movie' || movie.Type === 'series' || movie.Type === 'game')
        } else if (filter === 'movies') {
            return (movie.Type === 'movie') 
        } else if (filter === 'series') {
            return (movie.Type === 'series')
        }
    })

    return <div className="movies">
        {filteredMovies.map(movie => {
            return <Movie key={movie.imdbId} {...movie}/>
        })}
    </div>
}

export {Movies}