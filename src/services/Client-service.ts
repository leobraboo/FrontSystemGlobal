import { api } from '../utils/GlobalConfigs/api';
import { ICliente } from '../interface/Iclient';
class ClienteService {
  async save(dataCliente: ICliente) {
    const { data } = await api.post('/customers', dataCliente)
    return data
  }

  async update(dataCliente: ICliente) {
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

export default new ClienteService()
