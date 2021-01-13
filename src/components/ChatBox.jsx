import React  from "react";
import "../css/chatbox.css";
import SideBar from './SideBar';
import Chat from './Chat';
function Chatbox() {
    return (
        <div className="chatbox">
         <SideBar/>
         <Chat />
        </div>
    )
}

export default Chatbox;