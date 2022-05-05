import styles from './DropDown.module.scss'
import '../assets/fontAwesome/index'
import InputBox from './InputBox'

function DropDown() {
  
  const onClickHandle = (e) =>{
    console.log(e)
  }

  return (
    <div className={styles.dropDown}>
      <h1>DropDown</h1>
      <div className={styles.input_container}>
        <div>
          <InputBox type='text' placeholder='선택하세요' fontawesomeIcon='fa-solid fa-caret-down' isReadOnly />
          <InputBox
            type='text'
            placeholder='Search coin'
            fontawesomeIcon='fa-solid fa-magnifying-glass'
            isReadOnly={false}
            onClick={onClickHandle}
          />
        </div>
      </div>
    </div>
  )
}

export default DropDown
