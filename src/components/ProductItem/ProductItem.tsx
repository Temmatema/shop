import { FC } from 'react'
import { IProduct } from '../../types/product.types'
import styles from './item.module.css'
import AddCartButton from './AddCartButton/AddCartButton'
import { useNavigate } from 'react-router-dom';

interface ItemProps {
	props: IProduct;
	id: number;
}

const ProductItem: FC<ItemProps> = ({id, props}) => {
	const url = 'http://localhost:1337' + props.img.data.attributes.url
	const navigate = useNavigate()

	return (
		<div className={styles.item}>
			<img onClick={() => navigate(`/product/${id}`)} className={styles.img} src={url} alt="Картинка" />
			<h1>{props.name}</h1>
			<div className={styles.info}>
				<b className={styles.price}>{props.price} ₽</b>
				<AddCartButton {...props}/>
			</div>
		</div>
	)
}

export default ProductItem
