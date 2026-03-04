"use client";

import { motion } from "framer-motion";
import {
    Landmark,
    MapPin,
    Compass,
    Mountain,
    Building2,
    Coffee,
    Sun,
    DollarSign,
    FileText,
    Briefcase,
    Calendar,
    AlertCircle,
    ArrowLeft,
    CheckCircle2,
    Info
} from "lucide-react";
import Link from "next/link";

const detailedGuides = [
    {
        country: "United States",
        visaType: "B1/B2 Tourist Visa",
        icon: <Landmark className="w-6 h-6" />,
        color: "from-blue-500/20 to-blue-500/5",
        iconColor: "text-blue-500",
        borderColor: "border-blue-500/20 group-hover:border-blue-500/40",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Show Money", value: "No fixed show money required." },
            { icon: <FileText className="w-4 h-4" />, label: "Requirement", value: "No bank certificate required; the B1/B2 is interview-based." },
            { icon: <Briefcase className="w-4 h-4" />, label: "Financial Profile", value: "Officers assess income, property, family ties, and intent to return." },
            { icon: <AlertCircle className="w-4 h-4" />, label: "Practical Guideline", value: "Show funds covering your full trip plus a 25–30% buffer, visible across 3–6 months of statements." },
            { icon: <CheckCircle2 className="w-4 h-4" />, label: "Key Asset", value: "Strong employment and ties to the Philippines carry more weight than any single bank balance." },
        ]
    },
    {
        country: "Schengen Area",
        visaType: "Short-Stay Visa",
        icon: <MapPin className="w-6 h-6" />,
        color: "from-indigo-500/20 to-indigo-500/5",
        iconColor: "text-indigo-500",
        borderColor: "border-indigo-500/20 group-hover:border-indigo-500/40",
        description: "The golden rule for all Schengen countries: Daily rate × number of days = your minimum. Always show 30% above the minimum. Sudden deposits are a red flag.",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Switzerland", value: "CHF 100/day (≈ ₱7,515). High daily rate." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Netherlands", value: "€100 – €120/day (≈ ₱6,859 – ₱8,231)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Spain", value: "€108/day (≈ ₱7,408) min total €900 (≈ ₱61,731)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "France", value: "€65 – €120/day (≈ ₱4,458 – ₱8,231)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Germany", value: "€45 – €120/day (≈ ₱3,087 – ₱8,231)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Norway", value: "NOK 505/day (≈ €48/≈ ₱3,065)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Sweden", value: "450 SEK/day (≈ €49/≈ ₱2,907)." },
            { icon: <DollarSign className="w-4 h-4" />, label: "Italy", value: "1–5 days: €269.60. 6–10 days: €44.93/day. 11–20 days: €51.64 + €36.67/day." },
        ],
        strategy: [
            { label: "Where to apply", value: "Apply through the country where you spend the most days—or the first port of entry." },
            { label: "Statements", value: "3–6 months of bank statements showing a consistent balance." },
            { label: "Timing", value: "Apply at least 3 months before travel during peak seasons." },
        ]
    },
    {
        country: "Australia",
        visaType: "Visitor Visa Subclass 600",
        icon: <Compass className="w-6 h-6" />,
        color: "from-amber-500/20 to-amber-500/5",
        iconColor: "text-amber-500",
        borderColor: "border-amber-500/20 group-hover:border-amber-500/40",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Recommended Total", value: "AUD 5k – 10k (≈ ₱204,850 – ₱409,700)." },
            { icon: <Calendar className="w-4 h-4" />, label: "Daily Benchmark", value: "AUD 100 – 150/day (≈ ₱4,097 – ₱6,146)." },
            { icon: <FileText className="w-4 h-4" />, label: "Financial Docs", value: "3–6 months of certified bank statements." },
            { icon: <Briefcase className="w-4 h-4" />, label: "Supporting Docs", value: "Include payslips, tax returns, and employment letters." },
            { icon: <AlertCircle className="w-4 h-4" />, label: "2025 Update", value: "Financial verification has tightened. Explain any large deposits clearly." },
        ]
    },
    {
        country: "Canada",
        visaType: "Visitor / Tourist Visa TRV",
        icon: <Mountain className="w-6 h-6" />,
        color: "from-red-500/20 to-red-500/5",
        iconColor: "text-red-500",
        borderColor: "border-red-500/20 group-hover:border-red-500/40",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Recommended Minimum", value: "CAD 5k – 10k (≈ ₱212,200 – ₱424,400)." },
            { icon: <FileText className="w-4 h-4" />, label: "Requirement", value: "6 months of bank statements showing consistent balance and regular salary credits." },
            { icon: <Info className="w-4 h-4" />, label: "Review Process", value: "High-scrutiny countries (including the Philippines) face stricter reviews." },
            { icon: <AlertCircle className="w-4 h-4" />, label: "Warning", value: "IRCC flags sudden deposits right before applying; avoid 'parking' a lump sum." },
        ]
    },
    {
        country: "United Arab Emirates",
        visaType: "Dubai / Abu Dhabi eVisa",
        icon: <Building2 className="w-6 h-6" />,
        color: "from-emerald-500/20 to-emerald-500/5",
        iconColor: "text-emerald-500",
        borderColor: "border-emerald-500/20 group-hover:border-emerald-500/40",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Show Money", value: "No show money or bank certificate required." },
            { icon: <FileText className="w-4 h-4" />, label: "Mandatory Requirement", value: "A UAE sponsor is required (national, licensed company, or travel agency)." },
            { icon: <CheckCircle2 className="w-4 h-4" />, label: "Easy Route", value: "Book through a licensed Dubai travel agency or hotel; they act as your sponsor automatically." },
            { icon: <MapPin className="w-4 h-4" />, label: "Option", value: "A 48–96 hour Dubai stopover visa is also available." },
        ]
    },
    {
        country: "South Korea",
        visaType: "Tourist / Short-Stay Visa",
        icon: <Coffee className="w-6 h-6" />,
        color: "from-pink-500/20 to-pink-500/5",
        iconColor: "text-pink-500",
        borderColor: "border-pink-500/20 group-hover:border-pink-500/40",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Requirement", value: "No bank certificate or formal show money required." },
            { icon: <Briefcase className="w-4 h-4" />, label: "Evaluation", value: "Based on employment status, consistent income, and ties to the Philippines." },
            { icon: <FileText className="w-4 h-4" />, label: "Key Docs", value: "Certificate of Employment (COE) and ITR carry more weight than deposit amounts." },
            { icon: <CheckCircle2 className="w-4 h-4" />, label: "Boosters", value: "A clean travel record and proof of return (property, family, job) significantly boost chances." },
        ]
    },
    {
        country: "Egypt",
        visaType: "Tourist Visa - Consular Manila",
        icon: <Sun className="w-6 h-6" />,
        color: "from-orange-500/20 to-orange-500/5",
        iconColor: "text-orange-500",
        borderColor: "border-orange-500/20 group-hover:border-orange-500/40",
        details: [
            { icon: <DollarSign className="w-4 h-4" />, label: "Practical Target", value: "Use ~$100/day (≈ ₱5,789) as a benchmark. For 7 days, aim for $700 (≈ ₱40,500)." },
            { icon: <FileText className="w-4 h-4" />, label: "Requirement", value: "Bank certificate or statement showing funds for full stay (no official peso floor published)." },
            { icon: <Info className="w-4 h-4" />, label: "Other Docs", value: "COE or business registration, detailed itinerary, travel insurance, and accommodation proof." },
            { icon: <Calendar className="w-4 h-4" />, label: "Processing", value: "Approximately 15 working days; submit at least 4 weeks before travel." },
        ]
    }
];

