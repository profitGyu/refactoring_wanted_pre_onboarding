import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/fontAwesome/index'
import styles from './InputBox.module.scss'
import PropTypes from 'prop-types'

function InputBox({type, isReadOnly, fontawesomeIcon, placeholder, onClick}) {
  return (
    <div className={styles.inputbox}>
      <input placeholder={placeholder} type={type} readOnly={isReadOnly} />
      <FontAwesomeIcon icon={fontawesomeIcon} onClick={onClick}/>
    </div>
  )
}

InputBox.propTypes = {
    type: PropTypes.string.isRequired,
    isReadOnly: PropTypes.bool.isRequired,
    fontawesomeIcon: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}


export default InputBox
