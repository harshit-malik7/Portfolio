import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Button, Box, Divider, Paper, Card, CardMedia, CardContent } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Globe from 'react-globe.gl';
import Resume_Harshit_Malik from './Harshit-Malik.pdf';
import Espresso from './Espresso.png';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    backgroundColor: 'black', // Keep background dark
    color: 'white', // Set default text color to white
    minHeight: '100vh',
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    backgroundImage: 'https://th.bing.com/th/id/R.13b24ca1ca945964923963db9e7b2703?rik=QlleJAxYUqZxcw&riu=http%3a%2f%2fwww.photos-public-domain.com%2fwp-content%2fuploads%2f2011%2f03%2fblack-parchment-paper-texture.jpg&ehk=%2buFsyFI1tav5FOA7v%2fNCrpXJggC14IWDIWvK5Mo9uY8%3d&risl=&pid=ImgRaw&r=0',
  },
  experienceHeader: {
    color: 'white',
    marginBottom: '20px',
    textAlign: 'center',
  },
  skillsSection: {
    padding: '20px',
    backgroundColor: 'black', // Slightly lighter shade for contrast
    borderRadius: '8px',
    minHeight: 'calc(100vh - 200px)', // Adjust height to ensure centering
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  },
  skillsHeader: {
    color: 'white',
    marginBottom: '20px',
    textAlign: 'center',
  },
  resumeSection: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: 'black',
    borderRadius: '8px',
  },
  resumeButton: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  listItemText: {
    color: 'white',
  },
  listItemIcon: {
    color: 'white',
  },
  listItem: {
    '&:hover': {
      backgroundColor: '#3e3e3e',
    },
  },
  button: {
    '&:hover': {
      backgroundColor: '#555555',
    },
  },
  projectSection: {
    textAlign: 'center',
    display: 'flex',

  },
  projectHeader: {
    color: 'white',
    marginBottom: '20px',
  },
  card: {
    position: 'relative',
    marginBottom: '20px',
    width: '50%',
    '&:hover $cardMedia': {
      opacity: 0.3,
    },
    '&:hover $cardContent': {
      opacity: 1,
    },
  },
  cardMedia: {
    height: 1000,
    opacity: 1,
    transition: 'opacity 0.3s ease-in-out',
  },
  cardContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    padding: '20px',
  },
  globe: {
    width: '100%', // Make globe cover more width
    height: '400px', // Keep height consistent
  },
}));

