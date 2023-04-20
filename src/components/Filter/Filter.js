import { useState } from "react";
import { useProductActions } from "../ProductsProvider/ProductsProvider";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/Search/Search";
const filterOption = [
	{ value: "", label: "ALL" },
	{ value: "XS", label: "XS" },
	{ value: "S", label: "S" },
	{ value: "M", label: "M" },
	{ value: "L", label: "L" },
	{ value: "XL", label: "XL" },
	{ value: "XXL", label: "XXL" },
];
const sortOptions = [
	{ value: "highest", label: "highest" },
	{ value: "lowest", label: "lowest" },
];
const Filter = () => {
	const dispatch = useProductActions();
	const [filter, setFilter] = useState("");
	const [sort, setSort] = useState("");
	const [click, setClick] = useState(false);

	const filterHander = selectedOption => {
		dispatch({ type: "filter", selectedOption });
		dispatch({ type: "sort", selectedOption: sort });
		setFilter(selectedOption);
	};
	const sortHandler = selectedOption => {
		dispatch({ type: "sort", selectedOption });
		setSort(selectedOption);
	};

	return (
		<section>
			<SearchBar filter={filter ? filter : filterOption[0]} click={click} />
			<div className={styles.filter}>
				{/* <p>Filter product based on: </p> */}

				<SelectComponent
					//   value={filter}
					onClick={() => setClick(!click)}
					onChange={filterHander}
					options={filterOption}
					title="Filter by size:"
					// value={filterOption.filter(option => option.label === "ALL")}
					defaultValue={filterOption[0].label}
				/>
				<SelectComponent
					value={sort}
					onChange={sortHandler}
					options={sortOptions}
					title="Sort by price:"
				/>
			</div>
		</section>
	);
};

export default Filter;
