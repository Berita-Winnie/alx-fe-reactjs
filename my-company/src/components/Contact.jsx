import React from "react";
function Contact() {
    return (
      <div style={{
        backgroundColor: "#ffe4e1", 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column"
      }}>
        <h1 style={{ color: "#ff4500" }}>Contact Us</h1>
        <p style={{ fontSize: "18px", color: "#333", textAlign: "center" }}>
          Reach out to us via email at contact@mycompany.com.
        </p>
      </div>
    );
  }


export default Contact;