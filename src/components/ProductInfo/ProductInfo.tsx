import { FC } from 'react'
import { IProduct } from '../../types/product.types'
import styles from './info.module.css'
import AddCartButton from '../ProductItem/AddCartButton/AddCartButton'

const ProductInfo: FC<IProduct> = (props) => {
	const url = 'http://localhost:1337' + props.img.data.attributes.url

	return (
		<div className={styles.info}>
			<img alt="Картинка" src={url} />
			<div className={styles.info_wrap}>
				<h1>{props.name}</h1>
				<p>{props.description}</p>
				<div className={styles.price_wrap}>
					<b>{props.price} ₽</b>
          <AddCartButton {...props}/>
				</div>
			</div>
		</div>
	)
}

export default ProductInfo
