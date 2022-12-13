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
  useEffect(() => {
    const getLoadout = async () => {
      let response = await axios.get(`/loadouts/${id}`)

      setLoadout(response.data) 
      setGear(response.data.gear)
    } 
    getLoadout()
  }, [])




  return (
    <div className="card">
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

export default LoadoutDetails