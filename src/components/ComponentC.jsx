import { useContext } from "react";
import { CounterCtx } from "../context/CounterContext";
import { NameCtx } from "../context/NameContext";

export const ComponentC = () => {
    const { name } = useContext(NameCtx)
    const { counter } = useContext(CounterCtx)
    return (
        <div>
            <h1>Component C</h1>
            <span>Result is :  {name} n° {counter} </span>
        </div>
    )
    /*         
         (   <CounterCtx.Consumer>
                {
                    ({ counter }) => (
                        <NameCtx.Consumer>
                            {
                                (value) => {
                                    return (
                                        <div>
                                            <h1>Component C</h1>
                                            <span>Result is :  {value.name} n° {counter} </span>
                                        </div>
                                    )
                                }
                            }
                        </NameCtx.Consumer>
                    )
                }
            </CounterCtx.Consumer> ); */


}