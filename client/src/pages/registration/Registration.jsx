import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css";
import { useState } from "react";
import axios from "axios";
const Registration = () => {

    const navigate = useNavigate();

        const [formData, setFormData] = useState({
          name: '',
          email: '',
          mobile: 0,
          password: '',
        });
      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };


        const handleSubmit = async (e) => {
            e.preventDefault();
        
            try {
              // Make an HTTP request to your registration endpoint
              const response = await axios.post('http://localhost:8000/api/auth/register', formData);
        
              // Handle the response (e.g., show a success message)
              console.log('Registration successful', response.data);
              navigate('/login');

            } catch (error) {
              // Handle errors (e.g., show an error message)
              console.error('Registration failed', error.message);
            }
          };
        
    return (
        <div className="regisContainer">
            <h3 className="registerTitle">Sign up</h3>
            <div className="regisItemContainer">
                <div className="regisItem">
                   
                    <input className="inputField" type="text" name="name" placeholder="name"  onChange={handleChange} />

                   
                    <input className="inputField" type="email" name="email" placeholder="email@email.com"  onChange={handleChange} />

                    
                    <input className="inputField" type="number" name="mobile" placeholder="10 digit number"  onChange={handleChange} />

                    
                    <input className="inputField" type="password" name="password" placeholder="password"  onChange={handleChange} />

                    
                    <input className="inputField" type="password" placeholder="confirm password"  onChange={handleChange} />

                    
                    <button className="registerButton" onClick={(e)=> handleSubmit(e)}>Submit</button><br/>
                   
                </div>

            </div>
            
        </div>
    )
};

export default Registration;