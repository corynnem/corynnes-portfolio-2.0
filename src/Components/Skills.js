import React, { useState, useEffect } from 'react'
import Grow from '@material-ui/core/Grow';


const Skills = (props) => {



    const stateTransition = () => {
        
    }
    const stateChange = () => {

    }
    const skillStyles = {
        marginLeft: '35%',
        marginTop: '60%',
    }

    return (

        <div style={skillStyles} id='my_skills'>
            
            { props.skills ?
    <div>
        <Grow in={props.skills}><h1 style={{marginRight: '50%'}}>Skills</h1></Grow>
        <Grow in={props.skills} >
            <a href='#my_skills'>
            <section class="bar-graph bar-graph-horizontal bar-graph-one">
            <div class="bar-one">
                <span class="year">HTML</span>
                <div class="bar" data-percentage="Advanced"></div>
            </div>
            <div class="bar-one">
                <span class="year">CSS</span>
                <div class="bar" data-percentage="Advanced"></div>
            </div>
            <div class="bar-four">
                <span class="year">JavaScript</span>
                <div class="bar" data-percentage="Intermediate"></div>
            </div>
            <div class="bar-four">
                <span class="year">React</span>
                <div class="bar" data-percentage="Intermediate"></div>
            </div>
            <div class="bar-five">
                <span class="year">NodeJs</span>
                <div class="bar" data-percentage="Beginner/Intermediate"></div>
            </div>
            <div class="bar-six">
                <span class="year">TypeScript</span>
                <div class="bar" data-percentage="Beginner/Intermediate"></div>
            </div>
            </section>
            </a>
            </Grow>
            </div>
    : ''}
        </div>
    )
}

export default Skills;