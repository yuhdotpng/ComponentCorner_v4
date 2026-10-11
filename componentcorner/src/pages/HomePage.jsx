import Hero from "./../assets/components/Hero"
import './HomePage.css'

function HomePage() {
    return(
        <div className = 'HomePage'>
            <Hero
                title = 'Welcome to Component Corner'
                image = 'https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics'
                alt = 'Shop electronics banner'
                subtitle= 'Discover amazing products built with React components'
                callToAction='Shop Now'
            />
            <div className='intro'>
                <h2>Why Shop with Us?</h2>
                <p>Component Corner is a great online shopping service focused not only on delivering you great products but creating an 
                immersive and fun website rendered using all sorts of fun React tricks!!
                </p>
            </div>
      </div>
    )
    }

export default HomePage;