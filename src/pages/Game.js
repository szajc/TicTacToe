import React, { useState, useRef, useEffect } from 'react'
import Modal from '../modal/Modal';
import ModalGame from '../modal/ModalGame';
import ModalTip from '../modal/ModalTip';
import './game.css';
import '../modal/modal.css'

export default function Game() {

    const [showModal, setShowModal] = useState(false)
    const [showModalTip, setShowModalTip] = useState(false)
    const [showModalGame, setShowModalGame] = useState(true)
    const [title, setTitle] = useState("");
    const [move, setMove] = useState(true);
    const [fields, setFields] = useState({
        a1: "",
        a2: "",
        a3: "",
        b1: "",
        b2: "",
        b3: "",
        c1: "",
        c2: "",
        c3: "",
    })
    const check = useRef(() => {})
    // check if fields has any empty values
    const innerCheck = () => {
        for (const [, value] of Object.entries(fields)) {
            if (value==="") {
                return false
            }
        }
        return true
    }
    check.current = () => {
        
        if (
            (fields.a1=== "X" && fields.a2=== "X" && fields.a3=== "X") ||
            (fields.b1=== "X" && fields.b2=== "X" && fields.b3=== "X") ||
            (fields.c1=== "X" && fields.c2=== "X" && fields.c3=== "X") ||
            (fields.a1=== "X" && fields.b2=== "X" && fields.c3=== "X") ||
            (fields.a1=== "X" && fields.b1=== "X" && fields.c1=== "X") ||
            (fields.a2=== "X" && fields.b2=== "X" && fields.c2=== "X") ||
            (fields.a3=== "X" && fields.b3=== "X" && fields.c3=== "X") ||
            (fields.a3=== "X" && fields.b2=== "X" && fields.c1=== "X")
        ) {
            setTitle("player1 has Won!")
            setShowModal(true)
        } else if (
            (fields.a1=== "O" && fields.a2=== "O" && fields.a3=== "O") ||
            (fields.b1=== "O" && fields.b2=== "O" && fields.b3=== "O") ||
            (fields.c1=== "O" && fields.c2=== "O" && fields.c3=== "O") ||
            (fields.a1=== "O" && fields.b2=== "O" && fields.c3=== "O") ||
            (fields.a1=== "O" && fields.b1=== "O" && fields.c1=== "O") ||
            (fields.a2=== "O" && fields.b2=== "O" && fields.c2=== "O") ||
            (fields.a3=== "O" && fields.b3=== "O" && fields.c3=== "O") ||
            (fields.a3=== "O" && fields.b2=== "O" && fields.c1=== "O")
        ) {
            setTitle("player2 has Won!")
            setShowModal(true)
        } else if (innerCheck()) {
            setTitle("Its a TIE!")
            setShowModal(true)
        }
    }

    const closeModal = () => {
        setShowModalTip(false);
    }
    const playAgain = () => {
        setFields(prevState => {
            let fill = Object.keys(fields).forEach(key => { fields[key] = "" })
            return {
                ...prevState,
                fill
            }
        })
        setShowModal(false);
        setShowModalGame(false);
    }
    const cancle = () => {
        setShowModal(false);
        setShowModalGame(true);
    }

    const handleChange= (e) => {
        e.preventDefault();
        console.log(e.target.id);
        console.log(e.target.name);
        if (fields[e.target.id]==="") {
            setFields(prevState => {
                return {
                    ...prevState,
                    [e.target.id]: move ? "X" : "O"
                }
            });
            setMove(prevState => !prevState);
            setTitle(!move ? "player1 turn" : "player2 turn")
            setShowModalTip(true)
        } else {
            setTitle("Can't click here!")
            setShowModalTip(true)
        }
    }
    useEffect(() => {
        check.current()
    }, [fields])

    return (
        <div className="game">
            <div className="game-board">
                <div className="board">
                    <div className="line1">
                        <div className="tile" id="a1" name="a1" onClick={handleChange} value={fields.a1}>{fields.a1}</div>
                        <div className="tile" id="a2" name="a2" onClick={handleChange} value={fields.a2}>{fields.a2}</div>
                        <div className="tile" id="a3" name="a3" onClick={handleChange} value={fields.a3}>{fields.a3}</div>
                    </div>
                    <div className="line2">
                        <div className="tile" id="b1" name="b1" onClick={handleChange} value={fields.b1}>{fields.b1}</div>
                        <div className="tile" id="b2" name="b2" onClick={handleChange} value={fields.b2}>{fields.b2}</div>
                        <div className="tile" id="b3" name="b3" onClick={handleChange} value={fields.b3}>{fields.b3}</div>
                    </div>
                    <div className="line3">
                        <div className="tile" id="c1" name="c1" onClick={handleChange} value={fields.c1}>{fields.c1}</div>
                        <div className="tile" id="c2" name="c2" onClick={handleChange} value={fields.c2}>{fields.c2}</div>
                        <div className="tile" id="c3" name="c3" onClick={handleChange} value={fields.c3}>{fields.c3}</div>
                    </div>
                </div>
            </div>
            <div className="game-players">
                <p className="player1" style={{backgroundColor: move ? "green" : "red"}}>Player 1</p>
                <p className="player2" style={{backgroundColor: move ? "red" : "green"}}>Player 2</p>
            </div>
            <Modal title={title} showModal={showModal} playAgain={playAgain} cancle={cancle} />
            <ModalGame showModalGame={showModalGame} play={playAgain} />
            <ModalTip  showModalTip={showModalTip} closeModalTip={closeModal} title={title} dontShow={showModal}/>
        </div>
    )
}
