import { dataFeatures } from "./Features.data";
import { Reveal } from "@/components/Shared/Reveal";

export function Features() {
  return (
    <div className="max-w-6xl p-6 mx-auto lg:py-40">
      <h3 className="text-2xl lg:text-6xl font-extrabold text-[#CA9352]">
        Características clave
      </h3>
      <p className="max-w-lg mt-5 text-xl text-gray-300 lg:mt-10 lg:mb-16">
        Nos importa el confort y la seguridad de nuestros clientes. Por eso
        ofrecemos el mejor servicio que puedas imaginar.
      </p>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {dataFeatures.map(({ icon: Icon, text, bg, delay }) => (
          <Reveal
            key={text}
            className="flex flex-col items-center p-6 transition-all duration-300 rounded-xl"
            position="right"
            delay={delay}
          >
            <div
              className={`rounded-full ${bg} w-fit p-4 mb-4 flex justify-center transition-all duration-300 transform hover:scale-110`}
            >
              <Icon className="w-8 h-8 text-[#775732]" />
            </div>
            <p className="text-xl font-semibold text-center text-gray-300">{text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}