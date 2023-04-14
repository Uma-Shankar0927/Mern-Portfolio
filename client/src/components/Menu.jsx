import React,{useRef,useEffect,useState} from "react";
import {gsap} from 'gsap';
import {Link} from 'react-router-dom';

const Menu = ({clicked,setClicked,setTextmenu}) => {
  const menuRef = useRef();
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true
    })
    tl.current.to(menuRef.current,{
      opacity: 1,
      bottom: 0,
      duration: .3,
      ease: "expo.out",
    })
  },[])
  useEffect(() => {
    clicked===true ? tl.current.play() : tl.current.reverse();
  },[clicked])

  const reverseMenu = () => {
    setTextmenu("menu");
    tl.current.reverse()
    setClicked(false);
  }

  return (
    <div ref={menuRef} className="menu-items">
      <Link onClick={reverseMenu} to="/">Home</Link>
      <Link onClick={reverseMenu} to="/About">About</Link>
      <Link onClick={reverseMenu} to="/projects">Skills And Projects</Link>
      <Link onClick={reverseMenu} to="/Contact">Contact</Link>
    </div>
  );
};

export default Menu;
