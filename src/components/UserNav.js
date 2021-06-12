import React from 'react'
import { 
  NotificationIcon,
  MoreIcon,
 } from '../icons/Icons';

const User = () => {
  return (
    <div className="user_nav">
      <div><NotificationIcon/></div> 
      <div> 
        <img src="/images/user.png" alt="user_image"/> 
        <h3><MoreIcon/></h3></div>  
    </div>
  )
}

export default User
