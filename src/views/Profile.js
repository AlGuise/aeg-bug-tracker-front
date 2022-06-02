import { ButtonGroup, Button } from "@mui/material"

export default function Profile ({isAuthenticated,setUser,setIsAuthenticated, user}) {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  )
}

