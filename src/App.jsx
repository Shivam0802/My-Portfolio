import Navbar from "./Components/Navbar/navbar"
import Home from "./Components/Home/home"
import About from "./Components/About/about"
import Skills from "./Components/Skills/skill"
import Projects from "./Components/Projects/project"
import Education from "./Components/Education/education"
import Contact from "./Components/Contact/contact"
import { BrowserRouter, Route,  Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App
