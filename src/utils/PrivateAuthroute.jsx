import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../Context/AuthContext'

const PrivateAuthroute = ({children}) => {
    
    let { isStaff } = useContext(AuthContext)
    
  return (
        isStaff.is_staff === true ?  children : 
        <div className='unauthorized'>
          <p>Oops!</p>
          <p>You don't have permission to see this page.</p>
          <Link to='/' >Take me home</Link>
        </div>
  )
}

export default PrivateAuthroute