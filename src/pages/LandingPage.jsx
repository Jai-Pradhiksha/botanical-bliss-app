import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <h1 style={{ fontSize : '40px'}} className='text-success'>Botanical Bliss</h1>
        <p style={{fontSize : '20px'}}>Nurture Your Space with Nature's Grace</p>
        <Link to="/products" className="btn btn-success mt-4">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
