"use client"
import Link from 'next/link'
import Hamburger from '@components/Hamburger'
import {useState, useEffect} from 'react';

function Nav() {
    const [isScrolledUp, setIsScrolledUp] = useState(true);

    const handleScroll = () =>{
        const scrollY = window.scrollY;
        const sensitivity = 10;

        setIsScrolledUp(scrollY > sensitivity ? window.scrollY < scrollY : true)
    };

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    let scrolledUp = isScrolledUp ? '' : 'scroll';
  return (
    <div className={`nav-bar ${scrolledUp}`}>
        <div className="logo"><Link href ='/' className='link'> Kito</Link></div>
        <div className='desktop-nav'>
            <ul>
                <Link href ='/' className ='link'>Home</Link>
                <Link href ='/' className ='link'>About</Link>
                <Link href ='/' className ='link'>Experience</Link>
                <Link href ='/' className ='link'>Contact</Link>
                <Link href ='/' className ='resume'>Resume</Link>
            </ul>
        </div>
        <Hamburger/>

    </div>
  )
}

export default Nav