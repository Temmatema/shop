import { FC } from 'react'
import styles from './cartItems.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import CartItem from './CartItem'

const CartItems: FC = () => {
	const cart = useSelector((state: RootState) => state.cart)

  return (
		<div className={styles.wrap}>
			{Object.keys(cart).length ? (
				Object.entries(cart).map(([name, count]) => {
					return <CartItem count={count} name={name} key={name}/>
				})
			) : (
				<p>Cart is empty</p>
			)}
		</div>
	)
}

export default CartItems
