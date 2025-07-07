import Link from "next/link";

/**
 * NOTE: Pre-rendered page : 아무것도 안 쓰면 기본적으로 Pre-render
 * Next.js는 기본적으로 React 앱을 HTML로 미리 만들어 놓는 방식을 사용하여 빠르게 동작시킴
 */

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "4rem" }}>
      <h1>Star Wars Dictionary</h1>
      <p>What would you like to explore?</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
        <Link href="/characters">Characters</Link>
        <Link href="/starships">Starships</Link>
      </div>
    </main>
  );
}