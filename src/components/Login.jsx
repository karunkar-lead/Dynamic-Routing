import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import ForwardBackward from './ForwardBackward';

const Login = ({isAuth, setIsAuth}) => {
  const navigate = useNavigate();

  function handleLogin(){
    setIsAuth(!isAuth);
    const loggedIn = false;
    if(loggedIn){
        navigate('/', {replace: true}); // this one is prevents the user from going back
        // navigate('/'); this one is only navigates to which page we want
    }
  }
  return (
    <>
      <Navbar />
      <ForwardBackward />
        
      <section className="about-section page-container">
        <h1>Login</h1>
        <div className='maindivcontainer'>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='email' id='email' /><br />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='password' id='password' /><br />
            <button onClick={handleLogin}>{isAuth ? 'LogOut' : 'LogIn'}</button>
        </div>
      </section>

      <footer className="footer">
        © 2026 ShopZone. All rights reserved.
      </footer>

    </>
  )
}

export default Login