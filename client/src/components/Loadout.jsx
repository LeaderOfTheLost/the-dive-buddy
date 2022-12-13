import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Loadout = (props) => {
  const [loadout, setLoadout] = useState({})

  let navigate = useNavigate()
  let {id} = useParams()


  useEffect(() => {
    const getLoadout = async () => {
      let id = props.id
      let response = await axios.get(`/loadouts/${id}`)
      setLoadout(response.data)
    } 
    getLoadout()
  }, [id])



  const handleDeleteLoadout = async (event) => {
    event.preventDefault()
    let id = props.id
    let response = await axios.delete(`/loadouts/${id}`)
    setLoadout(response)
  }

  return (
    <div className="card">
    <div className="img-wrapper">
    </div>
    <div className="info-wrapper">
      
        <h3>loadout</h3>
        <h3>{props.name}</h3>

    </div>
    <button className="deleteButton" onClick={handleDeleteLoadout}>Delete Loadout</button>
</div>
  )
}

export default Loadout