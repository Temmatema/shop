import ProductService from '../services/service'
import { useQuery } from "@tanstack/react-query"
import { IProductData } from "../types/product.types"

interface IPromise {
	data: IProductData[]
}

export const useFetchProducts = () => {
  return useQuery({
		queryKey: ['products'],
		queryFn: (): Promise<IPromise> => ProductService.getAll(),
		staleTime: 0,
		refetchOnWindowFocus: false,
	})
}