import React from 'react'

const TitleAndLoader = ({title, className, style}) => {
  return (
    <div>
        <h4 className='mb-3'>{title}</h4>
        <div className={className}></div>
    </div>
  )
}

export default TitleAndLoader