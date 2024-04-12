import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { GridTopics } from './components/grid_topics' 

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
            <a href="/src/components/grid_topics.js">
              <button>
                Start your journey
                <FontAwesomeIcon icon="fa-brands fa-space-awesome" class="space-icon"/>
              </button>
            </a>
          </div>

        </div>
      </main>
    
    </>
  )
}

export default App;