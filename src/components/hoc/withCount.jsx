import { useState } from "react";

const withCounter = (WrappedComponent,number) => {
    const UpdatedComponent = (props) => {
        // logics
        const [count, setCount] = useState(0);
        const increment = () => {
            setCount(count + number)
        };

        return <WrappedComponent count={count} increment={increment} {...props} />
    };
    return UpdatedComponent;
}
 
export default withCounter;