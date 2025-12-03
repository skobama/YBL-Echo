import { HelpCircle, ChevronDown, ArrowUp, ArrowDown, Edit } from 'lucide-react';

export function SalesHealthCard() {
  return (
    <div className="w-[280px] flex flex-col gap-6">
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
    </div>
  );
}
