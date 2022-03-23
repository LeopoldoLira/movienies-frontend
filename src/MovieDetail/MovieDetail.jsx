import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './MovieDetail.css'

const MovieDetail = () => {

    let [movieDetail, setMovieDetail] = useState([])
    
    useEffect(()=>{
        retrieveDetailMovie()
    },[])

    const {pk} = useParams()

    let retrieveDetailMovie  = async () =>{

    
        let MovieDetailUrl = `${process.env.REACT_APP_API_DOMAIN}/api/movies/${pk}`
    
        let response = await fetch(MovieDetailUrl, {
            headers:{
                'Content-type':'application/json'
            }
        })
        let data = await response.json()
      
        if(response.status === 200){
            setMovieDetail(data)

        }else{
            alert('something went wrong')
        }
    }

  return (
    <>
    <NavBar />
        <div className='movie-detail-main-container'>
            <div className='movie-detail-container'>
                <div className='movie-detail-container-img'>
                    <img src={movieDetail.movie_image} alt={movieDetail.movie_title} />
                </div>
                <div className='movie-detail-container-info'>
                    <p className='movie-title'>{movieDetail.movie_title}</p>
                    <p className='movie-release'>{movieDetail.movie_released_date}</p>
                    <p className='movie-genre'>{movieDetail.movie_genre}</p>
                    <p className='movie-plot'>{movieDetail.movie_plot}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default MovieDetail