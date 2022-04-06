import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Login/LoginForm";
import SignupForm from "./Signup/SignupForm";
import MovieDetail from "./MovieDetail/MovieDetail";
import { AuthProvider } from "./Context/AuthContext";
import Admin from "./Admin/Admin";
import MovieForm from "./MovieForm/MovieForm";
import UpdateMovieForm from "./UpdateMovieForm/UpdateMovieForm";

import AdminMovieContainer from "./AdminMovieContainer/AdminMovieContainer";
import AdminDeleteMovie from "./AdminDeleteMovie/AdminDeleteMovie";
// import PrivateAuthroute from './utils/PrivateAuthroute';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} exact />
          <Route
            path="login"
            element={
              /*<PrivateAuthroute>*/ <LoginForm /> /*</PrivateAuthroute>*/
            }
          />
          <Route path="signup" element={<SignupForm />} />
          <Route path="movie/:pk" element={<MovieDetail />} />
          <Route
            path="admin"
            element={/*<PrivateAuthroute>*/ <Admin /> /*</PrivateAuthroute>*/}
          />
          <Route path="admin/movie/:pk" element={<AdminMovieContainer />} />
          <Route path="admin/movieform/" element={<MovieForm />} />
          <Route
            path="admin/movieform/update/:pk"
            element={<UpdateMovieForm />}
          />
          <Route path="admin/movie/delete/:pk" element={<AdminDeleteMovie />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
