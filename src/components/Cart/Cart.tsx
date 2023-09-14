import { FC, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from './cart.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import CartItems from './CardItems/CartItems'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const cart = useSelector((state: RootState) => state.cart)

	return (
		<div className={styles.wrap}>
			<button onClick={() => setIsOpen(!isOpen)} className={styles.btn}>
				<AiOutlineShoppingCart />
				<span>{Object.keys(cart).length}</span>
			</button>
			{isOpen ? <CartItems /> : null}
		</div>
	)
}

export default Cart
