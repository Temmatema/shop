import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacts from './Pages/Contacts/Contacts'
import Product from './Pages/Product/Product'
import { useFetchProducts } from './hooks/useFetchProducts'

function App() {
	const { data, isLoading } = useFetchProducts()

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							data && <ProductList isLoading={isLoading} data={data.data} />
						}
					/>
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/product/:id" element={<Product />} />
				</Routes>
				<Cart />
			</BrowserRouter>
		</Provider>
	)
}

export default App
