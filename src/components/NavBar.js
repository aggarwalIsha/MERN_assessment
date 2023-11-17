import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <>
      <div className='navbar'>
        <div className='searchBox signInButton'>
          <input type='text' placeholder='Search 9000+ tutorials' className='inputStyle' />
        </div>
        <div>
          <img src="/images/freeCodeCamp.jpg" alt="logo" className='freeCodeCampLogo' />
        </div>
        <div className='signInButton'>
        <button className='buttonMenu'>Menu</button>
       <Link to="/signIn"> <button className='button'>Sign In</button></Link>
        </div>
      </div>
    </>
  )
}

export default FirstPage