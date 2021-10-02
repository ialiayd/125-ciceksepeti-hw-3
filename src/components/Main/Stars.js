import React, { useState, useEffect } from 'react';
import Star from './Star'

function Stars({ rating, mode, changeRating }) {

    const [rate, setRating] = useState(rating);


    const setNewRating = (r) => {
        if (mode === "edit") {
            setRating(r);
            changeRating(rate);
        }
    }

    return (
        <div className="restaurant__card-star-box">
            {
                [...Array(5)].map((e, i) => i + 1 <= Math.trunc(rate)
                    ? <Star key={i} starIndex={i + 1} cName={""} setNewRating={setNewRating} />
                    : <Star key={i} starIndex={i + 1} cName={"restaurant__card-star--unrated"} setNewRating={setNewRating} />)
            }
        </div>
    )
}

export default Stars;