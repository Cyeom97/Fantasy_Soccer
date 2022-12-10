import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const Profile = ({ user, authenticated }) => {
  let { id } = useParams()
  const [players, setPlayers] = useState([])
  // const [team, setTeam] = useState([])
  const [myPlayers, setMyPlayers] = useState([])

  useEffect(() => {
    const handleUser = async () => {
      let getPlayers = await axios.get(`${BASE_URL}players`)
      // let user = await axios.get(`$users/${id}`)
      setPlayers(getPlayers.data)
      // setMyPlayers(user)
    }
    handleUser()
  }, [id])

  return user && authenticated ? (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <img src={player.image}></img>
        </div>
      ))}
    </div>
  ) : (
    <div>
      <h3>Please Sign In</h3>
    </div>
  )
}

export default Profile
