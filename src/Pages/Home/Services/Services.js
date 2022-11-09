import React from 'react';

const Services = () => {
    // const [services, setServices] = useState([]);
    // useEffect( () => {
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json()
    //     .then(data => setServices(data)))
    // }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-6xl font-bold text-yellow-600">List of Services</p>
                <h2 className="text-5xl font-semi-bold">Our Service Area</h2>
                <p>perhaps the most famous of the First World War English poets. It concerns
                    "a piece of our heavy artillery"—in other words a large gun or cannon. <br/>Be slowly lifted up, thou long black arm,
                    Great.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    // services.map(service => <ServiceCard
                    //   key ={service._id}
                    //   service ={service}
                    // ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;