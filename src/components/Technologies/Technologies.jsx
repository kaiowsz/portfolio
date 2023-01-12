import React from "react";
import "./Technologies.scss"

import html from "../../assets/html.png"
import css from "../../assets/css.png"
import javascript from "../../assets/javascript.png"
import react from "../../assets/react.png"
import git from "../../assets/git.png"
import github from "../../assets/github.png"
import sass from "../../assets/sass.png"
import node from "../../assets/node.png"

export default function Technologies() {

    const techs = [
        {
            id: 1,
            src: html,
            name: "HTML",
            style: "rgb(255, 102, 0)",
            border: "htmlTech"
        },
        {
            id: 2,
            src: css,
            name: "CSS",
            style: "rgb(51, 154, 250)",
            border: "cssTech"
        },
        {
            id: 7,
            src: sass,
            name: "Sass",
            style: "rgb(224, 101, 224)",
            border: "sassTech"
        },
        {
            id: 3,
            src: javascript,
            name: "JavaScript",
            style: "rgb(252, 239, 53)",
            border: "jsTech"
        },
        {
            id: 4,
            src: react,
            name: "React",
            style: "rgb(11, 244, 252)",
            border: "reactTech"
        },
        {
            id: 5,
            src: git,
            name: "Git",
            style: "rgb(255, 78, 8)",
            border: "gitTech"
        },
        {
            id: 6,
            src: github,
            name: "GitHub",
            style: "rgb(226, 226, 226)",
            border: "githubTech"
        },
        
        {
            id: 8,
            src: node,
            name: "NodeJS",
            style:"rgb(87, 194, 60)",
            border: "nodeTech"
        }
    ]

    return (
        <div className="technologies">
            <div className="tech-content">
                <div className="tech-title">
                    <h1>Technologies</h1>
                </div>

                <div className="techs">

                    { techs.map(tech => (
                        <div key={tech.id} className={`tech rainbow ${tech.border}`} style={{color: `${tech.style}`}}>
                            <img src={tech.src} alt={tech.name} loading="lazy" />
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}