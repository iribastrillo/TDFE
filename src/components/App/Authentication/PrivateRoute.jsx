import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const user = useSelector ((state) => state.session.value);

    if (!user) {
        return (
         <Navigate to={"/"} replace={true}/>
        );
    } else {
        return children;
    }
}

export default PrivateRoute;