import React from 'react';
import '../stylesheets/Header.scss';
import picture from '../images/Yolanda.jpeg';

function Header(props) {
  return (
    <div className="header">
        
       <img src={picture} className="header__image" alt="logo" />
       <div>
       <h1 className='header__title'>{props.title}</h1>
       <p className='header__date'>{props.date}</p>
       </div>

    </div>
  );
}

export default Header;
