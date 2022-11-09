import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const { _id, img, price, title, description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
            <PhotoProvider>
                <PhotoView src={img}>
                <img src={img} alt="service-img" />
                </PhotoView>
            </PhotoProvider>           
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl text-orange-600 font-semibold'>Price: ৳{price}<span>/per month</span></p>
                <p className='text-lg'>Description: {description.slice(0,100)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;