import { useState } from "react";
import { useProductActions } from "../../components/ProductsProvider/ProductsProvider";
import styles from "./search.module.css";

const SearchBar = ({ filter }) => {
	const dispatch = useProductActions();
	const [value, setvalue] = useState("");

	const changeHander = e => {
		console.log({ selectedOption: filter });
		dispatch({ type: "filter", selectedOption: filter });
		dispatch({ type: "search", event: e });
		setvalue(e.target.value);
	};
	return (
		<div className={styles.formControl}>
			<span>Search for : </span>
			<input
				type="text"
				placeholder="Searching for ..."
				onChange={changeHander}
				value={value}
			/>
		</div>
	);
};

export default SearchBar;
