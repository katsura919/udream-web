"use client";

import dynamic from "next/dynamic";
import type { VisitedPlace } from "@/data/visited-places";

// Leaflet requires `window`, so SSR must be disabled.
// This wrapper is a Client Component, which is the only place `ssr: false` is allowed.
const InteractiveMap = dynamic(() => import("@/components/map/InteractiveMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-[#1C1814]">
            <div className="flex flex-col items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
                    style={{ borderColor: "#9E414C", borderTopColor: "transparent" }}
                />
                <p
                    className="text-sm tracking-widest uppercase"
                    style={{ color: "#6B5E53", fontFamily: "'Inter', sans-serif" }}
                >
                    Loading map…
                </p>
            </div>
        </div>
    ),
});

interface MapClientProps {
    places: VisitedPlace[];
}

export default function MapClient({ places }: MapClientProps) {
    return <InteractiveMap places={places} />;
}
