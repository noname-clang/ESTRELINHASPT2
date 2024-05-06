import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Buttons({B1,B2,B3,B4,B5,Type,Principaltexto}) {

    let estrelasz = 0;
    function setestrelas(estrelas){
        estrelasz = estrelas;
        console.log(estrelasz)
    }
   

  return (

    <>  
        <div className='classbuttons'>
        <input type={Type} value={B1} onClick={setestrelas(1)} />
        <input type={Type} value={B2} onClick={setestrelas(2)} />
        <input type={Type} value={B3} onClick={setestrelas(3)}  />
        <input type={Type} value={B4} onClick={setestrelas(4)}  />
        <input type={Type} value={B5} onClick={setestrelas(5)}  />
   
        </div>        
        <div className='subimitediv'>
                <input type={Type} value={Principaltexto} checked={false} onClick={console.log("bbb")}/>
        </div>

    </>
  )
}

export default Buttons
