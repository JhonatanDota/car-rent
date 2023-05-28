import { NavLink } from "react-router-dom";
import headerIcon from "../images/headerIcon.png"

export default function Header() {
  return (
    <div className="flex items-center justify-around h-20 bg-slate-400">
      <img className="h-[80%] md:h-[100%] p-2" src={headerIcon} alt="icon" />
      <div className="flex justify-between gap-x-4">
        <NavLink to="/cars">
          <button className="font-bold text-sm md:text-lg p-2 bg-purple-200 rounded-lg">
            Carros
          </button>
        </NavLink>

        <button className="font-bold text-sm md:text-lg p-2 bg-white rounded-lg">
          Login
        </button>
        <button className="font-bold text-sm md:text-lg p-2 bg-white rounded-lg">
          Cadastro
        </button>
      </div>
    </div>
  );
}
