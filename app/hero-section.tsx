"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { ShimmerButton } from "@/components/ui/shimmer-button";

import HeroSlideshow, {
  fallbackHeroSlides,
  type HeroSlide,
} from "./hero-slideshow";
import { TextAnimate } from "@/components/ui/text-animate";

type HeroSectionProps = {
  slides: HeroSlide[];
};

export default function HeroSection({ slides }: HeroSectionProps) {
  const visibleSlides = slides.length > 0 ? slides : fallbackHeroSlides;
  const slideCount = visibleSlides.length;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const currentIndex = activeSlideIndex % slideCount;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
            className={`scale-[1.08] object-cover blur-[12px] brightness-[0.8] saturate-[0.8] transition-[opacity,transform] ${index === currentIndex
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
          <br></br>
          <TextAnimate
            className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#8A681E] sm:text-base"
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                rotate: 45,
                scale: 0.5,
              },
              show: (i) => ({
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
                transition: {
                  delay: i * 0.1,
                  duration: 0.4,
                  y: {
                    type: "spring",
                    damping: 12,
                    stiffness: 200,
                    mass: 0.8,
                  },
                  rotate: {
                    type: "spring",
                    damping: 8,
                    stiffness: 150,
                  },
                  scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 300,
                  },
                },
              }),
              exit: (i) => ({
                opacity: 0,
                y: 30,
                rotate: 45,
                scale: 0.5,
                transition: {
                  delay: i * 0.1,
                  duration: 0.4,
                },
              }),
            }}
            by="character"
          >
            Preschool & Kindergarten
          </TextAnimate>


          {/* <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-[#3A3A3A]/80 sm:text-lg lg:mx-0">
            Ruang belajar hangat untuk anak bertumbuh mandiri, bereksplorasi
            dengan rasa ingin tahu, dan membangun percaya diri bersama guru yang
            penuh perhatian.
          </p> */}

          <TextAnimate animation="blurIn" as="p" className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-[#3A3A3A]/80 sm:text-lg lg:mx-0" by="word" once>
            Ruang belajar hangat untuk anak bertumbuh mandiri, bereksplorasi dengan rasa ingin tahu, dan membangun percaya diri bersama guru yang penuh perhatian.
          </TextAnimate>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <ShimmerButton
              type="button"
              background="#E8B84A"
              shimmerColor="#FFF7D6"
              shimmerDuration="2.4s"
              onClick={() => scrollToSection("kontak")}
              className="min-h-11 px-6 py-0 text-sm font-semibold text-[#2B2B2B] shadow-[0_12px_30px_rgba(232,184,74,0.22)] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAF3A]"
            >
              <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-[#2B2B2B]">
                Daftar Kunjungan
              </span>
            </ShimmerButton>
            <ShimmerButton
              type="button"
              shimmerColor="#E8B84A"
              shimmerDuration="2.7s"
              onClick={() => scrollToSection("classes")}
              className="min-h-11 px-6 py-0 text-sm font-semibold shadow-[0_12px_30px_rgba(15,23,42,0.12)] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAF3A]"
            >
              <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg">
                Lihat Program
              </span>
            </ShimmerButton>
          </div>

          <TextAnimate className="mt-5 text-sm font-medium text-[#6D6255]" animation="blurInUp" by="character" once>
            Montessori &bull; Play-based Learning &bull; Caring Teachers
          </TextAnimate>
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
