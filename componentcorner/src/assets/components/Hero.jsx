import './Hero.css';
import {Link} from 'react-router-dom'

function Hero ({title, image, alt, subtitle, callToAction}) {
    return(
        <div className = 'hero-card'>
            <img src={image} alt={alt} />
            <div className= "hero-text">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <Link to = '/products'>
                <button>{callToAction}</button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;