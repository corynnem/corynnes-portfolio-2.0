import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Cheerios from '../assets/cheerios.png';
import FourohFour from '../assets/404.png';
import QOTD from '../assets/qotd.png';
import API from '../assets/API.png';
import Portfolio from '../assets/portfolio.png';
import VenYou from '../assets/venyou.png'
import Grow from '@material-ui/core/Grow';



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });



const Apps = (props) => {
    const classes = useStyles();

    const stateTransition = () => {
        
    }

    const stateChange = () => {

    }



    const appStyles = {
        display: 'block',
        float: 'left',
        marginBottom: '5%',
        marginLeft: '10%',
    }
    
    const cardStyles = {
        height: '50vh',
        width: '20vw'
    }
    
  
    return (
        <div id='applications' style={{height: '100vh', width: '100vw'}}>
            <div>
                <Grow in={props.apps}><h1 style={{fontSize: '5vh'}}>Applications</h1></Grow>
                {/* cheerios mcgoobikinz */}
                <Grow in={props.apps}  style={{ transformOrigin: '0 0 0' }}
                    {...(props.apps ? { timeout: 1000 } : {})}>
                    <div style={appStyles}>
                            <Card className={classes.root} style={cardStyles}>
                                <CardActionArea>
                                    <CardMedia
                                    style={{height: '22vh'}}
                                    className={classes.media}
                                    image={Cheerios}
                                    title="Little orange guy with moving eyes, a mouth, and legs. He's a circle."
                                    />
                                    <CardContent>
                                    <br>
                                </br>
                                <br>
                                </br>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        CSS Creature
                                    </Typography>
                                    <br>
                                </br>
                                <br>
                                </br>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Using HTML and CSS, I created a fun animation I call 'Cheerios McGoobikinz'.
                                        This is the first 'Project' I completed as a coding student.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <br>
                                </br>
                                <br>
                                </br>
                                <CardActions>
                                    <Button size="small" color="primary" href='https://codepen.io/corynnemm/pen/WNvoEWN' target='_blank'>
                                    View Codepen
                                    </Button>
                                </CardActions>
                                </Card>
                        </div>
                        </Grow>
                {/* Inspirational Quotes */}
                <Grow in={props.apps}  style={{ transformOrigin: '0 0 0' }}
                    {...(props.apps ? { timeout: 2000 } : {})}>
                <div style={appStyles}>
                            <Card className={classes.root} style={cardStyles}>
                                <CardActionArea>
                                    <CardMedia
                                    style={{height: '13vh'}}
                                    className={classes.media}
                                    image={QOTD}
                                    title="Inspiring quote of the day generator"
                                    />
                                    <CardContent>
                                    <br>
                                </br>
                                <br>
                                </br>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Daily Inspirational Quote Generator
                                    </Typography>
                                <br>
                                </br>
                                <br>
                                </br>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        I used this project as a little test to see how quickly and efficiently
                                        I could produce a minimum viable product. In approximately 2 hours I built an 
                                        interface for a daily inspirational quote API.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <br>
                                </br>
                                <br>
                                </br>
                
                                <CardActions>
                                    <Button size="small" color="primary" href='https://mandys-app.herokuapp.com/' target='_blank'>
                                    View Deployed Project
                                    </Button>
                                    <Button size="small" color="primary">
                                    Visit Repository 
                                    </Button>
                                </CardActions>
                                </Card>
                            </div>
                            </Grow>
                    {/* API Project */}
                    <Grow in={props.apps}  style={{ transformOrigin: '0 0 0' }}
                    {...(props.apps ? { timeout: 3000 } : {})}>
                    <div style={appStyles}>
                            <Card className={classes.root} style={cardStyles}>
                                <CardActionArea>
                                    <CardMedia
                                    style={{height: '19vh'}}
                                    className={classes.media}
                                    image={API}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <br>
                                </br>
                                <br>
                                </br>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        API Project
                                    </Typography>
                                    <br>
                                </br>
                                <br>
                                </br>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        A simple interface pulling a photo and small blurb from NASA's APOD API.
                                        It regenerates daily and includes pictures taken only from space
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <br>
                                </br>
                                <br>
                                </br>
                               
                                <CardActions>
                                    <Button size="small" color="primary" href='https://corynnem.github.io/api-project/' target='_blank'>
                                    View Deployed Project
                                    </Button>
                                    <Button size="small" color="primary" href="https://github.com/corynnem/api-project">
                                    Visit Repository
                                    </Button>
                                </CardActions>
                                </Card>
                                
                            </div>
                        </Grow>
                        
                {/* OG portfolio */}
                <Grow in={props.apps}  style={{ transformOrigin: '0 0 0' }}
                {...(props.apps ? { timeout: 4000 } : {})}>
                <div style={appStyles}>
                        
                            <Card className={classes.root} style={cardStyles}>
                                    <CardActionArea>
                                        <CardMedia
                                        style={{height: '18vh'}}
                                        className={classes.media}
                                        image={Portfolio}
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                <br>
                                </br>
                                <br>
                                </br>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Portfolio v1.0
                                        </Typography>
                                <br>
                                </br>
                                <br>
                                </br>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            This was my original portfolio, I added it because growth is important.
                                            These are the tangible results of my 6 months of coding education.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea> 
                                <br>
                                </br>
                                <br>
                                </br>
                                <CardActions>
                                        <Button size="small" color="primary" href="https://github.com/corynnem/portfolio/settings">
                                        View Deployed Project
                                        </Button>
                                        <Button size="small" color="primary" href='https://github.com/corynnem/portfolio' target='_blank'>
                                        Visit Repository
                                        </Button>
                                    </CardActions>
                                    </Card>
                                    </div>
                                    </Grow>
                                  
                              
                    {/* VenYou */}
                    <Grow in={props.apps}  style={{ transformOrigin: '0 0 0' }}
                    {...(props.apps ? { timeout: 5000 } : {})}>
                    <div style={appStyles}>
                            <Card className={classes.root} style={cardStyles}>
                                <CardActionArea>
                                    <CardMedia
                                    style={{height: '20vh'}}
                                    className={classes.media}
                                    image={VenYou}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                <br>
                                </br>
                                <br>
                                </br>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        VenYou
                                    </Typography>
                                <br>
                                </br>
                                <br>
                                </br>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This project was made using NodeJs, React, PostgreSQL, and Reactstrap. It is an 
                                        app for aspiring musicians to find venues to perform at. 
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <br>
                                </br>
                                <br>
                                </br>
                                <CardActions>
                                    <Button size="small" color="primary" href='https://cm-venyou-client.herokuapp.com/' target='_blank'>
                                    View Deployed Project
                                    </Button>
                                </CardActions>
                                </Card>
                                </div>
                                </Grow>
                {/* Four oh Four */}
                <Grow in={props.apps}  style={{ transformOrigin: '0 0 0' }}
                    {...(props.apps ? { timeout: 6000 } : {})}>
                        <div style={appStyles}>
                            <Card className={classes.root} style={cardStyles}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={FourohFour}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Four oh Four
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Using NodeJs, React, TypeScript, and many libraries, a group of 2 other students and I made a 
                                        social media app designed for other coders. I mean we're the ones creating all of this, might 
                                        as well make something we can enjoy! I was able to implement photo upload, with much help from 
                                        my teammates, by storing them in PostgreSQL as a binary string and then using a Base64 function
                                        to decode and encode the strings to and from binary.
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" href='https://github.com/zlphillips/redBadgeProject' target='_blank'>
                                    Visit Front end Repository
                                    </Button>
                                    <Button size="small" color="primary">
                                    Visit Back end Repository
                                    </Button>
                                </CardActions>
                                </Card>
                        </div>
                 </Grow>
            </div>
        </div>
    )
}

export default Apps;
