import { Link, useNavigate } from "react-router-dom"
import { Hero } from "../../components"
import image from '../../../assets/image-login-1.png'
import "../../../styles/components/login.css";
import React, { useState} from "react";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const submit = async (e) => {
        e.preventDefault();
    
        await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });
        
        if ( email && password) {
            navigate("/home")};
    
        // (true);
    }


    return (
        <div className="auth container">
            <div className="image">
                <img src={image} alt=""/>
            </div>
            <div className="auth-card">
                <Hero />
                <form onSubmit={submit}>
                    <div className="form-group">
                            <label for="email">Email :</label>
                            <input id="email" placeholder="example@email.com" type="email" 
                                onChange={e=> setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label id="password" for="password">Password :</label>
                        <input placeholder="***********" type="password" 
                            onChange={e=> setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    <Link to="/forgot-password" className="btn btn-block text-primary mt-10">Forgot Password ?</Link>
                    <Link to="/register" className="btn btn-block text-black mt-60">Don't have account ? <span className="text-primary">Register Now!</span></Link>
                </form>
            </div>
        </div>
    )
}

export default Login