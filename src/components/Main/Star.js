import StarImage from './star.svg';

import React from 'react'

function Star({ cName, starIndex, setNewRating }) {

    const handleHover = (e) => {
        e.preventDefault();
        setNewRating(starIndex);
    }

    return (
        <svg className={`restaurant__card-star ${cName}`}
            onMouseOver={handleHover}>
            <use xlinkHref={`${StarImage}#star`}></use>
        </svg>
    )
}

export default Star;