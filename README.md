# Soccer Manager Backend

### By: Christopher Yeom

#### Links About Me

[Github](https://github.com/Cyeom97/Soccer_Manager) [Trello](https://trello.com/b/eJ1U66G5/fantasy-soccer) [Heroku](https://soccer-manager-client.herokuapp.com/)

## **Overview**

---

I wanted to build a PERN Stack fantasy soccer app that allows users to create an account and build a team. Users earn points after each game week and the top points earners will be displayed on a leaderboard.

---

## **Approach**

In order for users to buy the same player as well as owning many players, I had to develop a many to many relationship between users' team and players. I also developed a one to many relationship between actual teams and players so that a team can own many players but a player can play for one team. Therefore, in my database, I have four models: `Users`, `Players`, `UserPlayer (for the join table)`, and `Teams`. After successfully getting my migrations to work, I developed full CRUD on all three models. One of the interesting road blocks I faced in this project was updating a user-player relationship. This is important to allow users to trade players. As shown in my ERD in the userPlayer table, I only had two attributes, the `playerID` and the `userID`. However, for a trade to occur, I needed three attributes, the `userID` that wants a trade, the `playerID` that the user wants to trade out, and the `playerID` that the user wants to trade for. To solve this as shown below, I had to destruc a new variable called `newPlayerId` then do a where clause. This allowed me to work with three attributes when I only had one. Furthermore, this allowed me to use the same functionality to update my create method to disable users from buying the same player twice.

```
const UpdateUserPlayer = async (req, res) => {
  try {
    const { userId } = req.body
    const { playerId } = req.body
    const { newPlayerId } = req.body
    let update = await UserPlayer.update(
      { playerId: newPlayerId },
      { where: { userId: userId, playerId: playerId } }
    )
    res.send({
      message: `${UserPlayer.userId} and ${UserPlayer.playerId} is updated`
    })
  } catch (error) {
    throw error
  }
}

```

## **ERD**

![ERD](/images/Screenshot%202022-12-08%20at%209.25.23%20AM.png)

## **CHD**

![CHD](/images/Screenshot%202022-12-08%20at%209.18.35%20AM.png)

## **Future Updates**

Use an external api to expand my data from 71 players and 6 teams to every player and every team in the Premier League

### References

[SoccerPitch](https://codepen.io/elliotbirch/pen/OaWYaK?editors=0110)
[Fantasy Premier League](https://fantasy.premierleague.com/)
