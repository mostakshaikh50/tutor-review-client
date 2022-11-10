import { Result } from 'postcss';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const {loginUser, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin =() =>{
        googleLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => console.error);
    }

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .then(error => console.log(error));

        // loginUser(email, password)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
            
        //     const currentUser ={
        //         email: user.email
        //     }
        //     console.log(currentUser);

        //     //get jwt token
        //     fetch('http://localhost:5000/jwt',{
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(currentUser)
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         localStorage.setItem('token', data.token);
        //         navigate(from, {replace: true});
        //     })
           
        // })
        // .catch(err => console.error(err))
    }
    return (
        <div className="grid place-items-center my-20">
            <div className="w-2/4 h-3/4">                
                <div className="card w-full shadow-2xl bg-base-100 py-20 mb-5">
                <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/forgotpassword" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />                            
                        </div>
                    </form>
                    <p className='text-center'>Are you new in Tutor ? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
                    
                    <button onClick={handleGoogleLogin} className="btn">SignIn With Google <span className='text-red-400 ml-4'><FaGoogle></FaGoogle></span> </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;