import Realtor from './Realtor'

import realtor_1 from '../../img/realtor-1.jpeg'
import realtor_2 from '../../img/realtor-2.jpeg'
import realtor_3 from '../../img/realtor-3.jpeg'

const DUMMY_REALTORS = [
  { name: 'Erik Feinman', houses: 245, img: realtor_1 },
  { name: 'Kim Brown', houses: 212, img: realtor_2 },
  { name: 'Toby Ramsay', houses: 198, img: realtor_3 },
]

const Realtors = () => {
  return (
    <div className='realtors'>
      <h2 className='heading-3'>Top 3 Realtors</h2>
      <div className='realtors__list'>
        {DUMMY_REALTORS.map((r, i) => (
          <Realtor name={r.name} houses={r.houses} img={r.img} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Realtors
