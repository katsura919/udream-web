import { Instagram, Twitter, Facebook, Youtube, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
    {
        title: "Explore",
        links: [
            { name: "Destinations", href: "/destinations" },
            { name: "Travel Map", href: "/map" },
            { name: "Photography", href: "/gallery" },
            { name: "Adventure Logs", href: "/blog" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Our Story", href: "/story" },
            { name: "Contact", href: "/contact" },
            { name: "Careers", href: "/careers" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Service", href: "/terms-of-service" },
        ],
    },
];

const SOCIAL_LINKS = [
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, href: "#" },
    { name: "Youtube", icon: <Youtube className="w-5 h-5" />, href: "#" },
];

export function Footer() {
    return (
        <footer className="bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-6 py-24">
                {/* Main Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6 transition-transform hover:scale-105">
                            <div className="relative w-32 h-16 overflow-hidden">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Udream Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-background/60 text-base leading-relaxed max-w-xs mb-8">
                            Documenting the raw beauty of our planet, one journey at a time. Join us in exploring the world&apos;s most extraordinary places.
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-background/10 flex items-center justify-center text-background/60 hover:text-white hover:border-primary hover:bg-primary/20 transition-all"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {FOOTER_LINKS.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">{group.title}</h3>
                            <ul className="space-y-4">
                                {group.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-background/60 hover:text-primary transition-colors text-base"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Copyright */}
                <div className="mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-background/40 text-sm">
                        © {new Date().getFullYear()} Udream Travels. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <a href="#" className="text-background/40 hover:text-white text-sm flex items-center gap-1 transition-colors">
                            Support <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
