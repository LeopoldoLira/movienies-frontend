import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const PrivateAuthroute = ({children}) => {
    
    let {user} = useContext(AuthContext)
    
  return (
        user ?  <Navigate to=''/> : children
  )
}

export default PrivateAuthroute