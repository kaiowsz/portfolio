import React, { useEffect, useState } from "react";
import "./Portfolio.scss"

import eCommerce_stripe from "../../assets/projects/ecommerce_stripe.png"
import chat_realtime from "../../assets/projects/chat-realtime.png"
import notesz from "../../assets/projects/notesz.png"
import github_favs from "../../assets/projects/github_favs.png"
import npkBurger from "../../assets/projects/npkBurger.png"
import memorygame from "../../assets/projects/memorygame.png"

import { client, urlFor } from "../../lib/projects";

export default function Portfolio() {

    const stackProjects = [
        {
            stacks: ["HTML", "SaSS", "JavaScript", "React", "Material UI"]
        },
        {
            stacks: ["HTML", "SaSS", "JavaScript", "React", "Firebase"]
        },
        {
            stacks: ["HTML", "Styled Components", "JavaScript", "React", "NodeJS", "Express", "SQLite", "Knex"]
        },
        {
            stacks: ["HTML", "CSS", "TypeScript", "React", "Tailwind CSS"]
        },
        {
            stacks: ["HTML", "CSS", "JavaScript", "React", "Next", "Stripe", "Sanity"]
        },
        {
            stacks: ["HTML", "CSS", "JavaScript", "React"]
        },
    ]

    const [queryProjects, setQueryProjects] = useState([])

    useEffect(() => {
        async function queryProjects() {
            const query = `*[_type == "project"]`

            const projects = await client.fetch(query)
            console.log(projects)
            
            projects.map((projeto, index) => (
                projeto.stacks = stackProjects[index]
            ))


            setQueryProjects(projects)
        }

        queryProjects()
    }, [])

    return (
        <div className="portfolio">
            <div className="content-portfolio">
                <div className="title-portfolio">
                    <h1>Portfolio</h1>
                    <p>Check out some of my works and projects.</p>
                </div>

                <div className="works-portfolio">

                    { 
                    
                    queryProjects.map(item => (
                        <div key={item.id} className="project">
                        <img className="image-portfolio" src={urlFor(item.imageproject.asset._ref).url()} alt={item.src} loading="lazy" />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <div className="stack">
                            <h2>Stacks</h2>
                            <div className="stacks">
                                {
                                    item.stacks && item.stacks.stacks.map(stack => (
                                        <span>{stack}</span>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="buttons">
                            <a href={item.demoURL} target="_blank" rel="noreferrer">Demo</a>
                            <a href={item.codeURL} target="_blank" rel="noreferrer">Code</a>
                        </div>
                    </div>
                    )) }
                </div>

            </div>
        </div>
    )
}