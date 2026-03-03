import type { Metadata } from "next";
import { visitedPlaces, getStats } from "@/data/visited-places";
import MapLegend from "@/components/map/MapLegend";
import InteractiveMap from "@/components/map/MapWrapper";

export const metadata: Metadata = {
    title: "My Footprints | Udream",
    description:
        "An interactive world map of every destination I've explored — click any pin to discover the story behind the journey.",
};


export default function MapPage() {
    const stats = getStats();

    return (
        <div
            className="h-screen w-full flex flex-col"
            style={{ background: "#f9f6f1", fontFamily: "'Inter', sans-serif" }}
        >
            {/* ── Map Area ── */}
            <main className="relative flex-1 w-full h-full">
                {/* Leaflet map fills the container */}
                <div className="absolute inset-0">
                    <InteractiveMap places={visitedPlaces} />
                </div>

                {/* Legend overlay */}
                <MapLegend
                    placesCount={stats.placesVisited}
                    countriesCount={stats.countriesVisited}
                    continentsCount={stats.continentsVisited}
                />
            </main>
        </div>
    );
}
