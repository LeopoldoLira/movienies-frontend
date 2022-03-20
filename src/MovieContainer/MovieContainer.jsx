import './MovieContainer.css'
import { useEffect, useState } from 'react'


const MovieContainer = () => {

    const [movie, setMovie] = useState([])

    useEffect(()=>{
        retrieveMovies()
    },[])

    let retrieveMovies = async() =>{

        let homepageMovieUrl = `${process.env.REACT_APP_API_DOMAIN}/api/movie/list`

        let response =  await fetch(homepageMovieUrl,{
              headers:{
                  'Content-type':'application/json'
              }
          })
      
          let data = await response.json()
      
          if(response.status === 200){
              setMovie(data)

          }else{
              alert('something went wrong')
          }
      }
      

    return (
        <div className='main-movie-container'>
            <div className='movie-container'>
            {movie.map((x)=>{
                return(
                    <div key={x.pk} className='movie-card'>
                        <img src={x.movie_image} alt="images" />
                        <h1>{x.title}</h1>
                        <p>Date: {x.released_date}</p>
                        <p>Genre: {x.genre}</p>
                    </div>
                )
            })}
            </div>
        </div>
  )
}

export default MovieContainer




