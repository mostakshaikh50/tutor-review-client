import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ReviewRow from './ReviewRow';


const Review = () => {
    const [reviews, setReviews] = useState([]);
    const {user} = useContext(AuthContext);
    
    useTitle('Review');
   

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully!');
                    const restReview = reviews.filter(revs => revs._id !== id );
                    setReviews(restReview);
                }
            })
        }
    }

    return (
        <div>
            <h2>reviews: {reviews.length}</h2>
            {
                reviews?.length?
                <>
                <div className="overflow-x-auto w-full text-gray-700">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>                            
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
                               handleDelete={handleDelete}
                             ></ReviewRow>)
                        }                     
                        
                    </tbody>
                    

                </table>
            </div>
                </>
                :
                <p>No Data available</p>
            }
            
        </div>
    );
};

export default Review;