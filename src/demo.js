import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      pictures:[],
    }
  }
componentDidMount(){
  fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5c2eaa3c7c7d90848181dca1868cbf25&per_page=10&format=json&nojsoncallback=1`
  // `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5c2eaa3c7c7d90848181dca1868cbf25&per_page=10&format=json&nojsoncallback=1`
        //  `http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=b9bd31ee8dbdf594c75460f816d49659&format=json`
        // `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=5c2eaa3c7c7d90848181dca1868cbf25&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1`
  )
  .then(function(response){
    return response.json();
  })
  .then(function(j){
    let picArray=j.photos.photo.map((pic)=>{
      var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
      return(
        <img alt="dogs" src={srcPath}/>
      )
    })
  })
  this.setState({pictures:picArray});
}

render(){
  return (
    <div className="App">
      hii
    </div>
  );
}
}


export default App;



//GroupCard
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function GroupCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography>
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


//Group.css
input-group {
  background-color: #f5f5f5;
}
.cardresp{
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}

.smallAvatar{
  display: flex;
  flex:flex-end;
}

//Groupcrd.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleIcon from '@material-ui/icons/People';
import "./Group.css";
import PhotoIcon from '@material-ui/icons/Photo';
import ForumIcon from '@material-ui/icons/Forum';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function GroupCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="col-md-11 m-1 mb-3" >
      <CardHeader
        avatar={
          <Avatar
          
        className="post_avatar"
        alt={props.group.name}
        src="/static/images/avatar/1.jpg"
      />
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={props.group.name}
      />
      
      <CardActions className='smallAvatar'>
        <IconButton aria-label="members">
          <PeopleIcon />
        </IconButton>
        <IconButton aria-label="gallery">
          <PhotoIcon />
        </IconButton>
        <IconButton aria-label="comments">
          <ForumIcon />
        </IconButton>
        
      </CardActions>
      
          
    </Card>
  );
}

//Group.js
import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import GroupCard from "./GroupCard";
import "./Group.css";

export default class groups extends Component {
  state = {
    search: "",
    groups: [],
  };

  dataFetch = (e) => {
    axios
      .get(
        //working for groups
        `https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=5c2eaa3c7c7d90848181dca1868cbf25&text=${e}&per_page=20&format=json&nojsoncallback=1`
      )
      .then((res) => {
        // console.log(res.data);
        // const groupsSplit=res.data.groups.split(',')
        this.setState({ groups: res.data.groups.group });
        // this.setState({groups:res.data.groups});
        console.log(this.state.groups);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    return (
      <div>
        <div className="input-group flex-nowrap ">
          <input
            onChange={(e) => {
              this.setState({ search: e.target.value });
              this.dataFetch(e.target.value);
              console.log(this.state.search);
            }}
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="row cardresp mt-3 ml-2" >
          {this.state.groups != null ? (
            this.state.groups.map((group) => {
              return (
                    <GroupCard group={group}></GroupCard>
                    );
            })
          ) : (
            <div>No groups are here...</div>
          )}
        </div>
      </div>
    );
  }
}
