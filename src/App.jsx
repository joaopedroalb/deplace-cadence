import Carousel from "./components/Carousel"
import Cursor from "./components/Cursor"
import About from "./components/Sections/About"
import Author from "./components/Sections/Author"
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
      <Carousel/>
      <Author/>
    </AppContainer>
  )
}

export default App
