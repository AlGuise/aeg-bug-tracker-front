import React from 'react'
import { ButtonGroup, Button } from "@mui/material"
import CreateUserForm from '../components/CreateUserForm'

export default function AdminSetup ({isAuthenticated,setUser,setIsAuthenticated, user}) {

  return (
    <div className='admin-page'>
      <div className="admin-button-container">
        <ButtonGroup
            sx={{cursor: 'pointer'}}
            variant="contained"
            aria-label="outlined primary button group"
        >
          <Button>Create New User</Button>
          <Button>Create New Project</Button>
          <Button>Create New Team</Button>
          <Button>Delete User</Button>
        </ButtonGroup>
      </div>
      <div className='form-container'>
        <CreateUserForm/>
      </div>
    </div>
  )
}