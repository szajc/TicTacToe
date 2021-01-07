import React from 'react'
import ReactDom from 'react-dom';

export default function Modal({ showModalGame, info, play}) {
    if (!showModalGame) return null;

    return ReactDom.createPortal(
        <React.Fragment>
            <div className="OverlayLoad OverlayLoadGame Game">
                <p>Tic-Tac-Toe</p>
                <button onClick={play}>START</button>
                <button onClick={info}>INFO</button>
            </div>
        </React.Fragment>,
        document.getElementById("portal")
    )
}
