import React, { useState } from 'react'
import styles from './Toggle.module.scss'

function Toggle() {
  const [isClick, setIsClick] = useState(true)

  function onClickHandle() {
    setIsClick((current) => !current)
  }

  return (
    <div className={styles.toggleContainer}>
      <h1>Toggle</h1>
      <div className={styles.toggleWarpper}>
        <button className={styles.underButton} onClick={onClickHandle} type='button' style={isClick?{color:"#000000"}:{color:"#eeeeee"}}>
          몰
        </button>
        <button className={styles.underButton} onClick={onClickHandle} type='button' style={!isClick?{color:"#000000"}:{color:"#eeeeee"}}>
          루?
        </button>
        <button className={styles.toggleButton} type='button' style={isClick ? { left: 0 } : { left: '50%' }}>
          {` `}
        </button>
      </div>
    </div>
  )
}

export default Toggle
