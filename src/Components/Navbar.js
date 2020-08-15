import React from 'react';
import './components.css';

const Navigation = (props) => {

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      /* Set the width of the side navigation to 0 */
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      const navStyles={
        position: 'fixed', 
        top: '5%', 
        width: '4%', 
        marginLeft: '42%',
        fontWeight: 'bold',
        fontSize: '4vh'
    }

    const appsTransition = () => {
        props.setApps(true)
      }
  
      const stateChangeApps = () => {
        appsTransition()
        console.log(props.apps)
        props.handleTransition()
      }
  
      const skillsTransition = () => {
        props.setSkills(true)
      }
  
      const stateChangeSkills = () => {
        skillsTransition()
        props.handleTransition()
      }

      const stateTransitionAbout = () => {
        props.setAbout(true)
    }

    const stateChangeAbout = () => {
        stateTransitionAbout()
        console.log(props.about)
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
        console.log(props.contact)
        props.handleTransition()
      }

    return(
        <div>
            <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="#about_me" onClick={stateChangeAbout}>About</a>
            <a href="#applications" onClick={stateChangeApps}>Apps</a>
            <a href="#my_skills" onClick={stateChangeSkills}>Skills</a>
            <a href="#my_resume" onClick={stateChange2}>Resume</a>
            <a href="#contact_me" onClick={stateChange3}>Contact</a>
            </div>
            <button className="bttn-stretch bttn-sm bttn-primary" onClick={openNav} style={navStyles}>...</button>
        </div>
    )
}
export default Navigation