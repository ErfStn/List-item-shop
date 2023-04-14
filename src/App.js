import NavBar from "./components/NavBar/NavBar";
import "./components/style.css";
import ProductList from "./components/ProductList/productList";
import Wrapper from "./components/hoc/Wrapper";
import ProductsProvider from "./components/ProductsProvider/ProductsProvider";
import Filter from "./components/Filter/Filter";

const App = () => {
	return (
		<>
			<ProductsProvider>
				<NavBar />
				<Filter />
				<ProductList />
			</ProductsProvider>
		</>
	);
};
export default Wrapper(App, "container");
