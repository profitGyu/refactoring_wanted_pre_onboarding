import React, { useEffect, useRef, useState } from 'react'
import styles from './Input.module.scss'
import InputBox from './InputBox'

function Input() {
  const [isPassCheck, setIsPassCheck] = useState(true)
  const [emailIconColor, setEmailIconColor] = useState('')
  const emailRef = useRef()

  const passwordOnClickHandle = () => {
    setIsPassCheck((current) => !current)
  }

  const EmailCheckOnChangeHandle = (e) => {
    const email = e.currentTarget.value
    const emailRegex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/

    if (emailRegex.test(email)) {
      setEmailIconColor('green')
    } else {
      setEmailIconColor('gray')
    }
  }

  return (
    <div className={styles.input_container}>
      <h1>INPUT</h1>
      <div className={styles.input_wrapper}>
        <form>
          <div ref={emailRef}>
            <InputBox
              onChange={EmailCheckOnChangeHandle}
              type='email'
              placeholder='이메일을 입력하세요'
              readonlyType={false}
              fontawesomeIcon='fa-solid fa-circle-check'
              color={emailIconColor}
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
