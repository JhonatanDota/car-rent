import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/auth/Register";
import CarsList from "./components/cars/CarsList";
import CarCard from "./components/cars/CarCard";
import { authCheck, isLogged } from "./config";

import Header from "./components/Header";
import Dashboard from "./components/dashboard/Dashboard";

export default function AppRoutes(){
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/login" element={isLogged()} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={authCheck(<Dashboard />)} />
          <Route path="/cars" element={<CarsList />} />
          <Route path="/car/:id" element={<CarCard />} />
        </Routes>
      </BrowserRouter>
    );
  };