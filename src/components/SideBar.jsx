import React from "react";
import "../css/sidebar.css";
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
function SideBar(props) {
    const List = [
        {
            name : "Rahul",
            avatar : "Rahul",
        },
        {
            name : "Samm",
            avatar : "Samm",
        }, 
        {
            name : "John",
            avatar : "John",
        }, 
        {
            name : "Sangha",
            avatar : "Sangha",
        },
        {
            name : "Rishabh",
            avatar : "Rishabh",
        },
        {
            name : "Sunny",
            avatar : "Sunny",
        },
        {
            name : "Job",
            avatar : "Job",
        },
        {
            name : "Harry",
            avatar : "Harry",
        }, 
       
    ]
    return (
        <div className="sidebar">
          <div className="sidebar-header">
          <Avatar alt={localStorage.getItem("username")} src="/static/images/avatar/1.jpg"  className="sidebar-avatar"/>
          <h2>{localStorage.getItem("username")}</h2>
          <div style={{marginLeft:"70px"}}>
          <DonutLargeIcon className="sidebar-icon"/>
          <ChatIcon className="sidebar-icon"/>
          <MoreVertIcon className="sidebar-icon"/>
          </div>
          </div>
          <div className="sidebar-list1">
          {
              List.map((list)=>(
                  <div className="sidebar-list">
                  <Avatar alt={list.avatar}  src=" " style={{backgroundColor : "#"+Math.floor(Math.random() * 0x1000000).toString(16)}} className="sidebar-avatar"></Avatar>
                  <h4>{list.name}</h4>
                  </div>
              ))
          }
          </div>
        </div>
    )
}

export default SideBar;