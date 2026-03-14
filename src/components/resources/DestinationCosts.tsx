"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown, DollarSign, Plane, Info, Clock,
    Search, ArrowLeft, ArrowUpDown, Bed, Utensils, Bus, MapPin, Check,
} from "lucide-react";
import { destinationCosts, type DestinationCost } from "@/data/resources";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// ── Helpers ────────────────────────────────────────────────────────────────────

function getTier(mid: number) {
    if (mid < 60)  return { label: "Budget-friendly", borderCls: "border-l-emerald-500" };
    if (mid < 150) return { label: "Mid-range",       borderCls: "border-l-amber-500"   };
    return              { label: "Premium",            borderCls: "border-l-rose-500"    };
}

function getVisaBadge(forMalaysians: string, fee: string) {
    if (forMalaysians === "Home country")
        return { label: "Home Country",   badgeCls: "bg-blue-100 text-blue-700",    textCls: "text-blue-600"    };
    if (fee === "Free" || fee.includes("Free"))
        return { label: "Visa-free",      badgeCls: "bg-emerald-100 text-emerald-700", textCls: "text-emerald-600" };
    if (forMalaysians.toLowerCase().includes("on arrival"))
        return { label: "Visa on Arrival", badgeCls: "bg-amber-100 text-amber-700",  textCls: "text-amber-600"   };
    return { label: "Visa Required",   badgeCls: "bg-red-100 text-red-700",      textCls: "text-red-600"     };
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function BudgetBar({ label, amount, max, colorCls }: { label: string; amount: number; max: number; colorCls: string }) {
    return (
        <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground w-14 shrink-0">{label}</span>
            <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                    className={`h-full rounded-full ${colorCls}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(amount / max) * 100}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
            </div>
            <span className="text-xs font-semibold text-foreground w-16 text-right">${amount}/day</span>
        </div>
    );
}

const COST_ITEMS: { key: keyof DestinationCost["typicalCosts"]; label: string; icon: React.ReactNode }[] = [
    { key: "hostel",         label: "Hostel",          icon: <Bed      className="w-3.5 h-3.5" /> },
    { key: "midHotel",       label: "Mid Hotel",       icon: <Bed      className="w-3.5 h-3.5" /> },
    { key: "streetFood",     label: "Street Food",     icon: <Utensils className="w-3.5 h-3.5" /> },
    { key: "restaurant",     label: "Restaurant",      icon: <Utensils className="w-3.5 h-3.5" /> },
    { key: "localTransport", label: "Local Transport", icon: <Bus      className="w-3.5 h-3.5" /> },
    { key: "cityTransfer",   label: "City Transfer",   icon: <MapPin   className="w-3.5 h-3.5" /> },
];

function CostCard({ dest }: { dest: DestinationCost }) {
    const [open, setOpen] = useState(false);
    const tier = getTier(dest.budgetPerDay.mid);
    const visa = getVisaBadge(dest.visa.forMalaysians, dest.visa.fee);

    return (
        <div className={`rounded-2xl border border-border bg-card overflow-hidden border-l-[3px] ${tier.borderCls}`}>

            {/* Header row */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/40 transition-colors text-left gap-4"
            >
                <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-foreground">{dest.name}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${visa.badgeCls}`}>
                            {visa.label}
                        </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{dest.country} · {dest.currency}</p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden sm:flex items-center gap-1 text-sm font-semibold">
                        <span className="text-emerald-600">${dest.budgetPerDay.budget}</span>
                        <span className="text-border px-0.5">·</span>
                        <span className="text-amber-600">${dest.budgetPerDay.mid}</span>
                        <span className="text-border px-0.5">·</span>
                        <span className="text-rose-600">${dest.budgetPerDay.luxury}</span>
                        <span className="text-xs text-muted-foreground font-normal ml-1">/day</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
                </div>
            </button>

            {/* Expanded panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pt-4 pb-6 border-t border-border space-y-5">

                            {/* Daily budget bars */}
                            <div>
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                    Daily Budget Range
                                </p>
                                <div className="space-y-2">
                                    <BudgetBar label="Budget" amount={dest.budgetPerDay.budget} max={dest.budgetPerDay.luxury} colorCls="bg-emerald-500" />
                                    <BudgetBar label="Mid"    amount={dest.budgetPerDay.mid}    max={dest.budgetPerDay.luxury} colorCls="bg-amber-500"  />
                                    <BudgetBar label="Luxury" amount={dest.budgetPerDay.luxury} max={dest.budgetPerDay.luxury} colorCls="bg-rose-500"   />
                                </div>
                            </div>

                            {/* Typical costs */}
                            <div>
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                                    Typical Costs
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {COST_ITEMS.map(({ key, label, icon }) => (
                                        <div key={key} className="bg-muted/50 rounded-xl p-3 flex items-start gap-2">
                                            <span className="text-muted-foreground mt-0.5 shrink-0">{icon}</span>
                                            <div>
                                                <p className="text-xs text-muted-foreground">{label}</p>
                                                <p className="text-sm font-semibold text-foreground leading-snug">
                                                    {dest.typicalCosts[key]}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visa + Best time */}
                            <div className="grid sm:grid-cols-2 gap-3">
                                <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-3.5">
                                    <Plane className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs text-muted-foreground mb-0.5">Visa (Malaysian passport)</p>
                                        <p className={`text-sm font-semibold ${visa.textCls}`}>{dest.visa.forMalaysians}</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">Fee: {dest.visa.fee}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-3.5">
                                    <Clock className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-xs text-muted-foreground mb-0.5">Best Time to Visit</p>
                                        <p className="text-sm font-semibold text-foreground">{dest.bestTimeToVisit}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Pro tips */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Info className="w-3.5 h-3.5 text-primary" />
                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Pro Tips
                                    </p>
                                </div>
                                <ul className="space-y-1.5">
                                    {dest.tips.map((tip, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="text-primary font-bold mt-0.5 shrink-0">→</span>
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Filters ────────────────────────────────────────────────────────────────────

const SORT_OPTIONS = [
    { label: "Default",              value: "default"   },
    { label: "Cheapest first",       value: "cheapest"  },
    { label: "Most expensive first", value: "expensive" },
];

const BUDGET_FILTERS = [
    { label: "All",           value: "all"     },
    { label: "Under $50/day", value: "budget"  },
    { label: "$50–$150/day",  value: "mid"     },
    { label: "$150+/day",     value: "premium" },
];

// ── Main export ────────────────────────────────────────────────────────────────

export function DestinationCostsSection() {
    const [search,       setSearch]       = useState("");
    const [sort,         setSort]         = useState("default");
    const [budgetFilter, setBudgetFilter] = useState("all");

    const filtered = useMemo(() => {
        let list = destinationCosts.filter(
            (d) =>
                d.name.toLowerCase().includes(search.toLowerCase()) ||
                d.country.toLowerCase().includes(search.toLowerCase())
        );

        if (budgetFilter === "budget")  list = list.filter((d) => d.budgetPerDay.mid < 50);
        if (budgetFilter === "mid")     list = list.filter((d) => d.budgetPerDay.mid >= 50  && d.budgetPerDay.mid < 150);
        if (budgetFilter === "premium") list = list.filter((d) => d.budgetPerDay.mid >= 150);

        if (sort === "cheapest")  list = [...list].sort((a, b) => a.budgetPerDay.mid - b.budgetPerDay.mid);
        if (sort === "expensive") list = [...list].sort((a, b) => b.budgetPerDay.mid - a.budgetPerDay.mid);

        return list;
    }, [search, sort, budgetFilter]);

    return (
        <div className="min-h-screen bg-white pb-24">

            {/* ── Hero ──────────────────────────────────────────────────────── */}
            <div className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto relative">
                    <Link
                        href="/resources"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Resources
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                            <DollarSign className="w-4 h-4" /> Cost Breakdown
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            How Much Does It{" "}
                            <span className="text-primary">Really Cost?</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Real numbers from my trips. Budget = backpacker hostels + street food.
                            Mid = comfortable hotel + restaurant meals.
                            Visa info is for <strong>Malaysian passport</strong> holders.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 mt-10">

                {/* ── Legend ──────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-5 mb-8 text-sm"
                >
                    {[
                        { color: "bg-emerald-500", label: "Budget (backpacker)"  },
                        { color: "bg-amber-500",   label: "Mid-range"            },
                        { color: "bg-rose-500",    label: "Luxury"               },
                    ].map(({ color, label }) => (
                        <div key={label} className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
                            <span className="text-muted-foreground">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* ── Search + Sort ────────────────────────────────────────── */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <div className="relative flex-1 sm:max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <input
                            type="text"
                            placeholder="Search destination or country..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full h-10 pl-9 pr-4 rounded-full border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 h-10 pl-4 pr-3 rounded-full border border-border bg-card text-sm hover:bg-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30">
                            <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                            <span>{SORT_OPTIONS.find((o) => o.value === sort)?.label}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            {SORT_OPTIONS.map((o) => (
                                <DropdownMenuItem
                                    key={o.value}
                                    onClick={() => setSort(o.value)}
                                    className="flex items-center justify-between gap-6"
                                >
                                    {o.label}
                                    {sort === o.value && <Check className="w-3.5 h-3.5 text-primary" />}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* ── Budget filter tabs ───────────────────────────────────── */}
                <div className="flex items-center gap-2 flex-wrap mb-6">
                    {BUDGET_FILTERS.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setBudgetFilter(f.value)}
                            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                                budgetFilter === f.value
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                    <span className="ml-auto text-sm text-muted-foreground">
                        {filtered.length} destination{filtered.length !== 1 ? "s" : ""}
                    </span>
                </div>

                {/* ── Cards ───────────────────────────────────────────────── */}
                <div className="space-y-2.5">
                    {filtered.length > 0 ? (
                        filtered.map((dest, i) => (
                            <motion.div
                                key={dest.placeId}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                            >
                                <CostCard dest={dest} />
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-muted-foreground py-12 text-center">
                            No destinations found{search ? ` for "${search}"` : ""}.
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
}
