import { CHECKOUT_URL, GUARANTEE_DAYS } from "@/lib/constants";

export default function CtaFinal() {
  return (
    <section className="bg-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h2 className="font-display font-700 text-3xl sm:text-4xl text-neutral-900 leading-[1.15]">
          Sua glicemia sob controle começa com um{" "}
          <em className="italic text-gold">passo pequeno</em> hoje.
        </h2>
        <p className="mt-4 text-neutral-700 text-base sm:text-lg font-body">
          Sem culpa, sem dietas impossíveis de seguir — com acompanhamento de verdade.
        </p>

        <a
          href={CHECKOUT_URL}
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full
                     bg-gold hover:bg-gold-light text-primary-900
                     px-7 py-4 text-sm sm:text-base font-heading font-800 uppercase tracking-wide
                     shadow-gold hover:shadow-gold-hover
                     hover:-translate-y-0.5 transition-all duration-200
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Quero começar agora
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>

        <p className="mt-4 text-xs text-neutral-500 font-body">
          Garantia incondicional de {GUARANTEE_DAYS} dias.
        </p>
      </div>

      <div className="border-t border-neutral-200">
        <p className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-neutral-500 font-body">
          Este programa é um acompanhamento complementar e não substitui consulta médica presencial.
          <br />© {new Date().getFullYear()} Dr. Marcos. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
