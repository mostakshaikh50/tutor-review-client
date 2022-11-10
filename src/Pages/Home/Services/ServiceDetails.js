import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Review from '../../Review/Review';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const ServiceDetails = () => {
    useTitle('Service Details')
    const serviceDetailsData = useLoaderData();
    const {user} = useContext(AuthContext);
    const {_id, title, price, description, img, facility } = serviceDetailsData;
    
    const facilityName1 = facility[0].name;
    const facilityDetails1 = facility[0].details.split('_');
    const facilityName2 = facility[1].name;
    const facilityDetails2 = facility[1].details;

    const handleService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const image = form.image.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            email,
            reviewerName: name,
            reviewerImage: image,
            message,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
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


    const reviewSection = <>
        {
          user?.email?
          <>
          <div className="card w-full bg-black text-primary-content mt-5">                
                <h1 className='text-4xl text-center text-yellow-400 font-extrabold'>Review Section</h1>
                <form onSubmit={handleService}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5 mt-5'>
                       <input name="name" type="text" placeholder="Your Name" className="input input-ghost input-bordered w-full" />
                       <input name="email" type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-ghost input-bordered w-full" readOnly />
                       <input name="image" type="text" placeholder="Image Link" className="input input-ghost input-bordered w-full" required />
                       <textarea name="message" className="textarea input-ghost textarea-warning" placeholder="Your Review"></textarea>
                    </div>                    
                    <button className="btn btn-success mb-4">Submit your Review</button>                    
                </form>                
            </div>
            <Review></Review>
          </>
          :
          <div className="card w-full h-4/5 bg-black text-primary-content mt-5">                
                <h1 className='text-4xl text-center text-yellow-400 font-bold'>Review Section</h1>
                <li className='font-semibold justify-center ml-60  text-2xl'>Please Login here  <Link className='text-yellow-400' to='/login'>Login</Link></li>               
            </div>
        }
     </>

    return (
        <div>
            <div className="card w-full bg-gray-600 text-primary-content">
                <h1 className='text-4xl text-center text-yellow-400 font-extrabold'>Service Section</h1>
                <div className="card-body">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="service-img" />
                        </PhotoView>
                    </PhotoProvider>
                    <h2 className="card-title text-3xl font-extrabold text-yellow-400">{title}</h2>
                    <p><span className='text-xl text-yellow-400 font-bold'>Price:</span> ৳{price}/per month</p>
                    <p><span className='text-xl text-yellow-400 font-bold'>Description: </span>{description}</p>


                    <div className="card w-full bg-amber-700 text-primary-content grid gap-6 grid-cols-1 md:grid-cols-2">
                        <div className="card-body">
                            <h2 className="card-title">{facilityName1}</h2>
                            <p>1. {facilityDetails1[0]}</p>
                            <p>2. {facilityDetails1[1]}</p>
                            <p>3. {facilityDetails1[2]}</p>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{facilityName2}</h2>
                            <p>{facilityDetails2}</p>
                        </div>
                    </div>
                </div>
            </div>

                {reviewSection}
            
        </div>
    );
};

export default ServiceDetails;