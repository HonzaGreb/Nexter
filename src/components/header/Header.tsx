import logo from '../../img/logo.png'
import logo_bbc from '../../img/logo-bbc.png'
import logo_forbes from '../../img/logo-forbes.png'
import logo_techcrunch from '../../img/logo-techcrunch.png'
import logo_bi from '../../img/logo-bi.png'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Nexter Logo' className='header__logo' />
      <h3 className='heading-3 heading-3--light'>Your own home:</h3>
      <h1 className='heading-1'>The ultimate personal freedom</h1>
      <button className='btn header__btn'>View out properties</button>
      <div className='seen-on__text'>As seen on</div>
      <div className='seen-on__logos'>
        <img src={logo_bbc} alt='BBC Logo' className='seen-on__logo' />
        <img src={logo_forbes} alt='Forbes Logo' className='seen-on__logo' />
        <img src={logo_techcrunch} alt='TechCrunch Logo' className='seen-on__logo' />
        <img src={logo_bi} alt='BI Logo' className='seen-on__logo' />
      </div>
    </header>
  )
}

export default Header
