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
    const [submitMessage, setSubmitMessage] = useState ("");
    const [error, setError] = useState (false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {
          e.preventDefault();
          if (firstName.length==0 || lastName.length==0 || email.length==0 || message.length==0){
            setError(true);
          }
          
          setIsPending(true);
          
          if (firstName && lastName && email && message ){
            setSubmitMessage("Message sent!");
          };
          
          setIsPending(false);
      }

      /*Later, remove this custom "const error" validation, and just use the default validation by making the input fields and textarea "required". */

  return (
    <div className="contact">
        <div className="contactWrapper">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
                <form onSubmit={handleSubmit}>
                    <div className="names">
                        <div className="eachContainer">
                            <label htmlFor="first_name" className="describer">First name</label>
                            <input
                            id="first_name"
                            type="text"                           
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                            {error && firstName.length<=0?
                            <div className="inputFieldErrorText">First name is required</div>:""}
                        </div>

                        <div className="eachContainer">                   
                            <label htmlFor="last_name" className="describer">Last name</label>
                            <input
                            id="last_name"
                            type="text"                           
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            />
                            {error && lastName.length<=0?
                            <div className="inputFieldErrorText">Last name is required</div>:""}
                        </div>
                    </div>

                    <div className="eachContainer">
                        <label htmlFor="email" className="describer">Email</label>
                            <input
                            id="email"
                            className="emailInput"
                            type="email"                           
                            placeholder="yourname@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            {error && email.length<=0?
                            <div className="inputFieldErrorText">Email is required</div>:""}
                    </div>
                    
                    <div className="eachContainer">
                        <label htmlFor="message" className="describer">Message</label>
                        <textarea 
                        id="message"
                        
                        placeholder="Send me a message and I'll reply you as soon as possible..."
                        value={message}
                        className={error && message.length<=0 ? 'errorTextArea' : "defaultTextArea" } 
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {error && message.length<=0?
                        <div className="textAreaErrorText">Please enter a message</div>:""}
                    </div>

                    <div className="permission">
                        <label className="main">
                            <input 
                                type="checkbox"   
                                name="checkbox"
                                checked={isChecked}
                                onChange={handleOnChange} 
                                />
                                    <span className="checkbox"></span>
                        </label>
                        <span className="agreement">You agree to providing your data to elemaIK who may contact you.</span>
                    </div>

                    {!isPending && <button id="btn__submit">Send message</button>}
                    {isPending && <button id="btn__submit" disabled>Sending message...</button>}



                </form>

                <div className="submitMessage">{submitMessage}</div>
            </div>
            <Footer />
        </div>
  )
}

export default Contact
                            