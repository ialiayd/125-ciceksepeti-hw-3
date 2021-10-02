import React, { useState, useEffect } from 'react'
import Stars from '../Main/Stars'


import './Modal.scss';

export default function ModalReview({ data, pushReview, mode, closeModal }) {

    const [dataState, setDataState] = useState({ ...data });

    useEffect(() => {
        document.querySelector(".container").classList.add(".modal-open");
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        pushReview(dataState);
    }

    const handleChange = (e) => {
        const comment = e.target.value;
        setDataState({
            ...dataState, text: comment
        });
    }

    const changeRating = (rating) => {
        setDataState({
            ...dataState, rating: rating
        });
    }

    const handleClose = () => {
        closeModal();
    }

    return (
        <div className="modal show">
            <div className="modal__bg">&nbsp;</div>
            <div className="modal__form-wrapper">
                <button onClick={handleClose} className="modal__close">&times;</button>
                <form onSubmit={handleSubmit} className="modal__form">
                    <h3 className="modal__title">{dataState.name}</h3>
                    <div className="modal__input-group">
                        <Stars rating={dataState.rating}
                            mode={mode}
                            changeRating={changeRating} />
                    </div>
                    <div className="modal__input-group">
                        <textarea value={dataState.text} onChange={handleChange} placeholder="Your review" className="modal__text" name="txt" id="" cols="60" rows="3"></textarea>
                    </div>
                    <button className="btn btn--review">Edit</button>
                </form>
            </div>
        </div>
    )
}
