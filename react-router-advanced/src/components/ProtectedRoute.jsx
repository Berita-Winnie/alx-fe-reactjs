import {Navigate} from "react-dom"
import useAuth from "./useAuth";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/profile" />;
};

export default ProtectedRoute;
