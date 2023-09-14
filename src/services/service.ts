import axios from 'axios'

class ProductService {
	private URL = 'http://localhost:1337/api/products?populate=*'
	private ID_URL = 'http://localhost:1337/api/products/'

	async getAll() {
		return axios.get(this.URL).then((res) => res.data)
	}

	async getById(id: string) {
		return axios.get(this.ID_URL + id + '?populate=*').then((res) => res.data)
	}
}

export default new ProductService()
