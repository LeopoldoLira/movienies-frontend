import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let navigate = useNavigate();

    let [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? (JSON.parse(localStorage.getItem('authTokens'))) : (null))
    let [userProfile, setUserProfile] = useState('')


    let LoginUrl = `${process.env.REACT_APP_API_DOMAIN}/auth/jwt/create`
    let LoggedUserUrl = `${process.env.REACT_APP_API_DOMAIN}/auth/users/me`

    let loginUser = async(e) =>{
        e.preventDefault()

        let response = await fetch(LoginUrl,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({'email':e.target.username.value, 'password':e.target.password.value})
        })

        let data = await response.json()

        if(response.status === 200){
            setAuthTokens(data)
            localStorage.setItem('authTokens', JSON.stringify(data))

            await retrieveUserName()
            navigate('/')
        }else{
            alert('Something Went Wrong')
        }
    }

    let retrieveUserName = async() =>{

        let response = await fetch(LoggedUserUrl ,{
            headers:{
                'Content-type':'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('authTokens')).access}`
            },

        })

        let userData = await response.json()

        if(response.status === 200){
            setUserProfile(userData)
            localStorage.setItem('username', JSON.stringify(userData.username))
        }else {
            console.log('Unable to retrieve user')
        }

    }

    let userNameProfile = localStorage.getItem('username')

    let logoutUser = () => {
        setAuthTokens(null)
        setUserProfile(null)
        localStorage.removeItem('authTokens')
        localStorage.removeItem('username')
        navigate('/')
    }



    let contextData = {
        userProfile:userProfile,
        userNameProfile: userNameProfile,
        authTokens:authTokens,
        loginUser:loginUser,
        retrieveUserName: retrieveUserName,
        logoutUser: logoutUser
    }


    return(
        <AuthContext.Provider value={contextData} >
            {children}
        </AuthContext.Provider>
    )
}