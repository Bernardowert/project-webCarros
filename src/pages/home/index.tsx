import { ContainerGRID } from "../../components/containerGRID";

export function Home() {
  
  return (
    <ContainerGRID>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex items-center justify-center gap-2">
        <input
        className="w-full border-1 border-gray-500 rounded-lg h-9 px-3 outline-none"
         placeholder="Digite o nome do carro.."
        />
        <button
         className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg"
        >
          Buscar
        </button>
      </section>
      <h1 className="font-bold text-center mt-6 text-2xl mb-4">Carros novos e usados em todo o Brasil</h1>
       <main className="grid grid-cols-1 gap-6 md:grid-col-2 lg:grid-cols-3">
         <section className="w-full bg-white rounded-lg">
            <img
              src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250715/toyota-corolla-cross-1-8-vvti-hybrid-flex-xrx-cvt-wmimagem11333471540.webp"
              alt="carro"
              className="w-full rounded-lg mb-2 max-h-72 transition-all ease-linear hover:scale-105"
            />
            <p className="font-bold mt-1 mb-2 px-2">Toyota Corolla Cross 1.8 VVTi Flex XRX CVT</p>
            <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-6">Ano 2016/2016 || 23.000km</span>
              <strong className="text-black font-medium text-xl">R$ 49.900</strong>
            </div>

            <div className="w-full h-px bg-slate-200 my-2"></div>

            <div className="px-2 pb-2">
              <span className="text-black">
                Campo grande - MS
              </span>
            </div>
         </section>
          <section className="w-full bg-white rounded-lg">
            <img
              src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202507/20250715/toyota-corolla-cross-1-8-vvti-hybrid-flex-xrx-cvt-wmimagem11333471540.webp"
              alt="carro"
              className="w-full rounded-lg mb-2 max-h-72 transition-all ease-linear hover:scale-105"
            />
            <p className="font-bold mt-1 mb-2 px-2">Toyota Corolla Cross 1.8 VVTi Flex XRX CVT</p>
            <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-6">Ano 2016/2016 || 23.000km</span>
              <strong className="text-black font-medium text-xl">R$ 49.900</strong>
            </div>

            <div className="w-full h-px bg-slate-200 my-2"></div>

            <div className="px-2 pb-2">
              <span className="text-black">
                Campo grande - MS
              </span>
            </div>
         </section>
       </main>
    </ContainerGRID>
  )
}