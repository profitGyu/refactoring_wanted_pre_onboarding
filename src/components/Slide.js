import React, { useState } from 'react'
import styles from './Slide.module.scss'
import InputBox from './InputBox'

const FIVESECTION = [1, 25, 50, 75, 100]

function Slide() {
  const [value, setValue] = useState('1')

  function OnClickHandle(e) {
    setValue(e.currentTarget.value)
  }

  return (
    <div className={styles.slideContainer}>
      <h1>Slide</h1>
      <div className={styles.slideWarpper}>
        <InputBox placeholder='퍼샌트' type='text' text={value} />
        <input type='range' min='1' max='100' className={styles.rangeInput} value={value} onChange={OnClickHandle} />
        <ul>
          {FIVESECTION.map((item) => (
            <li>
              <button type='button' onClick={OnClickHandle} value={item}>
                {item}%
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Slide
