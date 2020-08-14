import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Welcome = (props) => {

    const classes = useStyles();

    

    const stateTransition = () => {
        props.setAbout(true)
    }

    const stateChange = () => {
        stateTransition()
        console.log(props.about)
        props.handleTransition()
    }

    const welcomeStyles = {
        margin: '20%',
        marginTop: '20%',
        fontSize: '2.5vh'
    }

    return (
        <div style={welcomeStyles} id='welcome_page'>
            
            <div>
                <h1> Hi there, my name is Corynne. I like long walks on the beach and full stack web development.</h1>
            </div>
            <div> 
            
           <a href='#about_me'><button class="bttn-stretch bttn-md bttn-primary" onClick={stateChange} style={{fontWeight: 'bold'}}>Get to know me</button></a>
            </div>
        </div>
    )
}

export default Welcome;