const cheatSheet = [
    { destination: "USA", rate: "No fixed amount; interview-based", php: "Based on trip duration" },
    { destination: "Canada", rate: "CAD 5,000 – 10,000", php: "₱212,000 – ₱424,000" },
    { destination: "Australia", rate: "AUD 5,000 – 10,000", php: "₱204,000 – ₱409,000" },
    { destination: "UK", rate: "£1,500 – £2,500", php: "₱117,000 – ₱196,000" },
    { destination: "Schengen", rate: "€45 – €120 per day (varies)", php: "₱3,087 – ₱8,231 per day" },
    { destination: "Japan", rate: "₱100,000 – ₱170,000 ADB", php: "6-month average daily balance" },
    { destination: "South Korea", rate: "No specific deposit", php: "Focus on COE and ITR" },
    { destination: "UAE", rate: "No bank certificate required", php: "Must have a sponsor" },
    { destination: "China", rate: "₱70,000 – ₱100,000", php: "Bank cert + 6-month ADB" },
    { destination: "Egypt", rate: "~$100 per day guide", php: "~₱5,789 per day" },
    { destination: "Turkey", rate: "$50 per day", php: "~₱2,894 per day" },
    { destination: "New Zealand", rate: "NZD 400 – 1,000 per month", php: "~₱14,000 – ₱35,000 per month" },
    { destination: "South Africa", rate: "ZAR 3,000+", php: "~₱10,860 minimum floor" },
];

