import {Movie} from './Movie'

function Movies(props) {
    const {movies = []} = props;

    return <div className="movies">
        {movies.length 
            ? movies.map(movie => {
                return <Movie key={movie.imdbId} {...movie}/>
            }) : 
            <h4>Not results</h4>
        }
    </div>
}

export {Movies}