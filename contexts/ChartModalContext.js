import { createContext, useState } from 'react'

const ChartContext = createContext();

export function ChartContextProvider({ children }) {
    const [status, setStatus] = useState(false);

    return (
        <ChartContext.Provider value={{
            status,
            setStatus
        }}>
            {children}
        </ChartContext.Provider>
    )
}

export default ChartContext;