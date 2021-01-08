import React from 'react'
import ReactDom from 'react-dom';

export default function Modal({title, showModal, playAgain, cancle}) {
    if (!showModal) return null;

    return ReactDom.createPortal(
        <React.Fragment>
            <div className="ModalLoad" />
            <div className="OverlayLoadEnd OverlayLoad">
                <p>{title}</p>
                <button onClick={playAgain}>Play again</button>
                <button onClick={cancle}>Cancle</button>
            </div>
        </React.Fragment>,
        document.getElementById("portal")
    )
}
