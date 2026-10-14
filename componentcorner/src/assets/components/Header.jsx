import './Header.css'
import {Link} from 'react-router-dom'
function Header({name, page1, cart_count}) {
    return (
        <div className="header">
            <Link to={`/`}>
            <h2>{name}</h2>
            </Link>
            <div className="header-right">
                <Link to = '/products'>
                <p className="active">{page1}</p>
                </Link>
                <Link to = '/cart'>
                <p>Cart</p>
                </Link>
                {cart_count > 0 && (
                <div className="cart-container"> 
                    <Link to = '/cart'>
                    <span className="cart-icon">🛒</span> 
                    <span className="cart-badge">{cart_count}</span>
                    </Link>
                </div>
               ) }       
            </div>
        </div>
    );
}
export default Header;