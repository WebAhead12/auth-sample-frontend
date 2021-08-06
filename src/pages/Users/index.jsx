import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useHistory } from "react-router"
import './style.css'

const Users = () => {
    const history = useHistory()
    const [users, setUsers]= useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    
    setLoading(true)

    if (!token) {
        history.push('/login')
    }

    axios.get(process.env.REACT_APP_API_URL + "/users", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        if (!res.data.success) {
            setError(res.data.message)
        }

        setUsers(res.data.users)
    }).catch((err) => {
        setError(err.message)
    })
  }, [])


  if (loading) {
    return (
      <div class="container">
        <h1>Loading...</h1>
      </div>
    )
  }

  console.log(users)

  return (
    <div>
      <h1>Titlte</h1>
    </div>
  )
}

export default Users
