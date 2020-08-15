import React, {useState} from 'react';
import Welcome from './Components/Welcome'
import About from './Components/About';
import Apps from './Components/Apps';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Navigation from './Components/Navbar'
import Grow from '@material-ui/core/Grow';
import './App.css';

function App() {
  const [checked, setChecked] = useState(false);
  const [about, setAbout] = useState(false);
  const [apps, setApps] = useState(false);
  const [skills, setSkills] = useState(false)
  const [contact, setContact] = useState(false);
  const [resume, setResume] = useState(false);
  const [welcome, setWelcome] = useState(false);


  const handleChange = () => {
    setChecked((prev) => prev)
  }


  const handleTransition = () => { 

  if(about === true){
    setChecked(true)
    handleChange()
  } else if(apps === true) {
    setChecked(true)
    handleChange()
  } else if(skills === true) {
    setChecked(true)
    handleChange()
  } else if(resume === true) {
    setChecked(true)
    handleChange()
  } else if(contact === true) {
    setChecked(true)
    handleChange()
  } else if(welcome === true) {
    setChecked()
    handleChange()
  }

  }


  const fullscreenStyles = {
    height: '100vh',
    width: '100vw',
  }

  return (
    <div className="App">
        <Grow in={apps}>
          <Navigation handleTransition={handleTransition} about={about} setAbout={setAbout} setApps={setApps} apps={apps} 
          skills={skills} setSkills={setSkills} resume={resume} setResume={setResume} contact={contact} setContact={setContact}/>
        </Grow>
        <div style={fullscreenStyles} >
          <Welcome handleTransition={handleTransition} about={about} setAbout={setAbout}/>
        </div>
        <div style={fullscreenStyles} >
          <About handleTransition={handleTransition} about={about} apps={apps} setApps={setApps} setSkills={setSkills} resume={resume} 
          setResume={setResume} setContact={setContact}/>
        </div>
        <div style={fullscreenStyles} >
          <Apps handleTransition={handleTransition} apps={apps} setApps={setApps}/>
        </div>
        <div style={fullscreenStyles} >
          <Skills handleTransition={handleTransition} skills={skills} setSkills={setSkills}/>
        </div>
        <div style={fullscreenStyles} >
          <Resume handleTransition={handleTransition} resume={resume} setResume={setResume}/>
        </div>
        <div style={fullscreenStyles} >
          <Contact handleTransition={handleTransition} contact={contact} setContact={setContact}/>
        </div>
      </div>
  );
}

export default App;
