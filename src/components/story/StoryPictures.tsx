import story1image from '../../img/story-1.jpeg'
import story2image from '../../img/story-2.jpeg'

const StoryPictures = () => {
  return (
    <div className='story__pictures'>
      <img src={story1image} alt='Story 1' className='story__img--1' />
      <img src={story2image} alt='Story 2' className='story__img--2' />
    </div>
  )
}

export default StoryPictures
