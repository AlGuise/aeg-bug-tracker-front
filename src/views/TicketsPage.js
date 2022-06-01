import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ticketStore from '../features/tickets/ticketStore'

export default function TicketsPage () {

  const tickets = ticketStore((state) => state.tickets);
  const navigate = useNavigate();

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={4}>
        <Grid container alignItems="center" justifyContent="center" spacing="1rem">
          {tickets.map(({id, submitted_by, description, priority, cat}) => (
            <Grid key={id} item onClick={() => navigate(`/projects`)}>
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
                  <h3>{description}</h3>
                  <p>Priority: {priority}</p>
                  <p>Category: {cat}</p>
                  <p>Submitted by: {submitted_by}</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
    </Grid>
  );
}