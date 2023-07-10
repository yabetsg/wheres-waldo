import { initializeApp } from "firebase/app";
import { Router } from './components/Router';
import { BrowserRouter } from "react-router-dom";

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
app;
  return (
    <BrowserRouter>
     <Router/>
    </BrowserRouter>
    
  )
}

export default App
