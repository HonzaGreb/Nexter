const Realtor: React.FC<{ name: string; houses: number; img: string }> = (props) => {
  const { name, houses, img } = props

  return (
    <div className='realtor'>
      <img src={img} alt={name} className='realtor__image' />
      <div className='realtor__details'>
        <h4 className='realtor__name heading-4 heading-4--light'>{name}</h4>
        <p className='realtor__houses'>{houses} houses sold</p>
      </div>
    </div>
  )
}

export default Realtor
