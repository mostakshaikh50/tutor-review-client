import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';


const Review = () => {
    const [reviews, setReviews] = useState([]);
    const {user} = useContext(AuthContext);
    console.log(reviews)
   

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    return (
        <div>
            <h2>reviews: {reviews.length}</h2>
            <div className="overflow-x-auto w-full text-gray-700">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                             reviews.map(review => <ReviewRow
                               key={reviews._id}
                               review={review}
                             ></ReviewRow>)
                        }                     
                        
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default Review;