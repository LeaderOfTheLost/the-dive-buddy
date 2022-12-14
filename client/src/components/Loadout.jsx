import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Loadout = (props) => {
  const [loadout, setLoadout] = useState({})

  let navigate = useNavigate()
  let {id} = useParams()

  const navToLoadout = () => {
    let id = props.id
    navigate(`/loadouts/${id}`)
  }

  useEffect(() => {
    const getLoadout = async () => {
      let id = props.id
      let response = await axios.get(`/loadouts/${id}`)
      setLoadout(response.data)
    } 
    getLoadout()
  }, [id, props.id])



  const handleDeleteLoadout = async (event) => {
    event.preventDefault()
    let id = props.id
    let response = await axios.delete(`/loadouts/${id}`)
    setLoadout(response)
    window.location.reload(true)
  }

  return (
    <div>
    <div className="card" onClick={navToLoadout}>
    <div className="info-wrapper">
      
        <h3>loadout</h3>
        <h3>{loadout.name}</h3>


    </div>
    </div>
    <button className="deleteButton" onClick={handleDeleteLoadout}>Delete Loadout</button>
</div>
  )
}

export default Loadout