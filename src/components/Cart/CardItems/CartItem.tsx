import { FC } from 'react'
import styles from './cartItems.module.css'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { decrementItem, deleteFromCart, incrementItem } from '../../../store/cartSlice'

interface ItemProps {
	name: string
	count: number
}

const CartItem: FC<ItemProps> = ({ name, count }) => {
	const dispatch = useDispatch()

  const decrementHandle = () => {
    dispatch(decrementItem(name))

    if(count <= 1)
      dispatch(deleteFromCart(name))
  }

	return (
		<div className={styles.item}>
			<div className={styles['inner-wrap']}>
				<p className={styles.heading}>{name}</p>
				<div className={styles['count-wrap']}>
					<button onClick={() => dispatch(incrementItem(name))}>+</button>
					<span>{count}</span>
					<button onClick={decrementHandle}>-</button>
				</div>
			</div>
			<button
				onClick={() => dispatch(deleteFromCart(name))}
				className={styles.delete}
			>
				<AiFillDelete />
			</button>
		</div>
	)
}

export default CartItem
