import Demo from "@/components/Demo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-white/10 py-20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
      <Hero />
      <Demo />
    </main>
  );
}
