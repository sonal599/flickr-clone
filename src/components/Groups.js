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
        <div className=" cardresp mt-3 ml-2" >
        
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
