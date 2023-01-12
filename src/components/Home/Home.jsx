import React from "react";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import heroImage from "../../assets/heroImage.jpg"
import "./Home.scss"

export default function Home() {
    return (
        <div className="home">
            <div className="container-home">
                <div className="content">
                    <h1>I'm a Front-End Developer</h1>
                    <p>Hi there! My name is Kaio, i am a Front-end Developer. I started studying at the beggining of 2022 aiming become a Front-End Developer.</p>
                    <Link smooth duration={500} to="portfolio" className="link">
                        My Portfolio
                        <span>
                            <MdOutlineKeyboardArrowRight />
                        </span>
                    </Link>
                </div>

                <div className="heroImage">
                    <img src={heroImage} alt="" />
                </div>
            </div>

        </div>
    )
}
