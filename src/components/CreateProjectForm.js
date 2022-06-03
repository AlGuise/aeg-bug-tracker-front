import React, {useState} from 'react'
import { TextField, Button, Container } from '@mui/material'

export default function CreateProjectForm({user, setErrors}) {

    const [name, setName] = useState('')
    const [deadline, setDeadline] = useState('')
    const [created_by, setCreatedBy] = useState('')

    function onSubmit(e){
        e.preventDefault()
        const project = {
            name,
            deadline,
            created_by: user.user_name,
        }
        fetch(`http://localhost:3000/create_project`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(project)
        })
        .then(res => {
          if(res.ok){
            res.json()
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
                <label htmlFor="project-name">
                  Project Name
                </label>
                <TextField
                    label="Project Name"
                    variant="outlined"
                    autoComplete="off"
                    required
                    onChange={(event) =>setName(event.target.value)}
                />
              </div>
              <br/>
              <div>   
                <label htmlFor="deadline">
                  Deadline
                </label>
                <TextField 
                    label="Deadline"
                    variant="outlined"
                    autoComplete="off"
                    required
                    onChange={(event) =>setDeadline(event.target.value)}
                />
              </div>
              <br/>
              <div>   
                <label htmlFor="created-by">
                  Created By
                </label>
                <TextField 
                    variant="outlined"
                    defaultValue={user.user_name}
                    InputProps={{
                      readOnly: true,
                    }}
                    onChange={(event) => setCreatedBy(event.target.value)}
                />
              </div>
            </div>
            <br/>
              <Button
                variant='contained'
                sx={{backgroundColor: 'primary.light', mb: 2}}
                type="submit"
                onClick={onSubmit}>
                Create Project
              </Button>
          </form>
        </Container>
  )
}