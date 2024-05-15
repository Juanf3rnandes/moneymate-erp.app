import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import loginImage from "../../../../public/assets/imgs/mobills-path.f981a3d0.svg";
export default function LoginInfo() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Stack>
        <Typography variant="h4">
          Hora de transformar as suas finanças
        </Typography>
        <Image src={loginImage} alt="" height={400} width={300} />
        <Typography variant="body2" maxWidth="500px">
          O caminho está a sua frente. Você já deu seu primeiro passo rumo à
          transformação financeira e nós te guiaremos nessa jornada.
        </Typography>
      </Stack>
    </Grid>
  );
}
