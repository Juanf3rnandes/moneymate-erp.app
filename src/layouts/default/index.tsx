import { AppContent } from "@/components/app/app-content";

interface DefaultLayoutProps {
  noPadding?: boolean;
  children?: React.ReactNode;
}

export function scrollBottom() {
  setTimeout(() => {
    const main = $("#__main");
    main.scroll({ top: main.scrollHeight, behavior: "smooth" });
  }, 500);
}

export default function DefaultLayout({
  noPadding,
  children,
}: DefaultLayoutProps) {
  return (
    <>
      <AppContent left={}>{children}</AppContent>
    </>
  );
}
