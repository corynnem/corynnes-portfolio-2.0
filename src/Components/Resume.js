import React, {useState, useEffect} from 'react';
import Grow from '@material-ui/core/Grow';
import resume from '../assets/resume.pdf'

const Resume = (props) => {


    const stateTransition = () => {
        
    }

    const stateChange = () => {

    }

    const resumeStyles = {
        width:' 50vw',
        height: '70vh'

    }

    return (
       
        <div id="my_resume">
              <Grow in={props.resume} >
            <h1>Resume</h1>
            </Grow>
           <Grow in={props.resume} style={{ transformOrigin: '0 0 0' }}
          {...(props.about ? { timeout: 1000 } : {})}>
            <a>
            <embed
            src={resume}
            type="application/pdf"
            style={resumeStyles}
        ></embed>
            </a>
            </Grow>
        </div>
    )
}

export default Resume;