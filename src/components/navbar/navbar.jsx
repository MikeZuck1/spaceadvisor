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
                     <a href="#">Moon</a> 
                     <a href="#">Earth</a> 
                     <a href="#">Mars</a>  
                     <a href="#">Jupiter</a> 
                </nav>
            </header>
        </div> 
    </>
  )
}

export default Navbar; 