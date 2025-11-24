import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown, ChevronUp, CircleHelp } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "Apa itu HMIF?",
    answer:
      "HMIF (Himpunan Mahasiswa Informatika) adalah organisasi kemahasiswaan yang mewadahi mahasiswa Program Studi Informatika di kampus. HMIF bertujuan untuk mengembangkan potensi akademik, sosial, dan kepemimpinan anggotanya.",
  },
  {
    question: "Apa saja Program HMIF?",
    answer:
      "HMIF menyelenggarakan berbagai program, seperti seminar teknologi, kompetisi pemrograman, pelatihan teknis dan non-teknis, pengabdian masyarakat, serta kegiatan kekeluargaan untuk mempererat silaturahmi antar anggota.",
  },
  {
    question: "Bagaimana cara bergabung dengan HMIF?",
    answer:
      "Mahasiswa Informatika dapat mendaftar melalui seleksi anggota baru (biasanya disebut MABA HMIF). Informasi pendaftaran biasanya diumumkan melalui media sosial resmi HMIF atau pengumuman kampus.",
  },
  {
    question: "Apa manfaat bergabung dengan HMIF?",
    answer:
      "Bergabung dengan HMIF memberikan kesempatan untuk mengasah soft skill dan hard skill, memperluas jaringan, mendapatkan pengalaman organisasi, serta berkontribusi langsung pada pengembangan komunitas kampus.",
  },
  {
    question: "Berapa lama masa kepengurusan HMIF?",
    answer:
      "Masa kepengurusan HMIF biasanya berlangsung selama satu tahun akademik, dimulai dari periode tertentu yang ditentukan oleh pihak kampus atau AD/ART organisasi.",
  },
]

const FaqSection = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-5xl space-y-3">
          <div className="flex justify-center">
            <Badge className="inline-flex items-center gap-2 rounded-full border-green-200 bg-green-50 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm  md:text-base text-green-700">
              <CircleHelp className="size-4" />
              FAQ
            </Badge>
          </div>
          <div className="flex justify-center">
            <h1 className="text-center text-2xl font-bold text-neutral-900 sm:text-3xl md:text-5xl">
              <span className="text-green-600">Frequently </span>
              Asked Questions
            </h1>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-8 sm:mt-10 space-y-2 rounded-2xl border border-border bg-card/60 p-1.5 sm:p-2"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="rounded-xl border-border"
            >
              <AccordionTrigger className="group rounded-xl px-2.5 py-3 text-sm font-semibold text-neutral-900 hover:no-underline sm:px-3 sm:py-4 sm:text-base [&>svg]:hidden">
                <div className="flex w-full items-start justify-between gap-3 sm:gap-4">
                  <div className="flex items-start gap-3 text-left">
                    <span
                      aria-hidden
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-500"
                    />
                    <span>{item.question}</span>
                  </div>
                  <span
                    aria-hidden
                    className="text-green-600 transition-colors group-hover:text-green-700"
                  >
                    <ChevronDown className="size-5 group-data-[state=open]:hidden" />
                    <ChevronUp className="size-5 hidden group-data-[state=open]:inline" />
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 sm:px-5 sm:pb-5">
                <div className="flex gap-4 sm:gap-5">
                  <div className="w-1 rounded-full bg-green-500" />

                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export { FaqSection }
