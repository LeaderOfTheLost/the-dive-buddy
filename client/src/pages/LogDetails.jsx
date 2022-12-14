import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const LogDetails = () => {

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

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleUpdateLog = async (event) => {
    event.preventDefault()

    let response = await axios.post(`/logs/${id}`, formState)
    .then ((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
    
    setLogs([...logs, response.data.newLog])
    setFormState({location: '', dateOfDive: '', timeOfDive: '', diveNumOfDay: '', maxDepth: '', diveTime: '', surfaceTemp: '', bottomTemp: '', visibility: '', diveBuddy: '', notes: '', startPressure: '', endPressure: '', gasMix: '', surfaceInterval: '', name: ''})
  }





  return (
    <div className="card">
      <div>
        <button onclick={navBack}></button>
      </div>
      <h3>Gear</h3>
      <div>
        {gear?.map((gear) => (
        <Gear
          key={gear._id}
          id={gear._id}
          name={gear.name}
        />
      ))}
      </div>

      <div className='form'>
      <form onSubmit={handleSubmitGear}>
        <label htmlFor='name'>Gear Name:</label>
        <input id='name' value={formState.name} onChange={handleChange} />
        <button type='submit'>Add Gear</button>
      </form>
      </div>
</div>
  )
}

export default LogDetails