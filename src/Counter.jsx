import { useState } from "react";

export const Counter = ()=>{
    const [count, setCount] = useState(0);
    
    const handleIncrement = ()=>{
        setCount(count+1);
    }
    return (

    <>
    <h1>count : {count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    </>
    )
}
