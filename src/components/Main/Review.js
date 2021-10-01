import React from 'react'
import Stars from './Stars';
export default function Review({ review }) {

    const { id, name, image_url, rating } = review;
    const reviewText = "Güzel bir yemekti herkese tavsiye ediyorum";

    return (
        <div className="restaurant__card restaurant__card--reviewed">
            <div className="restaurant__card-img-box">
                <img className='restaurant__card__img' src={image_url} alt={name} />
            </div>
            <div className="restaurant__card-review-box">
                <h3 className="restaurant__card-title">{name}</h3>
                <Stars rating={rating} />
                <div className="restaurant__card-review">
                    <p>&ldquo;{reviewText}&rdquo;</p>
                </div>
                <div className="restaurant__card-action-box">
                    <button className="btn btn--edit">Edit Review</button>
                    <button className="btn btn--delete">Delete Review</button>
                </div>
            </div>
        </div>
    )
}
