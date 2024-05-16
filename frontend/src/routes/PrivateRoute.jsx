import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { authUser } = useSelector(store => store.user);
    if (authUser) {
        return children;
    }
    return <Navigate to={'/login'} />;
};

export default PrivateRoute;