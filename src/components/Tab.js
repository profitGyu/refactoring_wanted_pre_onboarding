import styles from './Tab.module.scss'
import { useRef, useState } from 'react'

const TABLIST = [
  {
    title: '감자',
    id: '감자_1',
  },
  {
    title: '고구마',
    id: '고구마_1',
  },
  {
    title: '카레라이스',
    id: '카레라이스_1',
  },
]

export default function Tab() {
  const underLine = useRef(null)
  const [focusId, setFocusId] = useState('감자_1')
  function clickHandle(e, id) {
    underLine.current.style = `left:${e.currentTarget.offsetLeft}px; width:${e.currentTarget.offsetWidth}px`
    setFocusId(id)
  }

  return (
    <div className={styles.tab}>
      <h1>Tab</h1>
      <div className={styles.tabWrap}>
        <ul role='menu'>
          {TABLIST.map((item) => {
            return (
              <li
                role='row'
                key={item.id}
                onClick={(e) => clickHandle(e, item.id)}
                className={focusId === item.id ? styles.focusing : styles.notFocusing}
              >
                {item.title}
              </li>
            )
          })}
        </ul>
        <span ref={underLine} className={styles.underLine}> </span>
      </div>
    </div>
  )
}
