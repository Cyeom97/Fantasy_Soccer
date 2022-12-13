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
      let response = await axios.get(`${BASE_URL}players/${id}`)
      setAllPlayers(response.data)
    }
    apiCall()
  }, [])

  const playerUpdate = (e) => {
    setUpdateForm({ ...updateForm, [e.target.id]: e.target.value })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    let updatePlayer = await axios.put(`${BASE_URL}players/${id}`, updateForm)
    setAllPlayers([allPlayers, updatePlayer.data])
    setUpdateForm({
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
  }

  return (
    <div>
      <section>
        <h2>{allPlayers?.name}</h2>
        <h2>{allPlayers?.position}</h2>
        {/* <h2>{allPlayers?.}</h2>
        <h2>{allPlayers?}</h2>
        <h2>{allPlayers?}</h2>
        <h2>{allPlayers?}</h2>
        <h2>{allPlayers?}</h2>
        <h2>{allPlayers?}</h2>
        <h2>{allPlayers?}</h2>
        <h2>{allPlayers?}</h2>
        <h2>{allPlayers?}</h2>
        <h2>{allPlayers?}</h2> */}
        <img src={allPlayers?.image} alt="player"></img>
      </section>
    </div>
  )
}

export default AdminPlayer
