import React from 'react'
import'./Header.css'
import'../../index.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userAction';
import { Badge } from '@mui/material';
const Header = () => {

    
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };
    return (
        <nav className="header">
           <Link to="/">
            <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon"/>
            </Link>
            <div className="icon"   >
            <LocationOnOutlinedIcon style={{fontSize:"30px"}} />
            </div>
            <div className="header-option">
            <span className="header-option1">Hello</span>
            <span className="header-option2">Select Your Location</span>
            </div>
            <div className="search" >
                <select style={{backgroundColor:"rgb(221, 221, 221)"}} >
                <option >All</option>
                <option>Computers</option>
                <option>Electornics</option>
                <option>Deals</option>
                <option>Men's Fashion</option>
                <option>Women's Fashion</option>
                <option>Top Seller</option>
                </select>
                <input type="text" className="searchInput" placeholder='search' />
                <SearchOutlinedIcon className="searchIcon"/>
            </div>
            <div className="header-Nav" style={{paddingRight:"20px"}}>
                <div className="header-option">
                <span className="header-option1">Hello</span>
                <div className="dropdown-wrapper">

                {
                  userInfo ? (
                    
                    <div className="dropdown">
                        <Link to="#" style={{color:"white"}} >
                          {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                        </Link>
                        <ul className="dropdown-content">
                         
                          <li>
                         <Link to="/profile" style={{color:"#fff"}}><span >User Profile</span></Link>
                           </li>
                            <li>
                            <Link to="/orderhistory" style={{textDecoration:"none", color:"white"}} ><span> Order History</span></Link>
                             </li>
                             <li>
                            <Link to="#signout" onClick={signoutHandler} style={{color:"white"}}>
                              <span> Sign Out </span> 
                            </Link>
                          </li> 
                        </ul>
                      </div> 
                    ): ( <Link to="/signin" style={{ color:"white"}}>
                        <span className="header-option2" >Sign In</span></Link>
                    )}
                    {userInfo && userInfo.isAdmin && (
                      <div className="dropdown" type="big">
                <Link to="#admin" style={{color:"white"}} >
                  <span>Admin</span> <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard" style={{color:"white"}} ><span>Dashboard</span></Link>
                  </li>
                  <li>
                    <Link to="/productlist" style={{color:"white"}} ><span>Products</span> </Link>
                  </li>
                  <li>
                    <Link to="/orderlist" style={{color:"white"}} > <span>Orders</span></Link>
                  </li>
                  <li>
                    <Link to="/userlist" style={{color:"white"}} ><span>Users</span></Link>
                  </li>
                </ul>
              </div>
            )}
               
            </div>
             </div>
            </div>
            <div className="header-Nav">
                <div className="header-option">
                <span className="header-option1">Returns</span>
            <span className="header-option2">& Orders</span>                </div>
            </div>
            <Link to="/cart">
            <div className="header-basket" style={{paddingRight:"20px"}}>
            <Badge badgeContent={cartItems.length} max={999} color="secondary">

                <ShoppingCartOutlinedIcon style={{color:"white" ,fontSize:"30px" }}/>
                  </Badge>
                </div>
            </Link>
        </nav>
    )
}

export default Header