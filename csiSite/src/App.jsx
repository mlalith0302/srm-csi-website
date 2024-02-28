import React, {useState} from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/HeroSection/Hero'
import About from './Components/About/About';
import Leads from './Components/Leads/Leads';
import PastLeads from './Components/PrevLeads/PastLeads';

function App() {
  
  const [mode, setMode] = useState(true);

  const handleMode = ()=>{
    setMode(!mode);
  }

  const [leads, setLeads] = useState(true);
  const handleLeads = ()=>{
    setLeads(!leads);
  }

  return (
    <div className={mode ? ' text-black bg-gray-300' : 'text-white bg-black'}>
      <NavBar mode={mode} setMode={setMode} handleMode={handleMode}/>
      <Hero mode={mode}/>
      <About mode={mode}/>
      {leads ? (<Leads mode={mode} handleLeads={handleLeads}/> ) : (<PastLeads mode={mode} handleLeads={handleLeads}/>)}
     
    </div>
  )
}

export default App
