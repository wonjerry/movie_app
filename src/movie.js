import React from 'react'
import PropTypes from 'prop-types'
import './movie.css'

function Movie(props){
  return (
    <div>
      <MoviePoster src={props.poster}/>
      <h1>hello this is a {props.title}</h1>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

function MoviePoster(props){
  return (
    <img src={props.src} alt=" "/>
  );
}
// yts.ag.api/v2/list_movies.json
export default Movie
