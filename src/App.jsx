import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";

export default function App() {
    return ( 
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Portfolio/>
            <Technologies/>
            <Contact />
        </div>
    )
}