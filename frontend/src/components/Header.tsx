import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";


import headerIcon from "../images/headerIcon.png"

export default function Header() {
  const {user} = useContext(UserContext);
  
  return (
    <div className="flex items-center justify-around h-20 bg-slate-400">
      <img className="h-[80%] md:h-[100%] p-2" src={headerIcon} alt="icon" />
      <div className="flex justify-between gap-x-4">
        <NavLink to="/cars">
          <button className="font-bold text-sm md:text-lg p-2 bg-purple-200 rounded-lg">
            Carros
          </button>
        </NavLink>

        {
          user ? (
            <h1>sad</h1>
          ):(
        
          <>
        <NavLink to="/login">
        <button className="font-bold text-sm md:text-lg p-2 bg-white rounded-lg">
          Login
        </button>
        </NavLink>
        <NavLink to="/register">
        <button className="font-bold text-sm md:text-lg p-2 bg-white rounded-lg">
          Cadastro
        </button>
        </NavLink>
          </>)}
      </div>
    </div>
  );
}
