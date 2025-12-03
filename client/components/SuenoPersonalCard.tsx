import { HelpCircle, ChevronDown, ArrowUp, ArrowDown, Edit } from 'lucide-react';

export function SuenoPersonalCard() {
  return (
    <div className="w-[280px] flex flex-col gap-6">
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
