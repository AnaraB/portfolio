import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../Container";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleRegistration = (formData) => {
    const {name, email, message} = formData;
    const mailTo = `mailto:berdali.aygerim9@gmail.com?subject=contact form submission from ${name}&body=${message}. This email from: ${email}`
    window.location.href = mailTo;
    reset();

  };

  const handleError = (errors) => {
    console.log(errors);
  };


  const registerOptions = {
    name: { required: "Please enter you name" },
    email: { required: "Please enter your email" },
    message: { required: "Please leave your message" },
  };

  return (
    <Container>
      <section className="contactSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="sectionTitle">Contact Form</h2>
              <form
                id="contact-form"
                onSubmit={handleSubmit(handleRegistration, handleError)}
              >
                <div className="col-auto my-3">
                  <input
                    className="form-control"
                    placeholder="Name"
                    type="text"
                    name="name"
                    {...register("name", registerOptions.name)}
                  />
                  <small className="text-warning">
                    {errors?.name && errors.name.message}
                  </small>
                </div>
                <div className="col-auto my-3">
                  <input
                    className="form-control"
                    placeholder="Email"
                    type="email"
                    name="email"
                    {...register("email", registerOptions.email)}
                  />
                  <small className="text-warning">
                    {errors?.email && errors.email.message}
                  </small>
                </div>
                <div className="col-auto my-3">
                  <textarea
                    className="form-control"
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
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row justify-content-center align-items-center" id="mapSection">
            <div className="col-md-6">
              <div className="info">
                <div className="address">
                  <h4>Location:</h4>
                  <p>Bexley, Greater London</p>
                </div>

                <div className="email">
                  <h4>Email:</h4>
                  <p>berdali.aygerim9@gmail.com</p>
                </div>

                <div className="phone">
                  <h4>Call:</h4>
                  <p>+44744625640</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map mt-5">
                <iframe
                  style={{ width: "100%", height: "45vh" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Bexley%20station%20Bexleyheath+(Map)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Contact;
