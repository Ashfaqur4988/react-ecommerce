import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from "../UserSlice";

export function UserProfile() {
  const count = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{/* this is the part for editing */}</div>
    </div>
  );
}
