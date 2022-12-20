import { api } from '../utils/GlobalConfigs/api';
import { IClient } from '../interface/IClient';
class ClientService {
  async save(dataCliente: IClient) {
    const { data } = await api.post('/customers', dataCliente)
    return data
  }

  async update(dataCliente: IClient) {
    await api.put(`/customers/${dataCliente.id}`, dataCliente)
  }

  async delete(id: string | undefined) {
    await api.delete(`/customers/${id}`)
  }

  async findById(id: string | undefined) {
    const { data } = await api.get(`/customers/${id}`)
    return data
  }
}

export default new ClientService()
