import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const AdminPlayer = () => {
  let { id } = useParams()
  const [allPlayers, setAllPlayers] = useState([])

  const [updateForm, setUpdateForm] = useState({
    name: '',
    position: '',
    currentGoals: '',
    currentAssists: '',
    currentCleansheet: '',
    statGoals: '',
    statAssists: '',
    totalCleansheets: '',
    clubId: '',
    image: '',
    price: '',
    selected: '',
    totalPoints: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}players`)
      setAllPlayers(response.data)
    }
    apiCall()
  }, [])

  return (
    <div>
      <h1>Hi</h1>
    </div>
  )
}

export default AdminPlayer
