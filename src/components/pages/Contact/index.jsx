import React from 'react';
import Container from '../../Container';

function Contact() {

    return (
        <Container>
        <section className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto text-white mb-4">
                    <h1 className="text-center">Contact</h1>
                        <hr className="light my-4" />
                        <form id="contact-form" className="mb-5">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    className="form-control"
                                    placeholder="Name"
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email address:</label>
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                          
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    className="form-control"
                                    placeholder="Message"
                                    name="message"
                                    rows="5" 
                                />
                            </div>
                            <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-xl js-scroll-trigger">Submit</button>
                            </div>
                        </form>
                    
                        <h4>
                            Aygerim Berdalieva <br />
                            My email <a href="mailto:berdali.aygerim9@gmail.com"> berdali.aygerim9@gmail.com</a>
                        </h4>
                    </div>
                </div>
            </div>
        </section>
        </Container>
    );
}

export default Contact;