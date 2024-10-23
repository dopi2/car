/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../Navbar/navbar"
import "./about.css"
import About2 from '../Aboutt/about2'
import Team from '../Team/team'
import Blog from "../Blog/blog"
const about = () => {
  return (
    <div className='abt'>
      <Navbar/>
      <About2/>
      <Team/>
      <Blog/>
    </div>
  )
}

export default about
