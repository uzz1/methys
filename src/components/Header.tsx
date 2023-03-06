import React, { useState } from 'react';
import profileImage from '../assets/profile.svg';
import './Header.css';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header-container">
      <div className="header-profile-container">
        <img className="header-profile-image" src={profileImage} alt="Profile Image" onClick={toggleMenu} />
        {showMenu && (
          <div className="header-popup-menu">
            <div className="header-popup-menu-item" onClick={onMenuClick}>Logout</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;