import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Star Wars Dictionary</title>
      </Head>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-black text-white p-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:text-yellow-400 transition" style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
              Star Wars
            </Link>
            <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
              <Link href="/characters" className="hover:text-yellow-400">Characters</Link>
              <Link href="/starships" className="hover:text-yellow-400">Starships</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </div>
    </>
  );
}
