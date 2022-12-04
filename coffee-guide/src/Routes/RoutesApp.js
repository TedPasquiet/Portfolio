import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import ColdCoffee from '../Pages/ColdCoffee';
import HotCoffee from '../Pages/HotCoffee';
import Shop from "../Pages/Shop"


export default function RoutesApp() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ColdCoffee" element={<ColdCoffee />}/>
        <Route path="/HotCoffee" element={<HotCoffee />}/>
        <Route path='/Shop' element={<Shop/>}/>
        
    </Routes>
  )
}
