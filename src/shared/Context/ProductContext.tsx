import { createContext } from "react";
import { UseProduct } from "../Hooks/useProduct";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const ProductContext = createContext({})

function ProductProvider({ children }: AuxProps) {
  const { handleChange, handleSaveProducts } = UseProduct()

  return (
    <ProductContext.Provider value={{ handleChange, handleSaveProducts }}>
      {children}
    </ProductContext.Provider>
  )
}


export { ProductProvider, ProductContext }