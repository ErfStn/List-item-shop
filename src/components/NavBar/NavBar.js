import { useProducts } from "../ProductsProvider/ProductsProvider";
import styles from "./navBar.module.css";
const NavBar = () => {
  // console.log("navbar.js render");
  const products = useProducts();
  const totalItem = products.filter((p) => p.quantity > 0).length;
  return (
    <div>
      <header className={styles.navBar}>
        <h2>Course Shop</h2>
        <span className={styles.totalItem}>{totalItem}</span>
      </header>
    </div>
  );
};

export default NavBar;
