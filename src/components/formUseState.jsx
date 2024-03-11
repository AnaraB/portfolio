import React from "react";
import { useState } from "react";

import Container from "./Container";

function Contact() {
    //set all input fields in html form with NAME attr that equals
    // the obj key in useState. That's how useState knows to track from input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const changeField = event.target.name;
    const newValue = event.target.value;
    //    update state by using updater syntax
    setFormData((currentData) => {
        //use computed property name
      //use spread operator and return  copy of currentData obj
      //update changeFiled with new value
      return { ...currentData, [changeField]: newValue };
      //alternative way 
      //return {...currentData, [event.target.name]: event.target.value}
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

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
                    name="name"
                    value={formData.name}
                    id="name"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email address:</label>
                  <input
                    className="form-control"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    id="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    value={formData.message}
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    rows="5"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary btn-xl js-scroll-trigger"
                  >
                    Submit
                  </button>
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
