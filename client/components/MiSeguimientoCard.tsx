import { ArrowUp, ArrowDown, ChevronRight, ChevronLeft, Trophy } from 'lucide-react';

export function MiSeguimientoCard() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Mi Seguimiento Section */}
      <div className="bg-neutral-10 rounded-lg p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-yanbal-black">Mi Seguimiento</h2>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 border border-yanbal-black rounded-full flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-yanbal-black" />
            </button>
            <button className="w-8 h-8 border border-yanbal-black rounded-full flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-yanbal-black" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { metric: 'Venta Pública', value: '+888% vs objetivo', up: true },
            { metric: 'Activas', value: '-888% (888) vs objetivo', up: false },
            { metric: 'Cuadrante', value: 'Cuadrante A', up: null }
          ].map((item, index) => (
            <div key={index} className="border border-neutral-30 rounded-lg p-6 flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <p className="text-xl font-semibold text-neutral-90 flex-1 truncate">Rosalia Gutierrez</p>
                <span className="px-4 py-0.5 border border-mint-40 bg-mint-10 text-aegean-40 text-xs font-semibold rounded-full">
                  SSEN
                </span>
              </div>
              <p className="text-sm font-semibold text-yanbal-black">{item.metric}</p>
              <div className="flex items-center gap-1">
                {item.up === true && <ArrowUp className="w-4 h-4 text-mint-40" />}
                {item.up === false && <ArrowDown className="w-4 h-4 text-crimson-40" />}
                <span className={`text-sm ${item.up === true ? 'text-mint-40' : item.up === false ? 'text-crimson-40' : 'text-mint-40'}`}>
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-yanbal-black rounded-full"></div>
          <div className="w-3 h-3 bg-white border border-yanbal-black rounded-full"></div>
          <div className="w-3 h-3 bg-white border border-yanbal-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
