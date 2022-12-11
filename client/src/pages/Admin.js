import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const Admin = ({ user, authenticated }) => {
  const [players, setPlayers] = useState([])
  const [teams, setTeam] = useState([])

  useEffect(() => {
    const handleAdmin = async () => {
      let allPlayers = await axios.get(`${BASE_URL}players`)
      let allTeams = await axios.get(`${BASE_URL}teams`)
      setPlayers(allPlayers.data)
      setTeam(allTeams.data)
    }
    handleAdmin()
  }, [])

  return user.email === 'chrisyeom@gmail.com' && authenticated ? (
    <div>
      <h1>All Teams</h1>
      <section>
        {teams?.map((team) => (
          <div key={team.id}>
            <div>{team.name}</div>
            <img src={team.image}></img>
            <div>Next Game: {team.schedule}</div>
            <div>Last Game: {team.scores}</div>
            <div>Current Points: {team.points}</div>
          </div>
        ))}
      </section>
    </div>
  ) : (
    <div></div>
  )
}

export default Admin
