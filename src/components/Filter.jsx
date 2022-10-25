import React from "react";

class Filter extends React.Component {

    render() {
        return <div className="filter">
            <p>
                <label>
                    <input name="filter" type="radio" value="all" onChange={this.props.filterer} checked={this.props.filter === 'all'}/>
                    <span>All</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="filter" type="radio" value="movies" onChange={this.props.filterer} checked={this.props.filter === 'movies'}/>
                    <span>Movies</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="filter" type="radio" value="series" onChange={this.props.filterer} checked={this.props.filter === 'series'}/>
                    <span>Series</span>
                </label>
            </p>
        </div>
    }
}

export {Filter}