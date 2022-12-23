import { useState, useEffect } from "react";
import { IClient } from "../../interface/IClient";
import { INITIAL_CLIENTE } from "../StatesInitials/Client"

import ClientService from "../../services/ClientService";
import { IProducts } from "../../interface/IProducts";
import { INITIAL_PRODUCT } from "../StatesInitials/Product";
import ProductService from "../../services/ProductService";

export function useGlobal(){
  const [client, setClient] = useState<IClient | IClient[]>(INITIAL_CLIENTE);
  const [clientSelectBox, setClientSelectBox] = useState<IClient[]>([])
  const [produtos, setProdutos] = useState<IProducts>((INITIAL_PRODUCT));
  const [produtoSelectBox, setProdutoSelectBox] = useState<IProducts[]>([])

  useEffect(() =>{
    getClientesFromSelectBox()
    getProductsFromSelectBox()
  }, [])

  useEffect(() =>{
    getClientesFromSelectBox()
  }, [client])

  useEffect(() =>{
    getProductsFromSelectBox()
  }, [produtos])

  const getClientesFromSelectBox = async () => {
    try {
      const { data } = await ClientService.getFromSelectBox()
      setClientSelectBox(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getProductsFromSelectBox = async () => {
    try {
      const { data } = await ProductService.getFromSelectBox()
      setProdutoSelectBox(data)
    } catch (error) {
      console.log(error)
    }
  }

  return{client, setClient, getClientesFromSelectBox, clientSelectBox, produtos, setProdutos, getProductsFromSelectBox, produtoSelectBox}
}