import { Outlet } from "react-router-dom"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import "./css/App.css"

function App() {

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
