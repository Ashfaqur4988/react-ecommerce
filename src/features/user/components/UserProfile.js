import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedInUser } from "../../auth/authSlice";

export function UserProfile() {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  const handleEdit = () => {};

  const handleRemove = () => {};

  return (
    <div>
      <div className="mx-auto max-w-7xl mt-12 bg-white px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 py-3">
          Name: {user.name ? user.name : "New User"}
        </h2>
        <h3 className="text-xl font-bold tracking-tight text-red-900 py-3">
          Email: {user.email ? user.email : "abc@abc.com"}
        </h3>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-500">Your Address:</p>
          {user.addresses.map((address) => (
            <div
              // key={index}
              className="flex justify-between gap-x-6 py-5 border-solid border-2 border-gray-200 px-5 my-2"
            >
              <div className="flex gap-x-4 ">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.streetName}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.pinCode}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 font-bold text-gray-900">
                  {address.phone}
                </p>
                <p className="text-sm leading-6 text-gray-500">
                  {address.city}
                </p>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <button
                  onClick={(e) => handleEdit(e, address.id)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => handleRemove(e, address.id)}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
