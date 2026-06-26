import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './App.css';
import Navbar from './components/Navbar';

gsap.registerPlugin(useGSAP);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
