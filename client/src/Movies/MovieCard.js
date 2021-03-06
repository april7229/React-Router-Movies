import React from 'react';
import { Link } from "react-router-dom";

const MovieCard = props => {
  if (!props.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars, id } = props.movie;
    return (
      <div className="save-wrapper">
        <div className="movie-card">
          <Link to="/movies/0" >
            <h2>{title}</h2>
          </Link>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="save-button">Save</div>
      </div>
    );
};

export default MovieCard;
