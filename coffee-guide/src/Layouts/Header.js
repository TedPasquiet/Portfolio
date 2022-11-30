import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Header() {
  return (
    <header>
        <navbar className="nav">
            <p>Test</p>
        </navbar>    
        <div className='titre'>
            <h1> Coffee Guide </h1>
        </div>
        <div className='styleDeCafe'>
            <p> Hot </p>
            <p> Cold </p>
        </div>
    </header>
  )
}
