import useLocalStorage from "../hooks/useLocalStorage";
function NameSaver(){
    const [name,setName]=useLocalStorage("user-name","");
    return(
        <div style={{padding:"40px"}}>
            <h2>My Name</h2>
            <input
            value={name}
            onChange={e=>setName(e.target.value)}
            placeholder="Type Your Name" 
            style={{padding:"10px",fontSize:"16px",width:"280px"}}
            />
            {name && <h3 style={{marginTop:"20px"}}>Hello,{name}!</h3>}
            <p style={{color:"#888",marginTop:"12px"}}>Press F5 to refresh</p>
        </div>
    );
}
export default NameSaver;