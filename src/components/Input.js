import React, { useState } from 'react'
import styles from './Input.module.scss'
import InputBox from './InputBox'

function Input() {
  const [isPassCheck, setIsPassCheck] = useState(true)

  const passwordOnClickHandle = () => {
    setIsPassCheck((current) => !current)
  }
  return (
    <div className={styles.input_container}>
      <h1>INPUT</h1>
      <div className={styles.input_wrapper}>
        <form>
          <div>
            <InputBox
              type='email'
              placeholder='이메일을 입력하세요'
              readonlyType={false}
              fontawesomeIcon='fa-solid fa-circle-check'
            />
          </div>
          <div>
            <InputBox
              type={isPassCheck ? 'password' : 'text'}
              placeholder='페스워드를 입력하세요'
              readonlyType={false}
              fontawesomeIcon={isPassCheck ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
              onClick={passwordOnClickHandle}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Input
