import { useState, useEffect } from "react";

export default function Timer({timer, setTimer, respondToTimeout}) {
  
  let intervalId
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer===0){
        console.log("times up!")
        respondToTimeout()
      }
      setTimer(timer--)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, []) 

  return(
    <p>{timer}</p>
  )
}