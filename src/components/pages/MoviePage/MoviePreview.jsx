import React from "react";
import Image from "../../ImageCard/Image";

const getYearFromDate = (date) => {
  return date && date.slice(0, 4);
};

function MovieHeader(props) {
  const { movie } = props;

  if (!movie) {
    return <div className="loader"></div>;
  }

  const releaseYear = getYearFromDate(movie.release_date);

  return (
    <div
      className="row"
    >
      <div className="col-md-4">
        <Image imagePath={movie.poster_path} className="card-img" />
      </div>

      <div className="col-md-8">
        <div className="card-body">
          <h2 className="card-title">
            {movie.title} ({releaseYear})
          </h2>
          <p className="card-text">
            <span className="text-muted">{movie.tagline}</span>
          </p>
          <p className="card-text">{movie.overview}</p>
          <div className="d-flex justify-content-between">
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHeader;
