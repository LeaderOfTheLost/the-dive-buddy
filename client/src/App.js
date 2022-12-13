import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import UserDetails from './pages/UserDetails'
import LogsPage from './pages/LogsPage'
import Loadout from './components/Loadout'
import Stats from './components/Stats'

function App() {
  return (
    <div className="App">
      <header className="navbarHead">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
