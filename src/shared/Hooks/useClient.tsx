import { useState, useCallback, useContext } from 'react';

import { INITIAL_CLIENTE } from '../StatesInitials/Client';
import ClientService from '../../services/ClientService';
import { IClient } from '../../interface/IClient';
import { GlobalContext } from '../Context/globalContext';

export function UseClient() {
  const { client, setClient, getClientesFromSelectBox } = useContext(GlobalContext) as { client: IClient, setClient: (value: IClient) => void, getClientesFromSelectBox: () => void }

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value })
  }, [client]);

  const save = async () => {
    try {
      const result = await ClientService.save(client as IClient)
      setClient({ ...client, id:result.id})
    } catch (error: any) {

    }
  }

  const handleSaveOrUpdate = async () => {
    client?.id === "" ? save() : "teste"
  }
  return {
    handleChange
  }
}