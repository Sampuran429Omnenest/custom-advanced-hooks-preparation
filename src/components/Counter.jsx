import { useReducer } from "react";
import { ACTIONS, counterReducer } from "../reducers/counterReducer";

function Counter(){
    const [count,dispatch]=useReducer(counterReducer,0);
    return(
        <div style={{textAlign:"center",padding:"40px"}}>
            <h2>Counter</h2>
            <p style={{fontSize:"64px",fontWeight:"bold",margin:"0"}}>{count}</p>
            <div style={{display:"flex",gap:"12px",justifyContent:"center"}}>
                <button onClick={()=>dispatch({type :ACTIONS.INCREMENT})}
                    style={{padding:"12px 24px",fontSize:"20px",cursor:"pointer",
                        background:"#0066cc",color:"white",border:"none",borderRadius:"6px"
                    }}>
                    +
                </button>
                 <button onClick={()=>dispatch({type :ACTIONS.DECREMENT})}
                    style={{padding:"12px 24px",fontSize:"20px",cursor:"pointer",
                        background:"#0066cc",color:"white",border:"none",borderRadius:"6px"
                    }}>
                    -
                </button>
                <button onClick={()=>dispatch({type :ACTIONS.RESET})}
                    style={{padding:"12px 24px",fontSize:"20px",cursor:"pointer",
                        background:"#0066cc",color:"white",border:"none",borderRadius:"6px"
                    }}>
                    Reset
                </button>
            </div>
        </div>
    );
}
export default Counter;