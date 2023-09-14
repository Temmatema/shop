import { useQuery } from "@tanstack/react-query"
import { IProductData } from "../types/product.types"
import ProductService from '../services/service'

interface IPromise {
	data: IProductData  
}

export const useFetchById = (id: string) => {
  return useQuery({
		queryKey: ['products', id],
		queryFn: (): Promise<IPromise> => ProductService.getById(id),
		staleTime: 0,
		refetchOnWindowFocus: false,
	})
}