import React from 'react';
import bannerImg1 from '../../../assets/bannerImages/pics-1.jpg';
import bannerImg2 from '../../../assets/bannerImages/pics-2.jpg';
import bannerImg3 from '../../../assets/bannerImages/pics-3.png';

import BannerItem from './BannerItem';

const bannerData = [
    {
        image: bannerImg1,
        prev: 3,
        id: 1, 
        next: 2
    },
    {
        image: bannerImg2,
        prev: 1,
        id: 2, 
        next: 3
    },
    {
        image: bannerImg3,
        prev: 2,
        id: 3, 
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
           {
            bannerData.map(slide => <BannerItem
              key={slide.id}
              slide={slide}
            ></BannerItem>)
           }
        </div>
    );
};

export default Banner;