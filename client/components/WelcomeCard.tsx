import { HelpCircle, ChevronDown, ArrowUp, ArrowDown, Edit } from 'lucide-react';

export function WelcomeCard() {
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
    </div>
  );
}
