import { useState } from 'react'
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import './App.css'

import SectionPage from './components/SectionPage'

import Home from './pages/Home'
import Keys from './pages/Keys'
import Awning from './pages/Awning'
import Toilets from './pages/Utilities/Toilets'
import Bins from './pages/Bins'
import Pool from './pages/Pool'
import Emergency from './pages/Emergency'

import Wifi from './pages/Utilities/Wifi'
import TV from './pages/Utilities/TV'
import Water from './pages/Utilities/Water'
import Power from './pages/Utilities/Power'
import CeilingFan from './pages/Utilities/CeilingFan'

import KidsBedroom from './pages/Utilities/aircon/KidsBedroom'
import MainBedroom from './pages/Utilities/aircon/MainBedroom'
import LivingRoom from './pages/Utilities/aircon/LivingRoom'
import TopBedroom from './pages/Utilities/aircon/TopBedroom'

import Beach from './pages/explore/Beach'
import Map from './pages/explore/Map'
import Restaurants from './pages/explore/Restaurants'
import Shops from './pages/explore/Shops'
import Transport from './pages/explore/Transport'

import {
  houseEssentialsCards,
  utilityCards,
  airconCards,
  localCards,
} from './data/cards'


const HOUSE_PASSWORD = 'Vistamar29'
const SESSION_KEY = 'house_unlocked'


function PasswordPage({ onUnlock }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const requestedPage = location.state?.from || '/house-essentials'

  function handleSubmit(event) {
    event.preventDefault()

    if (password === HOUSE_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      onUnlock()
      navigate(requestedPage, { replace: true })
      return
    }

    setError('Incorrect password. Please try again.')
    setPassword('')
  }

  return (
    <section className="pageCard loginCard">
      <div className="loginIcon" aria-hidden="true">
        🔒
      </div>

      <h1>House Essentials</h1>

      <p>
        Enter the guest password displayed inside the house.
      </p>

      <form onSubmit={handleSubmit} className="loginForm">
        <label htmlFor="house-password">
          Guest password
        </label>

        <input
          id="house-password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
            setError('')
          }}
          autoComplete="current-password"
          autoFocus
        />

        {error && (
          <p className="loginError" role="alert">
            {error}
          </p>
        )}

        <button type="submit">
          Unlock guide
        </button>
      </form>
    </section>
  )
}


function ProtectedRoute({ unlocked, children }) {
  const location = useLocation()

  if (!unlocked) {
    return (
      <Navigate
        to="/unlock"
        replace
        state={{ from: location.pathname }}
      />
    )
  }

  return children
}


function AppRoutes() {
  const [houseUnlocked, setHouseUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === 'true'
  )

  function lockHouseGuide() {
    sessionStorage.removeItem(SESSION_KEY)
    setHouseUnlocked(false)
  }

  return (
    <main className="app">
      <Routes>
        {/* Public home page */}
        <Route path="/" element={<Home />} />

        {/* Password page */}
        <Route
          path="/unlock"
          element={
            houseUnlocked
              ? <Navigate to="/house-essentials" replace />
              : <PasswordPage onUnlock={() => setHouseUnlocked(true)} />
          }
        />

        {/* Protected House Essentials menu */}
        <Route
          path="/house-essentials"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <SectionPage
                title="House Essentials"
                icon="🔑"
                subtitle="Keys, access and utilities."
                cards={houseEssentialsCards}
              />
            </ProtectedRoute>
          }
        />

        {/* Protected Utilities menu */}
        <Route
          path="/utilities"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <SectionPage
                title="Utilities"
                icon="⚡"
                subtitle="Wi-Fi, TV, hot water, power and air conditioning."
                cards={utilityCards}
              />
            </ProtectedRoute>
          }
        />

        {/* Protected Air Conditioning menu */}
        <Route
          path="/utilities/aircon"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <SectionPage
                title="Air Conditioning"
                icon="❄️"
                subtitle="Choose the room or unit you need help with."
                cards={airconCards}
              />
            </ProtectedRoute>
          }
        />

        {/* Public Local Area menu */}
        <Route
          path="/local-area"
          element={
            <SectionPage
              title="Local Area"
              icon="📍"
              subtitle="Useful information for Cabo Roig and nearby areas."
              cards={localCards}
            />
          }
        />

        {/* Protected house pages */}
        <Route
          path="/keys"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <Keys />
            </ProtectedRoute>
          }
        />

        <Route
          path="/awning"
          element={
              <Awning />
          }
        />



        <Route
          path="/bins"
          element={<Bins />
          }
        />

          <Route
  path="/utilities/toilets"
  element={
    <ProtectedRoute unlocked={houseUnlocked}>
      <Toilets />
    </ProtectedRoute>
  }
/>

        <Route
          path="/pool"
          element={
              <Pool />

          }
        />

        {/* Protected utility pages */}
        <Route
          path="/utilities/wifi"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <Wifi />
            </ProtectedRoute>
          }
        />

        <Route
          path="/utilities/tv"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <TV />
            </ProtectedRoute>
          }
        />

        <Route
          path="/utilities/water"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <Water />
            </ProtectedRoute>
          }
        />

        <Route
          path="/utilities/power"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <Power />
            </ProtectedRoute>
          }
        />

        <Route
          path="/utilities/ceiling-fan"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <CeilingFan />
            </ProtectedRoute>
          }
        />

        {/* Protected air-conditioning pages */}
        <Route
          path="/utilities/aircon/living-room"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <LivingRoom />
            </ProtectedRoute>
          }
        />

        <Route
          path="/utilities/aircon/main-bedroom"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <MainBedroom />
            </ProtectedRoute>
          }
        />

        <Route
          path="/utilities/aircon/kids-room"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <KidsBedroom />
            </ProtectedRoute>
          }
        />

        <Route
          path="/utilities/aircon/top-room"
          element={
            <ProtectedRoute unlocked={houseUnlocked}>
              <TopBedroom />
            </ProtectedRoute>
          }
        />

        {/* Public local information */}
        <Route path="/local-area/map" element={<Map />} />
        <Route path="/local-area/beach" element={<Beach />} />
        <Route
          path="/local-area/restaurants"
          element={<Restaurants />}
        />
        <Route path="/local-area/shops" element={<Shops />} />
        <Route
          path="/local-area/transport"
          element={<Transport />}
        />

        {/* Public emergency information */}
        <Route path="/emergency" element={<Emergency />} />

        {/* Optional manual lock route */}
        <Route
          path="/lock"
          element={
            <LockPage onLock={lockHouseGuide} />
          }
        />

        {/* Unknown links return home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  )
}


function LockPage({ onLock }) {
  const navigate = useNavigate()

  function handleLock() {
    onLock()
    navigate('/', { replace: true })
  }

  return (
    <section className="pageCard">
      <h1>🔐 Lock Guest Guide</h1>

      <p>
        This will lock the private house information in this browser tab.
      </p>

      <button type="button" onClick={handleLock}>
        Lock now
      </button>
    </section>
  )
}


function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

export default App