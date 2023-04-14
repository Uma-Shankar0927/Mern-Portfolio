import React from 'react'
import {motion,easeIn,easeInOut} from 'framer-motion';

const Achievments = () => {
  return (
    <div className="skillsu-main">
        <motion.h3 initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2, ease: easeInOut,}}>
          Achievments:
        </motion.h3>
        <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4, ease: easeInOut,}}>
          Institute rank 1 at GFG Practice
        </motion.p>
        <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4, ease: easeInOut,}}>
          3 star at codechef
        </motion.p>
        <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4, ease: easeInOut,}}>
          5 star at hackrank problem solving
        </motion.p>
        <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4, ease: easeInOut,}}>
          1500+ GFG coding score
        </motion.p>
        <motion.p initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4, ease: easeInOut,}}>
          leetcode rating 1700+ top X percent
        </motion.p>
        
      </div>
  )
}

export default Achievments