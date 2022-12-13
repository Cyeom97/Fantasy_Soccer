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
    userId: parseInt(id),
    playerId: 0
  })

  useEffect(() => {
    const handleUser = async () => {
      let getPlayers = await axios.get(`${BASE_URL}players`)
      setPlayers(getPlayers.data)
    }
    handleUser()
    const getUserPlayer = async () => {
      let user = await axios.get(`${BASE_URL}users/${id}`)
      setMyPlayers(user.data)
    }
    getUserPlayer()
  }, [form])

  const playerChange = (e) => {
    setForm({ ...form, [e.target.id]: parseInt(e.target.value) })
  }

  const playerAdd = async (e) => {
    e.preventDefault()
    let newPlayer = await axios.post(`${BASE_URL}users`, form)
    setForm({ userId: id, playerId: 0 })
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
      {myPlayers.owner?.length < 15 ? (
        <div>
          <h1>Create team</h1>
          <form>
            {console.log(myPlayers.owner.length)}
            <label htmlFor="playerId">Player ID: </label>
            <select id="playerId" onChange={playerChange}>
              <option>Select Player</option>
              {players?.map((player) => (
                <option value={player.id}>{player.name}</option>
              ))}
            </select>
            <button onClick={playerAdd}>Add Player</button>
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
        <div></div>
      )}
    </div>
  ) : (
    <div>
      <h3>Please Sign In</h3>
    </div>
  )
}

export default Profile
