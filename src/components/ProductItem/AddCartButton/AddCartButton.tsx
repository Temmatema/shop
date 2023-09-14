import { FC } from 'react'
import { addToCart, incrementItem, decrementItem, deleteFromCart } from '../../../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { IProduct } from '../../../types/product.types'
import styles from './addCard.module.css'
import { RootState } from '../../../store/store'

const AddCartButton:FC<IProduct> = (props) => {
	const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart)
  
  const addButtonHandler = () => {
		dispatch(addToCart(props))
	}

  const decrementHandle = () => {
    dispatch(decrementItem(props.name))

    if(cart[props.name] <= 1)
      dispatch(deleteFromCart(props.name))
  }

  return (
    <> 
    {
      cart[props.name] ? 
      <div className={styles.wrap}>
        <button onClick={decrementHandle}>-</button>
        <span>{cart[props.name]}</span>
        <button onClick={() => dispatch(incrementItem(props.name))}>+</button>
      </div> :
      <button onClick={addButtonHandler}>Add to cart</button>
    }
    </>
  )
}

export default AddCartButton