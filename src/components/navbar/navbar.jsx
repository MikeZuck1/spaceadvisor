// import React from 'react' 
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpaceAwesome } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  return (
    <>
        <div>
            <header className='header'>
                <a href="#" className='logo'>
                    space center
                    <FontAwesomeIcon icon={faSpaceAwesome} className='space_icon'/>
                </a>

                {/* NAVIGATION */}
                <nav>
                     <a href="../planets/planets.jsx">The planets</a> 
                     <a href="../stars/starts.jsx">The stars</a> 
                     <a href="../blackholes/blackholes.jsx">Black holes</a>
                </nav>
            </header>
        </div> 
    </>
  )
}

export default Navbar; 