import React from 'react'
import { useNavigate } from 'react-router'

export    const Intro = () => {
    const navigate = useNavigate();
    const title = `Tired of searching movies and series?
You're at right place.`
  return (
    <div>
        <h2> <pre>{title} </pre>    </h2>
        <h3>free subscription</h3>        
        <button onClick={()=>navigate('signin')} >Join us</button>

    </div>
  )
}