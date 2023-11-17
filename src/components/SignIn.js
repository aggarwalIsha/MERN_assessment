import React, { useState } from 'react';

const SignIn = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const handleButtonClick=()=>{
        setIsSignIn(!isSignIn)
    }

    const text = isSignIn ? "Don't have an account yet? " : "Already have an account? ";
    const linkText = isSignIn ? "Sign Up" : "Log in";

  return (
    <div style={{backgroundColor:"LightGray"}}>
        <div className='inside_sign_in'>
          <img src="/images/freeCodeCamp.jpg" alt="logo" className='freeCodeCampLogo '  />
        </div>
    <div className='signInContainer'>
      <img alt="logo" src="/images/logo.jpeg" className='logo'  />
      <div className='inc_font_size_text' style={{marginTop:"22px", marginBottom:"22px"}}>
        {!isSignIn? "Sign Up for" : "Log in to"} freeCodeCamp Learn</div>
      <div className='border_google' style={{display:"flex", alignItems:"center", gap:"10px"}}>
        <div><img alt="google logo" src="/images/coloredGoogle.png" className='logo'  /></div>
       <div> Continue with Google</div>
        </div>
      <div style={{marginTop:"22px", marginBottom:"22px"}}>
                <span className="line"></span>
                <span >OR</span>
                <span className="line"></span>
            </div>
            <div>
                {!isSignIn &&<input type="text" placeholder='Name' className='email_input' /> }
                <input type="text" placeholder='Email Address' className='email_input' />
                {!isSignIn && <input type="text" placeholder='Password' className='email_input' />}
            </div>
            <div style={{marginTop:"22px", marginBottom:"22px"}}>
                <button className='buttonEmail'>Continue with email</button>
            </div>
            <div>
              <button onClick={handleButtonClick} className='signInSignUpButton'>
                {text}
                <span style={{color:"blue"}}>
                    {linkText}
                </span>
                </button>
            </div>
    </div>
    </div>
  )
}

export default SignIn