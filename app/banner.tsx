import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full border-b border-black/[0.05] bg-white">
      <header className="flex w-full items-center justify-center gap-3 px-4 py-2 text-center sm:gap-4 sm:px-6 lg:px-8">
        <div className="relative h-12 w-14 shrink-0 overflow-hidden rounded-md bg-white sm:h-14 sm:w-16">
          <Image
            src="/logo.png"
            alt="Logo Global Center Montessori"
            fill
            priority
            sizes="(max-width: 640px) 56px, 64px"
            className="object-contain"
          />
        </div>

        <div className="min-w-0">
          <p className="text-base font-semibold leading-tight text-[#2B2B2B] sm:text-lg md:text-xl">
            Global Center Montessori
          </p>
          <p className="text-base font-semibold leading-tight text-[#6D6255] sm:text-lg md:text-xl">
            Preschool & Kindergarten
          </p>
        </div>
      </header>
    </div>
  );
}
