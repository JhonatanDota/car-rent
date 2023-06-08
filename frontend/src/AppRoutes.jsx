import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import CarsList from "./components/cars/CarsList";
import CarCard from "./components/cars/CarCard";
import { isLogged } from "./config";

import Header from "./components/Header";

export default function AppRoutes(){
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/login" element={isLogged()} />
          <Route path="/register" element={<Register />} />
          <Route path="/cars" element={<CarsList />} />
          <Route path="/car/:id" element={<CarCard />} />
        </Routes>
      </BrowserRouter>
    );
  };