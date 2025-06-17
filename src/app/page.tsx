import Header from "../components/layout/Header";
import HeroSkills from "../components/pages/Home/HeroSkills";
import HeroTitle from "../components/pages/Home/HeroTitle";

export default function Home() {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Header />
      <main>
        <section
          style={{
            padding: "24px",
            marginTop: "96px",
            position: "relative",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HeroTitle />
          <div style={{ alignSelf: "flex-end" }}>
            <HeroSkills />
          </div>
        </section>
      </main>
    </div>
  );
}
