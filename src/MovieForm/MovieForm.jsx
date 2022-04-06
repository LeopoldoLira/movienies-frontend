import './MovieForm.css'

import React from 'react'
import NavBar from '../NavBar/NavBar'
import { useNavigate} from 'react-router-dom'

const MovieForm = () => {

  let createMovieUrl = `${process.env.REACT_APP_API_DOMAIN}/api/movies/create`
  let navigate = useNavigate()


  let createMovie = async(e) => {
    e.preventDefault()

    let myHeaders = new Headers()
    myHeaders.append('Authorization',`Bearer ${JSON.parse(localStorage.getItem('authTokens')).access}`)

    let formData = new FormData()

    formData.append('movie_title',e.target.movietitle.value)
    formData.append('movie_released_date',e.target.moviereleaseddate.value)
    formData.append('movie_genre',e.target.moviegenre.value) 
    formData.append('movie_plot',e.target.movieplot.value)
    formData.append('movie_image',e.target.movieimage.files[0])

    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formData
    }

    let response = await fetch(createMovieUrl,requestOptions)

    let data = await response.json()
    console.log(data)
    console.log(formData)

    if(response.status === 200 ){
      navigate(`/movie/${data.pk}`)
    }else{
      alert('something went wrong')
    }


  }

  return (
    <>
    <NavBar/>
    <div className='main-movie-form-container'>
      <div className='movie-form-container'>
        <form className='movie-form' onSubmit={createMovie} encType='multipart/form-data'>
          <input type='text' name='movietitle' placeholder='Type the title of the movie' />
          <input type='number' name='moviereleaseddate' placeholder='Enter the released date of the movie' />
          <input type='text' name='moviegenre' placeholder='Type the genre of the movie' />
          <input type='textarea' id='movietxtarea' name='movieplot' placeholder='Type the plot of the movie' />
          <input type='file' id='movieimgfile' name='movieimage' accept='image/png, image/jpeg'  />
          <input id='submitBtn' type='submit' value='Create Movie' />
        </form>
      </div>
    </div>
    </>
  )
}

export default MovieForm