import ProductForm from "../features/Admin/components/ProductForm";
import { Navbar } from "../features/navbar/Navbar";

const ProductFormPage = () => {
  return (
    <div>
      <Navbar>
        <ProductForm></ProductForm>
      </Navbar>
    </div>
  );
};
export default ProductFormPage;
