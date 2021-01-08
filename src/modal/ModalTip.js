import React from 'react'
import ReactDom from 'react-dom';

export default function Modal({title, showModalTip, closeModalTip, dontShow}) {
    if (!showModalTip) return null;
    if (dontShow) return null;

    const closeModalAuto = () => {
        setTimeout(() => {
            closeModalTip();
        }, 2000);
    }
    closeModalAuto();

    return ReactDom.createPortal(
        <React.Fragment>
            <div className="ModalLoad ModalLoadTip" />
            <div className="OverlayLoadTip OverlayLoad">
                <p>{title}</p>
            </div>
        </React.Fragment>,
        document.getElementById("portal")
    )
}
