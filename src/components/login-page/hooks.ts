import React from "react";
import { Form, useAct, useForm, useService } from "@/providers";
import { postLoginRequest } from "@/services/accounts/types";
import { LoginService } from "@/services/accounts";

export default function useLoginController() {
  const [loginActiveButton, setLoginActiveButton] =
    React.useState<string>("entrar");

  const loginService = useService((h) => ({
    login: new LoginService(h),
  }));

  const formLogin = useForm<postLoginRequest>(
    {
      email: "",
      password: "",
    },
    (f) => !!f.email && !!f.password
  );

  const loginAction = useAct(() =>
    loginService.login.postLogin({
      email: formLogin.value.email,
      password: formLogin.value.password,
    })
  );

  const postLogin = () => {
    loginAction();
  };

  return {
    loginActiveButton,
    formLogin,
    postLogin,
  };
}
