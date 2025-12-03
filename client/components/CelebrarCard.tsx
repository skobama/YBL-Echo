import {
  ArrowUp,
  ArrowDown,
  ChevronRight,
  ChevronLeft,
  Trophy,
} from "lucide-react";

export function CelebrarCard() {
  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* ¡A celebrar! Section */}
      <div className="bg-neutral-10 rounded-lg p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-yanbal-black">¡A celebrar!</h2>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 border border-yanbal-black rounded-full flex items-center justify-center">
              <ChevronLeft className="w-3 h-3 text-yanbal-black" />
            </button>
            <button className="w-8 h-8 border border-yanbal-black rounded-full flex items-center justify-center">
              <ChevronRight className="w-3 h-3 text-yanbal-black" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { name: 'Milagros Cabrera', date: 'HOY', active: true },
            { name: 'Juanita Baca', date: '01/03', active: false },
            { name: 'Anita Zapata', date: '04/03', active: false }
          ].map((person, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 flex items-center gap-4 border ${
                person.active
                  ? 'border-yanbal-50 bg-yanbal-20'
                  : 'border-neutral-60 bg-neutral-20'
              }`}
            >
              <div className="flex-1 flex flex-col gap-2">
                <p className={`text-base ${person.active ? 'text-yanbal-black' : 'text-neutral-60'}`}>
                  {person.name}
                </p>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.6662 4.53329H11.2662C11.5328 4.33329 11.6662 4.13329 11.7995 3.93329C12.1995 3.26663 12.2662 2.39996 11.8662 1.86663C11.6662 1.59996 11.1995 1.13329 10.2662 1.26663C9.1995 1.39996 8.3995 2.59996 7.93283 3.73329C7.06617 2.06663 6.13283 1.19996 5.13283 1.26663C4.7995 1.19996 4.33283 1.46663 3.9995 1.99996C3.86617 2.33329 3.66617 2.99996 4.13283 3.93329C4.26617 4.13329 4.3995 4.33329 4.5995 4.53329H2.33283C2.06617 4.53329 1.7995 4.73329 1.7995 5.06663V14.4C1.7995 14.6666 1.9995 14.9333 2.33283 14.9333H13.6662C13.9328 14.9333 14.1995 14.7333 14.1995 14.4V5.06663C14.1328 4.73329 13.9328 4.53329 13.6662 4.53329Z" fill={person.active ? '#1C1F28' : '#77797E'}/>
                  </svg>
                  <span className={`text-sm font-semibold ${person.active ? 'text-yanbal-black' : 'text-neutral-60'}`}>
                    {person.date}
                  </span>
                </div>
              </div>
              <div className="w-8 h-8">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.4427 15.98C19.1107 15.8147 17.4787 15.0147 17.176 14.9053C16.8707 14.7947 16.6493 14.74 16.4293 15.0707C16.208 15.4 15.572 16.1453 15.3787 16.3653C15.1853 16.5853 14.992 16.6133 14.66 16.448C14.328 16.284 13.2587 15.9347 11.992 14.8093C11.0053 13.9333 10.34 12.852 10.1453 12.5213C9.95333 12.1907 10.1253 12.012 10.292 11.848C10.4413 11.7 10.624 11.4627 10.7893 11.2693C10.956 11.076 11.0107 10.94 11.1213 10.7187C11.232 10.4987 11.1773 10.3053 11.0933 10.14C11.0107 9.97467 10.3467 8.34933 10.0707 7.688C9.80133 7.04533 9.52667 7.132 9.324 7.12133C9.13067 7.11333 8.90933 7.11067 8.68933 7.11067C8.468 7.11067 8.108 7.19333 7.804 7.52267C7.5 7.85333 6.64267 8.65333 6.64267 10.2787C6.64267 11.9027 7.83067 13.4733 7.99733 13.6933C8.16267 13.9133 10.336 17.248 13.664 18.6787C14.456 19.0187 15.0747 19.2227 15.556 19.3747C16.3507 19.6253 17.0747 19.5907 17.6453 19.5053C18.2827 19.4107 19.608 18.7067 19.8853 17.936C20.1613 17.164 20.1613 16.504 20.0787 16.3653C19.9947 16.228 19.7733 16.1453 19.4427 15.98Z" fill={person.active ? '#1C1F28' : '#77797E'}/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-yanbal-black rounded-full"></div>
          <div className="w-3 h-3 bg-white border border-yanbal-black rounded-full"></div>
          <div className="w-3 h-3 bg-white border border-yanbal-black rounded-full"></div>
          <div className="w-3 h-3 bg-white border border-yanbal-black rounded-full"></div>
          <div className="w-3 h-3 bg-white border border-yanbal-black rounded-full"></div>
          <div className="w-3 h-3 bg-white border border-yanbal-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
