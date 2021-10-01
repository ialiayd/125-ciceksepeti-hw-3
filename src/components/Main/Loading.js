import React from 'react'
import LoadingImage from './loading.svg';


export default function Loading() {
    return (
        <div className="main__loading">
            <img src={LoadingImage} alt="Loading" />
        </div>
    )
}
