import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import DatePicker from 'react-date-picker';

const Activity = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="activities">
      <div className="activity_header">
        <h4>Recent Activity</h4>
        <div className="date_pick">
          <DatePicker
          onChange={onChange}
          value={value}
        />
        </div>
        <h3><FaApple /></h3>
      </div>
      <div className="activities_wrapper">
        <div className="activity">
          <div className="property">
            <h3><FaApple /></h3>
            <div className="name">
              <p>Amazon</p>
              <p className="activity_time">just now</p>
            </div>
          </div>
          <div className="value">$377.23</div>
        </div>
        <div className="activity">
          <div className="property">
            <h3><FaApple /></h3>
            <div className="name">
              <p>Nike</p>
              <p className="activity_time">Today</p>
            </div>
          </div>
          <div className="value">$237,737.55</div>
        </div>
        <div className="activity">
          <div className="property">
            <h3><FaApple /></h3>
            <div className="name">
              <p>Starbucks</p>
              <p className="activity_time">Yesterday</p>
            </div>
          </div>
          <div className="value">$873,873,834.3</div>
        </div>
        <div className="activity">
          <div className="property">
            <h3><FaApple /></h3>
            <div className="name">
              <p>Netflix</p>
              <p className="activity_time">June 17</p>
            </div>
          </div>
          <div className="value">$599</div>
        </div>
        <div className="activity">
          <div className="property">
            <h3><FaApple /></h3>
            <div className="name">
              <p>Apple</p>
              <p className="activity_time">June 15</p>
            </div>
          </div>
          <div className="value">$872</div>
        </div>
        <div className="activity">
          <div className="property">
            <h3><FaApple /></h3>
            <div className="name">
              <p>StarBucks</p>
              <p className="activity_time">June 13</p>
            </div>
          </div>
          <div className="value">$244.55</div>
        </div>
        <div className="activity">
          <div className="property">
            <h3><FaApple /></h3>
            <div className="name">
              <p>Nike</p>
              <p className="activity_time">June 11</p>
            </div>
          </div>
          <div className="value">$452</div>
        </div>
        <div className="activity">
          <div className="property">
            <h3><FaApple /></h3>
            <div className="name">
              <p>Apple</p>
              <p className="activity_time">June 09</p>
            </div>
          </div>
          <div className="value">$990</div>
        </div>
      </div>
    </div>
  )
}

export default Activity
