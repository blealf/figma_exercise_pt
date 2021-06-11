import React from 'react'
import { FaApple } from 'react-icons/fa';

const User = () => {
  return (
    <div className="user_nav">
      <div><FaApple/></div> 
      <div><FaApple/> <img src="/images/user.png" alt="user_image"/> </div>  
    </div>
  )
}

export default User
