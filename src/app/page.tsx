import Header from "./components/Header";
import HeroSkills from "./components/HeroSkills";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <HeroSkills />
        </section>
      </main>
    </div>
  );
}
