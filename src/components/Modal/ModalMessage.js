import React from 'react'

function ModalMessage({ message, closeModal }) {

    const handleClose = () => {
        closeModal();
    }

    return (
        <div className="modal">
            <div className="modal__message-wrapper">
                <button onClick={handleClose} className="modal__close">&times;</button>
                <h3 className="modal__title">{message} !</h3>

            </div>
        </div>
    )
}

export default ModalMessage;