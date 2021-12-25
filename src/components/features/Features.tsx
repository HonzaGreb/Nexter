import Feature from './Feature'

const DUMMY_FEATURES = [
  {
    heading: "World's best luxury homes",
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    icon: 'global',
  },
  {
    heading: 'Only the best properties',
    text: 'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.',
    icon: 'trophy',
  },
  {
    heading: 'All homes in top locations',
    text: 'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.',
    icon: 'map-pin',
  },
  {
    heading: 'New home in one week',
    text: 'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    icon: 'key',
  },
  {
    heading: 'Top 1% realtors',
    text: 'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    icon: 'presentation',
  },
  {
    heading: 'Secure payments on XXX',
    text: 'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.',
    icon: 'lock',
  },
]

const Features = () => {
  return (
    <section className='features'>
      {DUMMY_FEATURES.map((f, i) => {
        return <Feature heading={f.heading} text={f.text} icon={f.icon} key={i} />
      })}
    </section>
  )
}

export default Features
