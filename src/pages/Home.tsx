import React from 'react'
import cover from "../assets/file-cover.svg";
import Header from "../components/Header";
import './Style.css'

const Home = () => {
  return (
    <div className='page-body'>
            <Header pageName={"Dashboard"}/>
    <img className='cover-image' src={cover} alt="cover"/>
    </div>
  )
}

export default Home