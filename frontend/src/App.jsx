import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from './components/Home'
import Process from './pages/Process'
import Planning from "./pages/Planning"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Bookplan from "./pages/Bookplan"
import Readmore from "./pages/Readmore"
import Package from "./pages/Package"
import Byregion from "./pages/Byregion"
import GuidedTours from "./components/Guided"
import FlightBooking from "./components/Flight"
        
function App() {

  return (

    <div>
      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/tour-guide" element={<GuidedTours/>} />
          <Route path="/flight-bookings" element={<FlightBooking />} />
          <Route path="/how-it-works" element={<Process />} />
          <Route path="/how-it-works/package" element={<Package/>} />
          <Route path="/how-it-works/byregion" element={<Byregion />} />          
          <Route path="/start-planning" element={<Planning />}/>
          <Route path="/start-planning/bookPlan" element={<Bookplan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/readmore" element={<Readmore />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </div>

  )
}

export default App
