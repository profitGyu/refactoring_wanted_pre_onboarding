import React from 'react'
import InputBox from './InputBox'

function Slide() {
  return (
    <div className='SlideContainer'>
      <h1>Slide</h1>
      <div className='SlideWarpper'>
        <InputBox placeholder='퍼샌트' type='text'/>
        <input type='range' />
      </div>
    </div>
  )
}

export default Slide
