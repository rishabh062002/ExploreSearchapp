import React from 'react'
import loading from './ma.gif';
const Spinner = () => {
  return (

  <>

    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-stone-900	  flex flex-col items-center justify-center">
      
    
      <img src={loading}  alt="loading" />
      <br />
      <h2 class="text-center text-white text-xl md:text-xs font-semibold">Loading ....</h2>

    </div>


    </>
  )
}

export default Spinner
