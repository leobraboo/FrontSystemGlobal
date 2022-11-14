import { AppRoutes } from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavHome } from "./components/Navegation/navHome";

function App() {
  return (
    <>
      <NavHome colapse />
      <AppRoutes />
    </>
  )
}

export default App
