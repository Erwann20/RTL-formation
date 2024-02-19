import { useState } from "react"
import { formatNumberToString } from "./Counter.util"

const useCounter = () => {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        if (counter === 0) return
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(0)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}


/**
 * React component for a counter.
 *
 * @return {JSX.Element} The rendered counter component.
 */
export const Counter = () => {
    const {counter, increment, decrement, reset} = useCounter()
    return (
        <div>
            <button onClick={decrement}>-</button>
            <label data-testid="counter">{formatNumberToString(counter)}</label>
            <button onClick={increment}>+</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}