import { useState, useCallback, useContext } from 'react';

import { INITIAL_CLIENTE } from '../StatesInitials/Client';
import ClientService from '../../services/ClientService';
import { IClient } from '../../interface/IClient';
import { GlobalContext } from '../Context/globalContext';
import { toast } from "react-toastify";

export function UseClient() {
  const { client, setClient } = useContext(GlobalContext) as { client: IClient, setClient: (value: IClient) => void }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value })
  }, [client]);

  const save = async () => {
    try {
      const result = await ClientService.save(client as IClient)
      setClient({ ...client, id:result.id})

      toast("Salvo com sucesso! 🦄", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error , {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleSaveOrUpdate = async () => {
    client?.id === "" ? save() : "teste"
  }
  return { handleChange, handleSaveOrUpdate }
}