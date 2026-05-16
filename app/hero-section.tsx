"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

import HeroSlideshow, {
  fallbackHeroSlides,
  type HeroSlide,
} from "./hero-slideshow";

type HeroSectionProps = {
  slides: HeroSlide[];
};

export default function HeroSection({ slides }: HeroSectionProps) {
  const visibleSlides = slides.length > 0 ? slides : fallbackHeroSlides;
  const slideCount = visibleSlides.length;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const currentIndex = activeSlideIndex % slideCount;

  useEffect(() => {
    if (slideCount <= 1) return;

    const timer = window.setInterval(() => {
      setActiveSlideIndex((current) => (current + 1) % slideCount);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [slideCount]);

  return (
    <section className="relative isolate flex min-h-[calc(100dvh-4.5rem)] flex-1 items-center overflow-hidden px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8 lg:text-left">
      <div className="absolute inset-0 -z-30 overflow-hidden">
        {visibleSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            aria-hidden
            fill
            priority={index === 0}
            sizes="100vw"
            className={`scale-[1.08] object-cover blur-[12px] brightness-[0.8] saturate-[0.8] transition-[opacity,transform] ${
              index === currentIndex
                ? "scale-[1.12] opacity-[0.12] sm:opacity-[0.16] lg:opacity-[0.24]"
                : "opacity-0"
            }`}
            style={{
              transition: "opacity 700ms ease, transform 900ms ease",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 -z-20 bg-[rgba(250,248,242,0.9)] lg:bg-[linear-gradient(90deg,rgba(250,248,242,0.94)_0%,rgba(250,248,242,0.82)_42%,rgba(250,248,242,0.72)_65%,rgba(250,248,242,0.90)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_35%,rgba(255,213,100,0.16),transparent_38%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(80,55,15,0.08)_100%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#8A681E] sm:text-sm">
            Preschool & Kindergarten
          </p>

          <h1 className="mx-auto max-w-3xl text-balance text-5xl font-bold leading-[0.95] tracking-tight text-[#2B2B2B] sm:text-6xl lg:mx-0 lg:text-7xl">
            <DiaTextReveal
              colors={[
                "#FFF3C4",
                "#F6D77A",
                "#E8B84A",
                "#DFAF3A",
                "#B98324",
              ]}
              delay={0.25}
              duration={2.4}
              text="Global Center Montessori"
              textColor="#2B2B2B"
            />
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-[#3A3A3A]/80 sm:text-lg lg:mx-0">
            Ruang belajar hangat untuk anak bertumbuh mandiri, bereksplorasi
            dengan rasa ingin tahu, dan membangun percaya diri bersama guru yang
            penuh perhatian.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#kontak"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#E8B84A] px-6 text-sm font-semibold text-[#2B2B2B] shadow-[0_12px_30px_rgba(232,184,74,0.22)] transition-colors hover:bg-[#D4A63D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAF3A]"
            >
              Daftar Kunjungan
            </a>
            <a
              href="#program"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#E8B84A] bg-transparent px-6 text-sm font-semibold text-[#8A681E] transition-colors hover:bg-[#FFF3C4]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAF3A]"
            >
              Lihat Program
            </a>
          </div>

          <p className="mt-5 text-sm font-medium text-[#6D6255]">
            Montessori &bull; Play-based Learning &bull; Caring Teachers
          </p>
        </div>

        <HeroSlideshow
          activeIndex={currentIndex}
          onSlideChange={setActiveSlideIndex}
          slides={visibleSlides}
        />
      </div>
    </section>
  );
}
