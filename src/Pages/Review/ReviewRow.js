import React from 'react';

const ReviewRow = ({review}) => {
    
    const {_id, ServiceName, reviewerName, email, reviewerImage, service, message} = review

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }
    return (
        <tr> 
            <th>
                <label>
                    <button onClick={() =>handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>          
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded w-24 h-24">
                            <img src={reviewerImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>                    
                </div>
            </td>
            <td>
                {reviewerName}
            </td>
            <td>{email}</td>
            <td>{message}</td>
        </tr>
    );
};

export default ReviewRow;