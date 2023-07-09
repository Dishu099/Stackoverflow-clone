import React, {useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import menu from '../../assets/menu.svg'
import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

function Navbar() {
    const [profileDropdown, setProfileDropdown] = useState(false);
    const dispatch = useDispatch()
    const User = useSelector((state) => state.currentUserReducer)
    console.log (User)
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
        setProfileDropdown(!profileDropdown);
    }

    const toggleProfileDropdown = () => {
        setProfileDropdown(!profileDropdown);
    }

    useEffect(() => {
        const token = User?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) {
                const handleLogout = () => {
                    dispatch({ type: "LOGOUT" });
                    navigate("/");
                    dispatch(setCurrentUser(null));
                }
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    },[dispatch, navigate, User?.token]);

    const handleplan = () => {
        if(User === null){
         alert("Login to continue")
         navigate('/Auth')
        }else{
         window.location.href='https://payment-gateway-mu.vercel.app/'
         // dispatch(setCurrentUser(null))
        }
       }
       const handlechatbot = () => {
         if(User === null){
             alert("Login to continue")
             navigate('/')
            }else{
         window.location.href='https://dishita-chatbot.netlify.app'
         // dispatch(setCurrentUser(null))
            }
       }
 

    return (
        <nav className='main-nav'>
            <div className="navbar">
            <ul className="menu">
                    <li>
                        <img src={menu} height="25px"/>
                        {/* <MenuOutlinedIcon style={{ height: "40px", fontSize: "30px"}} /> */}
                        <ul className="sub-menu">
                            <li><Link style={{textDecoration: "none", color: "black"}} to="/">Home</Link></li>
                            <li><Link style={{textDecoration: "none", color: "black"}} to="/Questions">Questions</Link></li>
                            <li><Link style={{textDecoration: "none", color: "black"}} to="/Tags">Tags</Link></li>
                            <li><Link style={{ textDecoration: "none", color: "black" }} to="/Users">Users</Link></li>
                            <li><Link style={{textDecoration: "none", color: "black"}} to="/"  onClick={handleplan}>Plans</Link></li>
                            <li><Link style={{textDecoration: "none", color: "black"}} to="/CommunityHome">Community</Link></li>
                            <li><Link style={{textDecoration: "none", color: "black"}} to="/" onClick={handlechatbot}>Chatbot</Link></li>
                        </ul>
                    </li>
                </ul>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <Link to="/" className="nav-item nav-btn" onClick={handlechatbot}>Chatbot</Link>
                <Link to="/" className="nav-item nav-btn" onClick={handleplan}>Plans</Link>
                <Link to="/CommunityHome" className="nav-item nav-btn">Community</Link>
                <form>
                    <input type="text" placeholder='Search...' />
                    <img src={search} alt='search' width="18" className='search-icon' />
                </form>
                <div className="nav-right">
                    {profileDropdown && (
                        <div className="nav-right-modelbox">
                        <Link
                            to={`/Users/${User?.result?._id}`}
                            style={{ color: "black", textDecoration: "none" }}
                        >
                            <div onClick={() => setProfileDropdown(false)}>
                                    <span>Profile</span>
                                    {/* <AccountCircleOutlinedIcon /> */}
                            </div>
                        </Link>
                        <div onClick={handleLogout}>
                            <span>Sign Out</span>
                            {/* <LogoutOutlinedIcon /> */}
                        </div>
                        </div>
                    )}
                { User === null ?
                    <Link to='/Auth' className='nav-item nav-links'>Log In</Link> : 
                    <>
                        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'>
                            <span onClick={toggleProfileDropdown} style={{ cursor: "pointer", color: "white", textDecoration: "none" }}>
                                { User.result.name.charAt(0).toUpperCase() }
                            </span>
                        </Avatar> 
                        {/* <button className='nav-item nav-links' onClick={handleLogout}>Log Out</button> */}
                    </>
            }
            </div>
        </div>

        </nav>
    )
}

export default Navbar