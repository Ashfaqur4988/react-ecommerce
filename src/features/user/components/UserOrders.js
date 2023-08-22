import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUserOrdersAsync, selectUserOrders } from "../UserSlice";
import { selectLoggedInUser } from "../../auth/authSlice";
import { Link } from "react-router-dom";

const UserOrders = () => {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();
  const userOrders = useSelector(selectUserOrders);

  const [open, setOpen] = useState(true);

  useEffect(() => {
    dispatch(fetchLoggedInUserOrdersAsync(user.id));
  }, []);

  return (
    <div>
      {userOrders.map((userOrder, index) => (
        <div>
          <div className="mx-auto max-w-7xl mt-12 bg-white px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 py-3">
              Orders Number is: {userOrder.id}
            </h2>
            <h3 className="text-xl font-bold tracking-tight text-red-900 py-3">
              Orders Number is: {userOrder.status}
            </h3>
            <div className="mt-4">
              <div className="flow-root">
                <ul
                  role="list"
                  className="border-t border-gray-200 px-4 py-6 sm:px-6"
                >
                  {userOrder.items.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={item.href}>{item.title}</a>
                            </h3>
                            <p className="ml-4">$ {item.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.brand}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <label
                              htmlFor="qty"
                              className="inline mr-3 text-sm font-medium leading-6 text-gray-900"
                            >
                              Qty : {item.quantity}
                            </label>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total Items in Cart</p>
                <p>{userOrder.totalItems} Items</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$ {userOrder.totalAmount}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping Address:</p>
              <div
                // key={index}
                className="flex justify-between gap-x-6 py-5 border-solid border-2 border-gray-200 px-5 my-2"
              >
                <div className="flex gap-x-4 ">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {userOrder.selectedAddress.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {userOrder.selectedAddress.streetName}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {userOrder.selectedAddress.pinCode}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 font-bold text-gray-900">
                    {userOrder.selectedAddress.phone}
                  </p>
                  <p className="text-sm leading-6 text-gray-500">
                    {userOrder.selectedAddress.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserOrders;
