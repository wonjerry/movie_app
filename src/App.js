import React, { Component } from 'react'
import './App.css'
import Movie from './movie'

class App extends Component {

  state = {}

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        movies: [
        {
          id: 1,
          title: 'Matrix',
          poster: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg'
        },
        {
          id: 2,
          title: 'Full Metal Jacket',
          poster: 'https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg'
        },
        {
          id: 3,
          title: 'Oldboy',
          poster: 'https://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg'
        },
        {
          id: 4,
          title: 'Star Wars',
          poster: 'https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg'
        },
        {
          id: 5,
          title: 'transformer',
          poster: 'https://i.pinimg.com/originals/02/d4/b1/02d4b1dedc63fe5946ea915f3f700660.jpg'
        }
      ]
      })

    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.poster} key={movie.id}/>
    })
    return movies
  }

  render () {
    return (
      <div className="App">
        {
          this.state.movies? this._renderMovies() : 'Loading'
        }
      </div>
    )
  }
}

export default App
