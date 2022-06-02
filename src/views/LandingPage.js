import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';

export default function Login({setUser, setIsAuthenticated}) {

  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState([])
  function onSubmit(e){
    
      e.preventDefault()
      const currentUser = {
        email: email,
        password
      }   

      fetch(`http://localhost:3000/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(currentUser)
      })
      .then(res => {
        if(res.ok){
          res.json()
          .then(user=>{
            setUser(user)
            setIsAuthenticated(true)
            navigate("/")
          })
          
        } else {
          res.json()
          .then(json => setError(json.error))
        }
      })
  }

  return (
    <div id="login-container">
    <Box
    sx={{
      textDecoration: 'none',
      width: 300,
      height: 300,
      backgroundColor: 'primary.main',
      textAlign: 'center',
      color: 'white',
    }}
    >
      <div>
        <div>
          <div>
            <h2>Sign in to your account</h2>
            <p>
              Or{' '}
              <a href="/CreateAUser" title="Create a">
                create an account here!
              </a>
            </p>
          </div>
          <form>
            <div>
              <div>
                <label htmlFor="E-mail">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="E-mail"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(event) =>setPassword(event.target.value)}
                />
              </div>
            </div>
            <div>
                <a href="/CreateAUser">
                  Forgot your password?...create a new account!
                </a>
            </div>
            <div>
              <button
                type="submit"
                onClick={onSubmit}>
                Sign in
              </button>
            </div>
          </form>
          {error?<div>{error}</div>:null}
        </div>
      </div>
    </Box>
    </div>
  )
}