import styles from './DropDown.module.scss'
import '../assets/fontAwesome/index'
import InputBox from './InputBox'
import { useEffect, useRef, useState } from 'react'

function DropDown() {
  const [isDisplay, setIsDisplay] = useState(false)
  const [coins, setCoins] = useState([])
  const [selectedCoin, setSelectedCoin] = useState('')
  const coinUl = useRef(null)

  const onClickHandle = () => {
    setIsDisplay((current) => !current)
  }

  const getCoinTracker = async () => {
    const json = await (await fetch('https://api.coinpaprika.com/v1/tickers')).json()
    setCoins(json)
  }

  const coinClickHandl = (e) => {
    setSelectedCoin(e.currentTarget.outerText)
    setIsDisplay(false)
  }

  const filterDropDown = (e) => {
    const input = e.currentTarget.value
    const filter = input.toUpperCase()
    const ul = coinUl.current
    const li = ul.childNodes

    li.forEach((i, index) => {
      const textValue = li[index].textContent || li[index].innerHTML
      textValue.toUpperCase().includes(filter)?li[index].style.display = '' :  li[index].style.display = 'none'
    })
  }

  useEffect(() => {
    getCoinTracker()
  }, [])

  return (
    <div className={styles.dropDown}>
      <h1>DropDown</h1>
      <div className={styles.input_container}>
        <div>
          <InputBox
            type='text'
            placeholder='선택하세요'
            fontawesomeIcon='fa-solid fa-caret-down'
            onClick={onClickHandle}
            text={selectedCoin}
          />
          <InputBox
            type='text'
            placeholder='Search coin'
            fontawesomeIcon='fa-solid fa-magnifying-glass'
            readonlyType={false}
            isDisplay={isDisplay}
            onChange={filterDropDown}
          />
          <ul className={styles.coin__container} ref={coinUl} style={isDisplay ? { display: '' } : { display: 'none' }}>
            {coins.slice(0, 10).map((item) => (
              <li key={item.id}>
                <button type='button' onClick={coinClickHandl}>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DropDown
