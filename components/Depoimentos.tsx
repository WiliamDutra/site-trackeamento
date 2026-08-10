const PLACEHOLDERS = [1, 2, 3];

export default function Depoimentos() {
  return (
    <section className="bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="font-display font-700 text-3xl sm:text-4xl text-neutral-900 leading-[1.15] text-center">
          Quem já passou por isso
        </h2>
        <p className="mt-3 text-center text-neutral-500 text-sm font-body">
          Depoimentos reais de pacientes entram aqui assim que forem enviados.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-5 sm:gap-6">
          {PLACEHOLDERS.map((n) => (
            <div
              key={n}
              className="rounded-lg bg-gold-light/40 border border-dashed border-gold/40 p-6 flex flex-col gap-3"
            >
              <span aria-hidden className="text-gold/50 text-sm tracking-wide">
                ★★★★★
              </span>
              <div className="space-y-2">
                <div className="h-3 rounded-full bg-neutral-200/70 w-full" />
                <div className="h-3 rounded-full bg-neutral-200/70 w-5/6" />
                <div className="h-3 rounded-full bg-neutral-200/70 w-2/3" />
              </div>
              <span className="mt-auto text-xs font-heading font-600 text-neutral-500">
                Depoimento {n} em breve
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
