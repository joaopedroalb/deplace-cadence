import Cursor from "./components/Cursor"
import HeaderSection from "./components/Sections/HeaderSection"
import Slider from "./components/Slider"
import { AppContainer, Text } from "./style/common"

function App() {
  return (
    <AppContainer>
      <Cursor/>
      <HeaderSection/>
      <Slider/>
      <div style={{minHeight:'570px'}}>
        
      </div>
    </AppContainer>
  )
}

export default App
