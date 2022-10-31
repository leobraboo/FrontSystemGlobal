import { AppRoutes } from "./routes"
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageSide } from "./page/SideBar";

function App() {
  return (
    <>
      <PageSide />
      <AppRoutes />
    </>
  )
}

export default App
