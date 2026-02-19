import { useEffect, useRef } from "react";

function FocusInput(){
    const inputRef=useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[]);
    return(
        <div style={{padding:"20px"}}>
            <h2>Search Box</h2>
            <input
            ref={inputRef}
            type="text"
            placeholder="I am already focused" 
            style={{padding:"10px",fontSize:"16px",width:"30px"}}
            />
        </div>
    );
}
export default FocusInput;