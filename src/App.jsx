import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Page3 from './components/Page3'; // Ensure this file exists and exports the component properly

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Page3 /> 
    </>
  );
}

export default App;
