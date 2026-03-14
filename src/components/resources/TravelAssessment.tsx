'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2, XCircle, HelpCircle, ArrowRight, ArrowLeft,
    Lock, Shield, DollarSign, Heart, Map, CheckCheck,
} from 'lucide-react';
import Link from 'next/link';

// ── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = [
    {
        id: 'documents',
        name: 'Passport & Visas',
        colorClass: 'text-blue-600',
        bgClass: 'bg-blue-50',
        borderClass: 'border-blue-200',
        scoreBg: 'bg-blue-500',
        Icon: Shield,
        questions: [
            {
                id: 'q1',
                text: 'Is your passport valid for at least 6 months after your return date?',
                tip: 'Many countries require 6 months of remaining validity beyond your stay.',
                action: 'Renew your passport immediately — processing can take 4–8 weeks.',
            },
            {
                id: 'q2',
                text: 'Have you confirmed the visa requirements for your destination?',
                tip: 'Visa rules vary by passport. Always check the official embassy website.',
                action: 'Visit the official embassy or consulate website for your destination country.',
            },
            {
                id: 'q3',
                text: 'Have you obtained (or applied for) the correct visa if required?',
                tip: 'Some visas can take weeks to process — apply early.',
                action: 'Apply for your visa as soon as possible. Consider a visa agency if time is short.',
            },
            {
                id: 'q4',
                text: 'Have you saved digital copies of your passport, visa, and key documents?',
                tip: 'Store copies in your email, a cloud app, or a secure travel app.',
                action: 'Email scans to yourself and upload to Google Drive or Dropbox.',
            },
        ],
    },
    {
        id: 'finance',
        name: 'Money & Budget',
        colorClass: 'text-emerald-600',
        bgClass: 'bg-emerald-50',
        borderClass: 'border-emerald-200',
        scoreBg: 'bg-emerald-500',
        Icon: DollarSign,
        questions: [
            {
                id: 'q5',
                text: 'Do you have a daily budget planned (accommodation, food, transport, activities)?',
                tip: 'Knowing your daily spend helps avoid running out of money mid-trip.',
                action: 'Use our Budget Planner on the Destination Costs page to estimate your daily spend.',
            },
            {
                id: 'q6',
                text: 'Have you notified your bank or credit card provider about international travel?',
                tip: 'Banks often block "suspicious" international transactions without prior notice.',
                action: 'Call your bank or use their app to set a travel notice before you leave.',
            },
            {
                id: 'q7',
                text: 'Do you have emergency funds (at least $500 USD equivalent) beyond your trip budget?',
                tip: 'Emergencies happen — missed flights, medical bills, or lost belongings.',
                action: 'Set aside a dedicated emergency fund in a separate account or travel card.',
            },
            {
                id: 'q8',
                text: 'Do you have travel insurance that covers medical emergencies and evacuation?',
                tip: 'A single medical evacuation flight can cost $50,000 or more.',
                action: 'Compare plans on SafetyWing, World Nomads, or your local insurer.',
            },
        ],
    },
    {
        id: 'health',
        name: 'Health & Safety',
        colorClass: 'text-rose-600',
        bgClass: 'bg-rose-50',
        borderClass: 'border-rose-200',
        scoreBg: 'bg-rose-500',
        Icon: Heart,
        questions: [
            {
                id: 'q9',
                text: 'Have you checked vaccination requirements and health advisories for your destination?',
                tip: 'Some countries require proof of vaccination (e.g., yellow fever for parts of Africa).',
                action: 'Visit a travel clinic at least 4 weeks before departure.',
            },
            {
                id: 'q10',
                text: 'Do you have enough prescription medication for the full trip (plus extras)?',
                tip: 'Obtaining specific medications abroad can be difficult or expensive.',
                action: 'Ask your doctor for a travel prescription listing medications in English.',
            },
            {
                id: 'q11',
                text: 'Have you checked current travel safety advisories from your government?',
                tip: 'Advisories warn about political unrest, natural disasters, or health outbreaks.',
                action: 'Search "[your country] travel advisory [destination]" for the official page.',
            },
        ],
    },
    {
        id: 'logistics',
        name: 'Practical Logistics',
        colorClass: 'text-violet-600',
        bgClass: 'bg-violet-50',
        borderClass: 'border-violet-200',
        scoreBg: 'bg-violet-500',
        Icon: Map,
        questions: [
            {
                id: 'q12',
                text: "Is your first night's accommodation confirmed and paid (or reserved)?",
                tip: 'Arriving without accommodation, especially late at night, is stressful and risky.',
                action: 'Book at least your first 2–3 nights in advance via Booking.com or Hostelworld.',
            },
            {
                id: 'q13',
                text: 'Do you know how to get from the airport to your accommodation?',
                tip: 'Airport transfers are often the most confusing part for first-time travelers.',
                action: 'Google "[destination] airport to city center" to find your transport options.',
            },
            {
                id: 'q14',
                text: 'Do you have a working phone plan or local SIM arranged for your destination?',
                tip: 'You need data for maps, translation apps, and emergency communication.',
                action: 'Order a local SIM or eSIM in advance — Airalo is a great eSIM service.',
            },
            {
                id: 'q15',
                text: 'Have you shared your full itinerary and emergency contacts with someone at home?',
                tip: 'Always leave your travel plan with a trusted person in case of emergency.',
                action: 'Send accommodation details, flight numbers, and local emergency numbers to a family member.',
            },
        ],
    },
];

