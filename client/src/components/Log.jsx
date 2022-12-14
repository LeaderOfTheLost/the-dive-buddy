import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Log = (props) => {
  const [log, setLog] = useState({})

  let navigate = useNavigate()
  let {id} = useParams()

  const navToLog = () => {
    let id = props.id
    navigate(`/logs/${id}`)
  }

  useEffect(() => {
    const getLog = async () => {
      let id = props.id
      let response = await axios.get(`/logs/${id}`)
      setLog(response.data)
    } 
    getLog()
  }, [])
  
  const handleDeleteLog = async (event) => {
    event.preventDefault()
    let id = props.id
    let response = await axios.delete(`/logs/${id}`)
    setLog(response)
    window.location.reload(true)
  }

  return (
    <div>
    <div className="card" onClick={navToLog}>
    <div className="info-wrapper">
      
        <h3>log</h3>
        <h3>{log.name}</h3>


    </div>
    </div>
    <div>
    <button className="deleteButton" onClick={handleDeleteLog}>Delete Log</button>
    </div>
</div>
  )
}

export default Log