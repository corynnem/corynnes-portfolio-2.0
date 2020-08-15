import React, {useState, useEffect} from 'react';
import Grow from '@material-ui/core/Grow';
import Github from '../assets/github-sign.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import LinkedIn from '../assets/linkedin.svg'
import './components.css'


const Apps = (props) => {


    const stateTransition = () => {
        
    }

    const stateChange = () => {

    }

    const formStyles = {
        backgroundColor: 'rgba(170,	123, 195, 0.7 )',
        textAlign: 'center',
        padding: '3%',
        width: '20%',
        height: '10%',
        borderRadius: '20px',
        fontWeight: 'bold',
        marginLeft: '37%',
        fontSize: '1.5em',
        marginTop: '-4%'
    }

    const inputStyles = {
        borderRadius: '10px',
        borderStyle: 'none',
        height: '4vh',
        width: '10vw'
    }
    const textareaStyles = {
        borderRadius: '10px',
        borderStyle: 'none',
        height: '10vh',
        width: '15vw',
    }
    const iconStyles = {
        height: '10vh',
        float: 'left',
        marginLeft:'7%',
        padding: '3%',
        paddingLeft:'8%'
    }
    
    return (
        <div id='contact_me'>
            <Grow in={props.contact}>
                <h1>Contact Me</h1>
            </Grow>

      <Grow in={props.contact} style={{ transformOrigin: '0 0 0' }}
          {...(props.contact ? { timeout: 1000 } : {})}>
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
            <Grow in={props.contact}  style={{ transformOrigin: '0 0 0' }}
          {...(props.contact ? { timeout: 1000 } : {})}>
           <a href='https://www.linkedin.com/in/corynne-moody-0b1b10192/' target='_blank'> <img src={LinkedIn} style={iconStyles}/></a>
            </Grow>
            <Grow in={props.contact}  style={{ transformOrigin: '0 0 0' }}
          {...(props.contact ? { timeout: 2000 } : {})}>
           <a href='https://github.com/corynnem' target='_blank'> <img src={Github} style={iconStyles}/></a>
            </Grow>
            <Grow in={props.contact}  style={{ transformOrigin: '0 0 0' }}
          {...(props.contact ? { timeout: 3000 } : {})}>
           <a href='https://www.facebook.com/profile.php?id=100008217225926' target='_blank'> <img src={Facebook} style={iconStyles}/></a>
            </Grow>
            <Grow in={props.contact}  style={{ transformOrigin: '0 0 0' }}
          {...(props.contact ? { timeout: 4000 } : {})}>
           <a href='https://www.instagram.com/corynne.marie/' target='_blank'><img src={Instagram} style={iconStyles}/></a>
            </Grow>
        </div>
    )
}

export default Apps;