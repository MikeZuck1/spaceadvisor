import './App.css';
import Navbar from './components/navbar/navbar';
// import Starts from './components/stars/starts';
// import Blackholes from './components/blackholes/blackholes';
// import Planets from './components/planets/planets';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import {faUserAstronaut} from '@fortawesome/free-brands-svg-icons'; 
// import { GridTopics } from './components/grid_topics'; 

function App() {

  return (
    <>
      <main>
        <div className='container'>
          {/* MAIN TITLE */}
          <div className="center-title">
            <h1>Welcome to space center</h1>
          </div>

          {/* MAIN PARAGRAPH */}
          <div className="paragraph-center">
            <p>AN INTERACTIVE EXPERIENCE WITH SPACE CENTER THAT ALLOWS YOU TO KNOW EVERYTHING ABOUT THE SPACE.</p>
          </div>

          {/* MAIN BUTTON */}
          <div className="button-center">
              <button>
                <a href="#">
                  Start your journey
                </a>
              </button> 
              {/* <FontAwesomeIcon icon={faUserAstronaut} />  */}
          </div>
        </div>
      </main>
    
      {/* IMPORTATION  */}
      <Navbar />
      {/* <Starts />  */}
      {/* <Blackholes />  */}
      {/* <Planets />  */}
    </>
  )
}

export default App;