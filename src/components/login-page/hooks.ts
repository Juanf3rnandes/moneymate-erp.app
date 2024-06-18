import React from "react";
import { useAct, useForm, useService } from "@/providers";
import {
  postLoginRequest,
  postRegisterRequest,
} from "@/services/accounts/types";
import { LoginService } from "@/services/accounts";
import { useAuth } from "@/auth";
import { useRouter } from "next/router";

export default function useLoginController() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const auth = useAuth();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loginActiveButton, setLoginActiveButton] =
    React.useState<string>("entrar");

  const services = useService((h) => ({
    login: new LoginService(h),
  }));

  const formLogin = useForm<postLoginRequest>(
    {
      login: "",
      senha: "",
    },
    (f) => !!f.login && !!f.senha
  );

  const formRegister = useForm<postRegisterRequest>(
    {
      emaiL: "",
      nome: "",
      senha: "",
      cpf_cnpj: "",
    },
    (f) => !!f.emaiL && !!f.nome && !!f.senha
  );

  const loginAction = useAct(
    () =>
      services.login.postLogin({
        login: formLogin.value.login,
        senha: formLogin.value.senha,
      }),

    {
      onSuccess(response) {
        auth.authOn(response.results.data);
        router.push("/");
      },
      onError: () => {
        formLogin.reset();
      },
    }
  );

  const registerAction = useAct(
    () =>
      services.login.postRegister({
        emaiL: formRegister.value.emaiL,
        nome: formRegister.value.nome,
        senha: formRegister.value.senha,
        cpf_cnpj: formRegister.value.cpf_cnpj,
      }),
    {
      onSuccess: () => {
        formRegister.reset();
        setLoginActiveButton("entrar");
      },
    }
  );

  const postLogin = () => {
    loginAction();
  };

  const handlePostRegister = () => {
    registerAction();
  };

  return {
    loginAction,
    registerAction,
    loginActiveButton,
    formLogin,
    formRegister,
    postLogin,
    handlePostRegister,
  };
}
