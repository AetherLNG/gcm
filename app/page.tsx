import { readdir } from "node:fs/promises";
import path from "node:path";

import Banner from "./banner";
import HeroSection from "./hero-section";
import LandingContent from "./landing-content";
import { type HeroSlide } from "./hero-slideshow";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function getHeroSlides(): Promise<HeroSlide[]> {
  const imagesPath = path.join(process.cwd(), "public", "folder_gambar");

  try {
    const entries = await readdir(imagesPath, { withFileTypes: true });

    return entries
      .filter((entry) => {
        const extension = path.extname(entry.name).toLowerCase();
        return entry.isFile() && imageExtensions.has(extension);
      })
      .sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { numeric: true })
      )
      .map((entry, index) => ({
        src: `/folder_gambar/${encodeURIComponent(entry.name)}`,
        alt: `Foto kegiatan Global Center Montessori ${index + 1}`,
      }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const heroSlides = await getHeroSlides();

  return (
    <main className="flex min-h-dvh w-full flex-col">
      <Banner />
      <div className="relative isolate overflow-hidden bg-[#FFFDF7]">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#FFFDF7_0%,#FAF8F2_38%,#FFFDF7_72%,#FAF8F2_100%)]" />
        <div className="absolute left-[-18rem] top-[34rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-[#E8B84A]/12 blur-3xl" />
        <div className="absolute right-[-16rem] top-[95rem] -z-10 h-[36rem] w-[36rem] rounded-full bg-[#F6D77A]/14 blur-3xl" />
        <div className="absolute bottom-[28rem] left-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#E8B84A]/10 blur-3xl" />
        <div className="relative z-10">
          <HeroSection slides={heroSlides} />
          <LandingContent />
        </div>
      </div>
    </main>
  );
}
