import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

const UserRoute = ({children}) => {
    const { token } = useAuthStore();

    if (!token) return <Navigate to={'/login'} />;
    
    return children;
}

export default UserRoute;
