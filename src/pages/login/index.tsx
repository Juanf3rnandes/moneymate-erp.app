import LoginTextField from "@/components/login-page/login-text-field";
import LoginInfo from "@/components/login-page/login-info";
import { Grid, Box } from "@mui/material";
import useLoginController from "@/components/login-page/hooks";

export default function LoginPage() {
  const { formLogin, postLogin } = useLoginController();

  return (
    <>
      <title>Moneymate | Login</title>
      <Grid container justifyContent="center" alignItems="center">
        <Box p={5}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={8} md={4}>
              <LoginInfo />
            </Grid>
            <Grid item xs={12} md={6}>
              <LoginTextField formLogin={formLogin} onSave={postLogin} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
