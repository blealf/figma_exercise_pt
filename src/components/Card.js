import React from 'react';
import { FaApple } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="card">
      <div className="card_title">
        <FaApple /> <h3>Card</h3>
      </div>
      <div className="card_content">
        <div className="card_header">
          <h3><FaApple/></h3>
          <div>
            <h3>Virtual Card <FaApple /></h3>
            <p>Lorem ipsum dolor sir amet </p>
          </div>
          <div className="create_card"> <button className="btn create_card"> Create New Card </button></div>
        </div>
        <div className="card_display">
          <div className="card_image_dark">
            <div className="layer1"><img src="/images/card_dark.png" alt="card_dark"/></div>
            <div className="layer2">
              <button className="btn btn-danger">Freeze Card</button>
              <button className="btn btn-success"> Delete Card</button>
            </div>
          </div>
          <div className="card_image_light">
            <div className="layer1"><img src="/images/card_light.png" alt="card_light"/></div>
            <div className="layer2"></div>
            <div className="layer3"></div>
            <div className="layer4"></div>
          </div>
          <div className="card_properties">
            <div className="properties_wrapper">
              <div className="property">
                <div className="name">Card Balance:</div>
                <div className="value balance">$3000.73</div>
              </div>
              <div className="property">
                <div className="name">Name:</div>
                <div className="value">Netflix Card</div>
              </div>
              <div className="property">
                <div className="name">Card Status:</div>
                <div className="value">Active</div>
              </div>
              <div className="property">
                <div className="name">Billing Address:</div>
                <div className="value">Patricia HQ, SA 109827 <FaApple/></div>
              </div>
              <div className="property">
                <div className="name">Date Created:</div>
                <div className="value">March 3rd 2020, 9:48:36 am</div>
              </div>
            </div>
            <div className="fund_btn">
              <button className="btn btn-success">Fund Card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
