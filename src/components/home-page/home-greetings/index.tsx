import Grid from "@/styles/lib/src/packages/atoms/grid";

interface HomeGreetingsProps {
  userName: string;
  greeting: string;
  dateResumo: Date;
}

export default function HomeGreetings({
  userName,
  dateResumo,
  greeting,
}: HomeGreetingsProps) {
  return (
    <Grid align="start">
      <h2>{`${greeting}, ${userName}`}</h2>
    </Grid>
  );
}
