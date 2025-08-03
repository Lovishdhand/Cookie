

function AcceptAllCookie({color,acceptAll}) {
  return (
    <button style={{backgroundColor:color}} onClick={()=>{
      acceptAll();



    }} >Accept all cookies</button>
  );
}

export default AcceptAllCookie;
