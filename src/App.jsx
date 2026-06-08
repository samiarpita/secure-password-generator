import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import PasswordGenerator from "./components/PasswordGenerator"
import Features from "./components/Features"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PasswordGenerator />
      <Features />
      <Footer />
    </>
  )
}

export default App