const CREDENCIAIS = [
  "[CRM/registro do Dr. Marcos]",
  "[Especialização / tempo de experiência]",
  "[Nº de pacientes acompanhados]",
];

export default function SobreDrMarcos() {
  return (
    <section className="bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid sm:grid-cols-5 gap-10 items-center">
          <div className="sm:col-span-2">
            <div className="aspect-square w-full max-w-xs mx-auto rounded-2xl bg-background-alt border border-neutral-200 flex items-center justify-center text-neutral-500 text-sm font-body text-center p-4">
              [FOTO DO DR. MARCOS]
            </div>
          </div>

          <div className="sm:col-span-3 text-center sm:text-left">
            <h2 className="font-display font-700 text-3xl sm:text-4xl text-neutral-900 leading-[1.15]">
              Quem vai te acompanhar
            </h2>
            <p className="mt-4 text-neutral-700 text-base sm:text-lg font-body">
              [Bio curta do Dr. Marcos: sua história com pacientes de diabetes tipo 2, sua abordagem
              acolhedora e por que criou este programa.]
            </p>

            <ul className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 justify-center sm:justify-start">
              {CREDENCIAIS.map((credencial) => (
                <li
                  key={credencial}
                  className="rounded-full border border-neutral-200 px-4 py-1.5 text-xs sm:text-sm font-heading font-600 text-neutral-700"
                >
                  {credencial}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
