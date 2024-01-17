import Card from "./components/Card"
import Modal from "./components/Details";
import React from 'react';
import Render from "./Render";
import {Routes,Route} from "react-router-dom";

export default function App() {

  return (
    <Routes>
        <Route path="/" element={<Render />} />
        <Route path="menu" element={<Modal />} />
    </Routes>
    
  )
};

