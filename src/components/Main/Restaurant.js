import React from 'react'

import Stars from './Stars';

function Restaurant(props) {

    const { name, image_url, location, rating } = props.restaurant;


    return (
        <div className="restaurant__card restaurant__card--toreview" >
            <div className="restaurant__card-img-box">
                <img className='restaurant__card__img' src={image_url} alt={name} />
            </div>
            <div className="restaurant__card-review-box">
                <h3 className="restaurant__card-title">{name}</h3>
                <Stars rating={rating} />
                <div className="restaurant__card-address">
                    <p>
                        {`${location.address1} ${location.address2} ${location.address3}`}
                    </p>
                </div>
                <div className="restaurant__card-action-box">
                    <button className="btn btn--add">Add Review</button>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;