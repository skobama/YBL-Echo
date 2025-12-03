import { ArrowUp, ArrowDown, ChevronRight, ChevronLeft, Trophy } from 'lucide-react';

export function TomaSection() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* ¡Toma en cuenta! Section */}
      <div className="bg-yanbal-30 rounded-lg p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-yanbal-black">¡Toma en cuenta!</h2>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 border border-yanbal-black rounded-full flex items-center justify-center bg-neutral-10">
              <ChevronLeft className="w-3 h-3 text-yanbal-black" />
            </button>
            <button className="w-8 h-8 border border-yanbal-black rounded-full flex items-center justify-center bg-neutral-10">
              <ChevronRight className="w-3 h-3 text-yanbal-black" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {['Retener', 'Reactivar', 'PPED', 'Cuadrante'].map((tag, index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-white">
              <div className="h-[120px] bg-crimson-20 opacity-90 flex items-end justify-center pb-4">
                <div className="w-[118px] h-[106px] bg-neutral-30 rounded-lg"></div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <span className="inline-block px-4 py-1 border border-crimson-40 bg-crimson-10 text-red-100 text-sm font-semibold rounded-full w-fit">
                  {tag}
                </span>
                <p className="text-base text-yanbal-black">
                  Falta <span className="font-semibold">888 DIR</span> para alcanzar el objetivo de {index === 0 ? '80% de retención' : index === 1 ? 'reactivación propio' : index === 2 ? 'PPED según el Cuad. A' : '60% de DIR en Cuadrante A'} en la campaña.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-yanbal-black rounded-full"></div>
          <div className="w-3 h-3 bg-white border border-yanbal-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
