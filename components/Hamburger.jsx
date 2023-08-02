'use client'
import Link from 'next/link'
import {useState} from 'react'
function Hamburger() {
    const [btnState, setBtnState] = useState(false)
    
    const handleClick = () => {
      setBtnState(btnState => !btnState);
    }
  
    let toggleClassCheck = btnState ? 'is-active': null;
    return (
      <>
        <button className={`hamburger ${toggleClassCheck}`} onClick={handleClick}>
            <div className='bar'></div> 
        </button>
        <nav className={`mobile-nav ${toggleClassCheck}`}>
                <Link href="/" className='projects mobile-link' onClick={handleClick}>Home</Link>
                <Link href="/about" className='about mobile-link' onClick={handleClick}>About</Link>
                <Link href="/about" className='experience mobile-link' onClick={handleClick}>Experience</Link>
                <Link href="/about" className='contact mobile-link' onClick={handleClick}>Contact</Link>
                <button className='mobile-resume'>Resume</button>
        </nav>
      </>
      
    )
  }

export default Hamburger