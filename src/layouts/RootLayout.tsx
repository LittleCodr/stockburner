import type { PropsWithChildren } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TickerTape from "@/components/TickerTape";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background-primary text-text-primary">
      <Navbar />
      <TickerTape />
      <main style={{ paddingTop: "calc(5rem + 2.25rem)" }}>{children}</main>
      <Footer />
    </div>
  );
}

export default RootLayout;
