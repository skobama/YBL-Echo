import { Menu, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full bg-neutral-10 border-b border-neutral-20">
      <div className="flex items-center justify-between px-[60px] py-4">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2">
            <Menu className="w-8 h-8 text-yanbal-black" />
            <span className="text-lg font-semibold text-yanbal-black">Menú</span>
          </button>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <svg width="99" height="16" viewBox="0 0 99 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1827 0.135162H16.3792L9.50274 9.73166V15.8664H6.8315L6.87488 9.73166L0 0.135162H3.28482L8.23374 7.21447L13.1827 0.135162ZM24.0443 0L32.0812 15.8648H29.0149L27.5259 12.7418H20.1676L18.6785 15.8648H15.7005L23.7359 0H24.0443ZM26.3436 10.2691L23.8692 5.12343H23.8258L21.3513 10.2691H26.3436ZM45.5691 0.135162H48.2404V16H47.8902L38.4092 6.04413V15.8648H35.7379V0H36.0881L45.5691 9.95587V0.135162ZM66.0869 11.4156C66.0869 14.068 64.0943 15.8648 60.7661 15.8648H54.8751V0.135162H60.481C63.4807 0.135162 65.5833 1.66329 65.5833 4.31564C65.5833 5.91055 64.7079 7.03478 63.394 7.68674C65.0798 8.3387 66.0869 9.61876 66.0869 11.4172V11.4156ZM57.4379 2.47108V6.56092H60.3725C61.7965 6.56092 62.8036 6.02186 62.8036 4.516C62.8036 3.01014 61.7965 2.47108 60.3725 2.47108H57.4379ZM60.5693 13.5273C62.3651 13.5273 63.3289 12.8308 63.3289 11.2582C63.3289 9.68555 62.3651 8.98907 60.5693 8.98907H57.4379V13.5289H60.5693V13.5273ZM76.8602 0H77.167L85.2039 15.8648H82.1376L80.6486 12.7418H73.2918L71.8028 15.8648H68.8248L76.8602 0ZM79.4663 10.2691L76.9919 5.12343H76.9485L74.474 10.2691H79.4663ZM92.1454 13.3031H98.8235L97.8598 15.8648H89.4726V0.135162H92.1439V13.3047L92.1454 13.3031Z" fill="#1C1F28"/>
          </svg>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="text-sm font-semibold text-yanbal-black">Yesenia Rodriguez</span>
              <span className="text-[10px] font-semibold text-yanbal-black border border-yanbal-black rounded-full px-2 py-0.5">
                Coord. Ventas
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-neutral-20 flex items-center justify-center overflow-hidden">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="24" fill="#E5E7EB"/>
                  <path d="M24 24C27.3137 24 30 21.3137 30 18C30 14.6863 27.3137 12 24 12C20.6863 12 18 14.6863 18 18C18 21.3137 20.6863 24 24 24Z" fill="#9CA3AF"/>
                  <path d="M24 26C17.3726 26 12 29.134 12 33V36H36V33C36 29.134 30.6274 26 24 26Z" fill="#9CA3AF"/>
                </svg>
              </div>
              <ChevronDown className="w-4 h-4 text-yanbal-black" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
