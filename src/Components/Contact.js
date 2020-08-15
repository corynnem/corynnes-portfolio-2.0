import React, {useState, useEffect} from 'react';
import Grow from '@material-ui/core/Grow';
import './components.css'
import { textAlign } from '@material-ui/system';

const Apps = (props) => {


    const stateTransition = () => {
        
    }

    const stateChange = () => {

    }

    const formStyles = {
        backgroundColor: 'rgba(170,	123, 195, 0.7 )',
        textAlign: 'center',
        padding: '5%',
        width: '40%',
        borderRadius: '20px',
        fontWeight: 'bold',
        marginLeft: '25%'
    }

    const inputStyles = {
        borderRadius: '10px',
        borderStyle: 'none',
        height: '5vh',
        width: '10vw'
    }
    const textareaStyles = {
        borderRadius: '10px',
        borderStyle: 'none',
        height: '10vh',
        width: '15vw',
    }
    return (
        <div id='contact_me'>
            <Grow in={props.contact}>
                <h1>Contact Me</h1>
            </Grow>
            <Grow in={props.contact}>
            <a>
            <form
                className="w3-container"
                style={formStyles}
                action="https://formspree.io/mvowylly"
                method="POST"
                >
                <label>
                    Name
                    <br></br>
                    <input type="text" name="name" style={inputStyles}  className="w3-input"/>
                </label>
                <br></br>
                <br></br>
                <label>
                    Your Email
                    <br></br>
                    <input type="email" name="_replyto" style={inputStyles} className="w3-input" />
                </label>
                <br></br>
                <br></br>
                <label>
                    Message
                    <br></br>
                    <textarea name="message" style={textareaStyles} className="w3-input"></textarea>
                </label>
                <br></br>
                <br></br>
                <button className="bttn-stretch bttn-med bttn-primary" type="submit" value="Send">Send</button>
                </form>
            </a>
            </Grow>
        </div>
    )
}

export default Apps;