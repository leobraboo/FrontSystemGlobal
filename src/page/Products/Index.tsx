import { CProducts } from "../../components/Products";
import { ProductProvider } from "../../shared/Context/ProductContext";

export function Products() {
  return (
    <ProductProvider>
      <CProducts />
    </ProductProvider>
  )
}