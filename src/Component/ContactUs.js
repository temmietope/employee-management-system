import React from "react";
import { Link} from "react-router-dom";

const ContactUs = props => {
  const onSubmit = e => {
    e.preventDefault();
    alert("Thanks for contacting us! We will get back to you soon");
  };
  return (
    <div
    className="contact-us"    
    >
      <form
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <div className="label">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="label">
          <label>Enquiries</label>
          <textarea />
        </div>
        <div className="submit">
          <input type="submit" value="Submit" className="btn" />
          <button className="back">
            <Link to="/">Back to Employees' Profile page</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
