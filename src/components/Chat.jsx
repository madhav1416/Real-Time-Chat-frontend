import React, { useEffect, useState } from "react";
import "../css/chat.css";
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import {  useHistory } from "react-router-dom";
import Pusher from "pusher-js";
function Chat(props) {
    const [message,setMessage] = useState('');
    const history = useHistory();
    const [list,setList] =  useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => { 
      const result = await axios.get('http://localhost:3000/conversations');
      // if(localStorage.getItem('user') == '5ff4b3b2da47e908e0b9a117')
      // await axios.post("http://localhost:3000/conversations/5ff59a3bfcc948260c81a204")
      // else
      // await axios.post("http://localhost:3000/conversations/5ff4b3b2da47e908e0b9a117", {message})
      // list.concat(result.data);
      const data  = result.data;
      setList(data);
      console.log(data);
    }

    useEffect(()=>{
      var pusher = new Pusher('9c54870369afcd522730', {
        cluster: 'ap2'
      });
  
      var channel = pusher.subscribe('conversation');
      channel.bind('inserted', function(data) {
        setList([...list,data]);
      });
      return () => {
        channel.unbind_all();
      }
    },[list])
    const handleSubmitMessage = async (e) =>{
      e.preventDefault();
      const result = await axios.post("http://localhost:3000/conversations/"+localStorage.getItem('user').slice(1,-1), {message})
      fetchData();
      setMessage('');
    }
    const handleClickLogout = () => {
        localStorage.clear();
        history.push('/login');
    }
    return (
        <div className="chat">
          <div className="chat-header">
          <Avatar alt="RemSharp" src="/static/images/avatar/1.jpg"  className="sidebar-avatar"/>
          <div style={{marginLeft:"570px"}}>
          <SearchIcon className="chat-icon"/>
          <IconButton onClick={handleClickLogout} size="small" edge="start" style={{marginBottom : "40px" , color : "white" , height : "10px"}} className="chat-icon-button"><ExitToAppIcon className="chat-icon"/></IconButton>
          </div>
          </div>
          <div className="chat-body">
          {
              list.map((list) => (
                <p className={(list.sender._id ==  localStorage.getItem('user').slice(1,-1)) ? "chat-message chat-receiver" : "chat-message" } key={list._id}>
              {/* <span className="chat-name">{list.sender.username}</span> */}
              {list.message}
              <span className="chat-timestamp">{new Date().toISOString()}</span>
          </p>
              ))
          }
          {/* {console.log(list)} */}
          </div>
          <div className="chat-footer">
          <InsertEmoticonIcon/>
          <form onSubmit={handleSubmitMessage}>
              <input placeholder="Type a message" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
              <button type="submit" >Send a message</button>
          </form>
          <MicIcon/>
          </div>
        </div>
    )
};

export default Chat;

// (list.sender._id == localStorage.getItem('user').slice(1,-1)) ? "chat-message chat-receiver" : 