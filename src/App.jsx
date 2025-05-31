import { version } from 'react';
import Example from './components/useExample';
import reactLogo from './assets/react.svg'
import './App.css'
import Seo from './components/seo';

import { preload } from 'react-dom';

function App() {
  preload('https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css', {
    as: 'style',
    fetchPriority: 'low'
  });

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
        <hr />
        <Example />
      </div>
    </>
  )
}

export default App
