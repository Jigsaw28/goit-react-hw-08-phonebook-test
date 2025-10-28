import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => { 
    const { isLoggedIn, isRefreshing } = useSelector(state => state.auth);
    const shouldRedirect = !isRefreshing && !isLoggedIn;
    return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
}