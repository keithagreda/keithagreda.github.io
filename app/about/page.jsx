"use client"
import portrait from '@public/assets/image-portrait.jpg'
import Carousel from '@components/Carousel'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
function About (){
    const myRef = useRef(null);
    const [pictureIsVisible, setPictureIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setPictureIsVisible(entry.isIntersecting);

        });

        if(myRef.current){
            observer.observe(myRef.current)
        }
        return () => {
            observer.disconnect();
        } 

    }, [])
    const [slides, setSlides] = useState([
        {title: "ReactJS", icon: 'assets/react.png', rating: '4', id: '1'},
        {title: "NextJS", icon: 'assets/nextjs.png', rating: '4', id: '2'},
        {title: "C++", icon: 'assets/cpp.png', rating: '3', id: '3'},
        {title: "C#.net", icon: 'assets/csharpnet.png', rating: '4', id: '4'},
        {title: "Javascript", icon: 'assets/javascript.png', rating: '4', id: '5'},
        {title: "Typescript", icon: 'assets/typescript.png', rating: '4', id: '6'},
        {title: "Html", icon: 'assets/html.png', rating: '4', id: '7'},
        {title: "Css", icon: 'assets/css.png', rating: '4', id: '8'},
        {title: "Angular", icon: 'assets/angular.png', rating: '4', id: '9'},
        {title: "PHP", icon: 'assets/php.png', rating: '4', id: '10'}
    ])

    let opacityToggle = pictureIsVisible ? `about-picture-overlay` : undefined;
    

  return (
    <div className = 'about-section'>
        <h1 className = 'section-title orange'>About Me</h1>
        <div className="about-paragraph">
            <p className='light-orange'>Hey there! 👋</p>
            <p className='light-pink'>My name is Keith Agreda and I graduated in Notre Dame of Dadiangas University. My interest in
            frontend development started while I was working as an intern at Brigada Corporation. I was able to discover my fascination
            of how html and css worked together while I was turning figma projects into actual websites.</p>
        </div>
        <div  className="about-picture">
            <Image className="about-picture" ref = {myRef} src={portrait.src} sizes= "100vw" alt='picture of me'/>
            <div className={opacityToggle}> </div>
        </div>
        <Carousel slides = {slides}/>
    </div>
  )
}

export default About