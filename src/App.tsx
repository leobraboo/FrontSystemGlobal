import { NavHome }  from './components/navHome'
import { AppRoutes } from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavHome colapse />
      <AppRoutes />
    </>
  )
}

export default App
