import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch();
  }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {
          user?.email?
          <>
          <li className='font-semibold'><Link to='/reviews'>MyReviews</Link></li>
          <li className='font-semibold justify-end'>
            <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
            </li>
          </>
          :
          <li className='font-semibold justify-end'><Link to='/login'>Login</Link></li>
        }
     </>
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">            
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-2xl">
             <img className='w-40 h-20 p-3' src={logo} alt=""/>Tutor
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          
        {/* <Link to='/login'><button className="btn btn-outline btn-warning">Login</button></Link> */}
        </div>
      </div>
    );
};

export default Header;