import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Button } from '@mui/material';
import ticketStore from '../features/tickets/ticketStore';

export default function TicketsPage ({isAuthenticated,setUser,setIsAuthenticated, user}) {

  const tickets = ticketStore((state) => state.tickets);
  const navigate = useNavigate();
  const [submittedBy, setSubmittedBy] = useState('')
  // function onDelete(e) {
  //   e.preventDefault()
  //   console.log('maybe?')
  //     fetch(`http://localhost:3000/ticket/${tickets.id}`,{
  //       method:'DELETE'
  //     })
  //   }

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={4}>
        <Grid sx={{mt: 3}} container alignItems="center" justifyContent="center" spacing="1rem">
          {tickets.map(({id, submitted_by, description, priority, cat}) => (
            <Grid key={id} item >
              <Paper
                onClick={() => navigate(`/projects`)}
                sx={{
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontSize: 16,
                    mt: 4,
                    height: 200,
                    width: 250,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}>
                  <h3>{description}</h3>
                  <p>Category: {cat}</p>
                  <p>Priority: {priority}</p>
                  <p>Submitted by: {submitted_by}</p>
              </Paper>
              <Button sx={{mt: 1}} justifyContent="center" variant="contained">Complete</Button>
            </Grid>
          ))}
        </Grid>
    </Grid>
  );
}