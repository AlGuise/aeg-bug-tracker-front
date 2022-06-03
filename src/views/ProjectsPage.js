import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import projectStore from '../features/projects/projectStore'

export default function ProjectsPage () {

  const projects = projectStore((state) => state.projects);
  const navigate = useNavigate();

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={4}>
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center" spacing="1rem">
          
          {projects.map(({id, name, deadline}) => (
            <Grid key={id} item onClick={() => navigate(`/tickets`)}>
              <Paper
                sx={{
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: 16,
                  mt: 10,
                  height: 200,
                  width: 250,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}>
                  <h3>{name}</h3>
                  <br/>
                  <p>Tickets remaining: {projects.length}</p>
                  <br/>
                  <p>Deadline: {deadline}</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
