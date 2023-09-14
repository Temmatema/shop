export interface IProduct {
	name: string
	description: string
	price: number
	img: {
		data: {
			attributes: {
				url: string
			}
		}
	}
}

export interface IProductData {
	id: number
	attributes: IProduct
}
