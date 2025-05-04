import { version } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>version of React {version}</p>
      </div>
    </>
  )
}

export default App
