import { useUser } from "../context/UserContext";

function HomePage(){
    const {user,login,logout}=useUser();
    return(
        <div>
            <p>User name is {user?.name}</p>
            <p>User role is {user?.role}</p>
        </div>
    );
}
export default HomePage;