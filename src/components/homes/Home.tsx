import React from 'react'
import Icon from '../Icon'

const Home: React.FC<{
  img: string
  home: { name: string; location: string; rooms: number; area: number; price: number }
}> = (props) => {
  const { img, home } = props
  const { name, location, rooms, area, price } = home

  return (
    <div className='home'>
      <img src={img} alt={name} className='home__image' />
      <Icon icon={'heart-full'} className={'home__icon-heart'} />
      <h5 className='home__name'>{name}</h5>
      <div className='home__location home__info'>
        <Icon icon={'map-pin'} className={'home__icon'} />
        <p>{location}</p>
      </div>
      <div className='home__rooms home__info'>
        <Icon icon={'profile-male'} className={'home__icon'} />
        <p>{rooms} rooms</p>
      </div>
      <div className='home__area home__info'>
        <Icon icon={'expand'} className={'home__icon'} />
        <p>{area} m&#178;</p>
      </div>
      <div className='home__price home__info'>
        <Icon icon={'key'} className={'home__icon'} />
        <p>${price}</p>
      </div>
      <button className='btn home__btn'>Contact Realtor</button>
    </div>
  )
}

export default Home
