import type { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export default RootLayout;
