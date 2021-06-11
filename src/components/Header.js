import React from 'react';
import { FaApple } from 'react-icons/fa';
import '../styles/Card.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="logo"/>
      </div>
      <div className="side_nav">
        <div><FaApple/><h3> Dashboard</h3></div>
        <div><FaApple/><h3>Activity</h3></div>
        <div className="active"><FaApple/><h3>Wallet</h3></div>
        <div><FaApple/><h3>Products</h3></div>
        <div><FaApple/><h3>Referrals</h3></div>
      </div>
    </div>
  )
}

export default Header
