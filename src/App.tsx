import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Realtors from './components/realtors/Realtors'
import Features from './components/features/Features'
import Story from './components/story/Story'
import Homes from './components/homes/Homes'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/footer/Footer'

import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </Fragment>
  )
}

export default App
