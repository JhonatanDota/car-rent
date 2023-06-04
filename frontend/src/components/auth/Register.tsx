import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsPersonFill } from "react-icons/bs";
import UserRegisterModel from "../../models/UserRegisterModel";
import { registerUser } from "./requests";
import { badRequestErrorsTratative } from "../../functions/exceptions";

export default function Register() {
  const [registerServerErrors, setRegisterServerErrors] = useState <Array<string>>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserRegisterModel>();

  async function onSubmit(event: UserRegisterModel) {
    let userData = {
      first_name: event.first_name,
      last_name: event.last_name,
      email: event.email,
      password: event.password,
    };

    try {
      await registerUser(userData)
        .then(_ => {
          setRegisterServerErrors([]);
          reset();
        })
        .catch((error) => {
          let response = error.response;
          let statusCode = response.status;

          if(statusCode == 400)
            setRegisterServerErrors(badRequestErrorsTratative(response.data));
          else
            console.log("teste")
        });
    } catch {}
  }

  return (
    <div className="flex flex-col p-10 w-full">
      {registerServerErrors.map((error) => (
        <h1>{error}</h1>
      ))}
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col gap-y-6"
      >
        <div className="flex flex-col gap-2">
          <div className="border-[3px] justify-center flex items-center rounded-md shadow-md ">
            <div className="flex justify-center items-center w-8 lg:w-14 h-10 lg:h-14 text-lg lg:text-3xl bg-gray-200 rounded-l-sm">
              <BsPersonFill className="text-gray-800" />
            </div>
            <input
              placeholder="Nome"
              className="w-full font-bold px-3 h-10 lg:h-14 text-gray-800 text-md lg:text-2xl focus:outline-none"
              type="text"
              autoComplete="nope"
              {...register("first_name", {
                required: true,
                pattern: /^[a-zA-ZÀ-ÿ ]+$/i,
                minLength: 3,
                maxLength: 70,
              })}
            />
          </div>
          <div className="text-sm lg:text-xl text-center">
            {errors?.first_name?.type === "required" && (
              <p>
                O campo <span className="has-text-weight-bold">Nome</span> é
                obrigatório.
              </p>
            )}
            {errors?.first_name?.type === "pattern" && (
              <p>
                O campo <span className="has-text-weight-bold">Nome</span> deve
                conter apenas letras.
              </p>
            )}
            {errors?.first_name?.type === "minLength" && (
              <p>
                O campo <span className="has-text-weight-bold">Nome</span> deve
                conter no mínimo 3 caracteres
              </p>
            )}
            {errors?.first_name?.type === "maxLength" && (
              <p>
                O campo <span className="has-text-weight-bold">Nome</span> não
                deve conter mais que 70 caracteres
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="border-[3px] justify-center flex items-center rounded-md shadow-md">
            <div className="flex justify-center items-center w-8 lg:w-14 h-10 lg:h-14 text-lg lg:text-3xl bg-gray-200 rounded-l-sm">
              <BsPersonFill className="text-gray-800" />
            </div>
            <input
              placeholder="Sobrenome"
              className="w-full font-bold px-3 h-10 lg:h-14 text-gray-800 text-md lg:text-2xl focus:outline-none"
              type="text"
              autoComplete="nope"
              {...register("last_name", {
                required: true,
                pattern: /^[a-zA-ZÀ-ÿ ]+$/i,
                minLength: 3,
                maxLength: 70,
              })}
            />
          </div>
          <div className="text-sm lg:text-xl text-center">
            {errors?.last_name?.type === "required" && (
              <p>
                O campo <span className="has-text-weight-bold">Sobrenome</span>{" "}
                é obrigatório.
              </p>
            )}
            {errors?.last_name?.type === "pattern" && (
              <p>
                O campo <span className="has-text-weight-bold">Sobrenome</span>{" "}
                deve conter apenas letras.
              </p>
            )}
            {errors?.last_name?.type === "minLength" && (
              <p>
                O campo <span className="has-text-weight-bold">Sobrenome</span>{" "}
                deve conter no mínimo 3 caracteres
              </p>
            )}
            {errors?.last_name?.type === "maxLength" && (
              <p>
                O campo <span className="has-text-weight-bold">Sobrenome</span>{" "}
                não deve conter mais que 70 caracteres
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="border-[3px] justify-center flex items-center rounded-md shadow-md">
            <div className="flex justify-center items-center w-8 lg:w-14 h-10 lg:h-14 text-lg lg:text-3xl bg-gray-200 rounded-l-sm">
              <BsPersonFill className="text-gray-800" />
            </div>
            <input
              placeholder="Email"
              className="w-full font-bold px-3 h-10 lg:h-14 text-gray-800 text-md lg:text-2xl focus:outline-none"
              type="email"
              autoComplete="nope"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />
          </div>
          <div className="text-sm lg:text-xl text-center">
            {errors?.email?.type === "required" && (
              <p>
                O campo <span className="has-text-weight-bold">Email</span> é
                obrigatório.
              </p>
            )}
            {errors?.email?.type === "pattern" && (
              <p>
                <span className="has-text-weight-bold">Email</span> inválido.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="border-[3px] justify-center flex items-center rounded-md shadow-md">
            <div className="flex justify-center items-center w-8 lg:w-14 h-10 lg:h-14 text-lg lg:text-3xl bg-gray-200 rounded-l-sm">
              <BsPersonFill className="text-gray-800" />
            </div>
            <input
              placeholder="Senha"
              className="w-full font-bold px-3 h-10 lg:h-14 text-gray-800 text-md lg:text-2xl focus:outline-none"
              type="password"
              autoComplete="nope"
              {...register("password", {
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}/,
              })}
            />
          </div>
          <div className="text-sm lg:text-xl text-center">
            {errors?.password?.type === "required" && (
              <p>
                O campo <span className="has-text-weight-bold">Senha</span> é
                obrigatório.
              </p>
            )}
            {errors?.password?.type === "pattern" && (
              <p>
                O campo <span className="has-text-weight-bold">Senha </span>
                precisa conter no mínimo 8 caracteres, 1 letra e 1 número.
              </p>
            )}
          </div>
        </div>

        <button
          className="bg-emerald-400 float-right text-white font-bold p-2 mt-2 text-lg rounded-lg"
          type="submit"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
