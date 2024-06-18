import {
  Alert,
  Button,
  FormControl,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { rotatingIcon, spinKeyframes } from "@/providers/animations";

import {
  postLoginRequest,
  postRegisterRequest,
} from "@/services/accounts/types";
import { Action, Form } from "@/providers";
import AutorenewIcon from "@mui/icons-material/Autorenew";

interface LoginTextFieldProps {
  formLogin: Form<postLoginRequest>;
  formRegister: Form<postRegisterRequest>;
  formCadastro: postRegisterRequest;
  activeFormButton: string;
  handleButtonClick: (button: string) => void;
  actionLogin: Action<postLoginRequest>;
  actionRegister: Action<postRegisterRequest>;
  onSave: () => void;
  onRegister: () => void;
}

export default function LoginTextField({
  actionLogin,
  actionRegister,
  formLogin,
  formRegister,
  onSave,
  onRegister,
}: LoginTextFieldProps) {
  const [activeButton, setActiveButton] = useState("entrar");

  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <Grid container justifyContent="space-around" alignContent="center">
      <Grid container justifyContent="center" alignItems="center">
        <Stack alignItems="center" gap="20px">
          {actionLogin.error && (
            <Alert severity="error" onClose={actionLogin.closeMsg}>
              {actionLogin.error}
            </Alert>
          )}

          {actionRegister.success && (
            <Alert severity="success" onClose={actionRegister.closeMsg}>
              Registro efetuado com sucesso!
            </Alert>
          )}

          {actionRegister.error && (
            <Alert severity="error" onClose={actionRegister.closeMsg}>
              erro ao efetuar cadastro! por favor tente mais tarde.
            </Alert>
          )}
          <Stack gap="20px" direction="row">
            <Button
              onClick={() => handleButtonClick("entrar")}
              variant={activeButton === "entrar" ? "contained" : "outlined"}
            >
              Entrar
            </Button>
            <Button
              onClick={() => handleButtonClick("cadastrar")}
              variant={activeButton === "cadastrar" ? "contained" : "outlined"}
            >
              Cadastrar
            </Button>
          </Stack>
          <Stack gap="20px">
            {activeButton === "entrar" ? (
              <FormControl>
                <Stack gap=" 20px" width="300px">
                  <TextField
                    required
                    variant="standard"
                    placeholder="E-mail/Usuário"
                    value={formLogin.value.login}
                    onChange={(e) => formLogin.set("login")(e.target.value)}
                  ></TextField>
                  <TextField
                    required
                    variant="standard"
                    placeholder="Senha"
                    type="password"
                    value={formLogin.value.senha}
                    onChange={(e) => formLogin.set("senha")(e.target.value)}
                  />
                </Stack>
                {actionLogin.loading ? (
                  <LoadingButton sx={spinKeyframes}>
                    <AutorenewIcon sx={rotatingIcon} />
                  </LoadingButton>
                ) : (
                  <Button onClick={onSave}>Entrar</Button>
                )}
              </FormControl>
            ) : (
              <FormControl>
                <Stack gap=" 20px" width="300px">
                  <TextField
                    required
                    variant="standard"
                    placeholder="CPF"
                    value={formRegister.value.cpf_cnpj}
                    onChange={(e) =>
                      formRegister.set("cpf_cnpj")(e.target.value)
                    }
                  ></TextField>
                  <TextField
                    required
                    variant="standard"
                    placeholder="Nome"
                    value={formRegister.value.nome}
                    onChange={(e) => formRegister.set("nome")(e.target.value)}
                  ></TextField>
                  <TextField
                    required
                    variant="standard"
                    placeholder="E-mail"
                    value={formRegister.value.emaiL}
                    onChange={(e) => formRegister.set("emaiL")(e.target.value)}
                  />
                  <TextField
                    required
                    variant="standard"
                    placeholder="Senha"
                    type="password"
                    value={formRegister.value.senha}
                    onChange={(e) => formRegister.set("senha")(e.target.value)}
                  ></TextField>
                  <TextField
                    required
                    variant="standard"
                    placeholder="Confirmar senha"
                    type="password"
                  />
                </Stack>
                {actionRegister.loading ? (
                  <LoadingButton sx={spinKeyframes}>
                    <AutorenewIcon sx={rotatingIcon} />
                  </LoadingButton>
                ) : (
                  <Button onClick={onRegister}>Cadastrar</Button>
                )}
              </FormControl>
            )}
          </Stack>

          <Link variant="body1" color="#083350">
            Esqueceu sua senha?
          </Link>
        </Stack>
        <Typography variant="body2" fontSize="12px" maxWidth="300px">
          Ao continuar, estou de acordo com os
          <Link>Termos de Uso </Link> e
          <Link> aviso de Privacidade da MoneyMate.</Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
