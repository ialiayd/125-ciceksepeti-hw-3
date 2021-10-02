import React, { useEffect, useState } from 'react';


import ApiService from '../../services/ApiService';
import './Main.scss';

import Review from './Review';
import Loading from './Loading';
import ModalReview from '../Modal/ModalReview';
import ModalMessage from '../Modal/ModalMessage';

function Main(props) {

    const [loading, setLoader] = useState(true);
    const [modalStatus, setModalStatus] = useState(false);
    const [modalMessage, setModalMessageStatus] = useState(false);
    const [modalMessageText, setModalMessage] = useState("");

    const [restaurants, setRestaurants] = useState([]);

    const [reviewToEdit, setReviewToEdit] = useState({});

    const modes = { edit: "edit", view: "view" }

    useEffect(() => {
        const apiService = new ApiService();

        apiService.getRestaurants().then(data => {
            setRestaurants(data.businesses.map(x => {
                if (x.text) {
                    return x;
                }
                else {
                    x.text = "Güzel bir yemekti herkese tavsiye ediyorum";
                    return x;
                }
            }));
            setLoader(false);
        });
    }, []);

    const editReview = (review) => {
        setReviewToEdit({
            ...review
        });
        setModalStatus(true);
    }

    const pushReview = (dataSet) => {
        const data = JSON.parse(JSON.stringify(dataSet));
        const index = restaurants.findIndex(x => x.id === data.id);

        const updateArr = [...restaurants];
        updateArr.splice(index, 1);
        updateArr.splice(index, 0, data);

        setRestaurants([...updateArr]);

        setModalStatus(false);

        setModalMessage("Edited")
        setTimeout(() => {
            setModalMessageStatus(true)
        }, 2000);
    }


    const deleteReview = (id) => {
        const restList = restaurants.filter(x => x.id !== id);
        setRestaurants(restList);
        setModalStatus(false);
        setModalMessage("Deleted")
        setTimeout(() => {
            setModalMessageStatus(true)
        }, 2000);
    }
    ///"Güzel bir yemekti herkese tavsiye ediyorum"


    const closeModal = () => {
        setModalStatus(false);
        setModalMessageStatus(false);
    }

    return (
        <>
            <main className="main">
                <>
                    {

                        loading ? <Loading /> :
                            <section className="main__reviewed">
                                <h2 className="main__title">Your Reviews</h2>
                                {
                                    restaurants.map(r => (<Review key={r.id} review={r}
                                        editReview={editReview}
                                        deleteReview={deleteReview}
                                        mode={modes.view} />)
                                    )
                                }
                            </section>
                    }
                </>
            </main>
            {
                modalStatus && <ModalReview data={reviewToEdit}
                    pushReview={pushReview} closeModal={closeModal}
                    mode={modes.edit} />
            }

            {
                modalMessage && <ModalMessage message={modalMessageText}
                    closeModal={closeModal}
                />
            }
        </>
    )
}




export default Main
