import Footer from "@/components/shared/Footer/Footer";
import { Header } from "@/components/shared/Header";
import TopBar from "@/components/shared/TopBar/TopBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar />
      <Header />
      {children}
      <Footer />
    </>
  );
}
