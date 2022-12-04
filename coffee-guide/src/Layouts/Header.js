import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <navbar className="nav">
            <p>Test</p>
        </navbar>    
        <div className='titre'>
          <Link to={"/"}>
            <h1> Coffee Guide </h1>
          </Link>
        </div>
        <div className='styleDeCafe'>
        <div> 
          <Link to="/HotCoffee">
            Hot
          </Link>
          </div>
          <div>
          <Link to="/ColdCoffee">
             ColdCoffee
          </Link>
          </div>
        </div>
    </header>
  )
}
