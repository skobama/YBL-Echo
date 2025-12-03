export function Footer() {
  return (
    <footer className="w-full bg-neutral-10 border-t border-neutral-20">
      <div className="flex items-center justify-between px-[60px] py-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.14285 1.52121H3.42255L7.73891 7.61087V12.2859H5.88504L5.91515 8.08751L1.14285 1.52121ZM8.40668 7.14947C8.31528 6.78056 8.27012 6.3801 8.27012 5.98072C8.27012 3.61276 9.7745 1.42871 12.1155 1.42871C12.2521 1.42871 12.4951 1.44395 12.5714 1.45918L8.40776 7.14947H8.40668Z" fill="#1C1F28"/>
            </svg>
          </div>
          <div className="flex items-center gap-2 text-xs text-yanbal-black">
            <span>©2024 Yanbal</span>
            <span>|</span>
            <span>UNIQUE S.A.</span>
            <span>20100102413</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-yanbal-black underline hover:no-underline">
              Política de Privacidad
            </a>
            <a href="#" className="text-yanbal-black underline hover:no-underline">
              Términos de servicio
            </a>
          </div>
          <span className="text-xs text-yanbal-black">Versión v1.0</span>
        </div>
      </div>
    </footer>
  );
}
