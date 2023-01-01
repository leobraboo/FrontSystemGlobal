import { useCallback, useContext, useState } from 'react';

import ProductService from '../../services/ProductService';
import { IProducts } from '../../interface/IProducts';

import { GlobalContext } from '../Context/globalContext';
import { toast } from 'react-toastify';

export function UseProduct() {
  const { produtos, setProdutos } = useContext(GlobalContext) as { produtos: IProducts, setProdutos: (value: IProducts) => void }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value })
  }, [produtos]);

  const saveProducts = async () => {
    try {
      const result = await ProductService.save(produtos as IProducts)
      setProdutos({...produtos,id: result.id});
    } catch (error: any) {
      toast.error(error);
    }
  }

    const handleSaveProducts = async () => {
      produtos?.id === "" ? saveProducts() : "teste"
    }

    return { handleChange, handleSaveProducts }

  }
