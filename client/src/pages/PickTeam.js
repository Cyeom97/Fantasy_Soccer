const PickTeam = () => {
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
          <div className="goalBox">
            {/* <!-- the goal box goes here --> */}
            <h2 className="def">Def</h2>
          </div>
          <div className="half">
            {/* <!-- the half way point of the pitch is here --> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PickTeam
