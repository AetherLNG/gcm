"use client";

import Image from "next/image";

export type HeroSlide = {
  src: string;
  alt: string;
};

export const fallbackHeroSlides: HeroSlide[] = [
  {
    src: "/folder_gambar/lp_1.jpeg",
    alt: "Kegiatan belajar anak-anak Global Center Montessori",
  },
  {
    src: "/folder_gambar/landing_page.jpg",
    alt: "Aktivitas Montessori bersama guru dan anak-anak",
  },
];

type HeroSlideshowProps = {
  slides: HeroSlide[];
  activeIndex: number;
  onSlideChange: (index: number) => void;
};

export default function HeroSlideshow({
  slides,
  activeIndex,
  onSlideChange,
}: HeroSlideshowProps) {
  const visibleSlides = slides.length > 0 ? slides : fallbackHeroSlides;
  const slideCount = visibleSlides.length;
  const currentIndex = activeIndex % slideCount;

  return (
    <div className="relative w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#FAF7F0] shadow-[0_28px_80px_rgba(43,43,43,0.14)] ring-1 ring-black/5 sm:aspect-[5/4] lg:aspect-[4/3]">
        {visibleSlides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className={`object-cover transition-opacity duration-700 ease-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {slideCount > 1 ? (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm backdrop-blur-md">
          {visibleSlides.map((slide, index) => (
            <button
              key={slide.src}
              aria-current={index === currentIndex}
              aria-label={`Tampilkan slide ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 bg-[#E8B84A]"
                  : "w-2 bg-[#2B2B2B]/25 hover:bg-[#E8B84A]/60"
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAF3A]`}
              type="button"
              onClick={() => onSlideChange(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
