import React from "react";
import { useForm } from "react-hook-form";

export default function LoginPageController() {
  const [loginActiveButton, setLoginActiveButton] = React.useState("entrar");

  return {
    loginActiveButton,
  };
}
