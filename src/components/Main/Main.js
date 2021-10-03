import React, { useEffect, useState, useMemo } from 'react';


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
    const [reviews, setRewievs] = useState([]);
    const [reviewToEdit, setReviewToEdit] = useState({});
    const modes = { edit: "edit", view: "view" }

    const apiService = useMemo(() => new ApiService(), []);
    const reviewsMemo = useMemo(() => reviews, [reviews]);

    useEffect(() => {

        const loadReviews = async () => {
            try {
                setLoader(true);
                const data = await apiService.getReviews();

                !reviews &&
                    setRewievs(data);

            } catch (error) {
                console.log(error)
            }
            finally {
                setLoader(false);
            }
        }

        loadReviews();

    }, [reviews, apiService]);

    const editReview = (review) => {
        setReviewToEdit({
            ...review
        });
        setModalStatus(true);
    }

    const pushReview = (dataSet) => {

        const index = reviews.findIndex(x => x.id === dataSet.id);

        const temp = [...reviews];
        temp.splice(index, 1, dataSet);

        setRewievs(temp);

        apiService.editReview(dataSet)
            .then(res => {
                console.log(res)
            }).catch(err => console.log(err));

        setModalStatus(false);
        setModalMessage("Edited");
        setModalMessageStatus(true);
        document.querySelector("body").classList.add("modal-open");
        closeModal();
    }

    const deleteReview = (id) => {
        setRewievs(reviews.filter(x => x.id !== id));
        apiService.deleteReview(id).then(x => {
            x &&
                setModalMessage("Deleted");

            setModalMessageStatus(true);
            document.querySelector("body").classList.add("modal-open");
            closeModal();
        });
        closeModal();
    }
    ///"Güzel bir yemekti herkese tavsiye ediyorum"


    const closeModal = () => {
        setTimeout(() => {
            setModalStatus(false);
            setModalMessageStatus(false);
            document.querySelector("body").classList.remove("modal-open");
        }, 1000)
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
                                    reviewsMemo.map(r => (<Review key={r.id} review={r}
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
