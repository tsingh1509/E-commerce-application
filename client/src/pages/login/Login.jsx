import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import axios from "axios";
const Login = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    })

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make an HTTP request to your login endpoint
            const response = await axios.post('http://localhost:8000/api/auth/login', credentials);
      
            if(response.data.email === credentials.email){
                console.log('logged in successful');
                navigate('/home');
            }
            
            //console.log(response.data.email);
          } catch (error) {
            // Handle errors (e.g., show an error message)
            console.error('Registration failed', error.message);
          }

    }

    return(
       
            <div className="loginItem">
                <span>Email: </span>
                <input type="email" name="email" placeholder="email@email.com" onChange={handleChange}/>

                <span>Password: </span>
                <input type="password" name="password" placeholder="password" onChange={handleChange}/>

                <button onClick={handleSubmit}>login</button><br/>
                
                <h5>not a customer</h5>
                <Link to="/register">
                    <h5>Sign in</h5>
                </Link>
            </div>
    )
}

export default Login;




// http://localhost:8000/api/auth/login