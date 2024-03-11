import React from 'react';
import {useState} from 'react';
import Container from '../../Container';

function Contact() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const updateUsername = (event) =>{
        console.log(event.target.value);
        setUsername(event.target.value);
    }
    const updateEmail = (event) =>{
        console.log(event.target.value);
        setUsername(event.target.value);
    }
    const updateMessage = (event) =>{
        console.log(event.target.value);
        setUsername(event.target.value);
    }



   
    return (
        <Container>
        <section className="contactSection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto mb-4">
                    <h2 className="text-center">Contact</h2>
                        <form id="contact-form" className="mb-5">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    value={username}
                                    id="username"
                                    onChange={updateUsername}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email address:</label>
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    id="email"
                                    onChange={updateEmail}
                          
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    value={message}
                                    id="message"
                                    onChange={updateMessage}
                                    rows="5" 
                                />
                            </div>
                            <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-xl js-scroll-trigger">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
        </section>
        </Container>
    );
}

export default Contact;