import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Gear from '../components/Gear'

const LoadoutDetails = () => {
  const [loadout, setLoadout] = useState({})
  const [gear, setGear] = useState([])
  const [formState, setFormState] = useState({name: ''})

  let navigate = useNavigate()
  let {id} = useParams()

  const navBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    const getLoadout = async () => {
      let response = await axios.get(`/loadouts/${id}`)

      setLoadout(response.data) 
      setGear(response.data.gear)
    } 
    getLoadout()
  }, [id])

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmitGear = async (event) => {
    event.preventDefault()
    let response = await axios.post(`/gear/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    setGear([...gear, response.data.newGear])
    setFormState({name: ''})
  }

  return (
    <div className="loadout-page">
      <div>
        <button className='back-button' onClick={navBack}>GO BACK</button>
      </div>
      <div className='gear-list'>
      <h3 className='gear-header'>Gear List</h3>
      <div className='gear-container'>
        {gear?.map((gear) => (
        <Gear
          key={gear._id}
          id={gear._id}
          name={gear.name}
        />
      ))}
      </div>
      </div>
      <div className='gear-form-container'>
      <form className='gear-form' onSubmit={handleSubmitGear}>
        <label htmlFor='name'>Gear Name:</label>
        <input id='name' value={formState.name} onChange={handleChange} />
        <button type='submit'>Add Gear</button>
      </form>
      </div>
      <div>
      </div>
</div>
  )
}

export default LoadoutDetails