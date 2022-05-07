import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import '../assets/fontAwesome/index'
import styles from './InputBox.module.scss'
import PropTypes from 'prop-types'

function InputBox({ type, readonlyType, fontawesomeIcon, placeholder, onClick, isDisplay, text, onChange }) {
  return (
    <div className={styles.inputbox} style={isDisplay ? { display: 'flex' } : { display: 'none' }}>
      {text ? (
        <input placeholder={placeholder} type={type} value={text || ''} readOnly/>
      ) : (
        <input placeholder={placeholder} type={type}  readOnly={readonlyType} onChange={onChange} />
      )}
      {fontawesomeIcon && <FontAwesomeIcon icon={fontawesomeIcon} onClick={onClick} className={styles.fontAwesome} />}
    </div>
  )
}

InputBox.defaultProps = {
  isDisplay: true,
  readonlyType: true,
}

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  readonlyType: PropTypes.bool,
  fontawesomeIcon: PropTypes.string,
  onClick: PropTypes.func,
  isDisplay: PropTypes.bool,
  text: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputBox
