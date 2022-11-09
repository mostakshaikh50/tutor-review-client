import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TrustedOnTutor from '../TrustedOnTutor/TrustedOnTutor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <TrustedOnTutor></TrustedOnTutor>
        </div>
    );
};

export default Home;