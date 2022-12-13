import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Log = (props) => {
  const [log, setLog] = useState({})

  let navigate = useNavigate()
  let {id} = useParams()


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
  }

  return (
    <div className="card" onClick={() => props.onClick(props.id)}>
    <div className="img-wrapper">
    </div>
    <div className="info-wrapper">
      
        <h3>log</h3>
        <h3>{props.location}</h3>
        <h3>{props.dateOfDive}</h3>
    </div>
    <button className="deleteButton" onClick={handleDeleteLog}>Delete Log</button>
</div>
  )
}

export default Log