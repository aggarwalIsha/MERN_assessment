import React from 'react'

const Body = () => {
  return (
    <div className='container'>
        <div className='inc_font_size font_weight_500'>Learn to code - for free</div>
        <div  className='inc_font_size font_weight_500'>Build projects</div>
        <div  className='inc_font_size font_weight_500'>Earn certifications.</div>
        <div className='inc_font_size_text font_weight_500'>Since 2014, more than 40,000 freeCodeCamp.org 
            graduates have gotten jobs at tech companies including:</div>
            <div className='logo_row'>
            <img src="/images/apple.png" alt="apple" />
            <img src="/images/google.png" alt="apple" />
            <img src="/images/microsoft.png" alt="apple" />
            <img src="/images/spotify.png" alt="apple"/>
            <img src="/images/amazon.png" alt="apple" />
            </div>
            <div>
                <button className='big_button button'>Get started(it's free)</button>
            </div>
    </div>
  )
}

export default Body