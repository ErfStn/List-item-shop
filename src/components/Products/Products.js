import styles from "./products.module.css";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";
const Product = ({
	product,
	decerement,
	incerement,
	onDelete,
	inputChange,
}) => {
	//=> ba in kar destructur mikonim ke dige this.props nanevisim
	// console.log("product.js render");
	//WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
	useEffect(() => {});
	return (
		<div className={styles.products}>
			<div>
				<p className={styles.name}>{product.title}</p>
			</div>
			<div className={styles.flexPorduct}>
				{" "}
				<p>Price: {product.price}</p>
				<span className={styles.value}>{product.quantity}</span>
			</div>
			<div className={styles.flexPorduct}>
				<button className={`${styles.btn} ${styles.inc}`} onClick={decerement}>
					-
				</button>
				<button className={`${styles.btn} ${styles.inc}`} onClick={incerement}>
					+
				</button>
				<button className={`${styles.btn} ${styles.remove}`} onClick={onDelete}>
					<BiTrash />
				</button>
			</div>

			{/* <input className={styles.input} onChange={inputChange} value={product.title}/> */}
		</div>
	);
};

export default Product;
