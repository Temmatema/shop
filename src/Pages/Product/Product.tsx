import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchById } from '../../hooks/useFetchById'
import ProductInfo from '../../components/ProductInfo/ProductInfo'

const Product:FC = () => {
  const { id } = useParams()
  const { data, isLoading } = useFetchById(id || '')

  return (
    <>
      {
        isLoading ? <h1>Loading...</h1> : (data && <ProductInfo {...data?.data.attributes}/>)
      }
    </>
  )
}

export default Product