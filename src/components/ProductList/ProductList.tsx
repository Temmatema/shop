import { FC } from 'react'
import ProductItem from '../ProductItem/ProductItem.tsx'
import styles from './list.module.css'
import { IProductData } from '../../types/product.types.ts'

interface ListProps {
	data: IProductData[]
	isLoading: boolean;
}

const ProductList: FC<ListProps> = ({data, isLoading}) => {
	return (
		<div className={styles.wrap}>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				data.map((item) => {
					return <ProductItem key={item.id} id={item.id} props={item.attributes} />
				})
			)}
		</div>
	)
}

export default ProductList
