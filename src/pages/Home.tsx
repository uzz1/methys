import React from 'react'
import cover from "../assets/file-cover.svg";
import Header from "../components/Header";


function handleMenuClick() {
    const popupMenu = document.getElementById('popup-menu');
    if (popupMenu) {
      popupMenu.style.display = popupMenu.style.display === 'block' ? 'none' : 'block';
    }
  }
const Home = () => {
  return (
    <div className='page-body'>
            <Header onMenuClick={handleMenuClick}/>
    <img width="100%" src={cover} alt="cover"/>
    </div>
  )
}

export default Home