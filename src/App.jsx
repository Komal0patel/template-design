import './App.css'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Explore from './components/Explore'
import Publications from './components/Publications'
import Footer from './components/Footer'
import VolunteerCorner from './components/VolunteerCorner'
import { Routes, Route } from "react-router-dom";
import DonationModal from './components/DonationModal'

function App() {
  return (
    <div className='font-primary overflow-x-hidden'>
      
        
        <Routes>
          {/* Home route renders all your sections */}
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <Hero />
                <Publications />
                <About />
                <Explore />
                <VolunteerCorner />
                <Footer />
              </>
            } 
          />

          {/* Donate route renders only the DonatePage */}
          <Route path="/donate" element={<DonationModal />} />
        </Routes>
      
    </div>
  )
}

export default App
