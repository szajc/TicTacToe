import React from 'react'
import ReactDom from 'react-dom';

export default function Modal({title, showModal, playAgain}) {
    if (!showModal) return null;

    return ReactDom.createPortal(
        <React.Fragment>
            <div className="ModalLoad" />
            <div className="OverlayLoad">
                <p>{title}</p>
                <button onClick={playAgain}>Play again</button>
            </div>
        </React.Fragment>,
        document.getElementById("portal")
    )
}
