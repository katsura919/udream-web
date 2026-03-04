import type { Metadata } from "next";
import { DestinationCostsSection } from "@/components/resources/DestinationCosts";

export const metadata: Metadata = {
    title: "Destination Costs | Udream",
    description: "Real cost breakdowns for every destination I've visited.",
};

export default function DestinationCostsPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-16">
            <DestinationCostsSection />
        </div>
    );
}
