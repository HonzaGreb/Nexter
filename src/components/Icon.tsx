import React from 'react'
import sprite from '../img/sprite.svg'

const Icon: React.FC<{ icon: string; className: string }> = (props) => {
  return (
    <svg className={props.className}>
      <use xlinkHref={`${sprite}#icon-${props.icon}`} />
    </svg>
  )
}

export default Icon
