import StarImage from './star.svg';

import React from 'react'

function Star({ cName }) {
    return (
        <svg className={`restaurant__card-star ${cName}`}>
            <use xlinkHref={`${StarImage}#star`}></use>
        </svg>
    )
}

export default Star;