import { getMenuFuncionalidadesErpResponse } from "@/services/cadastro/types";
import Image from "next/image";
interface AppContentProps {
  items?: getMenuFuncionalidadesErpResponse[];
}

export default function AppContent({ items }: AppContentProps) {
  return (
    <ul style={{ listStyle: "none" }}>
      {items?.map((item) => (
        <li key={item.cod_funcionalidade}>
          {/* <Image src="" width={30} height={30} alt="teste" /> */}
        </li>
      ))}
    </ul>
  );
}
