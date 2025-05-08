import { Development } from "../pages/development/ui/Development"
import { Home } from "../pages/home/ui/Home"
import { Section } from "../pages/section/ui/Section"
import { Strategy } from "../pages/strategy/ui/Strategy"
import { Sustainability } from "../pages/sustainability/ui/Sustainability"
import { Today } from "../pages/today/ui/Today"
import { Wrapper } from "../pages/wrapper/ui/Wrapper"

function App() {

  return (
    <>
     <Home />
     <Today />
     <Sustainability />
     <Section />
     <Strategy />
     <Development />
     <Wrapper />
    </>
  )
}

export default App
