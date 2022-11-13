import { useState } from "react";

export const Counter = () => {
    const [count,setCount] = useState(0);
    const [amount,setAmount] = useState(0);
    return (
        <div>
            <h1>count - {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Click me </button>
            
                <input 
                type={'number'}
                name='amount'
                value={amount}
                onChange={(e)=>{setAmount(parseInt(e.target.value))}}
                />
            <button onClick={()=>{setCount(amount)}}>set</button>

        </div>
    );
}