import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Gear = (props) => {
  
  const [gear, setGear] = useState([])
  const [loadout, setLoadout] = useState({})
  
  let navigate = useNavigate()
  let {id} = useParams()


  useEffect(() => {
    const getloadout = async () => {
      let response = await axios.get(`/loadouts/${id}`)

      setLoadout(response.data)
      setGear(response.data.gear)
    } 
    getloadout()
  }, [id])



  const handleDeleteGear = async (event) => {
    event.preventDefault()
    let id = props.id
    let response = await axios.delete(`/gear/${id}`)
    setGear(response)
  }

  return (
    <div className="card">
    <div className="info-wrapper">
      
        <h3>Gear</h3>
        <h3>{props.name}</h3>

    </div>
    <button className="deleteButton" onClick={handleDeleteGear}>Delete Gear</button>
</div>
  )
}

export default Gear