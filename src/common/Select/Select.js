import styles from "./select.module.css";
import Select from "react-select";
const SelectComponent = ({ title, ...rest }) => { //=> ba rest operator props haro mizare dakhele ye object 
  return (
    <div className={styles.selectContainer}>
      <span>{title}</span>
      <Select {...rest} className={styles.selectInput} />
    </div>
  );
};

export default SelectComponent;
