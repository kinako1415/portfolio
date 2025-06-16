import Header from "../components/layout/Header";
import HeroSkills from "../components/page/HeroSkills";
import HeroTitle from "../components/page/HeroTitle";

export default function Home() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Header />
      <main>
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px",
            position: "relative",
          }}
        >
          <HeroTitle />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "relative",
              minHeight: "200px",
            }}
          >
            <div style={{ alignSelf: "flex-end" }}>
              <HeroSkills />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
