import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import PeopleIcon from '@material-ui/icons/People';
import "./Group.css";
import PhotoIcon from '@material-ui/icons/Photo';
import ForumIcon from '@material-ui/icons/Forum';
import { Link } from 'react-router-dom'

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
    <Card className="box" >
      <CardHeader
        avatar={
          <Avatar
          MuiChip-avatarMedium
        className="post_avatar"
        alt={props.group.name}
        src="/static/images/avatar/1.jpg"
      />
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title=
        {(props.group.name).slice(0,10)}
          

        />
        <Link to={{pathname:'/gallery',
        state:{
          props: props.group.nsid
        }}} >
        <button  type="button" class="btn btn-info btn-sm">Explore Group</button>
        </Link>

      
      
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
