
import './LoginForm.css'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../Context/AuthContext'

const LoginForm = () => {
    let {loginUser} = useContext(AuthContext)
  return (
    <div className='login-form'>
       <div className='login-form-container'>
       <div className='navigation-logo'>
            <Link to='/'>Movienies.</Link>
            </div>
           <h3>Welcome Back!</h3>
           <p>Please enter your credentials to access your account.</p>
            <form onSubmit={loginUser}>
                <input type='text' name='username' placeholder='Enter Username...' />
                <input type='password' name='password' placeholder='••••••' />
                <input id='submitBtn' type='submit' value='Login' />
            </form>
            <p>Don't have an account yet? <Link to='/signup'>Sign up</Link> for free!</p>
       </div>
    </div>  
  )
}

export default LoginForm