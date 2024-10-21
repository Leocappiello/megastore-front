import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";
import { getCookie } from "typescript-cookie";

const UserRoute = ({children}) => {
    const token = getCookie('token')
    console.log(token)
    
    if (!token) return <Navigate to={'/login'} />;
    
    return children;
}

export default UserRoute;
