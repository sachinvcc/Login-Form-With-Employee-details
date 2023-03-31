import React, {useEffect, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'


const UserPage = () => {
    const [userDetails,setUserDetails] = useState(localStorage.getItem('currUser') && JSON.parse(localStorage.getItem('currUser')));
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('currUser');
        navigate('/');
    }

  return (
    <div class="wrapper"> 
    <div class="title"><span>User Details</span></div>
    <form action="#">
      <div class="label-div">
        <p className='label'>This is {userDetails?.userdetails?.name}'s page</p>
      </div>
      <div>
        <p className='label'>I am {userDetails?.userdetails?.name} I have completed course on Front-End Web Development in React.js</p>
      </div><br></br>
      <div>
        <p className='label'>My Skills are HTML5,CSS3,BOOTSTRAP,JAVA SCRIPT & REACT.JS</p>
      </div><br></br>
      <div class="row button">
        <button onClick={handleLogout} type="submit"  value="Login" >Log Out</button>
      </div>
    </form>
  </div>
  )
}

export default UserPage