import React from 'react'
import Form from './Form'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
const Registration = ({mode, handleMode}) => {
  return (
    <div className={mode
        ? 'bg-[#D9EBFF] text-[#0F232A]'
        : 'text-[#C9DBEE] bg-[#112A46]'}>
        <NavBar
				mode={mode}
				handleMode={handleMode}
			/>
        <Form title='Register'/>
        <Footer />
    </div>
  )
}

export default Registration