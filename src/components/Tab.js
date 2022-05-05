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
  const [isCheck, setIsCheck] = useState()
  function clickHandle(e) {
    underLine.current.style = `left:${e.currentTarget.parentNode.offsetLeft}px; width:${e.currentTarget.parentNode.offsetWidth}px`
  }

  return (
    <div className={styles.tab}>
      <h1>Tab</h1>
      <div className={styles.tabWrap}>
        <ul>
          {TABLIST.map((item) => {
            return (
              <li key={item.id}>
                <a onClick={clickHandle} href='#foo' style={{}}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <span ref={underLine}> </span>
      </div>
    </div>
  )
}
