import React, { useContext } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';



const Update = () => {
    const {user} = useContext(AuthContext);
    const daata = useRouteLoaderData();
    return (
        <div>
            
            <div className="card w-full bg-black text-primary-content mt-5">                
                <h1 className='text-4xl text-center text-yellow-400 font-extrabold'>Update Services</h1>
                <form>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5 mt-5'>
                       <input name="name" type="text" placeholder="Your Name" className="input input-ghost input-bordered w-full" />
                       <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost input-bordered w-full" readOnly />
                       <input name="image" type="text" placeholder="Image Link" className="input input-ghost input-bordered w-full" required />
                       <textarea name="message" className="textarea input-ghost textarea-warning" placeholder="Your Review"></textarea>
                    </div>                    
                    <button className="btn btn-success mb-4">Submit your Review</button>                    
                </form>                
            </div>
        </div>
    );
};

export default Update;