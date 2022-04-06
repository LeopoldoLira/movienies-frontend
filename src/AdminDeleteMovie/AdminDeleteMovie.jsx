import "./AdminDeleteMovie.css";

import React from "react";
import MovieDetail from "../MovieDetail/MovieDetail";
import { Link, useParams, useNavigate } from "react-router-dom";

const AdminDeleteMovie = () => {
  const { pk } = useParams();

  let navigate = useNavigate();

  const deleteMovie = async () => {
    let deleteMovieUrl = `${process.env.REACT_APP_API_DOMAIN}/api/movies/delete/${pk}`;

    let response = await fetch(deleteMovieUrl, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("authTokens")).access
        }`,
      },
    });

    let data = await response.json()

    if (response.status === 200) {
      navigate("/admin");
    } else {
      alert("Movie not deleted. ", data);
    }
  };

  return (
    <>
      <div className="delete-movie-container">
          <div className="delete-movie-items-container">
        <p>Do you really want to delete this movie?</p>
        <div className="delete-movie-buttons-container">
          <button id="yes-button" onClick={() => deleteMovie()}>Yes</button>
          <Link id='no-button' to="/admin">No</Link>
        </div>
        </div>
      </div>
      <MovieDetail />
    </>
  );
};

export default AdminDeleteMovie;
