import { CClient } from '../../components/Clientes'
import { ClientProvider } from '../../shared/Context/ClientContext'

export function Clients() {
  return (
    <div>
      <ClientProvider>
        <CClient />
      </ClientProvider>
    </div>
  )
}