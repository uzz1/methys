import React, { useState } from 'react';
import profileImage from '../assets/profile.svg';
import './Header.css';
import notification from '../assets/icons/notification.svg';
import arrow from '../assets/icons/arrow.svg';

interface HeaderProps {
  pageName: string
}

const Header: React.FC<HeaderProps> = ({ pageName } ) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleMenu2 = () => {
    setShowMenu2(!showMenu2);
  };

  function handleMenuClick() {
    const popupMenu = document.getElementById('popup-menu');
    if (popupMenu) {
      popupMenu.style.display = popupMenu.style.display === 'block' ? 'none' : 'block';
    }
  }

  return (
    <header className="header-container">
         <div className="header-logo">{pageName}</div>
      <div className="header-profile-container">
      <img className="header-notification-image" src={notification} alt="Notification" onClick={toggleMenu2} />
      {showMenu2 && (
          <div className="header-popup-menu2">
            <div className="header-popup-menu-item" onClick={handleMenuClick}>Notifications</div>
          </div>
      )}
        <img className="header-profile-image" src={profileImage} alt="Profile Image" onClick={toggleMenu} />
        <img className="header-arrow-image" src={arrow} alt="arrow" onClick={toggleMenu} />
        {showMenu && (
          <div className="header-popup-menu">
            <div className="header-popup-menu-item" onClick={handleMenuClick}>Logout</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;