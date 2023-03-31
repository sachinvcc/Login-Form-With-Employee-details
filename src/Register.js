import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const [name, setName] = useState('');
    const [number,setNumber] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!username || !password || !lastName || !name || !number){
            alert(!username ? 'Please Enter Username' : !password ? 'Please Enter a password' : !lastName ? 'Please Enter a UserName' : 'Please Enter a name');
        }else{
            if(localStorage.getItem('users') != null){
                let users = JSON.parse(localStorage.getItem('users'))
                users.push({username: username, password: password , userdetails:{name:name,lastName:lastName, number:number}})
                users = JSON.stringify(users);
                localStorage.setItem('users',users)
            }else{
                let users = JSON.stringify([{username: username, password:password, userdetails:{name:name,lastName:lastName, number:number}}])
                localStorage.setItem('users',users);
            }
            navigate('/')
            
        }


    }
  return (
    <div class="wrapper"> 
    <div class="title"><span>SignUp Form</span></div>
    <form >
    <div class="row">
        <i class="fas fa-user"></i>
        <input onInput={(e) => setName(e.target.value)} type="email" placeholder="Name" required />
      </div>      
      <div class="row">
        <i class="fas fa-user"></i>
        <input onInput={(e) => setLastName(e.target.value)} type="email" placeholder="Lastname" required />
      </div>
      <div class="row">
        <i class="fas fa-user"></i>
        <input onInput={(e) => setNumber(e.target.value)} type="number" placeholder="Phonenumber" required />
      </div>
      <div class="row">
        <i class="fas fa-user"></i>
        <input onInput={(e) => setUserName(e.target.value)} type="email" placeholder="Email" required />
      </div>
      <div class="row">
        <i class="fas fa-lock"></i>
        <input onInput={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
      </div>
      <div class="row button">
        <button onClick={handleSubmit} type="submit" >Sign UP</button>
      </div>
    </form>
  </div>
  )
}

export default Register