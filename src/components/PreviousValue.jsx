import { useEffect, useRef, useState } from "react";

function PreviousValue(){
    const [name,setName]=useState("");
    const prevName=useRef("");
    useEffect(()=>{
        prevName.current=name;
    });
    return(
        <div style={{padding:"20px"}}>
            <h2>Track Previous Value</h2>
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Type Your Name"
            style={{padding:"8px",fontSize:"16px"}}
            />
            <p>Current : <strong>{name}</strong></p>
            {/** useRef is used to store the previous value without rerendering*/}
            <p>Previous : <strong>{prevName.current}</strong></p>
        </div>
    );
}
export default PreviousValue;