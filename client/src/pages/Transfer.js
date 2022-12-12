import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const Transfer = () => {
  const [myPlayers, setMyPlayers] = useState([])
  const [allPlayers, setAllPlayers] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`${BASE_URL}users/${id}`)
      setMyPlayers(response.data)
    }
    apiCall()
    const playerList = async () => {
      let playerResponse = await axios.get(`${BASE_URL}players`)
      setAllPlayers(playerResponse.data)
    }
    playerList()
  }, [])

  return (
    <div>
      <div className="pitch">
        {/* <!-- the grass is green here --> */}
        <div className="lines">
          {/* <!-- the outside lines of the pitch --> */}
          <span className="corner corner-top-left">
            {/* <!-- the top left corner --> */}
          </span>
          <span className="corner corner-top-right">
            {/* <!-- the top right corner --> */}
          </span>
          <div className="goalBox">{/* <!-- the goal box goes here --> */}</div>
          <section className="goalie">
            {myPlayers.owner?.map((player) =>
              player.position === 'Goalie' ? (
                <div key={player.id}>
                  <div>{player.name}</div>
                </div>
              ) : (
                <div></div>
              )
            )}
          </section>
          <section className="defenders">
            {myPlayers.owner?.map((player) =>
              player.position === 'Defender' ? (
                <div key={player.id}>
                  <h2 className="def">{player.name}</h2>
                </div>
              ) : (
                <div></div>
              )
            )}
          </section>
          <section className="midfielders">
            {myPlayers.owner?.map((player) =>
              player.position === 'Midfielder' ? (
                <div key={player.id}>
                  <h2 className="mid">{player.name}</h2>
                </div>
              ) : null
            )}
          </section>
          <section className="forwards">
            {myPlayers.owner?.map((player) =>
              player.position === 'Forward' ? (
                <div key={player.id}>
                  <h2 className="for">{player.name}</h2>
                </div>
              ) : null
            )}
          </section>

          <div className="half">
            {/* <!-- the half way point of the pitch is here --> */}
          </div>
        </div>
      </div>
      <section>
        {allPlayers.map((footy) => (
          <div>
            <div>{footy.name}</div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Transfer
