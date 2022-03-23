
import './SignupForm.css'
import { Link, useNavigate } from 'react-router-dom'


const SignupForm = () => {

  let SignupUserUrl = `${process.env.REACT_APP_API_DOMAIN}/auth/users/`

  let navigate = useNavigate()
  
  let signupUser = async(e) =>{
    e.preventDefault()

    let response = await fetch(SignupUserUrl,{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({'email':e.target.emailsignup.value, 
                             'username':e.target.usernamesignup.value, 
                             'password':e.target.passwordsignup.value,
                             'first_name':e.target.firstnamesignup.value,
                             'last_name':e.target.lastnamesignup.value})
    })

    let data = await response.json()

    if(response.status === 201){
        navigate('/login')
    }else{
        alert(data.stringify())
    }
}


  return (
    <div className='signup-form'>
       <div className='signup-form-container'>
       <div className='navigation-logo'>
            <Link to='/'>Movienies.</Link>
            </div>
           <h3>Hello!</h3>
           <p>Please fill up the information to create your account.</p>
            <form onSubmit={signupUser}>
                <input type='text' name='emailsignup' placeholder='your@email.here' />
                <input type='text' name='usernamesignup' placeholder='Enter Username...' />
                <input type='password' name='passwordsignup' placeholder='••••••' />
                <input type='text' name='firstnamesignup' placeholder='First name here...' />
                <input type='text' name='lastnamesignup' placeholder='Last name here...' />
                <input id='submitBtn' type='submit' value='Sign up' />
            </form>
       </div>
    </div>  
  )
}

export default SignupForm