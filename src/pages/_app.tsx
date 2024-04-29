import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MMGrid } from "@/lib/packages/atoms/mm-grid";
import { MMButton } from "@/lib/packages/atoms/mm-button";
import { MMCard } from "@/lib/packages/atoms/mm-card";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MMGrid row align="center" justify="center">
        <MMCard></MMCard>
      </MMGrid>
      <Component {...pageProps} />
    </>
  );
}
