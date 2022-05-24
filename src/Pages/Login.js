import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
         <li><Link to="/">Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signin">Signin</Link></li>
                            <li><Link to="/portfolio">My Portfolio</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
       
        </div>
    );
};

export default Login;