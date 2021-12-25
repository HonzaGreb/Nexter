import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Realtors from './components/realtors/Realtors'
import Features from './components/features/Features'
import Story from './components/story/Story'
import Homes from './components/homes/Homes'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/footer/Footer'

import './css/style.css'

function App() {
  return (
    <main className='container'>
      <Header />
      <Realtors />
      <Sidebar />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </main>
  )
}

export default App
