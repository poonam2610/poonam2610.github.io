import React from "react";
import "./Contact.scss";
// import Map from './map'


export default function Contact() {
  return (
    <div className="container">
      <div className="contact-address">
        <p className="address">
          <h1>Chetan Dhorajiwala Sweets</h1>
          <br />
          <br />
          Nehru Chowk,Yavatmal-445001,
          <br />
          Maharashtra, India
          <br />
          <br />
          <strong>Phone:</strong>{" "}
          <a className="purple" href="">
            +91-9822221372
          </a>
          <br />
          <strong>E-mail:</strong>{" "}
          <a className="purple" href="mailto:chetandhorajiwala1958@gmail.com">
            chetandhorajiwala1958@gmail.com
          </a>
        </p>
      </div>
      <div className="contact-form-section">
        <h3 className="enquire">Enquire Us</h3>
        <div className="form">
          <form id="form" name="form" action="#" method="post">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                id="full-name"
                name="fullName"
                className="form-control"
                placeholder="Fullname"
              />
            </div>
            <div className="form-group">
              <label>E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="example@example.com"
              />
            </div>
            <div className="form-group">
              <label>Mobile *</label>
              <input
                type="tel"
                id="contact-no"
                name="contactNo"
                className="form-control"
                maxlength="10"
                placeholder="9876543210"
              />
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="4"
                placeholder="Share your comment/suggestion/complain"
              ></textarea>
            </div>
            <button
              type="submit"
              id="Submit"
              className="submit-btn"
              onclick=""
             >Submit</button>
             </form>
             {/* <Map/> */}
        </div>
      </div>
    
    </div>
  );
}


