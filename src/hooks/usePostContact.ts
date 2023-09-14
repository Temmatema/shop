import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Dispatch, SetStateAction } from 'react'

interface IData {
	name: string
	phone: string
}

interface IContacts {
  name: string;
  phone: string
}

export const usePostContact = (data: IData, resetContacts: Dispatch<SetStateAction<IContacts>>) => {
	const cart = useSelector((state: RootState) => state.cart)

	return useMutation({
		mutationFn: async () => {
			try {
				return await axios.post('http://localhost:1337/api/contacts', {
					data: {
						name: data.name,
						phone: data.phone,
						products: cart,
					},
				})
			} catch (error) {
				return console.log(error)
			}
		},
		onSuccess: () => resetContacts({ name: '', phone: '' }),
	})
}
