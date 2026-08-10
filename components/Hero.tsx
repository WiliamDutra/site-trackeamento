import { CHECKOUT_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-primary-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-heading font-600 uppercase tracking-wide text-white/80">
          Dr. Marcos · Programa de acompanhamento
        </span>

        <h1 className="mt-6 font-display font-700 text-3xl sm:text-4xl lg:text-5xl leading-[1.15] max-w-3xl">
          Controle sua glicemia com um acompanhamento{" "}
          <em className="italic text-gold">feito para você</em>, sem culpa e sem promessas milagrosas.
        </h1>

        <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl font-body">
          Um programa passo a passo para quem convive com diabetes tipo 2 e já tentou de tudo — com
          orientação médica, rotina possível de seguir e acompanhamento de verdade.
        </p>

        <a
          href={CHECKOUT_URL}
          className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full
                     bg-gold hover:bg-gold-light text-primary-900
                     px-7 py-4 text-sm sm:text-base font-heading font-800 uppercase tracking-wide
                     shadow-gold hover:shadow-gold-hover
                     hover:-translate-y-0.5 transition-all duration-200
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Quero começar agora
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>

        <p className="mt-4 text-xs text-white/55 font-body">
          Garantia incondicional de {" "}
          <span className="text-white/80">7 dias</span> — sem risco para você.
        </p>
      </div>
    </section>
  );
}
