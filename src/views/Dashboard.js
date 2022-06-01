import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ticketStore from "../features/tickets/ticketStore";
import projectStore from "../features/projects/projectStore";
import teamStore from "../features/teams/teamStore";

export default function Dashboard () {

    const teams = teamStore((state) => state.teams);
    const tickets = ticketStore((state) => state.tickets);
    const projects = projectStore((state) => state.projects);
    const navigate = useNavigate();
  
    return (
      <Grid sx={{ flexGrow: 1 }} container spacing={4}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="center" spacing="1rem">
              <Grid item onClick={() => navigate(`/projects`)}>
                <Paper
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: 16,
                    mt: 10,
                    height: 300,
                    width: 300,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}>
                    <h1>My Projects: {projects.length}</h1>
                    <br/>
                    <h1>Click to see Current Projects</h1>
                </Paper>
              </Grid>
              <Grid item onClick={() => navigate(`/tickets`)}>
                <Paper
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: 16,
                    mt: 10,
                    height: 300,
                    width: 300,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}>
                    <h1>My Tickets: {tickets.length}</h1>
                    <br/>
                    <h1>Click to see Current Tickets</h1>
                </Paper>
              </Grid>
              <Grid item onClick={() => navigate(`/team`)}>
                <Paper
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: 16,
                    mt: 10,
                    height: 300,
                    width: 300,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}>
                    <h1>Total Teams: {teams.length}</h1>
                    <br/>
                    <h1>Click to see Current Teams</h1>
                </Paper>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
}