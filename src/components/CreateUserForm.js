import React, {useState} from 'react'
import { TextField, Button, Container } from '@mui/material'

export default function CreateUserForm() {

    const [user_name, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            user_name,
            password,
            email,
            first_name,
            last_name
        }
        fetch(`http://localhost:3000/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            // .then(user=>{
            //   setUser(user)
            // })
          } else {
            res.json()
            .then(json => setErrors(json.errors))
          }
        })
    }
    return (
        <Container 
            sx={{width: 400,
                backgroundColor: 'primary.main',
                borderRadius: 2,
                mt: 2,
                color: 'white'}}
        >
          <div>
            <br/>
          </div>
          <form>
            <input 
                type="hidden"
                name="remember"
                defaultValue="true"
            />
            <div>

              <div>
                <label htmlFor="first-name">
                  First Name
                </label>
                <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    autoComplete="off"
                    required
                    onChange={(event) =>setFirstName(event.target.value)}
                />
              </div>
              <br/>
              <div>   
                <label htmlFor="last-name">
                  Last Name
                </label>
                <TextField 
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    autoComplete="off"
                    required
                    onChange={(event) =>setLastName(event.target.value)}
                />
              </div>
              <br/>
              <div>   
                <label htmlFor="user-name">
                  User Name
                </label>
                <TextField 
                    id="outlined-basic"
                    label="User Name"
                    variant="outlined"
                    autoComplete="off"
                    required
                    onChange={(event) =>setUserName(event.target.value)}
                />
              </div>
              <br/>
              <div>
                <label htmlFor="email-address">
                  Email address
                </label>
                <TextField
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  placeholder="Email address"
                  onChange={(event) =>setEmail(event.target.value)}
                />
              </div>
              <br/>
              <div>
                <label htmlFor="password">
                  Password
                </label>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  autoComplete='off'
                  required
                  placeholder="Password"
                  onChange={(event) =>setPassword(event.target.value)}
                />
              </div>
            </div>
            <br/>
              <Button
                variant='contained'
                sx={{backgroundColor: 'primary.light', mb: 2}}
                type="submit"
                onClick={onSubmit}>
                Create User
              </Button>
          </form>
        </Container>
  )
}