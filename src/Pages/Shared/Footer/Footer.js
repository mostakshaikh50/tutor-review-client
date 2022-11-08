import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
            <div>
                <img className='h-40' src={logo} alt="" />
                <p className='text-2xl font-mono'>Good teaching is more a giving of right <br /> question than  giving of right answers</p>
            </div>
            <div>
                <span className="footer-title text-2xl">Social Media</span>
                <Link className="link link-hover text-yellow-600 text-lg">Facebook</Link>
                <Link className="link link-hover text-yellow-600 text-lg">Twitter</Link>
                <Link className="link link-hover text-yellow-600 text-lg">LinkedIn</Link>
                <Link className="link link-hover text-yellow-600 text-lg">Github</Link>
            </div>
            <div>
                <span className="footer-title text-2xl">Services</span>
                <Link className="link link-hover text-yellow-600 text-lg">Six to Ten All Subject</Link>
                <Link className="link link-hover text-yellow-600 text-lg">Physics</Link>
                <Link className="link link-hover text-yellow-600 text-lg">Math</Link>
                <Link className="link link-hover text-yellow-600 text-lg">ICT</Link>
                <Link className="link link-hover text-yellow-600 text-lg">Chemistry</Link>
            </div>
            
        </footer>
    );
};

export default Footer;