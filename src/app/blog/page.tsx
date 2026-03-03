import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { visitedPlaces } from "@/data/visited-places";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Adventure Logs | Udream",
    description: "Every journey tells a story. Browse all travel logs from our adventures around the world.",
};

// group places by continent
const continentOrder = ["Asia", "Europe", "Americas", "Africa", "Oceania"] as const;

export default function BlogPage() {
    const grouped = continentOrder
        .map((continent) => ({
            continent,
            places: visitedPlaces.filter((p) => p.continent === continent),
        }))
        .filter((g) => g.places.length > 0);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <div className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="relative max-w-3xl mx-auto">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Adventure Logs
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Every Journey <br />
                        <span className="text-primary">Tells a Story</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        {visitedPlaces.length} destinations across {new Set(visitedPlaces.map((p) => p.country)).size} countries — and counting.
                    </p>
                </div>
            </div>

            {/* Grouped sections */}
            <div className="max-w-7xl mx-auto px-4 pb-24 space-y-20">
                {grouped.map(({ continent, places }) => (
                    <section key={continent}>
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl font-bold">{continent}</h2>
                            <span className="px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                                {places.length} stops
                            </span>
                            <div className="flex-1 h-px bg-border" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {places.map((place) => {
                                const slug = place.blogLink.replace("/blog/", "");
                                return (
                                    <Link
                                        key={place.id}
                                        href={`/blog/${slug}`}
                                        className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative h-48 overflow-hidden bg-muted">
                                            <Image
                                                src={place.thumbnail}
                                                alt={place.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                            <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-primary/90 text-white text-xs font-semibold uppercase tracking-wider">
                                                {place.country}
                                            </span>
                                        </div>

                                        {/* Body */}
                                        <div className="flex flex-col flex-1 p-4 gap-3">
                                            <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                                                {place.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                                                {place.description}
                                            </p>
                                            <div className="flex items-center justify-between pt-2 border-t border-border">
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {place.dateVisited}
                                                </div>
                                                <div className="flex items-center gap-1 text-xs text-primary font-semibold group-hover:gap-2 transition-all">
                                                    Read story <ArrowRight className="w-3.5 h-3.5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
