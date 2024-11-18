import "./MoviesList.css";
import movies from "../movies"
export const MoviesList=()=>{
    return(
        <>
      
        <div className="moviesList">
            {movies.map((movie)=>{
                <div key={movie.id} className ="moviesCard">
                <img src ={movie.image} className="movieImg"/>
                <h1>Title: {movie.title}</h1>
                <h2>Language: {movie.language}</h2>
                <h2>Cost: {movie.cost}</h2>
                </div>
            })}
        </div>
        </>
    );
};
export default MoviesList