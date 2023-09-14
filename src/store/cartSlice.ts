import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../types/product.types'

const initialState: Record<string, number> = {}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload: { name } }: PayloadAction<IProduct>) => {
			if (!(name in state)) {
				state[name] = 1
			}
		},
		deleteFromCart: (state, { payload }) => {
			delete state[payload]
		},
		incrementItem: (state, { payload }) => {
			state[payload] += 1
		},
    decrementItem: (state, { payload }) => {
			state[payload] -= 1
		},
	},
})

export const { addToCart, deleteFromCart, decrementItem, incrementItem } = cartSlice.actions
