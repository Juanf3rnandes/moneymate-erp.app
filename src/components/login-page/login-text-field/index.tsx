import { Button, FormControl, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

import {
  postLoginRequest,
  postRegisterRequest,
} from "@/services/accounts/types";
import { Form } from "@/providers";

interface LoginTextFieldProps {
  formLogin: Form<postLoginRequest>;
  formCadastro: postRegisterRequest;
  activeFormButton: string;
  handleButtonClick: (button: string) => void;
  onSave: () => void;
  onRegister: () => void;
}

export default function LoginTextField({
  formLogin,
  onSave,
}: LoginTextFieldProps) {
  const [activeButton, setActiveButton] = useState("entrar");

  const handleButtonClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <Grid container justifyContent="space-around" alignContent="center">
      <Grid container justifyContent="center" alignItems="center">
        <Stack alignItems="center" gap="20px">
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
                    value={formLogin.value.email}
                    onChange={formLogin.set("email")}
                  ></TextField>
                  <TextField
                    required
                    variant="standard"
                    placeholder="Senha"
                    type="password"
                    value={formLogin.value.password}
                    onChange={formLogin.set("password")}
                  />
                </Stack>
                <Button onClick={onSave}>Entrar</Button>
              </FormControl>
            ) : (
              <FormControl>
                <Stack gap=" 20px" width="300px">
                  <TextField
                    required
                    variant="standard"
                    placeholder="Nome"
                  ></TextField>
                  <TextField required variant="standard" placeholder="E-mail" />
                  <TextField
                    required
                    variant="standard"
                    placeholder="Senha"
                    type="password"
                  ></TextField>
                  <TextField
                    required
                    variant="standard"
                    placeholder="Confirmar senha"
                    type="password"
                  />
                </Stack>
                <Button>Cadastrar</Button>
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
