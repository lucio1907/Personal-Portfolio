import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import SkillSet from "./components/services/SkillSet"
import { AppProvider } from "./context/AppProvider"

const App = () => {
  return (
      <AppProvider>
        <Navbar />
        <Home />
        <SkillSet/>
      </AppProvider>
  )
}

export default App