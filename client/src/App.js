import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import UserDetails from './pages/UserDetails'
import LoadoutDetails from './pages/LoadoutDetails'

function App() {
  return (
    <div className="App">
      <header className="navBar">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/loadouts/:id" element={<LoadoutDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
