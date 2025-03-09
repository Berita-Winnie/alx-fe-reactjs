import React from 'react'
import {useState} from 'react'


const RegistrationForm = () => {
      const [formData, setFormData] =useState({username:'', email:'', password:''});
      const [errors, setErrors] = useState ({ username: '', email: '', password: '' });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevValues) => ({ ...prevValues, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear errors when typing
      };
    
      const validateForm = () => {
        let valid = true;
        let newErrors = { username: '', email: '', password: '' };
    
        if (!username) {
          newErrors.username = 'Username is required';
          valid = false;
        }
    
        if (!email) {
          newErrors.email = 'Email is required';
          valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'Invalid email format';
          valid = false;
        }
    
        if (!password) {
          newErrors.password = 'Password is required';
          valid = false;
        } else if (password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
          valid = false;
        }
    
        setErrors(newErrors);
        return valid;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          console.log('Form submitted:', formData);
        }
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
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

        <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <input
        type="password"
        name="password"
        value={password}
        onChhange={handleChange}
        required
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

        <button type="submit">Submit</button>
    </form>
  );

}
export default RegistrationForm