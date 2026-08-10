import ComoFunciona from "@/components/ComoFunciona";
import CtaFinal from "@/components/CtaFinal";
import Depoimentos from "@/components/Depoimentos";
import DorIdentificacao from "@/components/DorIdentificacao";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import OfertaPreco from "@/components/OfertaPreco";
import SobreDrMarcos from "@/components/SobreDrMarcos";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <DorIdentificacao />
      <SobreDrMarcos />
      <ComoFunciona />
      <Depoimentos />
      <OfertaPreco />
      <Faq />
      <CtaFinal />
    </main>
  );
}
