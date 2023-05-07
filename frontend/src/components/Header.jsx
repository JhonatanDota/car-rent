import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-around h-24 bg-slate-700">
      <h1>Header</h1>
      <div className="flex justify-between">
        <NavLink to="/cars">
          <button className="text-sm md:text-lg ml-4 md:ml-6 p-2 md:p-4 bg-orange-500 rounded-lg">
            Carros
          </button>
        </NavLink>

        <button className="text-sm md:text-lg ml-4 md:ml-6 p-2 md:p-4 bg-blue-500 rounded-lg">
          Login
        </button>
        <button className="text-sm md:text-lg ml-4 md:ml-6 p-2 md:p-4 bg-blue-500 rounded-lg">
          Cadastro
        </button>
      </div>
    </div>
  );
}
