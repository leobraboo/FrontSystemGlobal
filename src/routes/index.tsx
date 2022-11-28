import { Routes, Route } from "react-router-dom";
import { Carrying } from "../page/carrying";
import { Clients } from "../page/Clients";
import { Configs } from "../page/Configs";
import { Financial } from "../page/financial";
import { Grafics } from "../page/graphics";
import {Home} from "../page/Home";
import { PageLogin } from "../page/Login";
import { NoteFiscale } from "../page/NoteFiscale";
import { Products } from "../page/Products/Index";
import { Reports } from "../page/reports";
import { Sales } from "../page/Sales";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageLogin />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Carrying" element={<Carrying />}></Route>
      <Route path="/Clients" element={<Clients />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/Financial" element={<Financial />}></Route>
      <Route path="/Grafics" element={<Grafics />}></Route>
      <Route path="/NoteFiscale" element={<NoteFiscale />}></Route>
      <Route path="/Reports" element={<Reports />}></Route>
      <Route path="/Sales" element={<Sales />}></Route>
      <Route path="/Configs" element={<Configs />}></Route>
    </Routes>
  )
}