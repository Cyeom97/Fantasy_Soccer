import { Link } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogout }) => {
    
    let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className="links">
        <h2 className='title'>Soccer Manager</h2>
        <Link to="/">Home</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/players">Players</Link>
        <Link to="/pickteam">PickTeam</Link>
        <Link onClick={handleLogout} to="/">Sign Out</Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="links">
      <h2 className='title'>Soccer Manager</h2>
      <Link to="/">Home</Link>
      <Link to="teams">Teams</Link>
      <Link to="/players">Players</Link>
      <Link to="/Register">Register</Link>
      <Link to="/Signin">Sign In</Link>
    </nav>
  )
  
  return (
    <header className='sticky-header'>
      
      {authenticated && user ? authenticatedOptions : publicOptions}
    </header>
  )
  }
  
  export default Nav