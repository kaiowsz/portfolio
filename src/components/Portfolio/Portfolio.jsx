import React from "react";
import "./Portfolio.scss"

import eCommerce_stripe from "../../assets/projects/ecommerce_stripe.png"
import chat_realtime from "../../assets/projects/chat-realtime.png"
import notesz from "../../assets/projects/notesz.png"
import github_favs from "../../assets/projects/github_favs.png"
import npkBurger from "../../assets/projects/npkBurger.png"
import memorygame from "../../assets/projects/memorygame.png"

export default function Portfolio() {

    const portfolio = [
        {
            id: 1,
            src: eCommerce_stripe,
            demo: "https://kaiowsz-ecommerce.vercel.app",
            code: "https://github.com/kaiowsz/eCommerce_stripe",
            name: "eCommerce",
            description: "An eCommerce fully functional with payment methods using Stripe and Sanity. Made with NextJS."
        },
        {
            id: 2,
            src: notesz,
            demo: "https://notesz-app.netlify.app",
            code: "https://github.com/kaiowsz/notesz",
            name: "Notesz",
            description: "Project created during the Rocketseat Explorer, using Vite and React. You can create users and notes using it."
        },
        {
            id: 3,
            src: chat_realtime,
            demo: "https://chat-realtime-liard.vercel.app/",
            code: "https://github.com/kaiowsz/chat-realtime",
            name: "Chat Realtime",
            description: "A realtime chat messaging application. Made with React and Firebase."

        },
        {
            id: 4,
            src: github_favs,
            demo: "https://kaiowsz.github.io/github_favorites/",
            code: "https://github.com/kaiowsz/github_favorites",
            name: "Github Favorites",
            description: "An application using the github API to see informations of your favorites repositories."
        },
        {
            id: 5,
            src: npkBurger,
            demo: "https://kaiowsz.github.io/npkBurger/",
            code: "https://github.com/kaiowsz/npkBurger",
            name: "NpkBurger",
            description: "A website template created to an eCommerce delivery." 
        },
        {
            id: 6,
            src: memorygame,
            demo: "https://kaiowsz.github.io/memory-game/",
            code: "https://github.com/kaiowsz/memory-game",
            name: "Memory Game",
            description: "A simple memory card made with vanilla JS."
        }

    ]

    return (
        <div className="portfolio">
            <div className="content-portfolio">
                <div className="title-portfolio">
                    <h1>Portfolio</h1>
                    <p>Check out some of my works and projects.</p>
                </div>

                <div className="works-portfolio">

                    { portfolio.map(item => (
                        <div key={item.id} className="project">
                        <img src={item.src} alt={item.src} loading="lazy" />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <div className="buttons">
                            <a href={item.demo} target="_blank" rel="noreferrer">Demo</a>
                            <a href={item.code} target="_blank" rel="noreferrer">Code</a>
                        </div>
                    </div>
                    )) }
                </div>

            </div>
        </div>
    )
}