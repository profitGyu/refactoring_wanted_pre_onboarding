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
        <div>몰</div>
        <div>루?</div>
        <button
          className={styles.toggleButton}
          type='button'
          onClick={onClickHandle}
          style={isClick ? { left: 0 } : { left: '50%' }}
        >
          {isClick ? ' 몰 ' : ' 루?'}
        </button>
      </div>
    </div>
  )
}

export default Toggle
