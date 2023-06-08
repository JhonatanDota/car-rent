import { useState } from "react";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX, NAME_REGEX } from "../../functions/regexs";
import {
  BsPersonFill,
  BsFillPersonLinesFill,
  BsKeyFill,
  BsFillEnvelopeFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import UserRegisterModel from "../../models/UserRegisterModel";
import { registerUser } from "./requests";
import { badRequestErrorsTratative } from "../../functions/exceptions";
import { Toaster } from "react-hot-toast";
import { successToast, failToast } from "../../functions/alerts";

export default function Register() {
  const [registerServerErrors, setRegisterServerErrors] = useState<
    Array<string>
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
      setIsLoading(true);

      await registerUser(userData)
        .then((_) => {
          successToast("Registrado com Sucesso!");
          setRegisterServerErrors([]);
          reset();
        })
        .catch((error) => {
          let response = error.response;
          let statusCode = response.status;

          if (statusCode == 400) {
            failToast("Revise os Campos.");
            setRegisterServerErrors(badRequestErrorsTratative(response.data));
          } else
            failToast("Ocorreu um erro interno, tente novamente mais tarde.");
        });
    } catch {
      failToast("Ocorreu um erro interno, tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col p-8 w-full">
      <Toaster />
      <div className="flex flex-col mb-4">
        <p className="text-xl md:text-3xl text-center font-bold">
          Crie sua conta
        </p>
      </div>
      <div className="text-md font-bold m-3 md:text-lg">
        {registerServerErrors.map((error) => (
          <div className="flex justify-center items-center gap-x-2">
            <p className="text-center">{error}</p>
            <BsFillExclamationCircleFill color="red" />
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col gap-y-6 md:w-1/2 md:m-auto md:gap-y-10"
      >
        <div className="flex flex-col gap-2">
          <div className="border-[3px] justify-center flex items-center rounded-md shadow-md ">
            <div className="flex justify-center items-center w-8 md:w-14 h-10 md:h-14 text-lg md:text-3xl bg-gray-200 rounded-l-sm">
              <BsPersonFill />
            </div>
            <input
              placeholder="Nome"
              className="w-full font-bold px-3 h-10 md:h-14 text-gray-800 text-md md:text-2xl focus:outline-none"
              type="text"
              autoComplete="nope"
              {...register("first_name", {
                required: true,
                pattern: NAME_REGEX,
                minLength: 3,
                maxLength: 70,
              })}
            />
          </div>
          <div className="text-xs text-center md:text-lg">
            {errors?.first_name?.type === "required" && (
              <p className="font-bold">O campo Nome é obrigatório.</p>
            )}
            {errors?.first_name?.type === "pattern" && (
              <p className="font-bold">
                O campo Nome deve conter apenas letras.
              </p>
            )}
            {errors?.first_name?.type === "minLength" && (
              <p className="font-bold">
                O campo Nome deve conter no mínimo 3 caracteres
              </p>
            )}
            {errors?.first_name?.type === "maxLength" && (
              <p className="font-bold">
                O campo Nome não deve conter mais que 70 caracteres
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="border-[3px] justify-center flex items-center rounded-md shadow-md">
            <div className="flex justify-center items-center w-8 md:w-14 h-10 md:h-14 text-lg md:text-3xl bg-gray-200 rounded-l-sm">
              <BsFillPersonLinesFill />
            </div>
            <input
              placeholder="Sobrenome"
              className="w-full font-bold px-3 h-10 md:h-14 text-gray-800 text-md md:text-2xl focus:outline-none"
              type="text"
              autoComplete="nope"
              {...register("last_name", {
                required: true,
                pattern: NAME_REGEX,
                minLength: 3,
                maxLength: 70,
              })}
            />
          </div>
          <div className="text-xs text-center md:text-lg">
            {errors?.last_name?.type === "required" && (
              <p className="font-bold">O campo Sobrenome é obrigatório.</p>
            )}
            {errors?.last_name?.type === "pattern" && (
              <p className="font-bold">
                O campo Sobrenome deve conter apenas letras.
              </p>
            )}
            {errors?.last_name?.type === "minLength" && (
              <p className="font-bold">
                O campo Sobrenome deve conter no mínimo 3 caracteres
              </p>
            )}
            {errors?.last_name?.type === "maxLength" && (
              <p className="font-bold">
                O campo Sobrenome não deve conter mais que 70 caracteres
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="border-[3px] justify-center flex items-center rounded-md shadow-md">
            <div className="flex justify-center items-center w-8 md:w-14 h-10 md:h-14 text-lg md:text-3xl bg-gray-200 rounded-l-sm">
              <BsFillEnvelopeFill />
            </div>
            <input
              placeholder="Email"
              className="w-full font-bold px-3 h-10 md:h-14 text-gray-800 text-md md:text-2xl focus:outline-none"
              type="email"
              autoComplete="nope"
              {...register("email", {
                required: true,
                pattern: EMAIL_REGEX,
              })}
            />
          </div>
          <div className="text-xs text-center md:text-lg">
            {errors?.email?.type === "required" && (
              <p className="font-bold">O campo Email é obrigatório.</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="font-bold">Email inválido.</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="border-[3px] justify-center flex items-center rounded-md shadow-md">
            <div className="flex justify-center items-center w-8 md:w-14 h-10 md:h-14 text-lg md:text-3xl bg-gray-200 rounded-l-sm">
              <BsKeyFill />
            </div>
            <input
              placeholder="Senha"
              className="w-full font-bold px-3 h-10 md:h-14 text-gray-800 text-md md:text-2xl focus:outline-none"
              type={showPassword ? "text" : "password"}
              autoComplete="nope"
              {...register("password", {
                required: true,
                pattern: PASSWORD_REGEX,
              })}
            />
            <button
              type="button"
              className="flex justify-center items-center w-8 md:w-14 h-10 md:h-14 text-lg md:text-3xl bg-gray-200 rounded-l-sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </button>
          </div>
          <div className="text-xs text-center  md:text-lg">
            {errors?.password?.type === "required" && (
              <p className="font-bold">O campo Senha é obrigatório.</p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="font-bold">
                O campo Senha precisa conter no mínimo 8 caracteres.
              </p>
            )}
          </div>
        </div>

        <button
          className="bg-emerald-400 float-right text-white font-bold p-2 mt-2 text-lg rounded-lg"
          type="submit"
          disabled={isLoading}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
