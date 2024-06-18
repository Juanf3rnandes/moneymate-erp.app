import { useAuth } from "@/auth";
import { Stack, Typography } from "@mui/material";

interface HomeGreetingsProps {
  greeting: string;
  dateResumo: string;
}

export default function HomeGreetings({
  dateResumo,
  greeting,
}: HomeGreetingsProps) {
  const { user } = useAuth();

  return (
    <Stack>
      <Typography variant="h5">{`${greeting},${user?.name}`}</Typography>
      <Typography variant="body1">{`Confira o resumo de suas financaças em ${dateResumo}`}</Typography>
    </Stack>
  );
}
