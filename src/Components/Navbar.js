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

    return(
        <div>
            <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
            <a href="#about_me" onClick={stateChangeAbout}>About</a>
            <a href="#applications" onClick={stateChangeApps}>Apps</a>
            <a href="#my_skills" onClick={stateChangeSkills}>Skills</a>
            <a href="#my_resume" onClick={props.setResume(true) && props.handleTransition}>Resume</a>
            <a href="#contact_me" onClick={props.setContact(true) && props.handleTransition}>Contact</a>
            </div>
            <button class="bttn-stretch bttn-sm bttn-primary" onClick={openNav} style={navStyles}>...</button>
        </div>
    )
}
export default Navigation