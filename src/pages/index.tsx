import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DefaultLayout from "@/layouts/default";
import AppContent from "@/app/app-content";
import mock from "@/mocks/funcionalidades-erp.json";
import { getMenuFuncionalidadesErpResponse } from "@/services/cadastro/types";
import HomeGreetings from "@/components/home-page/home-greetings";
import Grid from "@/styles/lib/src/packages/atoms/grid";
import useHomePageController from "@/components/home-page/hooks";
import { Card } from "@/styles/lib/src/packages/atoms/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { homeGreeting, handleHomeGreetings } = useHomePageController();

  return (
    <>
      <DefaultLayout userName="John Doe" />

      <Grid>
        <Grid row>
          <HomeGreetings
            userName="Juan Pereira"
            greeting="Bom dia"
            dateResumo={new Date()}
          />
        </Grid>
        <Card>
          <h2>teste</h2>
        </Card>
      </Grid>
    </>
  );
}
