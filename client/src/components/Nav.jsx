import { Link } from 'react-router-dom'


const Nav = () => {
  return(

      <nav className="nav">
        <h4 className='navHeader'>The Dive Buddy</h4>
        <div className='navLinks'>
          <Link to='/'className='navLink'>Home</Link>
          <Link to='/about' className='navLink'>About Us</Link>
        </div>
      </nav>
  )
}

export default Nav