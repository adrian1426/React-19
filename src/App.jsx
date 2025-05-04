import { version } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Seo from './components/seo';

function App() {

  return (
    <>
      <title>`Hola React ${version}`</title>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p>version of React {version}</p>
        <hr />
        <Seo />
      </div>
    </>
  )
}

export default App
