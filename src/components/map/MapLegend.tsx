interface MapLegendProps {
    placesCount: number;
    countriesCount: number;
    continentsCount: number;
}

export default function MapLegend({ placesCount, countriesCount, continentsCount }: MapLegendProps) {
    return (
        <div className="absolute bottom-6 left-4 z-[1000] bg-[#2E261E]/90 backdrop-blur-sm border border-[#3D342C] rounded-xl p-4 shadow-2xl min-w-[180px]">
            <p
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "#D4A373", fontFamily: "'Inter', sans-serif" }}
            >
                My Footprints
            </p>
            <div className="flex items-center gap-2 mb-2">
                {/* Pin icon */}
                <svg width="18" height="24" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 0C7.163 0 0 7.163 0 16c0 10.627 14.234 24.562 15.337 25.625a.94.94 0 0 0 1.326 0C17.766 40.562 32 26.627 32 16 32 7.163 24.837 0 16 0z"
                        fill="#9E414C"
                    />
                    <circle cx="16" cy="15" r="7" fill="white" opacity="0.95" />
                    <circle cx="16" cy="15" r="4" fill="#9E414C" />
                </svg>
                <span style={{ color: "#EBE6D9", fontFamily: "'Inter', sans-serif", fontSize: 13 }}>
                    Visited Destination
                </span>
            </div>
            <div className="mt-3 pt-3 border-t border-[#3D342C] grid grid-cols-3 gap-3">
                <div className="text-center">
                    <p
                        className="text-2xl font-bold leading-none"
                        style={{ color: "#9E414C", fontFamily: "'Alfa Slab One', serif" }}
                    >
                        {placesCount}
                    </p>
                    <p className="text-[10px] mt-1 uppercase tracking-wider" style={{ color: "#6B5E53" }}>
                        Places
                    </p>
                </div>
                <div className="text-center">
                    <p
                        className="text-2xl font-bold leading-none"
                        style={{ color: "#9E414C", fontFamily: "'Alfa Slab One', serif" }}
                    >
                        {countriesCount}
                    </p>
                    <p className="text-[10px] mt-1 uppercase tracking-wider" style={{ color: "#6B5E53" }}>
                        Countries
                    </p>
                </div>
                <div className="text-center">
                    <p
                        className="text-2xl font-bold leading-none"
                        style={{ color: "#9E414C", fontFamily: "'Alfa Slab One', serif" }}
                    >
                        {continentsCount}
                    </p>
                    <p className="text-[10px] mt-1 uppercase tracking-wider" style={{ color: "#6B5E53" }}>
                        Continents
                    </p>
                </div>
            </div>
        </div>
    );
}
