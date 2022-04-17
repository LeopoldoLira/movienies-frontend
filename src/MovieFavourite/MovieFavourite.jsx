import React from 'react'
import NavBar from '../NavBar/NavBar'
import './MovieFavourite.css'
import { useState, useEffect, useCallback } from 'react'


const MovieFavourite = () => {

    const [fav, setFav] = useState([])

    const getFavourites = useCallback(async() =>{
        let getFavouritesUrl = `${process.env.REACT_APP_API_DOMAIN}/api/movies/favourites`
        
        let response = await fetch(getFavouritesUrl,{
            headers:{
                'Content-type':'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authTokens')).access}`
                }
            })
    
            let data = await response.json() 
            
            if (response.status === 200){
                setFav(data)
            }else{
                alert('something went wrong')
            }
        },[])

        useEffect(() => {
            getFavourites()
            
    },[getFavourites])


    const removeFavourite = async(movieId) =>{
        let removeFavouritesUrl =  `${process.env.REACT_APP_API_DOMAIN}/api/movies/favourites/${movieId.id}`
        let response = await fetch(removeFavouritesUrl, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("authTokens")).access}`
            },
          })
      
          let data = await response.json()
      
          if (response.status === 200) {
            alert('Movie successfully deleted.')
          } else {
            alert("Movie not deleted.", data);
          }
        }

    
  return (
    <>
    <NavBar/>
    <div className='movie-favourites-main-container'>
            <div className='movie-container-favourites'>
                {fav.map((x)=>{
                   return(
                    <div className='movie-card' key={`${x.id}`}>
                        <img src={`${x.movie_image}`} alt={`${x.movie_title}`} />
                        <p>{`${x.movie_title}`}</p>

                        <span onClick={()=> removeFavourite(x)} >Remove from favourites ❌</span>
                    </div>
                   )
                })}
            </div>
    </div>
    </>
  )
}

export default MovieFavourite