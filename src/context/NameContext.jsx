import { createContext, useState } from "react";

export const NameCtx = createContext('Cours ');
NameCtx.displayName = "Name"

const NameCtxProvider = (props) => {
    const [name, setName] = useState('Cours')

    const value = { name, setName }
    return (
        <NameCtx.Provider value={value}>
            {props.children}
        </NameCtx.Provider>
    )
}

export default NameCtxProvider