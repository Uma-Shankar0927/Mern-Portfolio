import React from "react";
import { insta, linkedin, github } from "../assets/index";
import {easeIn, easeInOut,easeOut, motion} from 'framer-motion';
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <div className="home-main">
        <div className="name-div">
          <motion.p
          initial={{y:12,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{
            duration:.6,
            delay: .1,
            ease: easeOut
          }}
          >Hii there,</motion.p>
          <motion.p
          initial={{y:10,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{
            duration:.6,
            delay: .2,
            ease: easeOut
          }}
          >I'm Uma Shankar</motion.p>
          <motion.p
          initial={{y:7,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{
            duration:.6,
            delay: .3,
            ease: easeOut
          }}
          >a full Stack Mern developer</motion.p>
          <motion.p
          initial={{y:5,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{
            duration:.6,
            delay: .4,
            ease: easeOut
          }}
          >and a programmer</motion.p>
        </div>
        <div className="home-bottom">
          <motion.div className="circle"
          initial={{y:15,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{
            duration:.3,
            delay: .6,
            ease: easeIn
          }}>
            <Link to="https://github.com/Uma-Shankar0927"><img src={github} alt="" /></Link>
          </motion.div>
          <motion.div className="circle"
          initial={{y:15,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{
            duration:.3,
            delay: .8,
            ease: easeIn
          }}>
            <Link to="https://www.linkedin.com/in/uma-shankar-panigrahi-9936561ab/"><img src={linkedin} alt="" /></Link>
          </motion.div>
          <motion.div className="circle"
          initial={{y:15,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{
            duration:.3,
            delay: 1,
            ease: easeIn
          }}>
            <Link to="https://www.linkedin.com/in/uma-shankar-panigrahi-9936561ab/"><img src={insta} alt="" /></Link>
          </motion.div>
        </div>
      </div>
  );
};

export default Home;
