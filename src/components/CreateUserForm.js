import React, {useState} from 'react'
import { TextField, Button, Container, Box, MenuItem } from '@mui/material'

export default function CreateUserForm({setErrors}) {

    const [user_name, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [role_title, setRoleTitle] = useState('')

    // Post that creates new User, then uses that new User Id to create a new Role for User
    function onSubmit(e){
        e.preventDefault()
        const user = {
            user_name,
            password,
            email,
            first_name,
            last_name
        }
        fetch(`http://localhost:3000/create_user`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then((newUser) => {
              const newUserId =  newUser.id
              const newUserRole = {
                user_id: newUserId,
                role_title
              }
              fetch('http://localhost:3000/roles', {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(newUserRole)
            })
            })
          } else {
            res.json()
            .then(json => setErrors(json.errors))
          }
        })
    }

    //Returns Container to Create User
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

              <div className='new-user-label'>
                <label htmlFor="first-name">
                  First Name
                </label>
                <TextField
                    label="First Name"
                    variant="outlined"
                    autoComplete="off"
                    required
                    onChange={(event) =>setFirstName(event.target.value)}
                />
              </div>
              <br/>
              <div className='new-user-label'>   
                <label htmlFor="last-name">
                  Last Name
                </label>
                <TextField 
                    label="Last Name"
                    variant="outlined"
                    autoComplete="off"
                    required
                    onChange={(event) =>setLastName(event.target.value)}
                />
              </div>
              <br/>
              <div className='new-user-label'>   
                <label htmlFor="user-name">
                  User Name
                </label>
                <TextField 
                    label="User Name"
                    variant="outlined"
                    autoComplete="off"
                    required
                    onChange={(event) =>setUserName(event.target.value)}
                />
              </div>
              <br/>
              <div className='new-user-label'>
                <label htmlFor="email-address">
                  Email address
                </label>
                <TextField
                  variant="outlined"
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  onChange={(event) =>setEmail(event.target.value)}
                />
              </div>
              <br/>
              <div className='new-user-label'>
                <label htmlFor="password">
                  Password
                </label>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  autoComplete='off'
                  required
                  onChange={(event) =>setPassword(event.target.value)}
                />
              </div>
              <br/>
              <div>   
                    <Box
                      className='new-user-label'
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                  <label htmlFor="last-name">
                    New Role
                  </label>
                        <TextField
                          label='New Role'
                          select                   
                          value={role_title}
                          onChange={(event) => setRoleTitle(event.target.value)}
                        >
                          <MenuItem key='System Admin' value='System Admin'>
                            System Admin
                          </MenuItem>
                          <MenuItem key='Project Manager' value='Project Manager'>
                            Project Manager
                          </MenuItem>
                          <MenuItem key='SWE - FrontEnd' value='SWE - FrontEnd'>
                            SWE - FrontEnd
                          </MenuItem>
                          <MenuItem key='SWE - BackEnd' value='SWE - BackEnd'>
                            SWE - BackEnd
                          </MenuItem>
                        </TextField>
                      </Box>
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