import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './MovieDetail.css'

const MovieDetail = () => {
    
    const {pk} = useParams()
    const [movieDetail, setMovieDetail] = useState([])
    let navigate = useNavigate()        
    
    useEffect(()=>{
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
        retrieveDetailMovie()
    },[pk])

    const addFavourite = async(movFavId) => {
        let addFavouritesUrl =  `${process.env.REACT_APP_API_DOMAIN}/api/movies/favourites/add`
        let bodyData = {
            'movie_id':movFavId
        }
        let response = await fetch(addFavouritesUrl, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("authTokens")).access}`
            },
            body:JSON.stringify(bodyData),
          })
          
          let data = await response.json()
       
          if (response.status === 200) {
            if (data.status === 2000){
              navigate('/movie/favourite')
            }
        } else {
            alert('Unable to add to favourites.', data)
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
                    <button onClick={()=> addFavourite(movieDetail.pk)}>Add to favourites.</button>
                    <button onClick={()=> console.log(movieDetail.pk)} >what?</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default MovieDetail