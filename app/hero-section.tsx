"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { ShimmerButton } from "@/components/ui/shimmer-button";

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
    <section className="relative isolate flex min-h-[calc(100dvh-4.5rem)] flex-1 items-center overflow-hidden rounded-b-[2rem] px-4 py-14 text-center sm:rounded-b-[2.5rem] sm:px-6 sm:py-16 lg:rounded-b-[3rem] lg:px-8 lg:text-left">
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
          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-[#2B2B2B] sm:text-5xl lg:mx-0 lg:text-6xl">
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

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#8A681E] sm:text-base">
            <AnimatedShinyText
              className="mx-0 max-w-none bg-linear-to-r from-transparent via-[#E8B84A] via-50% to-transparent text-[#8A681E]/80"
              shimmerWidth={140}
            >
              Preschool & Kindergarten
            </AnimatedShinyText>
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-[#3A3A3A]/80 sm:text-lg lg:mx-0">
            Ruang belajar hangat untuk anak bertumbuh mandiri, bereksplorasi
            dengan rasa ingin tahu, dan membangun percaya diri bersama guru yang
            penuh perhatian.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <ShimmerButton
              asChild
              background="#E8B84A"
              shimmerColor="#FFF7D6"
              shimmerDuration="2.4s"
              className="min-h-11 px-6 py-0 text-sm font-semibold text-[#2B2B2B] shadow-[0_12px_30px_rgba(232,184,74,0.22)] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAF3A]"
            >
              <a href="#kontak">Daftar Kunjungan</a>
            </ShimmerButton>
            <ShimmerButton
              asChild
              background="rgba(255, 253, 247, 0.82)"
              shimmerColor="#E8B84A"
              shimmerDuration="2.7s"
              className="min-h-11 border-[#E8B84A]/80 px-6 py-0 text-sm font-semibold text-[#8A681E] shadow-none hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAF3A]"
            >
              <a href="#classes">Lihat Program</a>
            </ShimmerButton>
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
