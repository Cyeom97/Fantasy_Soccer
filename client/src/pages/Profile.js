import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const Profile = ({ user, authenticated }) => {
  let { id } = useParams()
  const [players, setPlayers] = useState([])
  // const [team, setTeam] = useState([])
  const [myPlayers, setMyPlayers] = useState([])
  const [form, setForm] = useState({
    ownerId: id,
    playerId: ''
  })

  useEffect(() => {
    const handleUser = async () => {
      let getPlayers = await axios.get(`${BASE_URL}players`)
      let user = await axios.get(`${BASE_URL}users/${id}`)
      setPlayers(getPlayers.data)
      setMyPlayers(user.data)
    }
    handleUser()
  }, [id])

  const playerChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const playerAdd = async (e) => {
    e.preventDefault()
    let newPlayer = await axios.post(`${BASE_URL}users`, form)
    setForm([...myPlayers, newPlayer.data])
    setForm({ ownerId: id, playerId: '' })
  }

  return user && authenticated ? (
    <div>
      <h1>My Team</h1>
      <section className="playerList">
        {myPlayers.owner?.map((player) => (
          <div key={player.name}>
            <h2>{player.name}</h2>
            <h3>{player.position}</h3>
            <h3>${player.price}</h3>
          </div>
        ))}
      </section>
      <h1>Create team</h1>
      <form onSubmit={playerAdd}>
        <label htmlFor="playerId">Player ID: </label>
        <input id="id" value={form.playerId} onChange={playerChange}></input>
        <button type="submit">Add Player</button>
      </form>
      <h1>Choose a playerId from this list</h1>
      <section className="playerList">
        {players?.map((player) => (
          <div key={player.id}>
            <div>{player.name}</div>
            <div>{player.id}</div>
          </div>
        ))}
      </section>
    </div>
  ) : (
    <div>
      <h3>Please Sign In</h3>
    </div>
  )
}

export default Profile
