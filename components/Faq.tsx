const PERGUNTAS = [
  {
    pergunta: "Já tentei outras dietas e programas e não funcionou. Por que esse seria diferente?",
    resposta:
      "A maioria dos programas cobra disciplina perfeita e não se adapta à sua rotina real. Aqui o plano é construído a partir da sua avaliação inicial e ajustado ao longo do caminho — com acompanhamento, não só um material para você seguir sozinho(a).",
  },
  {
    pergunta: "Tenho medo de não conseguir manter a disciplina até o fim.",
    resposta:
      "Você não precisa ser perfeito(a) — o programa é pensado em pequenos passos possíveis de manter, e o acompanhamento existe justamente para te ajudar a retomar quando a rotina sair do previsto.",
  },
  {
    pergunta: `O valor de ${"R$ 97"} realmente vale a pena?`,
    resposta:
      "O investimento é bem menor do que consultas avulsas ou tentativas repetidas de dietas que não funcionam. E como há garantia incondicional de 7 dias, o risco é todo nosso, não seu.",
  },
  {
    pergunta: "É seguro fazer sem acompanhamento médico presencial constante?",
    resposta:
      "O programa foi desenvolvido pelo Dr. Marcos e não substitui seu médico de referência — ele complementa seu tratamento, com orientações seguras dentro do que pode ser acompanhado à distância. Em caso de dúvida clínica específica, sempre oriente-se também com seu médico presencial.",
  },
];

export default function Faq() {
  return (
    <section className="bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="font-display font-700 text-3xl sm:text-4xl text-neutral-900 leading-[1.15] text-center">
          Perguntas frequentes
        </h2>

        <div className="mt-10 space-y-3">
          {PERGUNTAS.map((item) => (
            <details
              key={item.pergunta}
              className="group rounded-xl bg-surface border border-neutral-200 p-5 open:border-gold/50 transition-colors duration-200"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-heading font-600 text-neutral-900 text-sm sm:text-base">
                {item.pergunta}
                <span
                  aria-hidden
                  className="shrink-0 text-gold transition-transform duration-200 group-open:rotate-45 text-lg leading-none"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-700 text-sm sm:text-base font-body">{item.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
