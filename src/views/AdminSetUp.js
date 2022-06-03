import React, {useState} from 'react'
import { ButtonGroup, Button } from "@mui/material"
import CreateUserForm from '../components/CreateUserForm'
import CreateProjectForm from '../components/CreateProjectForm'
import DeleteUserForm from '../components/DeleteUserForm'

export default function AdminSetup ({user,setErrors}) {

  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);

  function handleCreateUserClick() {
    setShowCreateUser(!showCreateUser)
    setShowCreateProject(false)
    setShowDeleteUser(false)
  }
  function handleCreateProjectClick() {
    setShowCreateUser(false)
    setShowCreateProject(!showCreateProject)
    setShowDeleteUser(false)
  }
  
  function handleDeleteUserClick() {
    setShowCreateUser(false)
    setShowCreateProject(false)
    setShowDeleteUser(!showDeleteUser)
  }


  return (
    <div className='admin-page'>
      <div className="admin-button-container">
        <ButtonGroup
            sx={{cursor: 'pointer'}}
            variant="contained"
            aria-label="outlined primary button group"
        >
          <Button onClick={() => handleCreateUserClick()}>Create New User</Button>
          <Button onClick={() => handleCreateProjectClick()}>Create New Project</Button>
          <Button >Create New Team</Button>
          <Button onClick={() => handleDeleteUserClick()}>Delete User</Button>
        </ButtonGroup>
      </div>
      {showCreateUser ? (
      <div className='form-container'>
        <CreateUserForm setErrors={setErrors}/>
      </div>
      ):(
        <></>
      )}
      {showCreateProject ? (
      <div className='form-container'>
        <CreateProjectForm setErrors={setErrors} user={user}/>
      </div>
      ):(
      <>
      </>
      )}
      {showDeleteUser ? (
      <div className='form-container'>
        <DeleteUserForm/>
      </div>
      ):(
        <></>
      )}
    </div>
  )
}