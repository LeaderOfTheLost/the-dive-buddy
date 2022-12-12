import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Loadout = () => {
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
  }, [])



  const handleDeleteLoadout = async (event) => {
    event.preventDefault()
    let id = props.id
    let response = await axios.delete(`/loadouts/${id}`)
    setLog(response)
  }

  return (
    <div className="card" onClick={() => props.onClick(props.id)}>

    <div className="info-wrapper">
      
        <h3>log</h3>
        <h3>{props.name}</h3>
    </div>
    <button className="deleteButton" onClick={handleDeleteLoadout}>Delete Loadout</button>
</div>
  )
}

export default Loadout