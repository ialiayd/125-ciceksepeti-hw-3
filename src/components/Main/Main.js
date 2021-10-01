import React from 'react';

import './Main.scss';
import CardImage from './card-image.jpg';
import Star from './star.svg';


function Main() {
    return (
        <main className="main">
            <section className="main__reviewed">
                <h2 className="main__title">Your Reviews</h2>
                <div className="restaurant__card restaurant__card--reviewed">
                    <div className="restaurant__card-img-box">
                        <img className='restaurant__card__img' src={CardImage} alt="" />
                    </div>
                    <div className="restaurant__card-review-box">
                        <h3 className="restaurant__card-title">Dönerci Celal Usta</h3>
                        <div className="restaurant__card-star-box">
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star restaurant__card-star--unrated">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star restaurant__card-star--unrated">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                        </div>
                        <div className="restaurant__card-review">
                            <p>&ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
                                necessitatibus pariatur voluptatibus.&rdquo;</p>
                        </div>
                        <div className="restaurant__card-action-box">
                            <button className="btn btn--edit">Edit Review</button>
                            <button className="btn btn--delete">Delete Review</button>
                        </div>
                    </div>
                </div>
                <div className="restaurant__card restaurant__card--reviewed">
                    <div className="restaurant__card-img-box">
                        <img className='restaurant__card__img' src={CardImage} alt="" />
                    </div>
                    <div className="restaurant__card-review-box">
                        <h3 className="restaurant__card-title">Dönerci Celal Usta</h3>
                        <div className="restaurant__card-star-box">
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star restaurant__card-star--unrated">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star restaurant__card-star--unrated">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                        </div>
                        <div className="restaurant__card-review">
                            <p>&ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
                                necessitatibus pariatur voluptatibus.&rdquo;</p>
                        </div>
                        <div className="restaurant__card-action-box">
                            <button className="btn btn--edit">Edit Review</button>
                            <button className="btn btn--delete">Delete Review</button>
                        </div>
                    </div>
                </div>
                <div className="restaurant__card restaurant__card--reviewed">
                    <div className="restaurant__card-img-box">
                        <img className='restaurant__card__img' src={CardImage} alt="" />
                    </div>
                    <div className="restaurant__card-review-box">
                        <h3 className="restaurant__card-title">Dönerci Celal Usta</h3>
                        <div className="restaurant__card-star-box">
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star restaurant__card-star--unrated">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star restaurant__card-star--unrated">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                        </div>
                        <div className="restaurant__card-review">
                            <p>&ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
                                necessitatibus pariatur voluptatibus.&rdquo;</p>
                        </div>
                        <div className="restaurant__card-action-box">
                            <button className="btn btn--edit">Edit Review</button>
                            <button className="btn btn--delete">Delete Review</button>
                        </div>
                    </div>
                </div>
                <div className="restaurant__card restaurant__card--reviewed">
                    <div className="restaurant__card-img-box">
                        <img className='restaurant__card__img' src={CardImage} alt="" />
                    </div>
                    <div className="restaurant__card-review-box">
                        <h3 className="restaurant__card-title">Dönerci Celal Usta</h3>
                        <div className="restaurant__card-star-box">
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star restaurant__card-star--unrated">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                            <svg class="restaurant__card-star restaurant__card-star--unrated">
                                <use xlinkHref={`${Star}#star`}></use>
                            </svg>
                        </div>
                        <div className="restaurant__card-review">
                            <p>&ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
                                necessitatibus pariatur voluptatibus.&rdquo;</p>
                        </div>
                        <div className="restaurant__card-action-box">
                            <button className="btn btn--edit">Edit Review</button>
                            <button className="btn btn--delete">Delete Review</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="main__suggestions">
                <h2 className="main__title">Restaurants</h2>
                <div className="restaurant__card restaurant__card--toreview">
                    <div className="restaurant__card-img-box">
                        <img className='restaurant__card__img' src={CardImage} alt="" />
                    </div>
                    <div className="restaurant__card-review-box">
                        <h3 className="restaurant__card-title">Dönerci Celal Usta</h3>

                        <div className="restaurant__card-address">
                            <p>Prof. Kazım İsmail Gürkan Cad.
                                Cağaloğlu Hamamı Sok. No:17-J,
                                34110</p>
                        </div>
                        <div className="restaurant__card-action-box">
                            <button className="btn btn--add">Add Review</button>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Main
