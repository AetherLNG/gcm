import Image from "next/image";
import {
  Baby,
  BookOpen,
  GraduationCap,
  Heart,
  Palette,
  ShieldCheck,
  Sparkles,
  Sun,
  type LucideIcon,
  Users,
} from "lucide-react";

import { BentoGrid } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";

const imageOne = "/folder_gambar/lp_1.jpeg";
const imageTwo = "/folder_gambar/landing_page.jpg";

const highlights = [
  "Lingkungan Aman",
  "Guru Berpengalaman",
  "Pembelajaran Aktif",
  "Pendekatan Montessori",
];

const missions = [
  {
    title: "Belajar dengan Ceria",
    text: "Menciptakan lingkungan belajar yang menyenangkan dengan memberikan suasana belajar yang penuh keceriaan untuk mendukung tumbuh kembang anak.",
  },
  {
    title: "Tumbuh Holistik",
    text: "Mengembangkan potensi anak secara holistik dengan cara mengasah aspek kognitif, motorik, sosial, emosional, dan spiritual melalui aktivitas yang variatif.",
  },
  {
    title: "Karakter Sehari-hari",
    text: "Menanamkan nilai-nilai karakter dengan membiasakan sikap sopan santun, toleransi, dan tanggung jawab dalam kehidupan sehari-hari.",
  },
  {
    title: "Ruang Imajinasi",
    text: "Mendorong kreativitas dan imajinasi serta memberikan ruang bagi anak untuk bereksplorasi melalui seni, musik, dan permainan edukatif.",
  },
];

type ClassItem = {
  name: string;
  age: string;
  schedule: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  programDetails?: string[];
};

const classes: ClassItem[] = [
  {
    name: "Adik Imut",
    age: "1,5 - 3 tahun",
    schedule: "Selasa dan Kamis Pk 10.15 - 11.45",
    description:
      "Program Balita menyediakan lingkungan di mana anak belajar melalui bermain. Anak didorong untuk bersenang-senang menjelajahi aktivitas di atas meja, seni dan kerajinan, serta bermain di luar ruangan.",
    image: imageOne,
    Icon: Baby,
  },
  {
    name: "Adik Kecil",
    age: "3 - 4 tahun",
    schedule: "Senin, Rabu dan Jumat Pk 10.15 - 12.00",
    description:
      "Pada periode ini anak mulai menjadi penjelajah muda yang tak kenal lelah. Permainan imajinatif diperkenalkan agar anak mulai mengekspresikan diri dengan bebas.",
    image: imageTwo,
    Icon: Sparkles,
  },
  {
    name: "TK A",
    age: "4 - 5 tahun",
    schedule: "Senin - Jumat Pk 08.00 - 10.00",
    description:
      "Landasan literasi dan matematika diperkuat melalui tugas berulang, angka, huruf, kata, permainan imajinatif, perjalanan waktu, dan perkembangan sosial.",
    image: imageOne,
    Icon: GraduationCap,
  },
  {
    name: "TK B",
    age: "5 - 6 tahun",
    schedule: "Senin - Jumat Pk 08.00 - 10.00",
    description:
      "Anak mengikuti berbagai kesempatan untuk mengembangkan kemampuan membaca, memahami, menghasilkan kata, serta menghadapi tantangan matematika untuk transisi ke SD.",
    image: imageTwo,
    Icon: BookOpen,
  },
  {
    name: "Daycare",
    age: "3 bulan - 7 tahun",
    schedule: "Pk 07.00 - 17.00",
    description:
      "",
    image: imageOne,
    Icon: Heart,
  },
  {
    name: "Inklusi Fullday",
    age: "2 - 9 tahun",
    schedule: "Senin - Jumat Pk 08.00 - 15.00",
    description:
      "Tempat yang dikhususkan untuk menangani anak-anak berkebutuhan khusus, dengan menghadirkan suasana rumah (Home Schooling) dengan memberikan terapi-terapi untuk hambatan tumbuh kembang anak secara full day.",
    image: imageTwo,
    Icon: Users,
    programDetails: [
      "Terapi (2 sesi)",
      "Brain Stimulation",
      "Toilet Training",
      "Kemandirian",
      "Makan Siang",
    ],
  },
];

const curriculumAreas = [
  "Koordinasi motorik kasar dan halus",
  "Bahasa dan komunikasi",
  "Perkembangan sosial",
  "Perkembangan kognitif",
  "Ekspresi seni dan kreativitas",
  "Pekerjaan praktis bermakna",
];

