import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'; // Ensure Sidebar is imported
import Mainsection from './components/Mainsection';

gsap.registerPlugin(useGSAP);

function App() {
  const [menu, setmenu] = useState(false);

  return (
    <>
      <Navbar
        menu={menu}
        setmenu={setmenu}
      />

      <Sidebar
        menu={menu}
        setmenu={setmenu}
      />

      <Mainsection />
    </>
  )
}

export default App
