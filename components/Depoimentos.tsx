const DEPOIMENTOS = [
  {
    nome: "[Nome do paciente 1]",
    texto: "[DEPOIMENTO 1 — resultado real com a glicemia após o programa]",
  },
  {
    nome: "[Nome do paciente 2]",
    texto: "[DEPOIMENTO 2 — como foi o processo de acompanhamento]",
  },
  {
    nome: "[Nome do paciente 3]",
    texto: "[DEPOIMENTO 3 — o que mudou na rotina do dia a dia]",
  },
];

export default function Depoimentos() {
  return (
    <section className="bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="font-display font-700 text-3xl sm:text-4xl text-neutral-900 leading-[1.15] text-center">
          Quem já passou por isso
        </h2>

        <div className="mt-12 grid sm:grid-cols-3 gap-5 sm:gap-6">
          {DEPOIMENTOS.map((depoimento) => (
            <div key={depoimento.nome} className="rounded-lg bg-gold-light p-6 flex flex-col gap-4">
              <span aria-hidden className="text-gold text-sm tracking-wide">
                ★★★★★
              </span>
              <p className="italic text-neutral-800 font-body text-sm sm:text-base">
                &ldquo;{depoimento.texto}&rdquo;
              </p>
              <span className="mt-auto text-sm font-heading font-600 text-neutral-900">
                {depoimento.nome}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