type Answer = 'yes' | 'no' | 'unsure';
type AnswerState = Record<string, Answer>;

const ANSWER_CONFIG = {
    yes:    { label: 'Yes',    Icon: CheckCircle2, activeCls: 'bg-emerald-500 text-white border-emerald-500', idleCls: 'border-emerald-200 text-emerald-600 hover:bg-emerald-50' },
    unsure: { label: 'Partly', Icon: HelpCircle,   activeCls: 'bg-amber-500 text-white border-amber-500',   idleCls: 'border-amber-200 text-amber-600 hover:bg-amber-50'   },
    no:     { label: 'No',     Icon: XCircle,      activeCls: 'bg-red-500 text-white border-red-500',       idleCls: 'border-red-200 text-red-600 hover:bg-red-50'         },
} as const;

function computeScore(answers: AnswerState) {
    return Object.values(answers).reduce((sum, a) => sum + (a === 'yes' ? 2 : a === 'unsure' ? 1 : 0), 0);
}

const LEVELS = [
    { min: 27, label: 'Ready to Fly!',    sub: "You're well-prepared for your first trip — pack your bags!", color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', barCls: 'bg-emerald-500', emoji: '✈️' },
    { min: 20, label: 'Almost Ready',     sub: 'A few things left to sort — you\'re very close!',           color: 'text-amber-600',   bg: 'bg-amber-50',   border: 'border-amber-200',   barCls: 'bg-amber-500',   emoji: '🎒' },
    { min: 12, label: 'Getting There',    sub: 'Some important gaps to address before you go.',             color: 'text-orange-600',  bg: 'bg-orange-50',  border: 'border-orange-200',  barCls: 'bg-orange-500',  emoji: '📋' },
    { min: 0,  label: 'Needs More Prep',  sub: 'Take more time to prepare — a safe trip starts here.',     color: 'text-red-600',     bg: 'bg-red-50',     border: 'border-red-200',     barCls: 'bg-red-500',     emoji: '⚠️' },
];

function getLevel(score: number) {
    return LEVELS.find((l) => score >= l.min) ?? LEVELS[LEVELS.length - 1];
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function TravelAssessment() {
    const [answers, setAnswers]   = useState<AnswerState>({});
    const [step, setStep]         = useState<'quiz' | 'gate' | 'results'>('quiz');
    const [email, setEmail]       = useState('');
    const [emailError, setEmailError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const allQuestions   = CATEGORIES.flatMap((c) => c.questions);
    const totalQuestions = allQuestions.length;
    const answeredCount  = Object.keys(answers).length;
    const progress       = (answeredCount / totalQuestions) * 100;
    const allAnswered    = answeredCount === totalQuestions;

    const score = useMemo(() => computeScore(answers), [answers]);
    const level = useMemo(() => getLevel(score), [score]);

    function answer(qId: string, value: Answer) {
        setAnswers((prev) => ({ ...prev, [qId]: value }));
    }

    async function handleEmailSubmit(e: React.FormEvent) {
        e.preventDefault();
        setEmailError('');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setEmailError('Please enter a valid email address.');
            return;
        }
        setSubmitting(true);
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: '',
                    lastName: '',
                    email: email.trim(),
                    tags: ['First Time Traveler'],
                }),
            });
        } catch {
            // Still reveal results even if contact creation fails
        }
        setSubmitting(false);
        setStep('results');
    }

    // ── Quiz ─────────────────────────────────────────────────────────────────
    if (step === 'quiz') {
        return (
            <div className="min-h-screen bg-white pb-24">
                {/* Hero */}
                <div className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-border/40">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent pointer-events-none" />
                    <div className="max-w-3xl mx-auto relative">
                        <Link
                            href="/resources"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Resources
                        </Link>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                <CheckCheck className="w-4 h-4" /> First-Time Traveler Assessment
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                                Are You Ready for Your{' '}
                                <span className="text-primary">First Trip?</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-2xl">
                                Answer 15 quick questions to find out how prepared you are — and get a personalised checklist of what to do next.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto px-4 mt-10">
                    {/* Progress bar */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary rounded-full"
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <span className="text-sm text-muted-foreground shrink-0 tabular-nums">
                            {answeredCount}/{totalQuestions}
                        </span>
                    </div>

                    {/* Category sections */}
                    <div className="space-y-8">
                        {CATEGORIES.map((cat, ci) => (
                            <motion.div
                                key={cat.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: ci * 0.08 }}
                            >
                                <div className={`flex items-center gap-3 mb-4 pb-3 border-b ${cat.borderClass}`}>
                                    <div className={`w-8 h-8 rounded-lg ${cat.bgClass} flex items-center justify-center shrink-0`}>
                                        <cat.Icon className={`w-4 h-4 ${cat.colorClass}`} />
                                    </div>
                                    <h2 className={`font-semibold ${cat.colorClass}`}>{cat.name}</h2>
                                    <span className="ml-auto text-xs text-muted-foreground">
                                        {cat.questions.filter((q) => answers[q.id]).length}/{cat.questions.length} answered
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    {cat.questions.map((q) => {
                                        const current = answers[q.id];
                                        return (
                                            <div
                                                key={q.id}
                                                className={`rounded-xl border p-4 transition-colors ${
                                                    current === 'yes'    ? 'border-emerald-200 bg-emerald-50/40' :
                                                    current === 'no'     ? 'border-red-200 bg-red-50/30' :
                                                    current === 'unsure' ? 'border-amber-200 bg-amber-50/30' :
                                                    'border-border bg-card'
                                                }`}
                                            >
                                                <p className="text-sm font-medium text-foreground mb-3">{q.text}</p>
                                                <div className="flex gap-2 flex-wrap">
                                                    {(['yes', 'unsure', 'no'] as const).map((val) => {
                                                        const { label, Icon, activeCls, idleCls } = ANSWER_CONFIG[val];
                                                        const isActive = current === val;
                                                        return (
                                                            <button
                                                                key={val}
                                                                onClick={() => answer(q.id, val)}
                                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${isActive ? activeCls : idleCls}`}
                                                            >
                                                                <Icon className="w-3.5 h-3.5" />
                                                                {label}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                                <AnimatePresence>
                                                    {current === 'no' && (
                                                        <motion.p
                                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                            className="text-xs text-muted-foreground italic overflow-hidden"
                                                        >
                                                            💡 {q.tip}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sticky CTA */}
                    <div className="mt-10 sticky bottom-6">
                        <motion.button
                            onClick={() => setStep('gate')}
                            disabled={!allAnswered}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white font-semibold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
                        >
                            {allAnswered ? (
                                <>See My Results <ArrowRight className="w-4 h-4" /></>
                            ) : (
                                <>Answer all {totalQuestions} questions to continue ({totalQuestions - answeredCount} left)</>
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>
        );
    }

    // ── Email Gate ─────────────────────────────────────────────────────────────
    if (step === 'gate') {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-16 pb-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 w-full max-w-md"
                >
                    <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
                        <div className="flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl mb-6 mx-auto">
                            <Shield className="w-7 h-7 text-primary" />
                        </div>

                        <div className="text-center mb-8">
                            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">
                                Almost there
                            </p>
                            <h2 className="text-2xl font-bold mb-3 text-foreground">
                                Your results are ready!
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Enter your email to reveal your personalised travel readiness score and action checklist.
                            </p>
                        </div>

                        <form onSubmit={handleEmailSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    autoFocus
                                    className="w-full px-4 py-3 border border-border rounded-xl text-foreground placeholder-muted-foreground/50 text-sm outline-none focus:border-primary transition-colors bg-card"
                                />
                            </div>
                            {emailError && (
                                <p className="text-xs text-red-500">{emailError}</p>
                            )}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary/90 transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {submitting ? (
                                    <>
                                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                        </svg>
                                        Checking…
                                    </>
                                ) : (
                                    <>
                                        <Shield className="w-4 h-4" />
                                        Reveal My Results
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="flex items-center justify-center gap-1.5 mt-5 text-[10px] text-muted-foreground/60">
                            <Lock className="w-3 h-3" /> No spam. We respect your privacy.
                        </p>
                        <button
                            onClick={() => setStep('quiz')}
                            className="w-full mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors text-center"
                        >
                            ← Go back to edit answers
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    // ── Results ───────────────────────────────────────────────────────────────
    const pct = Math.round((score / 30) * 100);

    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Hero / Score card */}
            <div className="relative pt-32 pb-16 px-4 overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                <div className="max-w-3xl mx-auto relative">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <CheckCheck className="w-4 h-4" /> Your Readiness Score
                        </span>

                        <div className={`rounded-2xl border ${level.border} ${level.bg} p-8 text-center`}>
                            <span className="text-6xl block mb-4">{level.emoji}</span>
                            <h1 className={`text-4xl font-bold mb-2 ${level.color}`}>{level.label}</h1>
                            <p className="text-muted-foreground text-sm mb-6">{level.sub}</p>

                            <div className="flex items-center justify-center gap-6 mb-4">
                                <div>
                                    <p className="text-4xl font-bold text-foreground tabular-nums">{score}<span className="text-lg text-muted-foreground font-normal">/30</span></p>
                                    <p className="text-xs text-muted-foreground mt-1">Points</p>
                                </div>
                                <div className="h-10 w-px bg-border" />
                                <div>
                                    <p className="text-4xl font-bold text-foreground tabular-nums">{pct}<span className="text-lg text-muted-foreground font-normal">%</span></p>
                                    <p className="text-xs text-muted-foreground mt-1">Ready</p>
                                </div>
                            </div>

                            <div className="w-full h-2.5 bg-white/60 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full rounded-full ${level.barCls}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${pct}%` }}
                                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 mt-10 space-y-6">
                {/* Per-category breakdown */}
                {CATEGORIES.map((cat, ci) => {
                    const catScore = cat.questions.reduce((s, q) => {
                        const a = answers[q.id];
                        return s + (a === 'yes' ? 2 : a === 'unsure' ? 1 : 0);
                    }, 0);
                    const catMax = cat.questions.length * 2;
                    const catPct = Math.round((catScore / catMax) * 100);

                    return (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: ci * 0.08 }}
                            className="rounded-xl border border-border overflow-hidden"
                        >
                            {/* Category header */}
                            <div className={`flex items-center justify-between px-5 py-4 ${cat.bgClass}`}>
                                <div className="flex items-center gap-3">
                                    <cat.Icon className={`w-4 h-4 ${cat.colorClass}`} />
                                    <span className={`font-semibold ${cat.colorClass}`}>{cat.name}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-24 h-1.5 bg-white/60 rounded-full overflow-hidden hidden sm:block">
                                        <motion.div
                                            className={`h-full rounded-full ${cat.scoreBg}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${catPct}%` }}
                                            transition={{ duration: 0.6, delay: ci * 0.1 + 0.4 }}
                                        />
                                    </div>
                                    <span className={`text-sm font-bold ${cat.colorClass}`}>{catScore}/{catMax}</span>
                                </div>
                            </div>

                            {/* Questions */}
                            <div className="divide-y divide-border">
                                {cat.questions.map((q) => {
                                    const a = answers[q.id];
                                    return (
                                        <div key={q.id} className="px-5 py-4 flex items-start gap-3">
                                            {a === 'yes' ? (
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                            ) : a === 'unsure' ? (
                                                <HelpCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                            ) : (
                                                <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                                            )}
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm text-foreground">{q.text}</p>
                                                {a !== 'yes' && (
                                                    <p className="text-xs text-muted-foreground mt-1.5">
                                                        <span className="font-semibold text-foreground/70">Action: </span>
                                                        {q.action}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    );
                })}

                {/* Bottom CTAs */}
                <div className="grid sm:grid-cols-2 gap-3 pt-4">
                    <Link
                        href="/resources/destination-costs"
                        className="flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm"
                    >
                        <DollarSign className="w-4 h-4" /> Plan Your Budget
                    </Link>
                    <button
                        onClick={() => { setAnswers({}); setStep('quiz'); setEmail(''); }}
                        className="flex items-center justify-center gap-2 py-3.5 bg-muted text-foreground font-semibold rounded-xl hover:bg-muted/80 transition-colors text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" /> Retake Assessment
                    </button>
                </div>
            </div>
        </div>
    );
}
