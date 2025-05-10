import { version, useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Seo from './components/seo';
import Form from './components/Form';
import { preload } from 'react-dom';

function App() {
  const [showForm, setShowForm] = useState(false);

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
        <button onClick={() => setShowForm(!showForm)}>Toggle</button>
        {showForm && <Form />}
      </div>
    </>
  )
}

export default App