const curriculumGoals = [
  "Menjadi pembelajar yang antusias",
  "Memiliki perkembangan yang seimbang",
  "Menjadi pemecah masalah yang mandiri, percaya diri, dan ingin tahu",
  "Mengembangkan ketahanan",
  "Merasa nyaman dan percaya diri dalam mengekspresikan diri, kreativitas, dan imajinasi mereka",
  "Mempraktikkan sifat-sifat karakter yang baik",
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-2xl font-extrabold uppercase tracking-[0.1em] text-[#8A681E] sm:text-3xl">
        {eyebrow}
      </p>
      {title ? (
        <h2 className="mt-4 text-balance text-xl font-bold leading-snug tracking-tight text-[#2B2B2B] sm:text-3xl">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#3A3A3A]/78 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ImagePanel({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] bg-[#FAF7F0] shadow-[0_28px_80px_rgba(43,43,43,0.12)] ring-1 ring-black/[0.04] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 48vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/18 via-transparent to-transparent" />
    </div>
  );
}

export default function LandingContent() {
  return (
    <>
      <section
        id="tentang"
        className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="absolute left-[-12rem] top-24 h-80 w-80 rounded-full bg-[#E8B84A]/12 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative min-h-[28rem]">
            <ImagePanel
              src={imageTwo}
              alt="Aktivitas belajar hangat di Global Center Montessori"
              className="absolute inset-x-0 top-0 h-[22rem] sm:h-[26rem]"
            />
            <div className="absolute bottom-0 right-0 hidden w-56 overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-[0_22px_50px_rgba(43,43,43,0.14)] ring-1 ring-black/[0.04] sm:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
                <Image
                  src={imageOne}
                  alt="Anak-anak mengikuti aktivitas Montessori"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <p className="text-2xl font-extrabold uppercase tracking-[0.1em] text-[#8A681E] sm:text-3xl">
              Tentang Kami
            </p>
            <h2 className="mt-4 text-balance text-xl font-bold leading-snug tracking-tight text-[#2B2B2B] sm:text-3xl">
              Prasekolah hangat di Jakarta untuk tumbuh sesuai ritme anak.
            </h2>
            <p className="mt-6 text-left text-base leading-8 text-[#3A3A3A]/78 sm:text-lg lg:text-justify">
              Selamat datang di Global Center Montessori Preschool &
              Kindergarten, prasekolah di Jakarta. Kami memandang setiap anak
              sebagai individu unik dengan potensi masing-masing. Global Center
              Montessori sebagai sekolah bertujuan untuk menyediakan kesempatan
              belajar bagi anak-anak untuk tumbuh sesuai dengan kecepatan mereka
              sendiri.
            </p>
            <p className="mt-4 text-left text-base leading-8 text-[#3A3A3A]/78 sm:text-lg lg:text-justify">
              Dengan bantuan pendidik yang berdedikasi, berpengalaman, dan
              bersemangat, anak-anak dipandu melalui kurikulum yang komprehensif
              yang terinspirasi oleh pendekatan Montessori.
            </p>
            <p className="mt-4 text-left text-base leading-8 text-[#3A3A3A]/78 sm:text-lg lg:text-justify">
              Anak-anak didorong untuk berpartisipasi dalam permainan yang
              bermakna, pembelajaran berbasis proyek, dan kegiatan akademik inti
              yang kami anggap penting untuk mengembangkan anak yang berwawasan
              luas dengan kecintaan belajar sepanjang hayat.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/78 px-4 py-2 text-sm font-semibold text-[#6D5626] shadow-sm ring-1 ring-[#E8B84A]/18 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="visi-misi"
        className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="absolute right-[-10rem] top-16 h-80 w-80 rounded-full bg-[#E8B84A]/14 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Visi"
            title="Membentuk anak-anak yang sehat, kreatif, mandiri, ceria dan berkarakter baik dalam lingkungan yang penuh kasih."
          />

          <div className="mt-14 text-center">
            <p className="text-2xl font-extrabold uppercase tracking-[0.1em] text-[#8A681E] sm:text-3xl">
              Misi
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {missions.map((mission, index) => (
              <div
                key={mission.title}
                className="group relative overflow-hidden rounded-[2rem] bg-white/72 p-6 shadow-[0_18px_50px_rgba(43,43,43,0.07)] ring-1 ring-black/[0.04] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(43,43,43,0.1)]"
              >
                <BorderBeam
                  borderWidth={1}
                  colorFrom="#E8B84A"
                  colorTo="#FFF3C4"
                  delay={index * 1.1}
                  duration={8}
                  size={92}
                />
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8B84A]/16 text-[#8A681E]">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-[#2B2B2B]">
                  {mission.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#3A3A3A]/76">
                  {mission.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="classes" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Our Classes"
            title="Program kelas sesuai tahap usia anak."
            description="Setiap kelas menjaga keseimbangan antara bermain, eksplorasi, rutinitas, dan pembelajaran yang sesuai usia."
          />

          <BentoGrid className="mt-14 auto-rows-[minmax(25rem,auto)] grid-cols-1 gap-5 lg:grid-cols-3">
            {classes.map((item) => {
              const Icon = item.Icon;

              return (
                <article
                  key={item.name}
                  className="group relative flex min-h-[25rem] overflow-hidden rounded-[2rem] bg-[#FAF7F0] shadow-[0_18px_55px_rgba(43,43,43,0.09)] ring-1 ring-black/[0.04]"
                >
                  <Image
                    src={item.image}
                    alt={`${item.name} class activity`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/82 via-[#2B2B2B]/34 to-transparent" />
                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#FFFDF7]/88 px-3 py-1 text-xs font-bold text-[#8A681E] backdrop-blur">
                      {item.age}
                    </span>
                  </div>
                  <div className="relative z-10 mt-auto w-full p-6 text-white">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8B84A]/22 text-[#FFE39A] backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#FFE39A]">
                      {item.schedule}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/82">
                      {item.description}
                    </p>
                    {item.programDetails ? (
                      <details className="group/details mt-4">
                        <summary className="inline-flex min-h-9 cursor-pointer list-none items-center justify-center rounded-full bg-[#FFFDF7]/90 px-4 text-xs font-bold uppercase tracking-[0.08em] text-[#8A681E] shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFAF3A] [&::-webkit-details-marker]:hidden">
                          Lihat Program
                        </summary>
                        <div className="mt-4 rounded-2xl bg-[#FFFDF7]/92 p-4 text-left text-[#2B2B2B] shadow-sm backdrop-blur">
                          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#8A681E]">
                            Program:
                          </p>
                          <ul className="mt-3 grid gap-2 text-sm font-semibold leading-6 text-[#3A3A3A]">
                            {item.programDetails.map((program) => (
                              <li key={program} className="flex gap-2">
                                <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#8A681E]" />
                                <span>{program}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </BentoGrid>
        </div>
      </section>

      <section
        id="akademik"
        className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#E8B84A]/10 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Akademik" />

          <div className="mt-10 grid items-center gap-10 sm:mt-12 lg:mt-16 lg:grid-cols-[1fr_0.92fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-extrabold uppercase tracking-[0.1em] text-[#8A681E] sm:text-3xl">
                Filosofi
              </p>
              <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-[#2B2B2B] sm:text-2xl">
                PENGAJARAN ABADI DALAM MERUBAH DUNIA
              </h3>
              <p className="mt-6 text-left text-base leading-8 text-[#3A3A3A]/78 sm:text-lg lg:text-justify">
                Sekolah Global Center Montessori memandang setiap anak dibekali
                dengan kecerdasan, rasa ingin tahu, dan kreativitas yang
                melimpah, serta rasa kagum dan imajinasi yang indah. Global
                Center Montessori percaya bahwa melalui keunikan dan kemampuan
                setiap anak, ia mampu memperoleh pengetahuan dan keterampilan
                dalam kelompok usianya masing-masing melalui keterlibatan dan
                partisipasi langsung dalam proses pembelajaran.
              </p>
              <p className="mt-5 text-left text-base leading-8 text-[#3A3A3A]/78 sm:text-lg lg:text-justify">
                Global Center Montessori percaya bahwa melalui partisipasi
                langsung setiap anak dalam lingkungan belajar yang aman,
                terjamin, dan merangsang, serta melalui keseimbangan antara
                kegiatan yang dipimpin anak dan kegiatan yang diarahkan guru,
                anak akan merasa AMAN dan TERMOTIVASI untuk belajar sepanjang
                hayat.
              </p>
            </div>
            <ImagePanel
              src={imageOne}
              alt="Pembelajaran aktif Montessori"
              className="min-h-[24rem]"
            />
          </div>

          <div className="mt-20 rounded-[2rem] bg-white/72 p-6 shadow-[0_18px_55px_rgba(43,43,43,0.07)] ring-1 ring-black/[0.04] backdrop-blur sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-extrabold uppercase tracking-[0.1em] text-[#8A681E] sm:text-3xl">
                  Kurikulum
                </p>
                <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-[#2B2B2B] sm:text-2xl">
                  KURIKULUM KOMPREHENSIF
                </h3>
                <p className="mt-6 text-left text-base leading-8 text-[#3A3A3A]/78 lg:text-justify">
                  Kami memandang setiap anak sebagai individu unik dengan
                  potensi masing-masing dan bertujuan untuk memberikan
                  kesempatan belajar bagi anak-anak untuk tumbuh sesuai dengan
                  kecepatan mereka sendiri. Dengan bantuan para pendidik yang
                  berdedikasi, berpengalaman, dan bersemangat, anak-anak
                  dibimbing melalui Kurikulum Komprehensif kami yang terinspirasi
                  oleh pendekatan Montessori dan Waldorf.
                </p>
                <p className="mt-5 text-left text-base leading-8 text-[#3A3A3A]/78 lg:text-justify">
                  Anak-anak didorong untuk berpartisipasi dalam permainan yang
                  bermakna, pembelajaran berbasis proyek, dan kegiatan akademik
                  inti yang penting untuk mengembangkan anak yang berwawasan luas
                  dengan kecintaan belajar seumur hidup.
                </p>
              </div>

              <div>
                <div className="rounded-[1.5rem] bg-[#FFFDF7]/82 p-5 ring-1 ring-[#E8B84A]/14">
                  <h4 className="text-lg font-bold text-[#2B2B2B]">
                    Anak-anak dibimbing untuk:
                  </h4>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-[#3A3A3A]/78 sm:grid-cols-2">
                    {curriculumGoals.map((goal) => (
                      <li key={goal} className="flex gap-3">
                        <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#8A681E]" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {curriculumAreas.map((item, index) => {
                    const icons = [
                      ShieldCheck,
                      Sun,
                      BookOpen,
                      Users,
                      Sparkles,
                      Palette,
                    ];
                    const Icon = icons[index % icons.length];

                    return (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-[#FAF7F0]/86 p-4 ring-1 ring-black/[0.04]"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8B84A]/16 text-[#8A681E]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold text-[#2B2B2B]">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <blockquote className="rounded-[1.5rem] bg-[#FAF7F0]/92 p-6 text-[#3A3A3A]/80 ring-1 ring-black/[0.04]">
                <cite className="not-italic text-xl font-bold tracking-tight text-[#2B2B2B] sm:text-2xl">
                  Maria Montessori
                </cite>
                <p className="mt-3 text-sm font-semibold italic leading-7 text-[#8A681E] sm:text-base">
                  &ldquo;Help me to do it myself&rdquo;
                </p>
                <p className="mt-4 text-left text-sm leading-7 lg:text-justify">
                  Sepanjang hari, anak-anak diberi ruang untuk mandiri dan
                  materi pembelajaran disiapkan agar mereka dapat melakukannya
                  dengan sukses. Dengan pendekatan Montessori, fondasi
                  pembelajaran dibangun menggunakan berbagai peralatan
                  Montessori seperti Menara Merah Muda, tangga lebar, dan
                  silinder bertangkai.
                </p>
              </blockquote>

              <blockquote className="rounded-[1.5rem] bg-[#FAF7F0]/92 p-6 text-[#3A3A3A]/80 ring-1 ring-black/[0.04]">
                <cite className="not-italic text-xl font-bold tracking-tight text-[#2B2B2B] sm:text-2xl">
                  Rudolf Steiner
                </cite>
                <p className="mt-3 text-sm font-semibold italic leading-7 text-[#8A681E] sm:text-base">
                  &ldquo;The need for imagination, a sense of truth, and a
                  feeling of responsibility - these three forces are the very
                  nerve of education.&rdquo;
                </p>
                <p className="mt-4 text-left text-sm leading-7 lg:text-justify">
                  Prinsip Waldorf diterapkan melalui mendongeng, musik,
                  menggambar, melukis, permainan ritmis, membuat model, serta
                  pekerjaan praktis bermakna seperti memasak, membuat kue, dan
                  berkebun dengan fokus pada proses pembelajaran.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
