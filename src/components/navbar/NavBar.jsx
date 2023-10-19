import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
      <div className="navbar-container">
        <div>
            <h1>ElgatoGaucho.com</h1>
        </div>
        <div>
            <ul className="list-container">
                <li>
                    <button className='button'>Quienes somos</button>
                </li>
                <li>
                    <button className='button'>Indumentaria</button>
                </li>
                <li>
                    <button className='button'>Accesorios</button>
                </li>
            </ul>
        </div>
        <CartWidget/>
        </div>
        
    )
  }
  
  export default NavBar 