import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/allservices')
        .then(res => res.json()
        .then(data => setServices(data)))
    }, [])
    return (
        <div>
            <div>
            <div className='text-center mb-4'>
                <p className="text-6xl font-bold text-yellow-600">All Services</p>                
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                      key ={service._id}
                      service ={service}
                    ></ServiceCard>)
                }                
            </div>
            
        </div>
        </div>
    );
};

export default AllServices;