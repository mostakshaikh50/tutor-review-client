import React from 'react';
import parents from '../../../assets/Trust-parents.svg'

const TrustedOnTutor = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='relative w-1/2'>
                    <img src={parents} alt="" className="w-full h-full rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>                    
                    <p className="text-2xl font-bold text-orange-600">Feedback</p>
                    <h1 className="my-5 text-5xl font-bold">Trusted by parents <br/>
                     & students<br/></h1>
                    
                    <p className="py-6">Here at Tutor, we love to teach, but it’s the feedback and results  and ‘glowing reports’ truly inspires us to keep delivering and improving every day. 
                    which really make it worthwhile. So hearing positive feedback.</p>
                    <p>We want to thank every last one of our incredible parents and students for making Tutor Planet what it is today – we couldn’t have done it without you.</p>
                </div>
            </div>
        </div>
    );
};

export default TrustedOnTutor;