import { createContext } from "react";
import { UseClient } from "../../shared/Hooks/useClient";

interface AuxProps {
  children: JSX.Element[] | JSX.Element
}

const ClientContext = createContext({})

function ClientProvider({ children }: AuxProps) {
  const { handleChange , handleSaveOrUpdate } = UseClient()

  return (
    <ClientContext.Provider value={{ handleChange, handleSaveOrUpdate }}>
      {children}
    </ClientContext.Provider>
  )
}


export { ClientProvider, ClientContext }