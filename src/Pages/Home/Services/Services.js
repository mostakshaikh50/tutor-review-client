import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json()
                .then(data => setServices(data)))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-6xl font-bold text-yellow-600">Services List</p>
            </div>
            <div className='card-actions justify-end'>
                <Link to="/allservices/">
                    <button className="btn btn-warning mb-10 mr-10">See All</button>
                </Link>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;