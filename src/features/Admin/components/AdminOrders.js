import { useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../../../app/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  adminUpdateOrderAsync,
  fetchAllOrdersAsync,
  selectAllOrders,
  selectTotalOrders,
} from "../../order/orderSlice";
import {
  PencilIcon,
  EyeIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import Pagination from "../../common/Pagination";

const AdminOrders = () => {
  const [page, setPage] = useState(1);
  const [editableOrderId, setEditableOrderId] = useState(-1);
  const [sort, setSort] = useState({});

  const dispatch = useDispatch();
  const allOrders = useSelector(selectAllOrders);
  const totalOrders = useSelector(selectTotalOrders);

  const handleEdit = (item) => {
    setEditableOrderId(item.id); //save the order id to edit the particular order
  };

  const handleShow = () => {
    console.log("show");
  };

  const handleOrderStatus = (e, order) => {
    console.log(order);
    console.log(e.target.value);
    const updatedOrder = { ...order, status: e.target.value };
    dispatch(adminUpdateOrderAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const handlePaymentStatus = (e, order) => {
    console.log(order);
    console.log(e.target.value);
    const updatedOrder = { ...order, paymentStatus: e.target.value };
    dispatch(adminUpdateOrderAsync(updatedOrder));
    setEditableOrderId(-1);
  };

  const handleSort = (sortOption) => {
    const sort = { _sort: sortOption.sort, _order: sortOption.order };
    console.log(sort);
    setSort(sort);
  };

  const handlePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync({ pagination, sort, admin: true }));
  }, [dispatch, page, sort]);

  const chooseColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-purple-200 text-black-600";

      case "dispatch":
        return "bg-yellow-200 text-black-600";

      case "delivered":
        return "bg-green-200 text-black-600";

      case "cancelled":
        return "bg-red-200 text-black-600";

      case "received":
        return "bg-green-200 text-black-600";

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
              <table className=" w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th
                      className="py-3 px-6 text-left cursor-pointer"
                      onClick={(e) =>
                        handleSort({
                          sort: "id",
                          order: sort?._order === "asc" ? "desc" : "asc",
                        })
                      }
                    >
                      Order Number{" "}
                      {sort._sort === "id" && sort._order === "asc" ? (
                        <ArrowUpIcon className="w-3 h-3 inline"></ArrowUpIcon>
                      ) : (
                        <ArrowDownIcon className="w-3 h-3 inline"></ArrowDownIcon>
                      )}
                    </th>
                    <th className="py-3 px-4 text-left">Items</th>
                    <th
                      className="py-3 px-4 text-center cursor-pointer"
                      onClick={(e) =>
                        handleSort({
                          sort: "totalAmount",
                          order: sort?._order === "asc" ? "desc" : "asc",
                        })
                      }
                    >
                      Total Amount
                      {sort._sort === "totalAmount" && sort._order === "asc" ? (
                        <ArrowUpIcon className="w-3 h-3 inline"></ArrowUpIcon>
                      ) : (
                        <ArrowDownIcon className="w-3 h-3 inline"></ArrowDownIcon>
                      )}
                    </th>
                    <th className="py-3 px-4 text-center">Delivery Address</th>
                    <th className="py-3 px-4 text-center">Order Status</th>
                    <th className="py-3 px-4 text-center">Payment</th>
                    <th className="py-3 px-4 text-center">Payment Status</th>

                    <th
                      className="py-3 px-4 text-center cursor-pointer"
                      onClick={(e) =>
                        handleSort({
                          sort: "createdAt",
                          order: sort?._order === "asc" ? "desc" : "asc",
                        })
                      }
                    >
                      Order Time{" "}
                      {sort._sort === "createdAt" && sort._order === "asc" ? (
                        <ArrowUpIcon className="w-3 h-3 inline"></ArrowUpIcon>
                      ) : (
                        <ArrowDownIcon className="w-3 h-3 inline"></ArrowDownIcon>
                      )}
                    </th>

                    <th
                      className="py-3 px-4 text-center cursor-pointer"
                      onClick={(e) =>
                        handleSort({
                          sort: "updatedAt",
                          order: sort?._order === "asc" ? "desc" : "asc",
                        })
                      }
                    >
                      Updated{" "}
                      {sort._sort === "updatedAt" && sort._order === "asc" ? (
                        <ArrowUpIcon className="w-3 h-3 inline"></ArrowUpIcon>
                      ) : (
                        <ArrowDownIcon className="w-3 h-3 inline"></ArrowDownIcon>
                      )}
                    </th>

                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {allOrders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-4 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span className="font-medium">{order.id}</span>
                        </div>
                      </td>
                      {order.items.map((item, index) => (
                        <td key={index} className="py-3 px-4 text-left">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <img
                                className="w-10 h-10 rounded-full"
                                src={item.product.thumbnail}
                                alt="thumbnail"
                              />
                            </div>
                            <span>
                              {item.product.title} - #{item.quantity}
                            </span>
                          </div>
                        </td>
                      ))}

                      <td className="py-3 px-4 text-center text-black text-lg">
                        <div className="flex items-center justify-center">
                          ${order.totalAmount}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center  text-black text-sm">
                        <div className="">
                          <div>
                            <strong>{order.selectedAddress.name},</strong>
                          </div>
                          <div>{order.selectedAddress.city}, </div>
                          <div>{order.selectedAddress.state}, </div>
                          <div>{order.selectedAddress.pinCode}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        {order.id === editableOrderId ? (
                          <select onChange={(e) => handleOrderStatus(e, order)}>
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

                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center">
                          {order.paymentMethod}
                        </div>
                      </td>

                      <td className="py-3 px-4 text-center">
                        {order.id === editableOrderId ? (
                          <select
                            onChange={(e) => handlePaymentStatus(e, order)}
                          >
                            <option value="pending">Pending</option>
                            <option value="received">Received</option>
                          </select>
                        ) : (
                          <span
                            className={`${chooseColor(
                              order.paymentStatus
                            )} py-1 px-3 rounded-full text-sm`}
                          >
                            {order.paymentStatus}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex item-center justify-center">
                          {order.createdAt
                            ? new Date(order.createdAt).toLocaleString()
                            : null}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex item-center justify-center">
                          {order.updatedAt
                            ? new Date(order.updatedAt).toLocaleString()
                            : null}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-7 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <EyeIcon
                              className="w-4 h-4 cursor-pointer"
                              onClick={(e) => handleShow(order)}
                            ></EyeIcon>
                          </div>
                          <div className="w-7 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <PencilIcon
                              className="w-4 h-4 cursor-pointer"
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
          totalItems={totalOrders}
        ></Pagination>
      </div>
    </div>
  );
};
export default AdminOrders;
