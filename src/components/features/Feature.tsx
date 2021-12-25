import React from 'react'
import Icon from '../Icon'

const Feature: React.FC<{ icon: string; heading: string; text: string }> = (props) => {
  const { icon, heading, text } = props

  return (
    <div className='feature'>
      <Icon className={'feature__icon'} icon={icon} />
      <h4 className='heading-4 heading-4--dark'>{heading}</h4>
      <p className='feature__text'>{text}</p>
    </div>
  )
}

export default Feature