const About = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const labelsData = [
    { "city": "C++", "lat": 0, "lng": 30 },
    { "city": "Java", "lat": 20, "lng": 60 },
    { "city": "Rust", "lat": 40, "lng": 90 },
    { "city": "JavaScript", "lat": 60, "lng": 120 },
    { "city": "MySQL", "lat": 80, "lng": 150 },
    { "city": "SQLite", "lat": 10, "lng": -60 },
    { "city": "OpenCV", "lat": -60, "lng": -90 },
    { "city": "Reactjs", "lat": 10, "lng": -10 },
    { "city": "Flask", "lat": 20, "lng": -150 },
    { "city": "Python", "lat": 30, "lng": 180 },
    { "city": "TypeScript", "lat": 40, "lng": -30 },
    { "city": "MATLAB", "lat": -30, "lng": 30 },
    { "city": "HTML", "lat": 10, "lng": 100 },
    { "city": "Prometheus", "lat": 60, "lng": -90 },
    { "city": "Kubernetes", "lat": 30, "lng": -120 },
    { "city": "AWS", "lat": -40, "lng": 150 },
    { "city": "PowerShell", "lat": 0, "lng": 180 },
    { "city": "Git", "lat": 20, "lng": -30 },
    { "city": "Circuit Designing", "lat": -20, "lng": -60 },
    { "city": "Android Studio", "lat": 40, "lng": 50 },
    { "city": "node.js", "lat": -20, "lng": 100 },
    { "city": "VHDL", "lat": -30, "lng": 120 },
    { "city": "Docker", "lat": 60, "lng": -30 },
    { "city": "Django", "lat": 0, "lng": 60 },
    { "city": "MongoDB", "lat": -40, "lng": -90 },
    { "city": "Three.js", "lat": 0, "lng": -120 },
    { "city": "Modbus", "lat": 20, "lng": 150 },
    { "city": "REST API", "lat": -20, "lng": 180 }
  ];

  const projects = [
    {
      name: "Decentralized Social Networking Website",
      description: "Developed a blogging/social network platform using Django for backend, React for frontend, and PostgreSQL for database. Implemented an inbox model for post sharing and activity routing, enhancing inter-node communication. Utilized TypeScript to ensure type safety and improve code quality and maintainability. Optimized data storage and retrieval by designing nodes to store copies of posts received in the inbox. Enabled selective post visibility through public and friends-only posts, improving user privacy.",
      image: Espresso,
    },
    {
      name: "OpenAI Project Idea Generator and Resource Finder",
      description: "Created a web application that leverages the OpenAI Davinci model and ReactJS for generating project ideas and providing corresponding resources through links. Utilized user input parameters such as coding languages, project type, team size, experience, and desired number of ideas to generate a dynamic list of project suggestions. Enabled users to select a project idea and receive a customized list of resources generated.",
      image: "https://th.bing.com/th/id/OIP.jFZSf71NPJLYg-eQ-o9M_gHaEK?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className={classes.root}>
      <Box className={classes.section}>
        <Typography variant = "h4" className={classes.experienceHeader}>Experience</Typography>
        <List
          component="nav"
          subheader={<ListSubheader component="div" style={{ color: 'white' }}>Professional Experience</ListSubheader>}
        >
          <ListItemButton onClick={handleClick} className={classes.listItem}>
            <ListItemIcon>
              <SendIcon className={classes.listItemIcon} />
            </ListItemIcon>
            <ListItemText primary="Junior Software Developer, CES Corporation" className={classes.listItemText} />
            {open ? <ExpandLess className={classes.listItemIcon} /> : <ExpandMore className={classes.listItemIcon} />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Led the development of a new generation API, implementing optimized endpoints and modular architecture for enhanced performance." className={classes.listItemText} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Designed and automated a deployment strategy using Python, leveraging Flux and GitOps for continuous deployment of API and database services on
Kubernetes clusters." className={classes.listItemText} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Implemented real-time cluster monitoring with Grafana and Prometheus, enabling proactive monitoring and alerting of system metrics." className={classes.listItemText} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Collaborated with clients to gather requirements, updated API functionalities, and introduced new endpoints to meet evolving business needs." className={classes.listItemText} />
              </ListItemButton>
            </List>
          </Collapse>


          <ListItemButton onClick={handleClick} className={classes.listItem}>
            <ListItemIcon>
              <SendIcon className={classes.listItemIcon} />
            </ListItemIcon>
            <ListItemText primary="Software Developer Intern, CES Corporation" className={classes.listItemText} />
            {open ? <ExpandLess className={classes.listItemIcon} /> : <ExpandMore className={classes.listItemIcon} />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Single-handedly engineered a robust Node.js API interfacing with Modbus servers in PLCs, streamlining data retrieval processes." className={classes.listItemText} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Conceived, designed, and implemented a ReactJS web application to empower clients with remote control over miners, pumps, fans, and HVAC systems, addressing a crucial need for efficient management." className={classes.listItemText} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Ensured seamless integration between the API and the web application and utilized ThreeJS to improve the UI on the web application." className={classes.listItemText} />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick2} className={classes.listItem}>
            <ListItemIcon>
              <SendIcon className={classes.listItemIcon} />
            </ListItemIcon>
            <ListItemText primary="Software Developer Intern, Neurocage Systems Limited" className={classes.listItemText} />
            {open2 ? <ExpandLess className={classes.listItemIcon} /> : <ExpandMore className={classes.listItemIcon} />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Developed a web application using React.js and Node.js to help the company’s clients manage their finances" className={classes.listItemText} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Implemented a feature to allow users to upload their financial documents to the application" className={classes.listItemText} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }} className={classes.listItem}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Developed a feature to allow users to view their financial documents in a table format" className={classes.listItemText} />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>

      <Box className={`${classes.section} ${classes.projectSection}`}>
        <Typography variant="h4" className={classes.projectHeader}>Projects</Typography>
        <Divider className={classes.divider} />
        {projects.map((project, index) => (
          <Card key={index} className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={project.image}
              title={project.name}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="h5">{project.name}</Typography>
              <Typography variant="body1">{project.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box className={`${classes.section} ${classes.skillsSection}`}>
        <Typography variant="h4" className={classes.skillsHeader}>Skills</Typography>
        <Globe
          width={800}
          height={600}
          backgroundColor='black'
          showGlobe={false}
          labelsData={labelsData}
          labelLat={d => d.lat}
          labelLng={d => d.lng}
          labelText={d => d.city}
          labelSize={() => 1.5}
          labelColor={() => 'white'}
          labelDotRadius={() => 0.5}
          labelResolution={2}
          labelIncludeDot={false}
        />
      </Box>



      <Box className={`${classes.section} ${classes.resumeSection}`}>
        <Typography variant="h4" gutterBottom>Resume</Typography>
        <Divider className={classes.divider} />
        <object
          data={Resume_Harshit_Malik}
          type="application/pdf"
          width="100%"
          style={{ height: 'calc(100vh - 200px)' }}
          aria-label="This object displays a PDF file"
        />
        <Box className={classes.resumeButton}>
          <Button variant="contained" color="primary" href={Resume_Harshit_Malik} download="Resume-Harshit_Malik" target="_blank" rel="noreferrer" className={classes.button}>
            Download Resume
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default About;
