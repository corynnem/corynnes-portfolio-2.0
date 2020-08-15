import React, {useState, useEffect} from 'react';
import Headshot from '../assets/headshot.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Contact from '../assets/contact.svg';
import Skills from '../assets/skills.svg';
import Resume from '../assets/resume.svg';
import Apps from '../assets/apps.svg';
import './components.css';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const About = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const stateTransition = () => {
      props.setApps(true)
    }

    const stateChange = () => {
      stateTransition()
      console.log(props.apps)
      props.handleTransition()
    }

    const skillsTransition = () => {
      props.setSkills(true)
    }

    const stateChange1 = () => {
      skillsTransition()
      props.handleTransition()
    }

    const resumeTransition = () => {
      props.setResume(true)
    }

    const stateChange2 = () => {
      resumeTransition()
      console.log(props.resume)
      props.handleTransition()
    }

    const contactTransition = () => {
      props.setContact(true)
    }

    const stateChange3 = () => {
      contactTransition()
      props.handleTransition()
    }

    const flexStyles = {
        display: 'block',
        float: 'left',
        height: '90vh',
        width: '40vw',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderRadius: '1%',
        boxShadow: '.1px .1px .1px grey',
        borderWidth: '.1px',
        marginTop: '-3%'
    }

    const photoStyles = {
        height: '90vh',
        display: 'block',
        float: 'left',
        borderRadius: '1%',
        marginLeft: '15%',
        marginTop: '-3%'
    }

    const iconStyles = {
        height: '13vh',
        display: 'block',
        float: 'left',
        marginRight: '9%',
        marginLeft:'7%',
        padding: '3%',
        paddingLeft:'5%'
    }
    
    const divStyles = {
      minWidth:'100vh',
      display: 'block',
      float: 'left',
      marginLeft:'15%',
    }
    return (
        <div id='about_me'>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <Grow in={props.about}>
            <div>
                <img src={Headshot} style={photoStyles}/>
            </div>
          </Grow>
          <Grow in={props.about}  style={{ transformOrigin: '0 0 0' }}
          {...(props.about ? { timeout: 1000 } : {})}>
            <div style={flexStyles}>
                <h1>Hi, Im Corynne.</h1>
                <h3 style={{padding: '5%'}}>I am 20 years old and currently a learning assistant at 
                Eleven Fifty Academy. I participated in a 24 week long bootcamp style course and I wanted
                more practice, I decided the easiest way to do that was teach others! Aside from coding, I 
                enjoy playing the Guitar, Drums, and knitting. Starting a career at this age was a little
                terrifying at first, but it has given me the most important thing when learning, time. I 
                intend to use this to absorb as much information as I can, and one day become a senior
                Web Developer.</h3>
            <div style={divStyles} >
                <div className="container" >
                  <Grow in={props.about} {...(props.about ? { timeout: 2000 } : {})} >
                     <a href="#applications"><img src={Apps} style={iconStyles} onClick={stateChange} /></a>
                    </Grow>
                  <div className="overlay">
                    <div className="text">View my projects</div>
                  </div>
                </div>
                <div className="container">
                  <Grow in={props.about} {...(props.about ? { timeout: 3000 } : {})}  >
                    <a href='#my_resume'><img src={Resume} style={iconStyles} onClick={stateChange2}/></a>
                  </Grow>
                <div className="overlay">
                  <div className="text">View my resume</div>
                </div>
              </div>
              <div className="container">
                    <Grow in={props.about} {...(props.about ? { timeout: 4000 } : {})}  href='#my_skills'>
                    <a href='#my_skills'><img src={Skills} style={iconStyles} onClick={stateChange1}/></a>
                    </Grow>
              <div className="overlay">
                <div className="text">View my skills</div>
              </div>
            </div>
            <div className="container">
              <Grow in={props.about} {...(props.about ? { timeout: 5000 } : {})}  href='#contact_me'>
                <a href='contact_me'><img src={Contact} style={iconStyles} onClick={stateChange3}/></a>
              </Grow> 
            <div className="overlay">
              <div className="text">Contact me</div>
            </div>
          </div>
      </div>         
            </div>
            </Grow>

        </div>
    )
}

export default About;