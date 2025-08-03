

function NecessaryCookie({color,margin,necessary}){
return(

     <button style={{backgroundColor:color,marginLeft:margin + "px" ? margin : 0}}
     onClick={()=>{
      necessary();
    }}
     
     >Necessary cookies only</button>
);
}


export default NecessaryCookie;
