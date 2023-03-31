import React, {useEffect, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

const List = () => {
    const navigate = useNavigate();
    const [userDetails,setUserDetails] = useState(localStorage.getItem('users') && JSON.parse(localStorage.getItem('users')));

    const handlePageChange = (detail) => {
      localStorage.setItem('currUser',JSON.stringify(detail));
      navigate('/user')

    }
    const handleLogout = (e) => {
        localStorage.removeItem('currUser');
        navigate('/');
    }
    
  return (
    <div class="wrapper"> 
    <div class="title"><span>User Details</span></div>
    <table>
        <tr className='label'>
          <th >Name</th>
          <th>Lastname</th>
          <th>Number</th>
        </tr>
        {userDetails?.map((detail) => {
          return(
          <tr className='label'>
            <td onClick={() => handlePageChange(detail)}><Link>{detail?.userdetails?.name}</Link></td>
            <td>{detail?.userdetails?.lastName}</td>
            <td>{detail?.userdetails?.number}</td>
          </tr>
          )
        })}

       
      </table>
      {/* <div class="label-div">
        <p className='label'>Name: <Link to={'/user'}>{userDetails?.userdetails?.name} ==={'>'} view profile </Link></p>
        <p className='label'>Lastname: {userDetails?.userdetails?.lastName}</p>
        <p className='label'>Number: {userDetails?.userdetails?.number}</p>
      </div> */}
      {/* <div class="pass"><a href="#">Forgot password?</a></div> */}
      <div class="row button">
        <button onClick={handleLogout} type="submit"  value="Login" >Log Out</button>
      </div>

  </div>
  )
}

export default List