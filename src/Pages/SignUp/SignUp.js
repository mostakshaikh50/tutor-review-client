import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/login');
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="grid place-items-center my-20">
            <div className="w-2/4 h-3/4">                
                <div className="card w-full shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />                            
                        </div>
                    </form>
                    <p className='text-center'>Already have an account ? <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;