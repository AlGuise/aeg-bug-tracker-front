import { Grid, Paper, Button } from '@mui/material'
import userStore from "../features/users/userStore"

export default function DeleteUserForm() {

    const users = userStore((state) => state.users)

    return (
        <div>
            <Grid sx={{mt:3}} container alignItems="center" justifyContent="center" spacing="1rem">
                {users.map(({id, user_name}) => (
                <Grid key={id} item >
                    <Paper
                        sx={{
                            textAlign: 'center',
                            fontWeight: 700,
                            fontSize: 16,
                            mt: 4,
                            height: 200,
                            width: 250,
                        }}>
                        <h3>{user_name}</h3>
                    </Paper>
                    <Button
                        sx={{mt: 1}}
                        justifyContent="center"
                        variant="contained"
                        onClick={() => {
                            fetch(`http://localhost:3000/users/${id}`,{
                                method: "DELETE",
                            })
                        }}
                    >
                        Delete User
                    </Button>
                </Grid>
                ))}
            </Grid>
        </div>
    )
}