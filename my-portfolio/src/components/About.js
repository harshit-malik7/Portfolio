import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { Typography, colors } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Resume_Harshit_Malik_Grad from './Resume_Harshit_Malik_Grad.pdf';
import Globe from 'react-globe.gl';
 

const About = () => {
  //make a button function to download resume

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const[open2, setOpen2] = React.useState(false);
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const labelsData = [
  {"city": "C++", "lat": 0, "lng": 30},
  {"city": "Java", "lat": 20, "lng": 60},
  {"city": "Rust", "lat": 40, "lng": 90},
  {"city": "JavaScript", "lat": 60, "lng": 120},
  {"city": "MySQL", "lat": 80, "lng": 150},
  {"city": "SQLite", "lat": 10, "lng": -60},
  {"city": "OpenCV", "lat": -60, "lng": -90},
  {"city": "Reactjs", "lat": 10, "lng": -100},
  {"city": "Flask", "lat": 20, "lng": -150},
  {"city": "Python", "lat": 30, "lng": 180},
  {"city": "ARMv-7", "lat": 40, "lng": -30},
  {"city": "MATLAB", "lat": -60, "lng": 30},
  {"city": "HTML", "lat": 10, "lng": 100},
  {"city": "VMware", "lat": 60, "lng": -90},
  {"city": "Networking TCP/IP", "lat": 30, "lng": -120},
  {"city": "AWS", "lat": -40, "lng": 150},
  {"city": "PowerShell", "lat": 0, "lng": 180},
  {"city": "Git", "lat": 20, "lng": -30},
  {"city": "Circuit Designing", "lat": -20, "lng": -60},
  {"city": "Android Studio", "lat": 40, "lng": 50},
  {"city": "node.js", "lat": -20, "lng": 100},
  {"city": "VHDL", "lat": -30, "lng": 120},
  {"city": "docker", "lat": 60, "lng": -30},
  {"city": "django", "lat": 0, "lng": 60},
  {"city": "MongoDB", "lat": -40, "lng": -90},
  {"city": "Three.js", "lat": 0, "lng": -120},
  {"city": "Modbus", "lat": 20, "lng": 150},
  {"city": "REST API", "lat": -20, "lng": 180}
  ];

  return (
    <div className='About-header'>      
      <div className='experience' >
        <h1 style={{color:"black"}}>Experience</h1>
        <List
          sx={{ width: '500%', maxWidth: 500, height:'1000%' , bgcolor: 'background' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <SendIcon style={{color:"black"}}/>
            </ListItemIcon>
            <ListItemText style={{color:"black", fontSize:'large'}} primary="Software Developer Intern, CES Corporation" />
            {open ? <ExpandLess style={{color:"black"}} /> : <ExpandMore style={{color:"black"}} />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon color='black'>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"black"}} primary="Single-handedly engineered a robust Node.js API interfacing with Modbus servers in PLCs, streamlining 
data retrieval processes." />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"black"}} primary="Conceived, designed, and implemented a ReactJS web application to empower clients with remote 
control over miners, pumps, fans, and HVAC systems, addressing a crucial need for efficient management." />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"black"}} primary=" Ensured seamless integration between the API and the web application and utilized ThreeJS to improve 
the UI on the web application." />
            </ListItemButton>
          </List>
          </Collapse>
          <ListItemButton onClick={handleClick2}>
            <ListItemIcon>
              <SendIcon style={{color:"black"}} />
            </ListItemIcon>
            <ListItemText style={{color:"black"}} primary="Software Developer Intern, Neurocage Systems Limited" />
            {open2 ? <ExpandLess style={{color:"black"}} /> : <ExpandMore style={{color:"black"}} />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"black"}} primary="Developed a web application using React.js and Node.js to help the company’s clients manage their finances" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"black"}} primary="Implemented a feature to allow users to upload their financial documents to the application" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"black"}} primary="Developed a feature to allow users to view their financial documents in a table format" />
            </ListItemButton>
          </List>
          </Collapse>
          </List>

      </div>
      <div className='skills' style={{backgroundColor:'white'}}>
      <Globe width = "50%" height = "100%" backgroundColor='black' showGlobe='false'  labelsData={labelsData} labelLat={d => d.lat} labelLng={d => d.lng} labelText={ d => d.city} labelSize={d => 5} labelDotRadius={d => 0.5} labelColor={() => 'white'} labelResolution={2} labelIncludeDot = 'false' />
      </div>
      <div className='resume'>
      <object
      data={Resume_Harshit_Malik_Grad}
      type="application/pdf"
      width="100%"
      style={{ height: 'calc(100vh - 200px)' }}
      aria-label="This object displays an PDF file"
    />
        <a href={Resume_Harshit_Malik_Grad} download="Resume-Harshit_Malik" target="_blank" rel="noreferrer">Download Resume</a>
      </div>
    </div>

  )
}

export default About