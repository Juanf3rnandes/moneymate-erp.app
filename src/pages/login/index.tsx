import PublicLayout from "@/layouts/public";
import LoginTextField from "@/components/login-page/login-text-field";
import LoginInfo from "@/components/login-page/login-info";
import { Grid, Stack } from "@mui/material";

export default function LoginPage() {
  return (
    <>
      <PublicLayout />
      <Grid container justifyContent="space-around">
        <Stack direction="row">
          <LoginInfo />
          <LoginTextField />
        </Stack>
      </Grid>
    </>
  );
}
