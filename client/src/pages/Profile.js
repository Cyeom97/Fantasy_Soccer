import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const Profile = ({ user, authenticated }) => {
  let { id } = useParams()
  // const [players, setPlayers] = useState([])
  // const [team, setTeam] = useState([])
  const [myPlayers, setMyPlayers] = useState([])

  useEffect(() => {
    const handleUser = async () => {
      // let getPlayers = await axios.get(`${BASE_URL}players`)
      let user = await axios.get(`${BASE_URL}users/${id}`)
      // setPlayers(getPlayers.data)
      setMyPlayers(user.data)
    }
    handleUser()
  }, [id])

  return user && authenticated ? (
    <div>
      <h1>My Team</h1>
      <section>
        {myPlayers.owner?.map((player) => (
          <div key={player.name}>
            <h2>{player.name}</h2>
            <h3>{player.position}</h3>
            <h3>${player.price}</h3>
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
