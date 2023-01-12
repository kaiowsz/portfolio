import React, { useState } from "react";
import "./Navbar.scss"
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

    function handleMenuIcon() {
        setMenuOpen(!menuOpen)
    }

    const data = [
        {
            local: "home",
            name: "Home"
        },
        {
            local: "about",
            name: "About"
        },
        {
            local: "portfolio",
            name: "Portfolio"
        },
        {
            local: "technologies",
            name: "Technologies"
        },
        {
            local: "contact",
            name: "Contact"
        },
    ]

    return (
        <div className="navbar">
            <div className="logo">
                <h1>Kaio</h1>
            </div>
            <div className={`links`}>
                <li>
                    <Link className="link" to="home" smooth duration={500}>Home</Link>
                </li>
                <li>
                    <Link className="link" to="about" smooth duration={500}>About</Link>
                </li>
                <li>
                    <Link className="link" to="portfolio" smooth duration={500}>Portfolio</Link>
                </li>
                <li>
                    <Link className="link" to="technologies" smooth duration={500}>Technologies</Link>
                </li>
                <li>
                    <Link className="link" to="contact" smooth duration={500}>Contact</Link>
                </li>
            </div>
            <div className="menuIcon" onClick={handleMenuIcon}>
                { menuOpen ? <FaTimes style={{zIndex: 5}} size={30}/> : <FaBars style={{zIndex: 5}} size={30}/> }
            </div>

            <div className={`modal ${menuOpen ? "" : "hidden"}`}>
                <ul>
                    {data.map(dataItem => (
                        <Link smooth duration={500} to={dataItem.local} onClick={handleMenuIcon}>{dataItem.name}</Link>
                    ))}
                </ul>
            </div>


        </div>
    )
}