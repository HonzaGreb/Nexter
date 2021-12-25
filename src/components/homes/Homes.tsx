import Home from './Home'

import home1 from '../../img/house-1.jpeg'
import home2 from '../../img/house-2.jpeg'
import home3 from '../../img/house-3.jpeg'
import home4 from '../../img/house-4.jpeg'
import home5 from '../../img/house-5.jpeg'
import home6 from '../../img/house-6.jpeg'

const DUMMY_HOMES = [
  {
    img: home1,
    home: { name: 'Beautiful Family House', location: 'USA', rooms: 5, area: 325, price: 1200000 },
  },
  {
    img: home2,
    home: { name: 'Modern Gloss Villa', location: 'Canada', rooms: 6, area: 450, price: 2750000 },
  },
  {
    img: home3,
    home: { name: 'Cozy Country House', location: 'UK', rooms: 4, area: 250, price: 850000 },
  },
  {
    img: home4,
    home: { name: 'Beautiful Family House', location: 'USA', rooms: 5, area: 325, price: 1200000 },
  },
  {
    img: home5,
    home: { name: 'Beautiful Family House', location: 'USA', rooms: 5, area: 325, price: 1200000 },
  },
  {
    img: home6,
    home: { name: 'Beautiful Family House', location: 'USA', rooms: 5, area: 325, price: 1200000 },
  },
]

const Homes = () => {
  return (
    <section className='homes'>
      {DUMMY_HOMES.map((home, i) => {
        return <Home img={home.img} home={home.home} key={i} />
      })}
    </section>
  )
}

export default Homes
