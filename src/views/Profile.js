import { useState } from "react"
import {useNavigate} from 'react-router-dom'
// import userStore from "../features/users/userStore";

export default function UserProfile ({setUser,setIsAuthenticated, user}) {
  const navigate = useNavigate();
  const [username, setUserName] = useState('')
  const [errors, setErrors] = useState([])

  function onSubmit(e){
      const id = user.id
      e.preventDefault()
      const newUserName = {
          user_name: username,
      }
      fetch(`http://localhost:3000/users/${id}`,{
        method:'PATCH',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(newUserName)
      })
      .then(res => {
        if(res.ok){
          res.json()
          .then(user=>{
            setUser(user)
          })
        } else {
          res.json()
          .then(json => setErrors(json.errors))
        }
      })
  }
  // function handleDeleteUser () {
  //   const updatedUserArray = userStore.filter((user) => user.id !==id)
  //   userStore(updatedUserArray)
  // }

  function onDelete(e){
      const id = user.id
      e.preventDefault()
      fetch(`http://localhost:3000/users/${id}`,{
          method: "DELETE",
      })
      navigate("/login");
      setUser(null)
      setIsAuthenticated(false)
      
  }

  // function handleDeleteClick() {
  //   fetch(`http://localhost:3000/users/${id}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.ok) {
  //       handleDeleteUser(user.id);

  //     }
  //   })
  // }

  return(
      <>
          <div className="flex">
              <div className="text-xl font-bold">
                  Welcome back {user.user_name}!
              </div>
              <div className="align-center justify-center">
                  <form>
                      <input
                          id="userName"
                          name="username"
                          type="username"
                          required
                          className=""
                          placeholder="User Name"
                          onChange={(event) =>setUserName(event.target.value)}
                      />
                      <div className="bg-pink-500">
                      <button
                          type="submit"
                          onClick={onSubmit}>
                          Update Username
                      </button>
                      <button
                          type="submit"
                          onClick={onDelete}>
                          Delete User Account
                      </button>
                      </div>
                  </form>
              </div>
          </div>
      </>
  )
}