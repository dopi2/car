/* eslint-disable no-unused-vars */
import React from 'react'
import "./grid.css"
import Age from "../assets/home1.png"
const grid = () => {
  return (
    <div className="container text-center aboad">
    <div className="row">
      <div className="col">
        <img src={Age}/>
      </div>
      <div className="col tap6">
        <h1>Welcome to Retro Wheels, your ultimate destination for classic car enthusiasts! </h1>
        <p>we celebrate the timeless beauty and unmatched craftsmanship of Retro automobiles</p>
        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start lago">
              <a
                href="/cars"
                className=" lago2 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
      </div>
      
    </div>
  </div>
  )
}

export default grid
