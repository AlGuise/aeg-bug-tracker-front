import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import teamStore from '../features/teams/teamStore'

export default function TeamPage () {

  const teams = teamStore((state) => state.teams);
  const navigate = useNavigate();

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={4}>
        <Grid container alignItems="center" justifyContent="center" spacing="1rem">
          {teams.map(({id, name, users}) => (
            <Grid key={id} item onClick={() => navigate(`/`)}>
              <Paper
                sx={{
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: 16,
                    mt: 10,
                    height: 200,
                    width: 250,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}>
                  <h3>{name}</h3>
                  <p>Admin: {users[0].user_name}</p>
                  <p> PM: {users[1].user_name}</p>
                  <p>SWE-Front: {users[2].user_name}</p>
                  <p>SWE-Back: {users[3].user_name}</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
    </Grid>
  );
}