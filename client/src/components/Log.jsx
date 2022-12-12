import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'



const Log = (props) => {
  const [user, setUser] = useState({})
  const [logs, setLogs] = useState([])

  let navigate = useNavigate()
  let {id} = useParams()

  useEffect(() => {
    const getUser = async () => {
      let response = await axios.get(`/api/wonders/${id}`)

      setUser(response.data) 
      setLogs(response.data.reviews)
    } 
    getUser()
  }, [id])

  const handleDelete = async (event) => {
    event.preventDefault()
    let response = await axios.delete(`/logs/${id}`)
    return response
    navigate('/logs')
  } 

  return (
    <div className="card">
    <div className="info-wrapper">
      <h2>{props.location}</h2>
      <button onClick={handleDelete}>Delete Log</button>
    </div>
</div>
  )
}

export default Log