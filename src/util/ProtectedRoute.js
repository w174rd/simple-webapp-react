import { Navigate } from "react-router-dom";
import { storageKey } from "./Config";
import { jwtDecode } from "jwt-decode";


const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem(storageKey.USER_TOKEN);
  if (!token || isTokenExpired(token)) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;

export const isTokenExpired = (token) => {
    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp < now; // `exp` adalah waktu kedaluwarsa dalam detik.
  };