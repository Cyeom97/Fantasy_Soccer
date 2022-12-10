import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'

const Profile = ({ user, authenticated }) => {
  let { id } = useParams()
  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])
  const [myPlayers, setMyPlayers] = useState([])

  const [timeInterval, setTimeInterval] = useState(0)

  setTimeout(() => {
    setTimeInterval(timeInterval + 1)
  }, 2000)

  useEffect(() => {
    const handleUser = async () => {
      let getPlayers = await Client.get(`players`)
      setPlayers(getPlayers)
    }
    handleUser()
  }, [timeInterval])

  return user && authenticated ? (
    <div>
      <h1>Hi</h1>
    </div>
  ) : (
    <div>
      <h3>Please Sign In</h3>
    </div>
  )
}

export default Profile
