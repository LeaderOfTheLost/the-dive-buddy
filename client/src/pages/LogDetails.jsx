import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Log from '../components/Log'


const LogDetails = (props) => {

  const [log, setLog] = useState({})
  const [formState, setFormState] = useState({name: ''})

  let navigate = useNavigate()
  let {id} = useParams()

  const navBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const getLog = async () => {
      let response = await axios.get(`/logs/${id}`)


      setLog(response.data) 
    } 
    getLog()
  }, [])


  return (
    <div className="card">
      <div>
        <button onClick={navBack}>GO BACK</button>
      </div>
      <div>
        <h2>{log.location}</h2>
        <h4>Date: {log.dateOfDive}</h4>
        <h4>Time of Day: {log.timeOfDive}</h4>
        <h4>Surface Interval: {log.surfaceInterval} min</h4>
        <h4>Dive Number: {log.diveNumOfDay}</h4>
        <h4>Dive Time: {log.diveTime} min</h4>
        <h4>Max Depth: {log.maxDepth} ft</h4>
        <h4>Visibility: {log.visibility} ft</h4>
        <h4>Surface Temp: {log.surfaceTemp}</h4>
        <h4>Bottom Temp: {log.bottomTemp}</h4>
        <h4>Gas mix: {log.gasMix}%</h4>
        <h4>Start Pressure: {log.startPressure}psi</h4>
        <h4>End Pressure: {log.endPressure}psi</h4>
        <h4>Notes: {log.notes}</h4>
        <h4>Dive Buddy: {log.diveBuddy}</h4>
      </div>

</div>
  )
}

export default LogDetails