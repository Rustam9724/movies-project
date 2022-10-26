function Movie(props) {
    const {
        Title,
        Year, 
        imdbId,
        Type,
        Poster
    } = props;

    return <div key={imdbId} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
            {
                Poster === 'N/A' ?
                <img className="activator" src={`https://via.placeholder.com/300x500?text=${Title}.com+Now
                C/O https://placeholder.com/#How_To_Set_Custom_Text`} alt=""/> :
                <img className="activator" src={Poster} alt=""/>
            }
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{Title}</span>
            <p>{Year} <span className="right">{Type}</span></p>
        </div>
    </div>
}

export {Movie}