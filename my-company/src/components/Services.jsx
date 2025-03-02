import React from "react";
function Services() {
    return (
      <div style={{
        padding: '20px',
        backgroundColor: "#e6e6fa", 
        minHeight: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column"
      }}>
        <h1>Our Services</h1>
         <ul>
           <li>Technology Consulting</li>
           <li>Market Analysis</li>
           <li>Product Development</li>
         </ul>
      </div>
    );
  }
  


export default Services;