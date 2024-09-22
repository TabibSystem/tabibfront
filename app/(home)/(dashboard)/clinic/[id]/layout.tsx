import type { Metadata } from "next";
import SideBar from "@/app/components/nav/SideBar";
import GridContainer from "@/app/components/defaults/GridContainer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) {
  return (
    <GridContainer className=" gap-4 pt-32" cols={11}>
      <SideBar doctor id={params.id} />
      <section data-scroll-container id="smooth-wrapper" className="main-container  col-span-9 relative">
        {children}
      </section>
    </GridContainer>  
  );
}