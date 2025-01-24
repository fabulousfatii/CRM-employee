import React, { useState } from 'react'
import { gsap } from 'gsap'

function Hamburger() {
    const [open, setOpen] = useState(false)

    const openSidebar = () => {
        setOpen(true)
        console.log("clicked")
        gsap.to(".sidebar", {
            transform:"translateX(10px)",
            duration: 1
        })
      
         
    }
    const closeSidebar = () => {
        setOpen(false)
        console.log("close clicked")
        gsap.to(".sidebar", {
            transform:"translateX(-100%)",
            duration: 1
        })
       
         
    }
    console.log("worlk",open);
    
        
    return (
        <div>
            
            {open?<button onClick={closeSidebar} className='hidden max-md:block py-0 bg-slate-300 text-center text-black' style={{ cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}>X</button>
             :<button onClick={openSidebar} className='hidden max-md:block py-0  bg-slate-300 text-center text-black' style={{ cursor: 'pointer', fontSize: '20px', fontWeight: 'bold' }}>=</button >}
        </div>
    )
}

export default Hamburger
