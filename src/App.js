// import { useContext } from 'react'
// import AuthContext from './Context/AuthContext';
import NavBar from "./NavBar/NavBar";
import './index.css'
import MovieContainer from './MovieContainer/MovieContainer';
function App() {
  
  // let { authTokens, logoutUser } = useContext(AuthContext)

  return (
    <>
    <NavBar />
    <MovieContainer />
    </>
  );
}

export default App;
