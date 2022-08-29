import withCounter from "../hoc/withCount";
const ClickCounter = ({ count, increment ,name}) => {
    console.log(name);
    
    return (<div> <h2 onClick={increment}>clicked {count} times</h2></div> );
}
 
export default withCounter(ClickCounter,10);