import { Regis } from "../../components"
import image from '../../../assets/image-login-1.png'
import { Link, useNavigate } from "react-router-dom";
import React, {useState} from "react";
import "../../../styles/components/login.css";



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [classes, setClasses] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    

const submit = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,
            email,
            classes,
            password
        })
    });

    if (name && email && classes && password) {
        navigate("/")};

    // (true);
}

    
    return (
        <div className="auth container">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="auth-card">
                <Regis />
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label id="password" for="fullname">Full Name :</label>
                        <input placeholder="insert your full name here" type="text"
                            onChange={e=> setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label id="password" for="class">Class :</label>
                        <input placeholder="example : XIIRPL" type="text"
                            onChange={e=> setClasses(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="email">Email :</label>
                        <input id="email" placeholder="example@email.com" type="email" 
                            onChange={e=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label id="password" for="password">Password :</label>
                        <input placeholder="***********" type="password" 
                            onChange={e=> setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-20">Submit</button>
                    <Link to="/" className="btn btn-block text-black mt-10">already have an account? <span className="text-primary">Login Now!</span></Link>
                </form>
            </div>
        </div>
    )
};
export default Register;