import { useContext } from 'react'
import AuthContext from './Context/AuthContext';
import NavBar from "./NavBar/NavBar";
import './index.css'
function App() {
  
  let { authTokens, logoutUser } = useContext(AuthContext)

  return (
    <>
    <NavBar />
    <div className='main'>
    { authTokens ? 
      (
        <div>
          <p>Congratulations You are logged in!</p>
          <button onClick={logoutUser} >Logout</button>
        </div>
        ) : 
      (<p>Please Sign in.</p>)
      }
    
    </div>
    </>
  );
}

export default App;
