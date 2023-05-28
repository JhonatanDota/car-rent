import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CarsList from "./components/cars/CarsList";
import CarCard from "./components/cars/CarCard";

import Header from "./components/Header";

export default function AppRoutes(){
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cars" element={<CarsList />} />
          <Route path="/car/:id" element={<CarCard />} />
        </Routes>
      </BrowserRouter>
    );
  };