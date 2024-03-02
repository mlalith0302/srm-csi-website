import React, {useState} from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/HeroSection/Hero'
import About from './Components/About/About';
import Leads from './Components/Leads/Leads';
import PastLeads from './Components/PrevLeads/PastLeads';
import Faculty from './Components/Faculty/Faculty';

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
    <div className={mode ?'bg-[#D9EBFF] text-[#0F232A]' : 'text-[#C9DBEE] bg-[#112A46]'}>
      <NavBar mode={mode} handleMode={handleMode}/>
      <Hero mode={mode}/>
      <About mode={mode}/>
      <div className='flex flex-col gap-8'>
        <h1 className='text-4xl font-bold text-center mb-4'>Meet the Faculty</h1>
        <Faculty mode={mode}/>
      </div>
      {/* {leads ? (<Leads mode={mode} handleLeads={handleLeads}/> ) : (<PastLeads mode={mode} handleLeads={handleLeads}/>)} */}
     
    </div>
  )
}

export default App
