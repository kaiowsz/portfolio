import React from "react";
import "./Contact.scss"

export default function Contact() {
    return (
        <div className="contact">
            <div className="content-contact">
                <div className="title-contact">
                    <h1>Contact</h1>
                    <p>Get in touch with me!</p>
                </div>

                    <form action="https://getform.io/f/7c620540-fade-4754-8a6d-3a7cff3bf148" method="POST">

                    <input name="name"
                        type="text" placeholder="Name" required/>

                    <input name="surname"
                        type="text" placeholder="Surname" required/>

                    <input name="email"
                        type="email" placeholder="Email" required/>

                    <textarea name="message" cols="50" rows="10" placeholder="Message" required>

                    </textarea>

                    <button>Send</button>
                    </form>


            </div>
        </div>
    )
}