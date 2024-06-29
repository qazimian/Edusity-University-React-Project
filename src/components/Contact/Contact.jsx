import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt=""/> </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          doloribus nisi voluptatum molestiae velit modi ea accusamus distinctio
          ipsum officia quisquam consequatur harum ab optio, ducimus, magnam
          nihil error ipsam! Placeat, et!
        </p>
        <ul>
            <li><img src={mail_icon}/> qazimian101@gmail.com</li>
            <li><img src={phone_icon}/>+923013844809</li>
            <li><img src={location_icon}/> Scheme33, Karachi, Sindh, Pakistan</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="">
            <label >Your name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required />
            <label> Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter Your Mobile Number" required  />
            <label> Write your Message here</label>
            <textarea name="message" rows="6" placeholder="Enter yOUr message" required></textarea>
            <button type="submit" className="btn dark-btn"> Submit Now <img src={white_arrow} alt=""/></button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
