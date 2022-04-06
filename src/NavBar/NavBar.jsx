import './NavBar.css'
import { Link } from "react-router-dom";
import AuthContext from '../Context/AuthContext';
import { useContext, useState } from 'react';
import { ReactComponent as CaretIcon } from '../icons/caret.svg'



const NavItem = (props) => {

    const [open, setOpen] = useState(false);


    return(
        <li className='nav-item'>
            <p className='icon-button' onClick={()=> setOpen(!open)}>
                {props.icon}
            </p>
            {open && props.children}
        </li>
    )
}

const DropdownMenu = () => {

    let { logoutUser, isStaff } = useContext(AuthContext)
        return(
            <div className='dropdown'>
                <Link to='/' className="menu-item" onClick={logoutUser} >
                     <span className='icon-button'>🚫</span> 
                     <p>Logout</p>
               </Link>
               <Link to='/' className="menu-item" >
                     <span className='icon-button'>🎬</span> 
                     <p>My List</p>
               </Link>
               {isStaff.is_staff === true ? <Link to='/admin' className="menu-item" >
                     <span className='icon-button'>🎬</span> 
                     <p>Movies</p>
               </Link> : null}
            </div>
        )
    }


const NavBar = () => {

    let { authTokens, userNameProfile } = useContext(AuthContext)

    return(
        <nav className='navigation-bar'>
            <div className='navigation-logo'>
            <Link to='/'>Movienies.</Link>
            </div>
            <div className='navigation-menu'>
                
                { authTokens ? (
                    <div className='user-container'>
                        <p id='login-btn'>Hello {JSON.parse(userNameProfile)}</p>
                        <div className='profile-picture-container'>
                        <img src={`${process.env.PUBLIC_URL}/imgs/defaultUser.jpg`} alt='Profile'/>
                    </div>
                        <NavItem icon = {< CaretIcon/>} >
                            <DropdownMenu/>
                        </NavItem>
                    </div>
                    ) : (<Link to='/login' id='login-btn'>Login</Link>)}
                </div>
        </nav>
    )
}

export default NavBar;