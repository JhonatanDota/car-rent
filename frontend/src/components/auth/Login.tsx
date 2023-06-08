import { useState } from "react";
import { FormEvent } from "react";
import { BsPersonFill, BsKeyFill } from "react-icons/bs";
import { LoginModel } from "../../models/LoginModel";
import { login } from "./requests";
import { EMAIL_REGEX } from "../../functions/regexs";
import { Toaster } from "react-hot-toast";
import { alertToast, failToast } from "../../functions/alerts";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();

    let loginData: LoginModel = {
      email: email,
      password: password,
    };

    if (fieldsHaveErrors(loginData)) return;

    try {
      await login(loginData)
        .then((response) => {
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
          window.location.replace("/dashboard")
        })
        .catch((error) => {
          let response = error.response;
          let statusCode = response.status;

          if (statusCode == 401) failToast("Credenciais não encontradas.");
          resetFields();
        });
    } catch {
      failToast("Ocorreu um erro interno, tente novamente mais tarde.");
    }
  }

  function fieldsHaveErrors(loginData: LoginModel): boolean {
    if (!EMAIL_REGEX.test(loginData.email)) {
      alertToast("Digite um email válido.");
      return true;
    }

    if (!loginData.password) {
      alertToast("Digite uma senha.");
      return true;
    }

    return false;
  }

  function resetFields() {
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex flex-col p-8 w-full">
      <Toaster />
      <div className="flex flex-col mb-4">
        <p className="text-xl md:text-3xl text-center font-bold">Login</p>
      </div>
      <div className="flex flex-col mb-4">
        <p className="text-xl md:text-3xl text-center font-bold">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-y-10 md:w-1/2 md:m-auto"
          >
            <div className="flex flex-col gap-2">
              <div className="border-[3px] justify-center flex items-center rounded-md shadow-md ">
                <div className="flex justify-center items-center w-8 md:w-14 h-10 md:h-14 text-lg md:text-3xl bg-gray-200 rounded-l-sm">
                  <BsPersonFill />
                </div>
                <input
                  placeholder="Email"
                  className="w-full font-bold px-3 h-10 md:h-14 text-gray-800 text-md md:text-2xl focus:outline-none"
                  type="text"
                  autoComplete="nope"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border-[3px] justify-center flex items-center rounded-md shadow-md ">
                <div className="flex justify-center items-center w-8 md:w-14 h-10 md:h-14 text-lg md:text-3xl bg-gray-200 rounded-l-sm">
                  <BsKeyFill />
                </div>
                <input
                  placeholder="Senha"
                  className="w-full font-bold px-3 h-10 md:h-14 text-gray-800 text-md md:text-2xl focus:outline-none"
                  type="password"
                  autoComplete="nope"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              className="bg-emerald-400 float-right text-white font-bold p-2 mt-2 text-lg rounded-lg"
              type="submit"
            >
              Entrar
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}