export default function VisaGuidePage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Header */}
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
                            <MapPin className="w-4 h-4" /> Visa Guidelines
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Visa Guides for <br className="hidden md:block" />
                            <span className="text-primary">Philippine Passport Holders</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Navigate the complexities of visa applications with these practical financial guidelines and requirements for top destinations.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 mt-16 space-y-20">

                {/* Detailed Guides Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-bold mb-2">Country Specific Guidelines</h2>
                        <p className="text-muted-foreground">Detailed financial and document requirements by destination.</p>
                    </motion.div>

                    <div className="space-y-6">
                        {detailedGuides.map((guide, idx) => (
                            <motion.div
                                key={guide.country}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group relative p-6 md:p-8 rounded-3xl border bg-card/50 backdrop-blur-sm transition-all duration-300 ${guide.borderColor}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 pointer-events-none" />

                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${guide.color} ${guide.iconColor} shadow-inner`}>
                                        {guide.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{guide.country}</h3>
                                        <p className="text-primary font-medium">{guide.visaType}</p>
                                    </div>
                                </div>

                                {guide.description && (
                                    <div className="mb-6 p-4 rounded-xl bg-muted/50 border border-border/50">
                                        <p className="text-sm font-medium leading-relaxed">{guide.description}</p>
                                    </div>
                                )}

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {guide.details.map((detail, i) => (
                                        <div key={i} className="flex gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                                            <div className="mt-0.5 text-muted-foreground">
                                                {detail.icon}
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-foreground/90">{detail.label}</div>
                                                <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{detail.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {guide.strategy && (
                                    <div className="mt-6 pt-6 border-t border-border/50">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                                            <Compass className="w-4 h-4" /> Application Strategy
                                        </h4>
                                        <div className="grid sm:grid-cols-3 gap-4">
                                            {guide.strategy.map((strat, i) => (
                                                <div key={i}>
                                                    <div className="text-sm font-bold mb-1">{strat.label}</div>
                                                    <div className="text-sm text-muted-foreground">{strat.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Cheat Sheet Table */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                            <TableIcon className="w-8 h-8 text-primary" />
                            The Complete Cheat Sheet
                        </h2>
                        <p className="text-muted-foreground">A quick reference for financial guidelines. Exchange rates as of Feb 2026.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg shadow-black/5"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-muted/50 text-muted-foreground uppercase text-xs font-semibold tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4 border-b border-border">Destination</th>
                                        <th className="px-6 py-4 border-b border-border">Recommended Minimum/Rate</th>
                                        <th className="px-6 py-4 border-b border-border">Estimated PHP Equivalent</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {cheatSheet.map((row) => (
                                        <tr key={row.destination} className="hover:bg-muted/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">
                                                {row.destination}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                {row.rate}
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-600 ring-1 ring-inset ring-emerald-500/20">
                                                    {row.php}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </section>

            </div>
        </div>
    );
}

function TableIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3v18" />
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M3 15h18" />
        </svg>
    )
}
