import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import '../css/signup.css';
import axios from 'axios';
function Signup() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [contact,setContact] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const values = {
            username : username,
            password : password,
            email :email,
            contact : contact,
        }
       axios
      .post("http://localhost:3000/users/register", values)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
      setContact('');
      setEmail('');
      setPassword('');
      setUsername('');
    }
    return(
        <div className="sign">
            <div className="sign-header">
                <h1>Sign Up</h1>
            </div>
            <div className="sign-form">
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <TextField id="outlined-basic" label="Contact No." variant="outlined" value={contact} onChange={(e)=>setContact(e.target.value)}/><br/><br/>
            <TextField type="password" id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/><br/>
            <Button variant="contained" type="submit" >
            Sign Up</Button>
            </form>
            </div>
            <div  className="sign-link">
                <p>Already User? &nbsp;<Link className="sign-link-link" to="/login">Sign In</Link></p>
            </div>
        </div>
    )
}

export default Signup;