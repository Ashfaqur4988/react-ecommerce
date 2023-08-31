import { useEffect } from "react";
import { selectLoggedInUser, signOutUserAsync } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LogOut = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(signOutUserAsync());
  });

  //but useEffect runs after every render, so we have to delay navigate part
  return <div>{!user && <Navigate to={"/login"}></Navigate>}</div>;
};
export default LogOut;
