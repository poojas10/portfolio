import React,{useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { useLocation } from "react-router";
import "./header.css";
export default function Nav() {
  const [isToggle, setToggle] = useState(false);
  const navHeight = useRef(false);
  const {pathname} = useLocation()
  useEffect(() => {
  }, [isToggle])
  function toggle() {
    setToggle((prev) => {
      return !prev;
    });
  }
  useEffect(() => {
        if(isToggle){
            navHeight.current.style.maxHeight='200px'
        }
        else{
            navHeight.current.style.maxHeight='0  ' 
        }
  }, [isToggle])
  return (
    <>
      <section className="section" tabIndex='0'>
        <header>
          <h1 id='Logo'>Portfolio</h1>
          <button tabIndex="0" aria-label='btn' onClick={toggle} className='toggle-btn'>
          <svg  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="2em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
          </button>
        </header>
        <nav ref={navHeight}>
        <ul>
          <li>
            <Link className="nav-link content" to="/" tabIndex="0">
              Home
            </Link>
            <motion.div initial={{width:'0%'}} animate={{
              width:pathname === '/' ? '100%':'0%'
            }} transition={
             {duration:1}
          }
            className="line"></motion.div>
          </li>
          <li>
            <Link className="nav-link content" to="/projects" tabIndex="0">
              Projects
            </Link>
            <motion.div initial={{width:'0%'}} animate={{
              width:pathname === '/projects' ? '100%':'0%'
            }} transition={
             {duration:1}
          }
            className="line"></motion.div>
          </li>
          <li>
            <Link tabIndex="0" className="nav-link content" to={{pathname:'https://drive.google.com/file/d/1b8Zt0fltR39slrYL-wRoyMB9Q49AVYOP/view?usp=sharing'}} target="_blank">
              Resume
            </Link>
            <motion.div initial={{width:'0%'}} animate={{
              width:pathname === 'https://drive.google.com/file/d/1b8Zt0fltR39slrYL-wRoyMB9Q49AVYOP/view?usp=sharing' ? '100%':'0%'
            }} transition={
             {duration:1}
          }
            className="line"></motion.div>
          </li>
          <li>
            <HashLink tabIndex="0" className="nav-link content" to="/#contact">
              Contact
            </HashLink>
            <motion.div initial={{width:'0%'}} animate={{
              width:pathname === '/#contact' ? '100%':'0%'
            }} transition={
             {duration:1}
          }
            className="line"></motion.div>
          </li>
        </ul>
        </nav>
      </section>
    </>
  );
}
