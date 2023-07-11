import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import AboutMe from "./components/aboutme/AboutMe"
import Experiencies from "./components/experiencies/Experiencies"
import Footer from "./components/footer/Footer"
import ConnectWithMe from "./components/form/ConnectWithMe"
import SkillSet from "./components/services/SkillSet"
import { AppProvider } from "./context/AppProvider"

const App = () => {
  return (
      <AppProvider>
        <Navbar />
        <Home />
        <AboutMe/>
        <SkillSet/>
        <Experiencies/>
        <ConnectWithMe/>
        <Footer/>
      </AppProvider>
  )
}

export default App