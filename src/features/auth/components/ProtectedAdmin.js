import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import { Navigate } from "react-router-dom";
import { selectUserInfo } from "../../user/UserSlice";

const ProtectedAdmin = ({ children }) => {
  const user = useSelector(selectLoggedInUser);
  const userInfo = useSelector(selectUserInfo);
  //check if the user exists or not. if not then cannot access some routes
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  //check if the user exist and what is the role
  if (user && userInfo.role !== "admin") {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};
export default ProtectedAdmin;
