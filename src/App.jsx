import Cursor from "./components/Cursor"
import About from "./components/Sections/About"
import HeaderSection from "./components/Sections/HeaderSection"
import Slider from "./components/Slider"
import { AppContainer, Text } from "./style/common"

function App() {
  return (
    <AppContainer>
      <Cursor/>
      <HeaderSection/>
      <Slider/>
      <About/>
    </AppContainer>
  )
}

export default App
