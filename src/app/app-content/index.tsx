import { getMenuFuncionalidadesErpResponse } from "@/services/cadastro/types";
interface AppContentProps {
  items?: getMenuFuncionalidadesErpResponse[];
}

export default function AppContent({ items }: AppContentProps) {
  return (
    <ul style={{ listStyle: "none" }}>
      {items?.map((item) => (
        <li key={item.cod_funcionalidade}></li>
      ))}
    </ul>
  );
}
