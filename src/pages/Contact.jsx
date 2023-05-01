import React, { useRef } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");
  const divAlert = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name ref>>>>>>>", nameRef.current.value);
    console.log("name ref>>>>>>>", emailRef.current.value);
    console.log("name ref>>>>>>>", subjectRef.current.value);
    console.log("name ref>>>>>>>", messageRef.current.value);

    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let subject = subjectRef.current.value;
    let message = messageRef.current.value;

    try {
      const formdata = fetch(
        "https://contactform-2ed5c-default-rtdb.firebaseio.com/form.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
        }
      );

      nameRef.current.value = "";
      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
      setTimeout(() => {
        divAlert.current.style.display = "block";
      }, 5000);
      divAlert.current.style.display = "none";
      // setTimeout(() => {
      //   divAlert.current.style.display = "none";
      // }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus ipsum aperiam cumque fugit suscipit animi natus
                nostrum voluptatem iste quam!
              </p>
              <div class="alert alert-success" role="alert" style={{display:'none'}} ref={divAlert}>
                Your form submited successfully we will get back to you soon
              </div>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      ref={nameRef}
                      required
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      ref={emailRef}
                      required
                    />
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      placeholder="Enter subject"
                      ref={subjectRef}
                      required
                    />
                  </div>
                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder="Write message"
                      ref={messageRef}
                      required
                    ></textarea>
                  </div>

                  <button
                    className="send__btn"
                    style={{
                      border: "none",
                      padding: "7px 25px",
                      borderRadius: "5px",
                      marginTop: "20px",
                    }}
                  >
                    Send a Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
