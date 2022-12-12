import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const Admin = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const [players, setPlayers] = useState([])
  const [teams, setTeam] = useState([])
  const [teamForm, setTeamForm] = useState({
    name: '',
    schedule: '',
    scores: '',
    points: '',
    image: ''
  })

  useEffect(() => {
    const handleAdmin = async () => {
      let allPlayers = await axios.get(`${BASE_URL}players`)
      let allTeams = await axios.get(`${BASE_URL}teams`)
      setPlayers(allPlayers.data)
      setTeam(allTeams.data)
    }
    handleAdmin()
  }, [])

  const teamChange = (e) => {
    setTeamForm({ ...teamForm, [e.target.id]: e.target.value })
  }

  const teamSubmit = async (e) => {
    e.preventDefault()
    let newTeam = await axios.post(`${BASE_URL}teams`, teamForm)
    setTeam([...teams, newTeam.data])
    setTeamForm({ name: '', schedule: '', scores: '', points: '', image: '' })
  }

  const viewTeam = (id) => {
    navigate(`team/${id}`)
  }

  return user.email === 'chrisyeom@gmail.com' && authenticated ? (
    <div>
      <h1>All Teams</h1>
      <h2>Add new team:</h2>
      <form onSubmit={teamSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" value={teamForm.name} onChange={teamChange}></input>
        <label htmlFor="schedule">Schedule: </label>
        <input
          id="schedule"
          value={teamForm.schedule}
          onChange={teamChange}
        ></input>
        <label htmlFor="scores">Scores: </label>
        <input
          id="scores"
          value={teamForm.scores}
          onChange={teamChange}
        ></input>
        <label htmlFor="points">points: </label>
        <input
          id="points"
          type="number"
          value={teamForm.points}
          onChange={teamChange}
        ></input>
        <label htmlFor="image">image: </label>
        <input id="image" value={teamForm.image} onChange={teamChange}></input>
        <button type="submit">Add Team</button>
      </form>
      <section className="teamList">
        {teams?.map((team) => (
          <div key={team.id}>
            <div>{team.name}</div>
            <img
              src={team.image}
              alt="Team"
              onClick={() => {
                viewTeam(team.id)
              }}
            ></img>
            <div>Next Game: {team.schedule}</div>
            <div>Last Game: {team.scores}</div>
            <div>Current Points: {team.points}</div>
          </div>
        ))}
      </section>
      <section className="playerList">
        <h2>All Players</h2>
        {players?.map((player) => (
          <div key={player.id}>
            <h3>{player.name}</h3>
            <div>Position: {player.position}</div>
            <div>Goals: {player.currentGoals}</div>
            <div>Assists: {player.currentAssists}</div>
            <div>Cleansheets: {player.currentCleansheet}</div>
            <div>Total Goals Last Season: {player.statGoals}</div>
            <div>Total Assists Last Season: {player.name}</div>
            <div>Total Cleansheets Last Season: {player.totalCleansheets}</div>
            <div>Club ID: {player.clubId}</div>
            <div>Price: ${player.price}</div>
            <img src={player.image}></img>
          </div>
        ))}
      </section>
    </div>
  ) : (
    <div></div>
  )
}

export default Admin