import { AdminProductList } from "../features/Admin/components/AdminProductList";
import { Navbar } from "../features/navbar/Navbar";

const AdminProductListPage = () => {
  return (
    <div>
      <Navbar>
        <AdminProductList></AdminProductList>
      </Navbar>
    </div>
  );
};
export default AdminProductListPage;
