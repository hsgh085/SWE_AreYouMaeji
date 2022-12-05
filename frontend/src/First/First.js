import React from "react";
import styles from './First.module.css'
import {motion} from "framer-motion"

function First() {
  const handleClick=()=>{
    window.location.replace(
      "https://kauth.kakao.com/oauth/authorize?client_id=e1a79b41fcfcd1cdc53b674ddca7fe1f&redirect_uri=http://localhost/oauth/callback/kakao&response_type=code"
    )
  };
  return (
    <>
      <div className={styles.container}>
    <motion.div
      className={styles.boxL}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <img className={styles.imgL} src={"assets/mae.png"}/>
    </motion.div>
    <motion.div
      className={styles.boxQ}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type:'spring',
        stiffness: 100,
        duration:0.8,
        delay:1.3,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <img className={styles.imgQ} src={"assets/question.png"}/>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.0,
        delay: 2.7,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <img
          className={styles.kakao}
          src="https://i.esdrop.com/d/f/uVJApfFjHN/9Lm456HH7s.png"
          alt=""
          onClick={handleClick}
        />
    </motion.div>
      </div>
    </>
  );
}

export default First;
