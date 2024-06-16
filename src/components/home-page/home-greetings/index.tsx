import { Stack, Typography } from "@mui/material";

interface HomeGreetingsProps {
  userName: string | undefined;
  greeting: string;
  dateResumo: string;
}

export default function HomeGreetings({
  userName,
  dateResumo,
  greeting,
}: HomeGreetingsProps) {
  return (
    <Stack>
      <Typography variant="h5">{`${greeting},${userName}`}</Typography>
      <Typography variant="body1">{`Confira o resumo de suas financaças em ${dateResumo}`}</Typography>
    </Stack>
  );
}
