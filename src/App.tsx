import { AppRoutes } from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavHome } from "./components/Navegation/navHome";
import { NavBar } from "./components/Navegation/navBar";

function App() {
  return (
    <>
      <NavBar/>
      <NavHome colapse />
      <AppRoutes />
    </>
  )
}

export default App
