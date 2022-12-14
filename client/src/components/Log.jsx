import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Log = (props) => {
  const [log, setLog] = useState({})

  let navigate = useNavigate()

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
  }, [props.id])
  
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
        <h3>{log.location}</h3>
    </div>
    <div>
    <button className="deleteButton" onClick={handleDeleteLog}>Delete Log</button>
    </div>
</div>
  )
}

export default Log