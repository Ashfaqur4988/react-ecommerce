import AdminOrders from "../features/Admin/components/AdminOrders";
import { Navbar } from "../features/navbar/Navbar";

const AdminOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <AdminOrders></AdminOrders>
      </Navbar>
    </div>
  );
};
export default AdminOrdersPage;
