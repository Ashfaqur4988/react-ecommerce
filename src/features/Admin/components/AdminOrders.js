import { useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../../../app/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  adminUpdateOrderAsync,
  fetchAllOrdersAsync,
  selectAllOrders,
  selectTotalOrders,
} from "../../order/orderSlice";
import { PencilIcon, EyeIcon } from "@heroicons/react/24/outline";
import Pagination from "../../common/Pagination";

const AdminOrders = () => {
  const [page, setPage] = useState(1);
  const [editableOrderId, setEditableOrderId] = useState(-1);

  const dispatch = useDispatch();
  const allOrders = useSelector(selectAllOrders);
  const totalOrders = useSelector(selectTotalOrders);

  const handleEdit = (item) => {
    setEditableOrderId(item.id); //save the order id to edit the particular order
  };

  const handleShow = () => {
    console.log("show");
  };

  const handleUpdate = (e, order) => {
    console.log(order);
    console.log(e.target.value);
    const updatedOrder = { ...order, status: e.target.value };
    dispatch(adminUpdateOrderAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const handlePage = (page) => {
    setPage(page);
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync(pagination));
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync(pagination));
  }, [dispatch, page]);

  const chooseColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-purple-200 text-black-600";
        break;

      case "dispatch":
        return "bg-yellow-200 text-black-600";
        break;

      case "delivered":
        return "bg-green-200 text-black-600";
        break;

      case "cancelled":
        return "bg-red-200 text-black-600";
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <div className=" bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Order Number</th>
                    <th className="py-3 px-6 text-left">Items</th>
                    <th className="py-3 px-6 text-center">Total Amount</th>
                    <th className="py-3 px-6 text-center">Delivery Address</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {allOrders.map((order) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span className="font-medium">{order.id}</span>
                        </div>
                      </td>
                      {order.items.map((item) => (
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <img
                                className="w-10 h-10 rounded-full"
                                src={item.thumbnail}
                                alt="thumbnail"
                              />
                            </div>
                            <span>
                              {item.title} - #{item.quantity}
                            </span>
                          </div>
                        </td>
                      ))}

                      <td className="py-3 px-6 text-center text-black text-lg">
                        <div className="flex items-center justify-center">
                          ${order.totalAmount}
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center  text-black text-sm">
                        <div className="">
                          <div>
                            <strong>{order.selectedAddress.name},</strong>
                          </div>
                          <div>{order.selectedAddress.city}, </div>
                          <div>{order.selectedAddress.state}, </div>
                          <div>{order.selectedAddress.pinCode}</div>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        {order.id === editableOrderId ? (
                          <select onChange={(e) => handleUpdate(e, order)}>
                            <option value="pending">Pending</option>
                            <option value="dispatch">Dispatch</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        ) : (
                          <span
                            className={`${chooseColor(
                              order.status
                            )} py-1 px-3 rounded-full text-sm`}
                          >
                            {order.status}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-7 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <EyeIcon
                              className="w-6 h-6"
                              onClick={(e) => handleShow(order)}
                            ></EyeIcon>
                          </div>
                          <div className="w-7 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <PencilIcon
                              className="w-6 h-6"
                              onClick={(e) => handleEdit(order)}
                            ></PencilIcon>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination
          handlePage={handlePage}
          page={page}
          setPage={setPage}
          totalOrders={totalOrders}
        ></Pagination>
      </div>
    </div>
  );
};
export default AdminOrders;
