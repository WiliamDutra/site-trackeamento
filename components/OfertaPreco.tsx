import { CHECKOUT_URL, GUARANTEE_DAYS, PROGRAM_PRICE } from "@/lib/constants";

const INCLUSOS = [
  "Acesso completo ao conteúdo passo a passo",
  "Acompanhamento ao longo do programa",
  "Material de apoio para registrar sua evolução",
  `Garantia incondicional de ${GUARANTEE_DAYS} dias`,
];

export default function OfertaPreco() {
  return (
    <section className="bg-primary-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="rounded-2xl bg-primary-800 border border-white/10 p-6 sm:p-10 text-center">
          <h2 className="font-display font-700 text-2xl sm:text-3xl leading-[1.15]">
            Comece a controlar sua glicemia hoje
          </h2>

          <p className="mt-6 font-display font-700 text-4xl sm:text-5xl text-gold">{PROGRAM_PRICE}</p>
          <p className="text-white/70 text-sm font-body">acesso único, sem mensalidade</p>

          <ul className="mt-8 space-y-3 text-left max-w-sm mx-auto">
            {INCLUSOS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/85 text-sm sm:text-base font-body">
                <span aria-hidden className="text-gold mt-0.5">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={CHECKOUT_URL}
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full
                       bg-gold hover:bg-gold-light text-primary-900
                       px-7 py-4 text-sm sm:text-base font-heading font-800 uppercase tracking-wide
                       shadow-gold hover:shadow-gold-hover
                       hover:-translate-y-0.5 transition-all duration-200
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold w-full sm:w-auto"
          >
            Quero começar agora
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>

          <p className="mt-4 text-xs text-white/55 font-body">
            Risco zero: se não for pra você, devolvemos 100% em até {GUARANTEE_DAYS} dias.
          </p>
        </div>
      </div>
    </section>
  );
}
