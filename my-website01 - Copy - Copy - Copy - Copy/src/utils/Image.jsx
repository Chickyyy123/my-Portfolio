import React from 'react'

const Image = ({image, className, style}) => {
  return (
    <div>
        <img src={image} alt="Image_alt" className={className} style={style}/>
    </div>
  )
}

export default Image