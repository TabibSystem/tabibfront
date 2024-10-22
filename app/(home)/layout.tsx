import type { Metadata } from "next";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/Footer";
import { SmoothScrollProvider } from "../context/ScrollProviderContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <main>
        <NavBar />
        <section data-scroll-container id="smooth-wrapper" className="main-container relative">
          {children}
        </section>
      </main>
    </SmoothScrollProvider>
  );
}
