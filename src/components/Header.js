import React, { useRef } from 'react';
// import { FaApple } from 'react-icons/fa';

import { 
  LogoIcon,
  DashIcon,
  ActivityIcon,
  WalletIcon,
  ProductsIcon,
  ReferralsIcon,
  HelpIcon
 } from '../icons/Icons';

const Header = () => {

  const activeRef = useRef();

  const handleClick = (e) => {
    const currentlyActive = document.getElementById('active');
    if (currentlyActive) currentlyActive.removeAttribute('ID', 'active');
    e.currentTarget.id = "active";
  }

  return (
    <div className="header" id="header">
      <div className="logo">
       <LogoIcon />
      </div>
      <div className="side_nav" >
        <div ref={activeRef} onClick={(e) => handleClick(e)}><DashIcon/><h3> Dashboard</h3></div>
        <div ref={activeRef} onClick={(e) => handleClick(e)}><ActivityIcon/><h3>Activity</h3></div>
        <div ref={activeRef} onClick={(e) => handleClick(e)} id="active"><WalletIcon/><h3>Wallet</h3></div>
        <div ref={activeRef} onClick={(e) => handleClick(e)}><ProductsIcon/><h3>Products</h3></div>
        <div ref={activeRef} onClick={(e) => handleClick(e)}><ReferralsIcon/><h3>Referrals</h3></div>
      </div>
      <div className="help_center"><HelpIcon/><h3>Help center</h3></div>
    </div>
  )
}

export default Header
