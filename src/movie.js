import React from 'react'
import PropTypes from 'prop-types'
import './movie.css'
import LineEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie_Column">
      <MoviePoster src={poster} alt={title}/>
      </div>
      <div className="Movie_Column">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre,index) => <MovieGenre genre={genre}/>)}
        </div>
        <div className="Movie_Synopsis">
          <LineEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

function MoviePoster({src, alt}){
  return (
    <img className="Movie_Poster" src={src} alt={alt} />
  );
}

function MovieGenre ({genre}) {
  return (
    <span className="Movie_Genre">{genre}</span>
  );
}

MovieGenre.propTypes={
  genre: PropTypes.string.isRequired
}
// yts.ag.api/v2/list_movies.json
export default Movie
