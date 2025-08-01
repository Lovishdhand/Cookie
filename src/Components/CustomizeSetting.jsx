import { useState } from 'react';
import CookieConsent from './CookieConsent';

function CustomizeSetting({color}){
const [ModalOpen,setModalOpen]=useState(false);
const Modalclose = (Value) => {
     setModalOpen(Value);
     };
    function ConsentModalOpen(){
// alert("hello");
// console.log("hello");
setModalOpen(true);
// alert(ModalOpen);
    }
     
return(
    <>
    
    <button style={{backgroundColor:color,border:"1px solid #90c4f9",color:"#90c4f9",width:"490px"}} onClick={ConsentModalOpen}>Customize settings</button>
   {ModalOpen && <CookieConsent close={Modalclose }/>} 


       
    </>


);
}
export default CustomizeSetting;