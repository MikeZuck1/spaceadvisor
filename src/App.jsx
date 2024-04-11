import './App.css'
import { GridTopics } from './components/grid_topics'

function App() {

  return (
    <>
      <main>
        <div className='container'>
              <header>
              </header>

              <div className="center-title">
                <h1>Welcome to space center</h1>
              </div>

              <div className="paragraph-center">
                <p>AN INTERACTIVE EXPERIENCE WITH SPACE CENTER THAT ALLOWS YOU TO KNOW EVERYTHING ABOUT THE SPACE.</p>
              </div>

              <div className="button-center">
                <a href="/src/components/grid_topics.js">
                  <button>Start your journey</button>
                </a>
              </div>

        </div>
      </main>
      
      {/* IMPORT COMPOENENTS  */}
      <GridTopics />
    </>
  )
}

export default App
