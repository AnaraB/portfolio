import React from 'react';
import Container from '../../Container';

function Contact() {

    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/AnaraB"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/aygerim-berdalieva/"
        }
    ]

    return (
        <Container>
        <section className="">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto mb-4">
                    <h1 className="text-center">Contact</h1>
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
                    
                        
                            <p>My email<a href="mailto:berdali.aygerim9@gmail.com"> berdali.aygerim9@gmail.com</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        {icons.map(icon =>
                            (
                                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                            )
                        )}
                    </div>
            </div>
            </div>
        </section>
        </Container>
    );
}

export default Contact;