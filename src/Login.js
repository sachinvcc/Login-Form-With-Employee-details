import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!username || !password){
            alert(!username ? 'Please Enter Username' : 'Please Enter a password');
        }else{
            if(localStorage.getItem('users') != null){
                let users = JSON.parse(localStorage.getItem('users'))
                let loginFlag = false;
                let currentUserIndex;
                users.map((user,index) => {
                    console.log(username == user.username)
                    if(username == user.username){
                        if(password == user.password){
                            loginFlag = true;
                            currentUserIndex = index;
                        }
                    }
                });
                if (loginFlag){
                    let currentUser = JSON.stringify(users[currentUserIndex])
                    localStorage.setItem('currUser', currentUser);
                    navigate('/list');
                }else{
                    alert('please Enter correct Username and Password');
                }
            }else{
                alert('Please Register');
            }           
        }
    }   
  return (
    <div class="wrapper"> 
    <div class="title"><span>Login Form</span></div>
    <form >
      <div class="row">
        <i class="fas fa-user"></i>
        <input onInput={(e) => setUserName(e.target.value)} type="text" placeholder="Email or Phone" required />
      </div>
      <div class="row">
        <i class="fas fa-lock"></i>
        <input onInput={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
      </div>
      {/* <div class="pass"><a href="#">Forgot password?</a></div> */}
      <div class="row button">
        <button type="submit" onClick={handleSubmit} value="Login" >Login</button>
      </div>
      <div class="signup-link">Not a member? <Link to={'/register'}>Signup now</Link></div>
    </form>
  </div>
  )
}

export default Login