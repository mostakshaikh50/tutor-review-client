import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddService = () => {
    const {user} = useContext(AuthContext);


    const handleService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const image = form.image.value;
        const message = form.message.value;

        const newService = {          
            email,
            reviewerName: name,
            reviewerImage: image,
            message,
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                //console.log(data);
                alert('Review submitted Successfully!');
                form.reset();
            }            
        })
        .catch(err => console.error(err));
    }

    
    return (
        <div>
            <div className="card w-full bg-black text-primary-content mt-5">                
                <h1 className='text-4xl text-center text-yellow-400 font-extrabold'>Add Services</h1>
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

export default AddService;