import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TrustedOnTutor from '../TrustedOnTutor/TrustedOnTutor';

const Home = () => {
    useTitle('Home');
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