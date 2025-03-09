import React from 'react'
import {useState} from 'react'

const RegistrationForm = () => {
      const [formData, setFormData] =useState({username:'', email:'', password:''});
      const handleChange =(e) => {
          const { name,value} = e.target;
          setFormData(prevValues => ({...prevValues, [name]: value}));
    };
      const handleSubmit = (e) => {
        e.preventDefault();
      };

  return (
   
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
        required
        />

        <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
        />

        <input
        type="password"
        name="password"
        value={password}
        onChhange={handleChange}
        required
        />

        <button type="submit">Submit</button>
    </form>
  );

}
export default RegistrationForm