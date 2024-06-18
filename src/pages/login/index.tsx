import LoginTextField from "@/components/login-page/login-text-field";
import LoginInfo from "@/components/login-page/login-info";
import { Grid, Box, Card, CardContent, Divider } from "@mui/material";
import useLoginController from "@/components/login-page/hooks";

export default function LoginPage() {
  const {
    formLogin,
    formRegister,
    postLogin,
    loginAction,
    handlePostRegister,
    loginActiveButton,
    registerAction,
  } = useLoginController();

  return (
    <>
      <title>Moneymate | Login</title>
      <Grid container justifyContent="center" alignItems="center">
        <Box p={4} width='auto' height='auto'>
          <Grid>
            <Card variant="outlined">
              <CardContent>
                <Box p={2}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <Grid item xs={8} md={4}>
                      <LoginInfo />
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} md={6}>
                      <LoginTextField
                        formLogin={formLogin}
                        formRegister={formRegister}
                        onSave={postLogin}
                        actionLogin={loginAction}
                        actionRegister={registerAction}
                        onRegister={handlePostRegister}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}
