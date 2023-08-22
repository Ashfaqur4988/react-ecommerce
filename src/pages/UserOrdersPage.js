import { Navbar } from "../features/navbar/Navbar";
import UserOrders from "../features/user/components/UserOrders";

const UserOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <UserOrders />
      </Navbar>
    </div>
  );
};
export default UserOrdersPage;
