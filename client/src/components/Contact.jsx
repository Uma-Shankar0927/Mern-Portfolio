import React, { useState } from "react";
import loadingGif from "../assets/loadingGif.gif";
import { motion, easeInOut } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactData({ ...contactData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = contactData;
    if (name && email && message) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/v1/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: name, email: email, message: message }),
        });
        await response.json();
        toast.success("message sent", {
          pauseOnHover: false,
          autoClose: 2000,
          theme: "dark",
        });
        setContactData({ name: "", email: "", message: "" });
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill all details");
    }
  };
  return (
    <div className="contact-main">
      <div className="form-main-contact">
        <motion.h3
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: easeInOut,
          }}
        >
          Send a message
        </motion.h3>
        <input
          className="CInput"
          placeholder="Your Name"
          type="text"
          name="name"
          value={contactData.name}
          id="name"
          onChange={handleChange}
        />
        <input
          className="CInput"
          placeholder="Your Email"
          type="text"
          name="email"
          value={contactData.email}
          id="email"
          onChange={handleChange}
        />
        <textarea
          className="CInput"
          placeholder="Message..."
          type="text"
          name="message"
          value={contactData.message}
          id="message"
          onChange={handleChange}
        />
        {loading ? (
          <img src={loadingGif} alt="" />
        ) : (
          <button className="contact-btn" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
      <div className="location-main">
        <motion.h3
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: easeInOut,
          }}
          style={{paddingLeft:'10px'}}
        >
          Map of Bhubaneswar,Odisha
        </motion.h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239486.66727993853!2d85.65563589800222!3d20.301129051570932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1681457892888!5m2!1sen!2sin"
          width="360"
          height="360"
          style={{border:"0"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ToastContainer autoClose={2000} theme="dark" />
    </div>
  );
};

export default Contact;
