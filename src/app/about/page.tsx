import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { visitedPlaces, getStats } from "@/data/visited-places";
import { MapPin, Youtube, Instagram, ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "About | Udream Travels",
    description:
        "Hey, I'm the mind behind Udream — a travel blog documenting authentic adventures across Asia, Europe, and beyond.",
};

const SOCIAL_LINKS = [
    {
        name: "YouTube",
        handle: "@udreamtravels",
        description: "Cinematic travel vlogs and drone footage from every destination.",
        href: "https://youtube.com/@udreamtravels",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
        color: "group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white",
        label: "Subscribe",
    },
    {
        name: "Instagram",
        handle: "@udream_travel",
        description: "Daily travel photos, reels, and behind-the-scenes Stories.",
        href: "https://instagram.com/udream_travel",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
        ),
        color: "group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:border-pink-500 group-hover:text-white",
        label: "Follow",
    },
];

const JOURNEY_MILESTONES = [
    { year: "2022", title: "First Big Adventure", detail: "Europe — 11 countries in 4 weeks." },
    { year: "2023", title: "Southeast Asia Loop", detail: "Malaysia to Japan via 12 countries." },
    { year: "2024", title: "Silk Road Expedition", detail: "Central Asia, Caucasus, and Turkey." },
    { year: "2025", title: "Drone & Aerial Work", detail: "Documenting landscapes from above." },
    { year: "2026", title: "Still Going", detail: "New chapters being written right now." },
];

export default function AboutPage() {
    const stats = getStats();
    const continents = new Set(visitedPlaces.map((p) => p.continent)).size;

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden ring-4 ring-primary/20 shadow-2xl shadow-primary/10">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Udream — Profile"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="absolute -bottom-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                                <MapPin className="w-3.5 h-3.5" />
                                {stats.countriesVisited} Countries
                            </span>
                        </div>

                        {/* Bio */}
                        <div className="flex-1 text-center md:text-left">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                Hey, I&apos;m the one behind Udream 👋
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                Traveller. Storyteller. <br />
                                <span className="text-primary">Perpetually Curious.</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                Udream started as a personal journal — a way to document the places, people, and moments that changed how I see the world. What began as solo backpacking through Southeast Asia eventually became something bigger: a storytelling platform for anyone who&apos;s ever stared at a map and felt the pull of somewhere new.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I travel slowly, shoot with a drone, and always eat where the locals eat. Every pin on the map is a story. This is where I tell them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="py-12 px-4 bg-foreground text-background">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: stats.placesVisited, label: "Destinations" },
                        { value: stats.countriesVisited, label: "Countries" },
                        { value: continents, label: "Continents" },
                        { value: "2022", label: "Since" },
                    ].map((s) => (
                        <div key={s.label}>
                            <p className="text-4xl font-bold text-primary tabular-nums">{s.value}</p>
                            <p className="text-sm text-background/60 uppercase tracking-widest mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">The Journey So Far</h2>
                    <div className="relative">
                        {/* line */}
                        <div className="absolute left-[22px] top-2 bottom-2 w-px bg-border md:left-1/2" />
                        <div className="space-y-10">
                            {JOURNEY_MILESTONES.map((m, i) => (
                                <div
                                    key={m.year}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-0 md:left-1/2 w-11 h-11 -translate-x-0 md:-translate-x-1/2 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10 shrink-0">
                                        <span className="text-xs font-bold text-primary">{m.year}</span>
                                    </div>
                                    {/* Content */}
                                    <div
                                        className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] p-5 rounded-2xl border border-border bg-card ${i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                                            }`}
                                    >
                                        <p className="font-bold text-foreground mb-1">{m.title}</p>
                                        <p className="text-sm text-muted-foreground">{m.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Links */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Follow Along
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Me Online</h2>
                    <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
                        Subscribe on YouTube for cinematic travel films, or follow on Instagram for daily travel inspiration and behind-the-scenes moments.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-border bg-card transition-all duration-300 hover:shadow-xl ${social.color}`}
                            >
                                <div className="text-foreground group-hover:text-inherit transition-colors">
                                    {social.icon}
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-lg">{social.name}</p>
                                    <p className="text-sm text-muted-foreground group-hover:text-inherit/80 transition-colors">{social.handle}</p>
                                    <p className="text-sm mt-2 text-muted-foreground">{social.description}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-current text-sm font-semibold">
                                    {social.label} <ExternalLink className="w-3.5 h-3.5" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Start Exploring</h2>
                    <p className="text-muted-foreground mb-8">
                        Browse the interactive map, read the adventure logs, or check out travel cost breakdowns to plan your next trip.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/map"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                        >
                            <MapPin className="w-4 h-4" /> Explore the Map
                        </Link>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary font-semibold transition-colors"
                        >
                            Read the Blog <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
