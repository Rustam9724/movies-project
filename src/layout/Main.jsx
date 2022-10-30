import React, { useState, useEffect }from "react"
import {Movies} from "../components/Movies";
import {Preloader} from '../components/Preloader';
import {Search} from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    // state = {
    //     movies: [],
    //     loading: true
    // }

    function searchMovies(str, type = 'all') {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.Search);
            setLoading(false);
        });
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=zootopia`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })
    }, []) 

    // componentDidMount() {
    //     fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=zootopia`)
    //         .then(response => response.json())
    //         .then(data => this.setState({movies: data.Search, loading: false}))
    //         .catch(err => {
    //             console.log(err);
    //             this.setState({loading: false});
    //         })
    // }

    // searchMovies = (str, type = 'all') => {
    //     fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
    //         .then(response => response.json())
    //         .then(data => this.setState({movies: data.Search, loading: false}));
    // }

        return <main className="container content"> 
            <Search searchMovies={searchMovies}/>
            {
                loading ? <Preloader /> : 
                <Movies movies={movies}/>
            }
        </main>
}

export {Main}