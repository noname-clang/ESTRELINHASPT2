import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import estrela from '../../images/icon-star.svg'
import Buttons from './Buttons'

function App({Principaltexto , Description}) {
 
  return (

    <>
      <div className='Divmain'>
        <div className='esteladiv'>
        <img src={estrela} alt="" id='estrelinha' />
        </div>
        <h2>{Principaltexto}</h2>
        <h5>{Description}</h5> 
      
        <Buttons B1={1} B2={2} B3={3} B4={4} B5={5} Type={"button"} Principaltexto="Submit"/>
   
      </div>
    </>
  )
}

export default App
