import Footer from "../features/common/Footer";
import { Navbar } from "../features/navbar/Navbar";
import UserOrders from "../features/user/components/UserOrders";

const UserOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <h1 className="mx-auto text-2xl">My Orders</h1>
        <UserOrders />
      </Navbar>
      <Footer></Footer>
    </div>
  );
};
export default UserOrdersPage;
