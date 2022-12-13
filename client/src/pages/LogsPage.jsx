import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Log from '../components/Log'



const LogsPage = () => {
  const [user, setUser] = useState({})
  const [logs, setLogs] = useState([])
  const [formState, setFormState] = useState({location: '', dateOfDive: '', timeOfDive: '', diveNumOfDay: '', maxDepth: '', diveTime: '', surfaceTemp: '', bottomTemp: '', visibility: '', diveBuddy: '', notes: '', startPressure: '', endPressure: '', gasMix: '', surfaceInterval: ''})

  let navigate = useNavigate()
  let {id} = useParams()

  const navToLogs = () => {
    navigate(`/logs`)
  }

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios
      .post(`/logs/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    setLogs([...logs, response.data])
    setFormState({location: '', dateOfDive: '', timeOfDive: '', diveNumOfDay: '', maxDepth: '', diveTime: '', surfaceTemp: '', bottomTemp: '', visibility: '', diveBuddy: '', notes: '', startPressure: '', endPressure: '', gasMix: '', surfaceInterval: ''})
    navToLogs()
  }
  useEffect(() => {
    const getUser = async () => {
      let response = await axios.get(`/users/${id}`)

      setUser(response.data) 
      setLogs(response.data.logs)
    } 
    getUser()
  }, [])




  return (
    <div className="card">

</div>
  )
}

export default LogsPage