import React from "react"
import {Movies} from "../components/Movies";
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';
import {Filter} from "../components/Filter";

class Main extends React.Component {
    state = {
        movies: [],
        filter: 'all',
    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=5fac0eb4&s=zootopia')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies = (str) => {
        fetch(`https://www.omdbapi.com/?apikey=5fac0eb4&s=${str}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}));
        this.setState({filmName: str})
    }

    filterer = (event) => {
        this.setState({filter: event.target.value})
    }


    render() {
        const {movies, filter} = this.state;

        return <main className="container content"> 
            <Search searchMovies={this.searchMovies}/>
            <Filter filter={filter} filterer={this.filterer}/>
            {
                movies.length ? (
                    <Movies movies={movies} filter={filter}/>
                ) : <Preloader />
            }
        </main>
    }
}

export {Main}