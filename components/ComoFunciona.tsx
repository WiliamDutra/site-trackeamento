const ETAPAS = [
  {
    numero: "1",
    titulo: "Avaliação inicial",
    descricao:
      "Você responde um questionário sobre sua rotina, exames e histórico, para o programa ser adaptado à sua realidade.",
  },
  {
    numero: "2",
    titulo: "Conteúdo passo a passo",
    descricao:
      "Aulas curtas e diretas, sem termos técnicos difíceis, explicando o que fazer em cada semana — no seu tempo.",
  },
  {
    numero: "3",
    titulo: "Acompanhamento contínuo",
    descricao:
      "Suporte ao longo do programa para tirar dúvidas e ajustar o plano quando a rotina real não sai como o esperado.",
  },
  {
    numero: "4",
    titulo: "Acompanhamento dos resultados",
    descricao:
      "Você registra sua glicemia e evolução, e o programa te ajuda a entender o que está funcionando — sem depender só de força de vontade.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="font-display font-700 text-3xl sm:text-4xl text-neutral-900 leading-[1.15] text-center">
          Como funciona o programa
        </h2>
        <p className="mt-4 text-center text-neutral-700 text-base sm:text-lg font-body max-w-2xl mx-auto">
          Conteúdo online no seu ritmo, com acompanhamento de verdade — não é só mais um curso gravado que
          fica esquecido.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {ETAPAS.map((etapa) => (
            <div
              key={etapa.numero}
              className="group bg-surface rounded-2xl border border-neutral-200 p-5 sm:p-6
                         shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-gold/50
                         transition-all duration-200 flex flex-col"
            >
              <span className="font-display font-700 text-2xl text-gold">{etapa.numero}</span>
              <h3
                className="mt-2 font-heading font-700 text-base sm:text-lg text-neutral-900 mb-2
                           group-hover:text-primary-700 transition-colors leading-snug"
              >
                {etapa.titulo}
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base font-body">{etapa.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
