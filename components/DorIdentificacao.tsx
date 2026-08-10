const SITUACOES = [
  "Já tentou várias dietas, aplicativos e planilhas de controle — e a glicemia continua instável.",
  "Sente que precisa escolher entre \"viver normalmente\" e \"cuidar da diabetes\".",
  "Tem medo das complicações no futuro, mas não sabe por onde recomeçar de verdade.",
  "Já foi julgado(a) por não conseguir manter a disciplina sozinho(a).",
];

export default function DorIdentificacao() {
  return (
    <section className="bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="font-display font-700 text-3xl sm:text-4xl text-neutral-900 leading-[1.15] text-center">
          Se algo disso soa familiar, você não está sozinho(a).
        </h2>

        <ul className="mt-10 space-y-5">
          {SITUACOES.map((situacao) => (
            <li
              key={situacao}
              className="flex items-start gap-3 rounded-xl bg-surface border border-neutral-200 p-5"
            >
              <span aria-hidden className="text-gold text-lg leading-none mt-0.5">
                ✦
              </span>
              <p className="text-neutral-700 text-base sm:text-lg font-body">{situacao}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-neutral-700 text-base sm:text-lg font-body max-w-2xl mx-auto">
          O problema quase nunca é falta de esforço — é não ter um plano <em className="italic">possível</em> de
          seguir, com alguém acompanhando de perto cada passo.
        </p>
      </div>
    </section>
  );
}
