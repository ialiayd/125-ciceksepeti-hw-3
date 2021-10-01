

import Star from './Star'

function Stars({ rating }) {


    return (
        <div className="restaurant__card-star-box">
            {
                [...Array(5)].map((e, i) => i + 1 < Math.trunc(rating) ? <Star key={i} cName={""} /> : <Star key={i} cName={"restaurant__card-star--unrated"} />)
            }
        </div>
    )
}

export default Stars;