import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarsList from "./components/cars/CarsList";

import Header from "./components/Header";

export default function AppRoutes(){
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/cars" element={<CarsList />} />
        </Routes>
      </BrowserRouter>
    );
  };