import React from 'react'
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
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import Resume_july_2023 from './Resume_july_2023.pdf';
 

const About = () => {
  //make a button function to download resume

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const[open2, setOpen2] = React.useState(true);
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  return (
    <div className='About-header'>
      <div className='about1'>
      {/*Typewriter  onInit={(typewriter)=>{ typewriter.typeString("Hello, I am Harshit Malik").pauseFor(1000).deleteAll().typeString("I am in my final year as a software engineering co-op student at the University of Alberta").start();}}>*/}
      <Typewriter
      options={{
        strings: ["Hello, I am Harshit Malik", "I am in my final year as a software engineering co-op student at the University of Alberta"],
        autoStart: true, // Automatically start typing
        loop: true,       // Loop the typing animation
        delay: 50,        // Delay between each character
        deleteSpeed: 20,  // Speed of deleting characters
      }}
    />
      </div>
      <div className='resume'>
      <object
      data={Resume_july_2023}
      type="application/pdf"
      width="100%"
      style={{ height: 'calc(100vh - 43px)' }}
      aria-label="This object displays an PDF file"
    />
        <a href={Resume_july_2023} download="Resume-Harshit_Malik" target="_blank" rel="noreferrer">Download Resume</a>
      </div>
      <div className='experience'>
        <h1>Experience</h1>
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
              <SendIcon style={{color:"white"}}/>
            </ListItemIcon>
            <ListItemText style={{color:"white", fontSize:'large'}} primary="Software Developer Intern, CES Corporation" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon color='white'>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Developed a web application using React.js and Node.js to help the company’s clients manage their finances" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Implemented a feature to allow users to upload their financial documents to the application" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Developed a feature to allow users to view their financial documents in a table format" />
            </ListItemButton>
          </List>
          </Collapse>
          <ListItemButton onClick={handleClick2}>
            <ListItemIcon>
              <SendIcon style={{color:"white"}} />
            </ListItemIcon>
            <ListItemText style={{color:"white"}} primary="Software Developer Intern, Neurocage Systems Limited" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Developed a web application using React.js and Node.js to help the company’s clients manage their finances" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Implemented a feature to allow users to upload their financial documents to the application" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText style={{color:"white"}} primary="Developed a feature to allow users to view their financial documents in a table format" />
            </ListItemButton>
          </List>
          </Collapse>
          </List>

      </div>  
    </div>

  )
}

export default About