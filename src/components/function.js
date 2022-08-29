import { useState } from "react";

const HookCounter = () => {
    const [count, setCount] = useState(0)//=> meghdar = 0
    const addOneHandler = () => {
        setCount(count + 1)
    }
    const addTweHandler = () => {
        setCount(count + 2)
    }
    const addFiveHandler = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount=>prevCount+1)
        }
    }
    
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={addOneHandler}>add one</button>
            <button onClick={addTweHandler}>add two</button>
            <button onClick={addFiveHandler}>add five</button>
    </div>
)    
}

export default HookCounter;