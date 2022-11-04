import "./contact.css"

import React, { useState } from 'react'
import Footer from "../../components/footer/Footer";

const Contact = () => {

    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [message, setMessage] = useState ("");
    const [isPending, setIsPending] = useState (false);
    const [isChecked, setIsChecked] = useState (false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

  return (
    <div className="contact">
        <div className="contactWrapper">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
                <form>
                    <div className="names">
                        <div className="eachContainer">
                            <label for="first_name" className="describer">First name</label>
                            <input
                            id="first_name"
                            type="text"
                            required
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="eachContainer">                   
                            <label for="last_name" className="describer">Last name</label>
                            <input
                            id="last_name"
                            type="text"
                            required
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="eachContainer">
                        <label for="email" className="describer">Email</label>
                            <input
                            id="email"
                            className="emailInput"
                            type="email"
                            required
                            placeholder="yourname@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                    
                    <div className="eachContainer">
                        <label for="message" className="describer">Message</label>
                        <textarea 
                        id="message"
                        required
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <label className="main">
                        <input 
                            type="checkbox"   
                            name="checkbox"
                            checked={isChecked}
                            onChange={handleOnChange} 
                            />
                            <span className="checkbox"></span>
                            <span className="agreement">You agree to providing your data to elemaIK who may contact you.</span>
                    </label>

                    {!isPending && <button id="btn__submit">Send message</button>}
                    {isPending && <button id="btn__submit" disabled>Sending message...</button>}



                </form>

                
            </div>
            <Footer />
        </div>
  )
}

export default Contact