import styles from "./products.module.css";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";
const Product = ({product , decerement,incerement,onDelete,inputChange}) => { //=> ba in kar destructur mikonim ke dige this.props nanevisim
  // console.log("product.js render"); 
  //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  useEffect(() => {
  
})
  return (
    <div className={styles.products} >
      <p>Name: {product.title} </p>
      <p>Price: {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      <button
        className={`${styles.btn} ${styles.inc} ${product.quantity === 1 ? styles.remove: null}`}
        onClick={decerement}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button
        className={`${styles.btn} ${styles.inc}`}
        onClick={incerement}
      >
        +
      </button>
      <button className={styles.btn} onClick={onDelete}>
        Delete
      </button>
      {/* <input className={styles.input} onChange={inputChange} value={product.title}/> */}
    </div>
  );
};

export default Product;
