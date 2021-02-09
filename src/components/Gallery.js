import React, { Component } from "react";
import axios from "axios";
import './Group.css'
export default class gallery extends Component {
  state = {
    photos: [],
  };
  componentDidMount() {
    axios
      .get(
        //working for groups
        `https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=5c2eaa3c7c7d90848181dca1868cbf25&group_id=${this.props.location.state.props}&format=json&nojsoncallback=1`
      )
      .then((res) => {
        
        this.setState({ photos: res.data.photos.photo });
      });

    
  }

  render() {
    return (
      <div className=" photoContainer">
      
            {this.state.photos.map((photo) => {
          var srcPath=`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
          return (
           <div className='photo'>
              <img alt='dongs' src={srcPath}></img>

              
            
            </div>
          
            
          );
           
        })} 
          
      </div>

    );
    
  }
}
