/* eslint-disable no-unused-vars */
import React from 'react'
import "./home.css"
import Navbar from "../Navbar/navbar"
import Grid from '../Grid/grid'
import Step2 from "../Step2/step2"
import Caro from "../Caro/caro"
const home = () => {
  return (
    <div className="background-container">
  <Navbar/>
  <Grid/>
  <Step2/>
  <Caro/>
</div>
  )
}

export default home
