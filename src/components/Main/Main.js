import React, { useEffect, useState } from 'react';


import ApiService from '../../services/ApiService';
import './Main.scss';

import Restaurant from './Restaurant';
import Review from './Review';
import Loading from './Loading';

function Main(props) {


    const [loading, setLoader] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const apiService = new ApiService();

        apiService.getRestaurants().then(data => {
            setRestaurants(data.businesses);
            setLoader(false);

        });
    }, [])

    useEffect(() => {
        setReviews([restaurants[5]]);
    }, [restaurants])




    return (
        <main className="main">
            {
                loading ? <Loading />

                    : <>
                        {
                            reviews && <section className="main__reviewed">
                                <h2 className="main__title">Your Reviews</h2>
                                {
                                    reviews.map(r => <Review key={r.id} review={r} />)
                                }
                            </section>
                        }
                        <section className="main__suggestions">
                            <h2 className="main__title">Restaurants</h2>
                            {
                                restaurants.map(r => {
                                    return <Restaurant key={r.id} restaurant={r} />
                                })
                            }
                        </section>
                    </>
            }
        </main>
    )
}

export default Main
