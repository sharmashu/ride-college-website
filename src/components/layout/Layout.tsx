import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageBackground from "@/components/ui/PageBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <PageBackground />
      <Header />
      <main className="pt-16 relative z-10 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;