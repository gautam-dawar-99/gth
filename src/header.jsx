import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='py-7 px-10 bg-emerald-500 text-white flex flex-col md:flex-row items-center justify-between'>
        {/* Branding and Title */}
        <div className='text-center md:text-left'>
          <h1 className='text-3xl font-bold mb-2 md:mb-0'>Geeta Technical Hub</h1>
          <p className='text-sm'>Shaping the Future of Technology</p>
        </div>
        {/* Navigation Links */}
        <div className='mt-4 md:mt-0 flex space-x-4'>
          <Link to='/' className='text-white hover:text-emerald-200'>
            Home
          </Link>
          <Link to='/about' className='text-white hover:text-emerald-200'>
            About
          </Link>
          <Link to='/product' className='text-white hover:text-emerald-200'>
            Product
          </Link>
          <Link to='/contact' className='text-white hover:text-emerald-200'>
            Contact
          </Link>
          <Link to="/cto-message" className="text-white hover:text-emerald-200"> {/* New Link */}
            CTO Message
          </Link>

          <Link to='/leadership' className='text-white hover:text-emerald-200'>Leadership</Link>
          <Link to='/industry-collab' className='text-white hover:text-emerald-200'>Industry Collaborations</Link>
          <Link to='/success-stories' className='text-white hover:text-emerald-200'>Success Stories</Link>
        </div>

      </div>
    </div>
  );
};

export default Header;
