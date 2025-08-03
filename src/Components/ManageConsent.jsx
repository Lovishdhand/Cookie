import { useState ,useRef} from "react";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

function ManageConsent({
  title = "Cookie Section",
  description = "Some info about this cookie section",
  value,
  cookie,
  cookieKey
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [check, setCheck] = useState(value);
  
  const checkbox=useRef(check).current;
function customCookie(){
   cookie({[cookieKey]: !value });
}
  return (
    <div
      style={{
        border: "1px solid white",

        padding: "10px",
        cursor: "pointer",
      }}
    >
      <div
        onClick={() => {
        
            setIsOpen(!isOpen);
      
        }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
     
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "8px",
          }}
        >
          {isOpen ? <CiSquareMinus /> : <CiSquarePlus />}

          <span>
            <strong>{title}</strong>
      
          </span>
        </div>

        <input
          type="checkbox"
         
          checked={check}
          onClick={(e) => {
            // alert("hallo");
            e.stopPropagation();
           customCookie();
       
          setCheck(!check);
         
          }}
        />
      </div>

      { isOpen && (
        <div style={{ marginTop: "10px", color: "#ccc", fontSize: "14px" }}>
          {description}
        </div>
      )}
    </div>
  );
}

export default ManageConsent;
