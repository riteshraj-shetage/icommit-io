import type { PropsWithChildren } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = PropsWithChildren<{
  username: string;
  starsCount?: string | number;
  forkCount?: string | number;
}>;

export default function Layout({ children, username, starsCount, forkCount }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar username={username} starsCount={starsCount} forkCount={forkCount} />
      
      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}