import React from 'react';
import aboutMe from '../../../assets/about_tutor_image.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={aboutMe} alt="" className="w-full h-full rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About Tutor</p>
                    <h1 className="text-5xl font-bold">Md. Mostak Shaikh</h1><br/>
                    <h3 className="text-xl font-bold">BSc. in CSE at PUST, BD <br/> 
                    Msc. in CNAM at University of Portsmouth, UK
                    </h3>
                    
                    <p className="py-6">Well educated and most experienced on this field. Money is a most important things but not without proper guideline.
                    So, i can assure you if you looking good tutor then you can hire me without any hesitation.</p>
                    <p className="py-6">And of course you should make sure you will follow me as my guideline.</p>
                </div>
            </div>
        </div>
    );
};

export default About;