import React, { useState, useEffect } from 'react'
import Stars from './Stars';
function Review({ review, editReview, deleteReview, mode }) {

    const { id, name, image_url, rating, text, key } = review;

    const handleEdit = () => {
        editReview(review);
    }

    const handleDelete = () => {
        deleteReview(review.id);
    }



    return (
        <div className="restaurant__card restaurant__card--reviewed">
            <div className="restaurant__card-img-box">
                <img className='restaurant__card__img' src={image_url} alt={name} />
            </div>
            <div className="restaurant__card-review-box">
                <h3 className="restaurant__card-title">{name}</h3>
                <Stars key={key} rating={rating} mode={mode} />
                <div className="restaurant__card-review">
                    <p>&ldquo;{text}&rdquo;</p>
                </div>
                <div className="restaurant__card-action-box">
                    <button onClick={handleEdit} className="btn btn--edit">Edit Review</button>
                    <button onClick={handleDelete} className="btn btn--delete">Delete Review</button>
                </div>
            </div>
        </div>
    )
}

export default Review;