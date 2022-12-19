import { api } from '../utils/GlobalConfigs/api';
import { IProducts } from '../interface/IProducts';
class ProductServices {
    async save(dataProducts: IProducts) {
        const { data } = await api.post('/products', dataProducts)
        return data
    }

    async update(dataProducts: IProducts) {
        console.log(dataProducts)
        await api.put(`/products/${dataProducts.id}`, dataProducts)
    }

    async delete(id: string | undefined) {
        await api.delete(`/products/${id}`)
    }

    async findById(id: string | undefined) {
        const { data } = await api.get(`/products/${id}`)
        return data
    }
}

export default new ProductServices()
