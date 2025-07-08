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
      <div style={{ textAlign: "center", padding: "4rem" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
          <p>Pre rendered page</p>
          <p>브라우저가 JavaScript를 실행하기 전에 완성된(CSS포함) HTML을 먼저 보여주는 방식 - 서버든 빌드 시점이든 사용자 요청 이전에 HTML이 생성되어 있는 상태</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
          <p>SSG rendered page(내용이 잘 안 바뀌고 SEO 중요)</p>
          <p>빌드 시점에 미리 생성된 HTML을 제공하는 방식 - 빌드 시점에 미리 생성된 HTML을 제공하고, 사용자 요청 시 미리 생성된 HTML을 제공</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem" }}>
          <p>SSR rendered page(로그인 필요, 사용자별 데이터)</p>
          <p>사용자 요청 시 서버에서 데이터를 가져와 HTML을 생성하는 방식 - 사용자 요청 시 서버에서 데이터를 가져와 HTML을 생성</p>
        </div>
      </div>
    </main>
  );
}