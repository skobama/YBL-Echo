import { HelpCircle, ChevronDown, ArrowUp, ArrowDown, Edit } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-[280px] flex flex-col gap-6">
      {/* Welcome Card */}
      <div className="bg-neutral-10 rounded-lg p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-yanbal-black">¡Hola, Yesenia!</h2>
          <HelpCircle className="w-6 h-6 text-yanbal-black" />
        </div>

        <div className="flex items-center gap-2 px-3 py-1 border border-yanbal-black rounded-full w-fit">
          <span className="text-sm font-semibold text-yanbal-black">C88 - SEM8</span>
          <ChevronDown className="w-3 h-3 text-yanbal-black" />
        </div>

        <p className="text-sm text-yanbal-black">Actualizado hoy a las 88:88 a.m.</p>

        <button className="w-full bg-yanbal text-white font-semibold py-3 px-6 rounded-full hover:bg-yanbal/90 transition-colors flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
          </svg>
          Descargar reporte
        </button>

        <p className="text-xs text-yanbal-black">
          Si es necesario, descarga el reporte de gestión de ventas campo.
        </p>
      </div>

      {/* Sales Health Card */}
      <div className="bg-neutral-10 rounded-lg p-6 flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-neutral-90">¿De dónde viene tu Venta Neta?</h3>

        <div className="flex flex-col gap-2">
          {/* Metrics Row */}
          <div className="flex gap-2">
            <div className="flex-1 bg-peach-10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <ArrowUp className="w-4 h-4 text-mint-40" />
                <span className="text-sm font-semibold text-mint-40">+88.8%</span>
              </div>
              <p className="text-sm text-yanbal-black">venta x activa vs BP</p>
            </div>

            <div className="flex-1 bg-olive-10 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <ArrowDown className="w-4 h-4 text-crimson-40" />
                <span className="text-sm font-semibold text-crimson-40">-888</span>
              </div>
              <p className="text-sm text-yanbal-black">activa vs BP</p>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-yanbal-20 rounded-lg p-3 flex items-center gap-2">
            <ArrowUp className="w-4 h-4 text-mint-40 mt-1" />
            <p className="text-base text-yanbal-black">
              <span className="font-semibold text-mint-40">+88.8%</span> en venta neta ML vs BP
            </p>
          </div>
        </div>

        <button className="w-full border border-yanbal text-yanbal font-semibold py-2 px-6 rounded-full hover:bg-yanbal/5 transition-colors">
          Mas información
        </button>
      </div>

      {/* Meta Yanbal Card */}
      <div className="bg-blue-20 rounded-lg p-6 flex items-center gap-2 h-[156px]">
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <p className="text-sm text-yanbal-black">¡Meta Yanbal!</p>
            <p className="text-lg font-semibold text-yanbal-black">---</p>
          </div>
          <button className="flex items-center gap-2 text-xs font-semibold text-yanbal-black">
            <Edit className="w-3 h-3" />
            Escribe Meta
          </button>
        </div>
        <div className="w-32 h-[156px] relative bg-neutral-30 rounded-r-lg overflow-hidden">
          <svg width="126" height="108" viewBox="0 0 126 108" className="absolute left-0 top-6">
            <circle cx="63" cy="54" r="40" fill="#93C5FD" opacity="0.3"/>
          </svg>
        </div>
      </div>

      {/* Sueño Personal Card */}
      <div className="bg-blue-20 rounded-lg p-6 flex items-center gap-2 h-[156px]">
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <p className="text-sm text-yanbal-black">¡Sueño Personal!</p>
            <p className="text-lg font-semibold text-yanbal-black">---</p>
          </div>
          <button className="flex items-center gap-2 text-xs font-semibold text-yanbal-black">
            <Edit className="w-3 h-3" />
            Escribe Sueño
          </button>
        </div>
        <div className="w-32 h-[156px] relative bg-neutral-30 rounded-r-lg overflow-hidden">
          <svg width="126" height="108" viewBox="0 0 126 108" className="absolute left-0 top-6">
            <path d="M40 70 L60 50 L70 60 L90 40" stroke="#DC582A" strokeWidth="3" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
