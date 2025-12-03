import { ArrowUp, ArrowDown, ChevronRight, ChevronLeft, Trophy } from 'lucide-react';

export function CampaignCard() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Campaign 88 Card */}
      <div className="bg-neutral-10 rounded-lg p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-yanbal-black">Campaña 88</h2>
          <button className="flex items-center gap-1 text-sm font-semibold text-yanbal">
            Ver Mi Coordinación
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {/* KPI Card 1 */}
          <div className="border border-neutral-30 rounded-lg p-6 flex flex-col gap-3">
            <div>
              <p className="text-sm text-yanbal-black">Foco</p>
              <p className="text-base font-semibold text-yanbal-black">Venta Neta</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-neutral-90">S/ 888,888,888</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowUp className="w-4 h-4 text-mint-40" />
                <span className="text-sm text-mint-40">+888.8% vs obj. BP</span>
              </div>
            </div>
          </div>

          {/* KPI Card 2 */}
          <div className="border border-neutral-30 rounded-lg p-6 flex flex-col gap-3">
            <div>
              <p className="text-sm text-yanbal-black">Facilitador</p>
              <p className="text-base font-semibold text-yanbal-black">Activas</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-neutral-90">888.8 prom<span className="text-base">x</span>DIR</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowDown className="w-4 h-4 text-crimson-40" />
                <span className="text-sm text-crimson-40">888 Act. vs obj. BP</span>
              </div>
            </div>
          </div>

          {/* KPI Card 3 */}
          <div className="border border-neutral-30 rounded-lg p-6 flex flex-col gap-3">
            <div>
              <p className="text-sm text-yanbal-black">Foco</p>
              <p className="text-base font-semibold text-yanbal-black">Cuadrante A</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-neutral-90">888 Directoras</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowDown className="w-4 h-4 text-crimson-40" />
                <span className="text-sm text-crimson-40">888 DIR vs obj. 60%</span>
              </div>
            </div>
          </div>

          {/* KPI Card 4 */}
          <div className="border border-neutral-30 rounded-lg p-6 flex flex-col gap-3">
            <div>
              <p className="text-sm text-yanbal-black">Foco</p>
              <p className="text-base font-semibold text-yanbal-black">Nivel Estrellas</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-neutral-90">888 Directoras</p>
              <div className="flex items-center gap-1 mt-2">
                <ArrowDown className="w-4 h-4 text-crimson-40" />
                <span className="text-sm text-crimson-40">888 DIR vs obj. 60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
