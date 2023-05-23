import { useRef } from 'react'
import Header from "./Layout/Header"
import Landing from "./Layout/Landing"
import Projects from "./Layout/Projects"
import Contact from "./Layout/Contact"
import Footer from "./Layout/Footer"

const sAppContainer = `
  snap-y
  h-screen w-screen
  overflow-y-scroll
  bg-zinc-950
`

function App() {

  let projectRef = useRef(null)
  let contactRef = useRef(null)
  let landingRef = useRef(null)
  
  return (
    <div className={sAppContainer}>
      <Header landingRef={landingRef} projectRef={projectRef} contactRef={contactRef}/>
      <Landing landingRef={landingRef}/>
      <Projects projectRef={projectRef}/>
      <Contact contactRef={contactRef}/>
      <Footer/>
    </div>
  )
}

export default App
