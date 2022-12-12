import { Link } from 'react-router-dom'


const Nav = () => {
  return(
    <header>
      <nav className="navbar">
        <h4 className='navHeader'>The Dive Buddy</h4>
        <div className='links'>
          <Link to='/'className='link'>Home</Link>
          <Link to='/about' className='link'>About Us</Link>
          <Link to='/users/:id'className='link'>Profile</Link>
          <Link to='/users/:id/stats'className='link'>Stats</Link>
          <Link to='/users/:id/logs'className='link'>Logs</Link>
          <Link to='/users/:id/loadouts'className='link'>Loadouts</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav