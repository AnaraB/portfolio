import React from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import Container from "../../Container";

function Contact() {

  const {
    register, 
    handleSubmit,
    formState: { errors},
  } = useForm({mode: "onChange"});
  const handleRegistration = (formData) => {
    console.log("Form submitted")
  }

  

  const handleError = (errors) => {
    console.log(errors);
  };
 
  const registerOptions = {
    name: {required: "Please enter you name"},
    email: {required: "Please enter your email"},
    message: { required: "Please leave your message"}

  }
 
  return (
    <Container>
      <section className="contactSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto mb-4">
              <h2 className="sectionTitle">Contact Form</h2>
              <form id="contact-form" onSubmit={handleSubmit(handleRegistration, handleError)} className="">
                <div>
              
                  <input
                    className="form-control my-4"
                    placeholder="Name"
                    type="text"
                    name="name"
                    {...register("name", registerOptions.name)}
                  />
                  <small className="text-warning">
                    {errors?.name && errors.name.message}
                  </small>
                </div>
                <div>
                  <input
                    className="form-control my-4"
                    placeholder="Email"
                    type="email"
                    name="email"
                    {...register("email", registerOptions.email)}
                  />
                   <small className="text-warning">
                    {errors?.email&& errors.email.message}
                  </small>
                </div>
                <div>
             
                  <textarea
                    className="form-control my-4"
                    placeholder="Message"
                    type="text"
                    name="message" 
                    rows="5"
                    {...register("message", registerOptions.message)}
                  />
                   <small className="text-warning">
                    {errors?.message && errors.message.message}
                  </small>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn-contact-me"
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
