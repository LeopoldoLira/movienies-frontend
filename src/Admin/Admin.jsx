import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

import './Admin.css'

const Admin = () => {
    const [movieCreation, setMovieCreation] = useState([])

    useEffect(()=>{
        retrieveMoviesCreation()
    },[])

    let retrieveMoviesCreation = async() =>{

        let homepageMovieUrl = `${process.env.REACT_APP_API_DOMAIN}/api/movies`

        let response = await fetch(homepageMovieUrl,{
              headers:{
                  'Content-type':'application/json'
              }
          })
      
          let data = await response.json()
      
          if(response.status === 200){
              setMovieCreation(data)

          }else{
              alert('something went wrong')
          }
      }


  return (
      <>
      <NavBar/>
      
    <div className='main-movie-container'>
            <div className='movie-container'>
            {movieCreation.map((x)=>{
                return(
                    <>
                    <div key={x.pk} className='movie-card'>
                        <div className='movie-image-card-container'>
                            <img src={x.movie_image} alt="images" />
                            <div className='overlay-options'>
                                <Link to={`/admin/movieform/update/${x.pk}`}>Update</Link>
                                <Link to={`/admin/movie/delete/${x.pk}`} id='delete-movie-button'>Delete</Link>
                            </div>
                        </div>
                        <h1><Link to={`movie/${x.pk}`}>{x.movie_title}</Link></h1>
                        <p>Date: {x.movie_released_date}</p>
                        <p>Genre: {x.movie_genre}</p>
                    </div>
                        
                        </>
                )
            })}
            <div className='movie-creation-container'>
                <Link to='movieform'>+</Link>
                <span>Add movie</span>
            </div>
            </div>
        </div>
      </>
  )
}

export default Admin