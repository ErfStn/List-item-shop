import withCounter from "../hoc/withCount";
const HoverCounter = ({ count, increment }) => {
    return (<div> <h2 onMouseOver={increment}>Hovered {count} times</h2></div> );
}
 
export default withCounter(HoverCounter,5);