import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AcceptAllCookie from './Components/AcceptAllCookie';
import { FaCookieBite } from "react-icons/fa";
import NecessaryCookie from './Components/NecessaryCookie';
import CustomizeSetting from './Components/CustomizeSetting';
// import CookieConsent from './Components/CookieConsent';

function App() {
// const cookie=document.cookie;

const[cookie,setCookie]=useState(document.cookie);
// const [modalOpen,setmodalOpen]=useState(false);
console.log('cookie',cookie);
// const cookieset=document.cookie = "username=lovish; path=/; max-age=" + 60 * 60 * 24 * 7; 
// console.log(cookieset);
useEffect(()=>{
// alert(cookie);
},[cookie]);
console.log('afterset',cookie);
  return (
    <>
    {!cookie && <div style={{ backgroundColor: "#252627", fontSize: "20px" ,height:"500px",width:"500px",position:"absolute",top:"200px",left:"90px",borderRadius:"7px"}}>
<FaCookieBite style={{ height: "200px", width: "200px", color: "#90c4f9" }} />
  <p style={{color:"#9fa1a3"}}>By clicking “Accept all cookies”, you agree Stack Exchange can store cookies on your device and disclose information in accordance with our Cookie Policy.</p>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <AcceptAllCookie color={"#90c4f9"}/>
<NecessaryCookie color={"#90c4f9"}/>
  </div>
  <div style={{marginTop:"8px"}}>
    <CustomizeSetting color={"#252627"}/>
  </div>

</div>}

   


    </>
  )
}

export default App
