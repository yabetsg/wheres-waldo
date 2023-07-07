import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { initializeApp } from "firebase/app";

import './App.css'
import { Nav } from './components/Nav';
import { Game } from './components/Game';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router';

function App() {
// TODO: Add SDKs for Firebase products to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyCM3blU_FE560OrqNNFzfOcwZj-1ruNh5s",
  authDomain: "wheres-waldo-74485.firebaseapp.com",
  projectId: "wheres-waldo-74485",
  storageBucket: "wheres-waldo-74485.appspot.com",
  messagingSenderId: "1060344205573",
  appId: "1:1060344205573:web:dac4771eec9dd2dae8e76c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  const [count, setCount] = useState(0)

  return (
    <>  
     {/* <Game/> */}
     <Router/>
    </>
  )
}

export default App
