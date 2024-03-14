import React, { useState } from 'react'
import Form from './Form'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

const Contact = ({mode, handleMode}) => {

  return (
    <div className={mode
      ? 'bg-[#D9EBFF] text-[#0F232A]'
      : 'text-[#C9DBEE] bg-[#112A46]'}>
        <NavBar
				mode={mode}
				handleMode={handleMode}
		/>
    <Form title='Contact'/>
    <div className={mode
			? 'bg-[#112A46] text-gray-400'
			: 'text-gray-400 bg-[#D9EBFF]'
		}>
      <Footer />
    </div>
       
        
    </div>
  )
}

export default Contact