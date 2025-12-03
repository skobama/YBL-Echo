import {
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  Trophy,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { LeadershipDistResponse } from "@shared/api";

async function fetchLeadershipData(): Promise<LeadershipDistResponse> {
  const response = await fetch("/api/leadership");
  if (!response.ok) {
    throw new Error("Failed to fetch leadership data");
  }
  return response.json();
}

export function LeadershipDistCard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["leadership"],
    queryFn: fetchLeadershipData,
  });

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col gap-6">
        <div className="bg-neutral-10 rounded-lg p-6 flex flex-col gap-6">
          <p className="text-yanbal-black">Cargando...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex flex-col gap-6">
        <div className="bg-neutral-10 rounded-lg p-6 flex flex-col gap-6">
          <p className="text-crimson-40">Error al cargar los datos</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Leadership Distribution Card */}
      <div className="bg-neutral-10 rounded-lg p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-yanbal-black">
            Distribución de mis Líderes:
          </h2>
          <button className="flex items-center gap-1 text-sm font-semibold text-yanbal">
            Ver Mis Líderes
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-16">
          {/* Donut Chart */}
          <div className="flex items-center justify-center gap-12 flex-1">
            <div className="relative w-[154px] h-[154px]">
              <svg
                width="154"
                height="154"
                viewBox="0 0 154 154"
                className="transform -rotate-90"
              >
                <circle
                  cx="77"
                  cy="77"
                  r="67.925"
                  fill="none"
                  stroke="#EDAC94"
                  strokeWidth="18.15"
                />
                <circle
                  cx="77"
                  cy="77"
                  r="67.925"
                  fill="none"
                  stroke="#DC582A"
                  strokeWidth="18.15"
                  strokeDasharray={`${(data!.leadersPercentage / 100) * 426} 426`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-semibold text-yanbal-black">
                  {data?.totalLeaders}
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-[30px] h-[25px] bg-yanbal-50 rounded-lg"></div>
                <div>
                  <p className="text-base font-semibold text-neutral-90">
                    Líderes ({data?.leadersPercentage}%)
                  </p>
                  <p className="text-base text-neutral-90">{data?.leaders}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-[30px] h-[25px] bg-yanbal rounded-lg"></div>
                <div>
                  <p className="text-base font-semibold text-neutral-90">
                    JNR/SEN ({data?.jnrPercentage}% / {data?.snrPercentage}%)
                  </p>
                  <p className="text-base text-neutral-90">
                    {data?.jnr} JNR - {data?.snr} SNR
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-px h-[154px] bg-neutral-30"></div>

          {/* Powerful Leaders */}
          <div className="flex flex-col gap-4 p-4">
            <Trophy className="w-8 h-8 text-yanbal-black" />
            <div>
              <p className="text-base font-semibold text-neutral-90">
                Líderes Poderosas ({data?.powerfulLeadersPercentage}%)
              </p>
              <p className="text-base text-neutral-90">
                {data?.powerfulLeaders}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
