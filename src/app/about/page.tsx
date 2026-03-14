import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { visitedPlaces, getStats } from "@/data/visited-places";
import {
    MapPin, ExternalLink, ArrowRight, Camera, Compass,
    Utensils, Globe, DollarSign, Users, BookOpen, Calculator,
} from "lucide-react";

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
        hoverCls: "hover:bg-red-600 hover:border-red-600 hover:text-white",
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
        hoverCls: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500  hover:text-white",
        label: "Follow",
    },
    {
        name: "TikTok",
        handle: "@meriandayman",
        description: "Short-form travel clips, quick tips, and destination highlights.",
        href: "https://tiktok.com/@meriandayman",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
            </svg>
        ),
        hoverCls: "hover:bg-black hover:border-black hover:text-white",
        label: "Follow",
    },
    {
        name: "Facebook",
        handle: "udreamtravels",
        description: "Travel updates, trip recaps, and community discussions.",
        href: "https://facebook.com/udreamtravels",
        icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
        ),
        hoverCls: "hover:bg-blue-600 hover:border-blue-600 hover:text-white",
        label: "Like Page",
    },
];

const TRAVEL_STYLE = [
    {
        icon: Compass,
        title: "Slow Travel",
        body: "Days, not destinations. I stay long enough to feel like a local, not just a tourist passing through.",
        color: "bg-blue-50 text-blue-600",
    },
    {
        icon: Utensils,
        title: "Eat Where Locals Eat",
        body: "The best meals are never in the tourist strip. A hawker stall or a family kitchen will always beat a fancy restaurant.",
        color: "bg-amber-50 text-amber-600",
    },
    {
        icon: Camera,
        title: "Drone Filmmaker",
        body: "Every landscape deserves to be seen from above. I shoot all my destinations with a drone to capture what the eye can't see.",
        color: "bg-violet-50 text-violet-600",
    },
    {
        icon: DollarSign,
        title: "Budget-Conscious",
        body: "Adventure doesn't require deep pockets. I document real costs so anyone can plan a trip with clarity and confidence.",
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        icon: Globe,
        title: "Off the Beaten Path",
        body: "If it's on every travel list, I'm probably looking for the alternative. The best places are the ones no one tells you about.",
        color: "bg-rose-50 text-rose-600",
    },
    {
        icon: Users,
        title: "People Over Places",
        body: "A destination is just geography. The people, conversations, and shared meals are what make a trip unforgettable.",
        color: "bg-teal-50 text-teal-600",
    },
];

const CTA_LINKS = [
    {
        href: "/map",
        icon: MapPin,
        label: "Explore the Map",
        sub: "See every destination I've visited",
        primary: true,
    },
    {
        href: "/blog",
        icon: BookOpen,
        label: "Read the Blog",
        sub: "Stories from every journey",
        primary: false,
    },
    {
        href: "/resources/destination-costs",
        icon: Calculator,
        label: "Budget Planner",
        sub: "Real costs with currency conversion",
        primary: false,
    },
    {
        href: "/resources/travel-assessment",
        icon: Compass,
        label: "Travel Assessment",
        sub: "Find out if you're ready to go",
        primary: false,
    },
];

export default function AboutPage() {
    const stats = getStats();
    const continents = new Set(visitedPlaces.map((p) => p.continent)).size;

    return (
        <div className="min-h-screen bg-white">

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
                {/* subtle dot pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "28px 28px" }}
                />
                <div className="max-w-5xl mx-auto relative">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                        {/* Avatar */}
                        <div className="relative shrink-0">
                            <div className="w-44 h-44 md:w-56 md:h-56 rounded-3xl overflow-hidden ring-4 ring-primary/20 shadow-2xl shadow-primary/10">
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
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                                Traveller. Storyteller. <br />
                                <span className="text-primary">Perpetually Curious.</span>
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                Udream started as a personal journal — a way to document the places, people, and moments that changed how I see the world. What began as solo backpacking through Southeast Asia eventually became a storytelling platform for anyone who&apos;s ever stared at a map and felt the pull of somewhere new.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                I travel slowly, shoot with a drone, and always eat where the locals eat. Every pin on the map is a story. This is where I tell them.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <Link
                                    href="/map"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    <MapPin className="w-4 h-4" /> Explore the Map
                                </Link>
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary text-sm font-semibold transition-colors"
                                >
                                    Read the Blog <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Banner ─────────────────────────────────────────────── */}
            <section className="py-14 px-4 bg-foreground text-background">
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

            {/* ── How I Travel ─────────────────────────────────────────────── */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            My Approach
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Travel</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            These aren&apos;t rules, they&apos;re just the things I&apos;ve learned from years of getting lost in the best possible way.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {TRAVEL_STYLE.map(({ icon: Icon, title, body, color }) => (
                            <div
                                key={title}
                                className="group p-6 rounded-2xl border border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div className={`w-10 h-10 rounded-xl ${color} bg-opacity-100 flex items-center justify-center mb-4`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Social Links ─────────────────────────────────────────────── */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        Follow Along
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Me Online</h2>
                    <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
                        Subscribe on YouTube for cinematic travel films, or follow on Instagram for daily travel inspiration and behind-the-scenes moments.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {SOCIAL_LINKS.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-border bg-card transition-all duration-300 hover:shadow-xl ${social.hoverCls}`}
                            >
                                <div className="transition-colors">{social.icon}</div>
                                <div className="text-center">
                                    <p className="font-bold text-lg group-hover:text-white transition-colors">{social.name}</p>
                                    <p className="text-sm text-muted-foreground mt-0.5 group-hover:text-white/70 transition-colors">{social.handle}</p>
                                    <p className="text-sm mt-2 text-muted-foreground group-hover:text-white/70 transition-colors">{social.description}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-current text-sm font-semibold group-hover:text-white transition-colors">
                                    {social.label} <ExternalLink className="w-3.5 h-3.5" />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────────── */}
            <section className="relative py-24 px-4 bg-foreground overflow-hidden">
                {/* Background accent */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/15 blur-3xl" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-5">
                        Ready to explore?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-background mb-4 leading-tight">
                        Your Next Adventure <br />
                        <span className="text-primary">Starts Here.</span>
                    </h2>
                    <p className="text-background/60 text-lg mb-14 max-w-xl mx-auto">
                        Use the tools I&apos;ve built to plan smarter, travel further, and feel more prepared than ever before.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {CTA_LINKS.map(({ href, icon: Icon, label, sub, primary }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                                    primary
                                        ? "bg-primary border-primary text-white hover:bg-primary/90"
                                        : "bg-white/5 border-white/10 text-background hover:bg-white/10 hover:border-white/20"
                                }`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${primary ? "bg-white/20" : "bg-white/10"}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="text-center">
                                    <p className="font-semibold text-sm">{label}</p>
                                    <p className={`text-xs mt-0.5 ${primary ? "text-white/70" : "text-background/50"}`}>{sub}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity mt-auto" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
