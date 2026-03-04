import type { Metadata } from "next";
import { TravelToolsSection } from "@/components/resources/TravelTools";

export const metadata: Metadata = {
    title: "Travel Tools | Udream",
    description: "Everything I use to plan, budget, and navigate my adventures.",
};

export default function TravelToolsPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-16">
            <TravelToolsSection />
        </div>
    );
}
