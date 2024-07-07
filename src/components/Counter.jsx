import { useContext } from "react";
import { CounterCtx } from "../context/CounterContext";

export const Counter = () => {
    const {counter, increaseCounter, decreaseCounter } = useContext(CounterCtx)
    return (
        <div>
            <h3>Counter value is {counter}</h3>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
        </div>
    )
/*     return (
        <CounterCtx.Consumer>
            {(value) => {
                return (
                    <div>
                        <h3>Counter value is {value.counter}</h3>
                        <button onClick={value.increaseCounter}>Increase</button>
                        <button onClick={value.decreaseCounter}>Decrease</button>
                    </div>
                )
            }}

        </CounterCtx.Consumer>

    ); */
}