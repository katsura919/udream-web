// Resources data: travel tools, tips, and per-destination cost breakdowns

export interface TravelTool {
    name: string;
    category: "flights" | "accommodation" | "transport" | "connectivity" | "insurance" | "planning";
    description: string;
    url: string;
    icon: string; // lucide icon key
    isFavorite?: boolean;
}

export interface DestinationCost {
    placeId: number; // references VisitedPlace.id
    name: string;
    country: string;
    currency: string;
    budgetPerDay: {
        budget: number;    // USD/day - backpacker
        mid: number;       // USD/day - comfortable
        luxury: number;    // USD/day - upscale
    };
    typicalCosts: {
        hostel: string;
        midHotel: string;
        streetFood: string;
        restaurant: string;
        localTransport: string;
        cityTransfer: string;
    };
    visa: {
        forMalaysians: string; // Visa status for Malaysian passport
        fee: string;
    };
    bestTimeToVisit: string;
    flightFromKL?: string; // Rough return flight estimate from Kuala Lumpur
    tips: string[];
}

export const travelTools: TravelTool[] = [
    // Flights
    {
        name: "Google Flights",
        category: "flights",
        description: "Best for tracking price trends and setting fare alerts over time.",
        url: "https://flights.google.com",
        icon: "plane",
        isFavorite: true,
    },
    {
        name: "Skyscanner",
        category: "flights",
        description: "Compare prices across hundreds of airlines. The 'Everywhere' feature is great for inspiration.",
        url: "https://www.skyscanner.net",
        icon: "plane-takeoff",
    },
    {
        name: "Kiwi.com",
        category: "flights",
        description: "Excellent for building multi-city itineraries with virtual interlining.",
        url: "https://www.kiwi.com",
        icon: "route",
    },

    // Accommodation
    {
        name: "Booking.com",
        category: "accommodation",
        description: "Largest inventory, free cancellation on most properties, and no hidden fees.",
        url: "https://www.booking.com",
        icon: "hotel",
        isFavorite: true,
    },
    {
        name: "Hostelworld",
        category: "accommodation",
        description: "Go-to platform for budget travelers and hostel hunters worldwide.",
        url: "https://www.hostelworld.com",
        icon: "luggage",
    },
    {
        name: "Airbnb",
        category: "accommodation",
        description: "Best for long stays, unique homes, and traveling with a group.",
        url: "https://www.airbnb.com",
        icon: "house",
    },

    // Transport
    {
        name: "Rome2Rio",
        category: "transport",
        description: "Shows every transport option (train, bus, ferry, flight) between any two places.",
        url: "https://www.rome2rio.com",
        icon: "map",
        isFavorite: true,
    },
    {
        name: "Omio",
        category: "transport",
        description: "Book trains, buses, and ferries across Europe in one place.",
        url: "https://www.omio.com",
        icon: "train",
    },
    {
        name: "Grab",
        category: "transport",
        description: "Southeast Asia's essential ride-hailing and delivery super-app.",
        url: "https://www.grab.com",
        icon: "car",
    },

    // Connectivity
    {
        name: "Airalo",
        category: "connectivity",
        description: "Buy affordable eSIMs for 190+ countries before you even board the plane.",
        url: "https://www.airalo.com",
        icon: "smartphone",
        isFavorite: true,
    },
    {
        name: "Wise",
        category: "connectivity",
        description: "Send money abroad and spend with a multi-currency debit card at real exchange rates.",
        url: "https://www.wise.com",
        icon: "credit-card",
    },

    // Insurance
    {
        name: "SafetyWing",
        category: "insurance",
        description: "Affordable travel insurance built for nomads and long-term travelers.",
        url: "https://safetywing.com",
        icon: "shield-check",
        isFavorite: true,
    },
    {
        name: "World Nomads",
        category: "insurance",
        description: "Covers adventure activities — great if you plan to hike, dive, or ski.",
        url: "https://www.worldnomads.com",
        icon: "mountain",
    },

    // Planning
    {
        name: "Notion",
        category: "planning",
        description: "Build your own trip planner database with itineraries, packing lists, and budgets.",
        url: "https://www.notion.so",
        icon: "file-text",
    },
    {
        name: "TripIt",
        category: "planning",
        description: "Automatically parses your booking confirmation emails into a master itinerary.",
        url: "https://www.tripit.com",
        icon: "list-checks",
    },
    {
        name: "XE Currency",
        category: "planning",
        description: "Real-time exchange rates and a universal currency converter.",
        url: "https://www.xe.com",
        icon: "arrow-left-right",
        isFavorite: true,
    },
];

export const destinationCosts: DestinationCost[] = [
    // ── Southeast Asia ──────────────────────────────────────────────────────────
    {
        placeId: 1,
        name: "Kuala Lumpur",
        country: "Malaysia",
        currency: "MYR (Malaysian Ringgit)",
        budgetPerDay: { budget: 30, mid: 70, luxury: 200 },
        typicalCosts: {
            hostel: "$8–15/night",
            midHotel: "$40–80/night",
            streetFood: "$1–3/meal",
            restaurant: "$8–20/meal",
            localTransport: "$0.50–2 (MRT/bus)",
            cityTransfer: "$10–15 (Grab from KLIA)",
        },
        visa: { forMalaysians: "Home country", fee: "Free" },
        bestTimeToVisit: "May – July (dry season)",
        tips: [
            "Get a Touch 'n Go card for cheap public transport.",
            "Eat at Jalan Alor for the best street food at night.",
            "Grab is significantly cheaper than taxis.",
        ],
    },
    {
        placeId: 2,
        name: "Singapore City",
        country: "Singapore",
        currency: "SGD (Singapore Dollar)",
        budgetPerDay: { budget: 60, mid: 150, luxury: 400 },
        typicalCosts: {
            hostel: "$20–35/night",
            midHotel: "$100–200/night",
            streetFood: "$3–6/meal (hawker)",
            restaurant: "$15–40/meal",
            localTransport: "$1–2.50 (MRT)",
            cityTransfer: "$20–25 (taxi from Changi)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (30 days)" },
        bestTimeToVisit: "Feb – Apr (least rain)",
        flightFromKL: "$50–120 return",
        tips: [
            "Eat at hawker centres — same food as restaurants at 1/3 the price.",
            "Get an EZ-Link card for seamless MRT & bus travel.",
            "Visit Gardens by the Bay Supertrees for free at night.",
        ],
    },
    {
        placeId: 4,
        name: "Bangkok",
        country: "Thailand",
        currency: "THB (Thai Baht)",
        budgetPerDay: { budget: 25, mid: 60, luxury: 180 },
        typicalCosts: {
            hostel: "$6–12/night",
            midHotel: "$25–60/night",
            streetFood: "$1–2/meal",
            restaurant: "$5–15/meal",
            localTransport: "$0.50–1.50 (BTS/MRT)",
            cityTransfer: "$8–12 (taxi from BKK)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (30 days)" },
        bestTimeToVisit: "Nov – Feb (cool & dry)",
        flightFromKL: "$80–200 return",
        tips: [
            "Negotiate tuk-tuk fares before you get in.",
            "Use the BTS Skytrain to avoid traffic jams.",
            "Dress modestly when visiting temples — shoulders and knees covered.",
        ],
    },
    {
        placeId: 100,
        name: "Chiang Mai",
        country: "Thailand",
        currency: "THB (Thai Baht)",
        budgetPerDay: { budget: 20, mid: 45, luxury: 130 },
        typicalCosts: {
            hostel: "$4–10/night",
            midHotel: "$20–50/night",
            streetFood: "$0.80–2/meal",
            restaurant: "$4–12/meal",
            localTransport: "$1–3 (songthaew/red truck)",
            cityTransfer: "$3–5 (red truck from CNX)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (30 days)" },
        bestTimeToVisit: "Nov – Feb (cool & smoky-free)",
        flightFromKL: "$80–180 return",
        tips: [
            "Hire a scooter to explore temples outside the city moat.",
            "Doi Suthep temple at sunrise is breathtaking and crowd-free.",
            "The Sunday Walking Street on Wualai Road is unmissable.",
        ],
    },
    {
        placeId: 5,
        name: "Siem Reap",
        country: "Cambodia",
        currency: "USD / KHR (Riel)",
        budgetPerDay: { budget: 20, mid: 50, luxury: 150 },
        typicalCosts: {
            hostel: "$4–10/night",
            midHotel: "$20–50/night",
            streetFood: "$1–2/meal",
            restaurant: "$5–15/meal",
            localTransport: "$2–5 (tuk-tuk ride)",
            cityTransfer: "$10–15 (tuk-tuk from airport)",
        },
        visa: { forMalaysians: "Visa on arrival", fee: "$30 USD" },
        bestTimeToVisit: "Nov – Mar (dry season)",
        flightFromKL: "$120–250 return",
        tips: [
            "Visit Angkor Wat at sunrise — arrive by 5:30am.",
            "USD is widely accepted; carry small bills.",
            "A 3-day Angkor Pass ($62) is worth it over a single day.",
        ],
    },
    {
        placeId: 6,
        name: "Ha Long Bay",
        country: "Vietnam",
        currency: "VND (Vietnamese Dong)",
        budgetPerDay: { budget: 35, mid: 80, luxury: 250 },
        typicalCosts: {
            hostel: "$8–15/night",
            midHotel: "$30–70/night",
            streetFood: "$1–3/meal",
            restaurant: "$5–15/meal",
            localTransport: "$0.30–1 (local bus)",
            cityTransfer: "$15–25 (bus from Hanoi)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (30 days)" },
        bestTimeToVisit: "Oct – Apr (clear skies)",
        flightFromKL: "$100–220 return",
        tips: [
            "Book a cruise for the best Ha Long Bay experience — budget $50+ for quality.",
            "Avoid May–Aug when rain and limited visibility is common.",
            "Haggle respectfully at local markets.",
        ],
    },
    {
        placeId: 101,
        name: "Ho Chi Minh City",
        country: "Vietnam",
        currency: "VND (Vietnamese Dong)",
        budgetPerDay: { budget: 20, mid: 50, luxury: 150 },
        typicalCosts: {
            hostel: "$5–12/night",
            midHotel: "$20–50/night",
            streetFood: "$1–2/meal",
            restaurant: "$4–12/meal",
            localTransport: "$0.50–2 (Grab/bus)",
            cityTransfer: "$8–12 (Grab from SGN)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (30 days)" },
        bestTimeToVisit: "Dec – Apr (dry season)",
        flightFromKL: "$80–180 return",
        tips: [
            "Grab is the safest and cheapest way to get around.",
            "Try bún bò Huế and bánh mì for under $2.",
            "The Cu Chi Tunnels are a must — book a half-day tour from the city.",
        ],
    },
    {
        placeId: 7,
        name: "Bali",
        country: "Indonesia",
        currency: "IDR (Indonesian Rupiah)",
        budgetPerDay: { budget: 30, mid: 70, luxury: 200 },
        typicalCosts: {
            hostel: "$6–15/night",
            midHotel: "$30–70/night",
            streetFood: "$1–3/meal (warung)",
            restaurant: "$6–20/meal",
            localTransport: "$3–6/day (scooter rental)",
            cityTransfer: "$8–15 (taxi from DPS)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (30 days)" },
        bestTimeToVisit: "Apr – Oct (dry season)",
        flightFromKL: "$80–200 return",
        tips: [
            "Rent a scooter — it's the most efficient way to get around.",
            "Avoid Kuta Beach tourist traps; head to Canggu or Ubud instead.",
            "Bargain at markets, but do so with a smile.",
        ],
    },

    // ── East Asia ────────────────────────────────────────────────────────────────
    {
        placeId: 9,
        name: "Tokyo",
        country: "Japan",
        currency: "JPY (Japanese Yen)",
        budgetPerDay: { budget: 60, mid: 130, luxury: 350 },
        typicalCosts: {
            hostel: "$20–35/night",
            midHotel: "$80–180/night",
            streetFood: "$5–10/meal",
            restaurant: "$15–40/meal",
            localTransport: "$2–5 (subway/JR)",
            cityTransfer: "$30–35 (Narita Express)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (90 days)" },
        bestTimeToVisit: "Mar – May (cherry blossoms), Oct – Nov (autumn foliage)",
        flightFromKL: "$300–600 return",
        tips: [
            "Get an IC card (Suica/Pasmo) for seamless transit across Japan.",
            "Buy a JR Pass if traveling between cities.",
            "Convenience stores (7-Eleven, FamilyMart) serve surprisingly good, cheap food.",
        ],
    },
    {
        placeId: 102,
        name: "Osaka",
        country: "Japan",
        currency: "JPY (Japanese Yen)",
        budgetPerDay: { budget: 50, mid: 110, luxury: 300 },
        typicalCosts: {
            hostel: "$18–30/night",
            midHotel: "$60–150/night",
            streetFood: "$4–8/meal (takoyaki, okonomiyaki)",
            restaurant: "$12–35/meal",
            localTransport: "$2–4 (subway)",
            cityTransfer: "$7–15 (Nankai from KIX)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (90 days)" },
        bestTimeToVisit: "Mar – May, Oct – Nov",
        flightFromKL: "$250–480 return",
        tips: [
            "Osaka is Japan's food capital — eat your way through Dotonbori.",
            "The Osaka Amazing Pass covers unlimited transit + 40 attractions.",
            "Combine with Kyoto and Nara for the ultimate Kansai experience.",
        ],
    },
    {
        placeId: 103,
        name: "Seoul",
        country: "South Korea",
        currency: "KRW (South Korean Won)",
        budgetPerDay: { budget: 40, mid: 90, luxury: 250 },
        typicalCosts: {
            hostel: "$15–25/night",
            midHotel: "$60–120/night",
            streetFood: "$3–6/meal (tteokbokki, kimbap)",
            restaurant: "$10–25/meal",
            localTransport: "$1–1.50 (subway)",
            cityTransfer: "$9–15 (AREX from ICN)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (90 days)" },
        bestTimeToVisit: "Apr – Jun (spring), Sep – Nov (autumn)",
        flightFromKL: "$250–450 return",
        tips: [
            "Get a T-money card for transit and convenience store purchases.",
            "Eat at pojangmacha street stalls for the most authentic experience.",
            "Gyeongbokgung Palace is free on national holidays.",
        ],
    },
    {
        placeId: 104,
        name: "Taipei",
        country: "Taiwan",
        currency: "TWD (New Taiwan Dollar)",
        budgetPerDay: { budget: 35, mid: 75, luxury: 200 },
        typicalCosts: {
            hostel: "$12–22/night",
            midHotel: "$40–90/night",
            streetFood: "$1–4/meal (night market)",
            restaurant: "$8–20/meal",
            localTransport: "$0.80–1.50 (MRT)",
            cityTransfer: "$15–20 (MRT from TPE)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (90 days)" },
        bestTimeToVisit: "Oct – Dec, Mar – May",
        flightFromKL: "$200–380 return",
        tips: [
            "Night markets (Shilin, Raohe) are unmissable food experiences.",
            "The EasyCard covers all MRT, buses, and YouBike rentals.",
            "Day-trip to Jiufen for stunning mountain-sea views.",
        ],
    },
    {
        placeId: 105,
        name: "Hong Kong",
        country: "China SAR",
        currency: "HKD (Hong Kong Dollar)",
        budgetPerDay: { budget: 60, mid: 130, luxury: 400 },
        typicalCosts: {
            hostel: "$20–35/night",
            midHotel: "$80–180/night",
            streetFood: "$3–6/meal (cha chaan teng)",
            restaurant: "$12–35/meal",
            localTransport: "$1–3 (MTR/bus)",
            cityTransfer: "$12–15 (Airport Express)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (90 days)" },
        bestTimeToVisit: "Oct – Dec (cool & dry)",
        flightFromKL: "$150–300 return",
        tips: [
            "Get an Octopus card — it works on MTR, buses, trams, and most shops.",
            "Take the Star Ferry across the harbour for just $0.30.",
            "Hike the Dragon's Back trail for panoramic views away from the crowds.",
        ],
    },

    // ── Central & Western Asia ────────────────────────────────────────────────────
    {
        placeId: 13,
        name: "Samarkand",
        country: "Uzbekistan",
        currency: "UZS (Uzbekistani Som)",
        budgetPerDay: { budget: 25, mid: 55, luxury: 130 },
        typicalCosts: {
            hostel: "$8–15/night",
            midHotel: "$25–50/night",
            streetFood: "$1–3/meal",
            restaurant: "$4–12/meal",
            localTransport: "$0.20–1 (shared taxi)",
            cityTransfer: "$5–8 (taxi from airport)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (30 days)" },
        bestTimeToVisit: "Apr – Jun, Sep – Oct",
        flightFromKL: "$400–700 return",
        tips: [
            "Uzbekistan is extremely cash-heavy — withdraw UZS at the airport.",
            "Try plov (national rice dish) at a local chaikhana.",
            "Combine with Bukhara for a classic Silk Road trip.",
        ],
    },
    {
        placeId: 15,
        name: "Tbilisi",
        country: "Georgia",
        currency: "GEL (Georgian Lari)",
        budgetPerDay: { budget: 25, mid: 55, luxury: 150 },
        typicalCosts: {
            hostel: "$8–15/night",
            midHotel: "$30–70/night",
            streetFood: "$1–3/meal",
            restaurant: "$7–20/meal",
            localTransport: "$0.30 (metro/bus)",
            cityTransfer: "$15–20 (taxi from TBS)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (1 year!)" },
        bestTimeToVisit: "Apr – Jun, Sep – Nov",
        flightFromKL: "$350–650 return",
        tips: [
            "Georgians are incredibly hospitable — never turn down a dinner invitation.",
            "Take the cable car up to Narikala Fortress for panoramic views.",
            "Georgian wine is exceptional and very affordable.",
        ],
    },
    {
        placeId: 17,
        name: "Istanbul",
        country: "Turkey",
        currency: "TRY (Turkish Lira)",
        budgetPerDay: { budget: 30, mid: 70, luxury: 200 },
        typicalCosts: {
            hostel: "$10–20/night",
            midHotel: "$40–90/night",
            streetFood: "$2–5/meal (simit, doner)",
            restaurant: "$8–25/meal",
            localTransport: "$0.60 (Istanbulkart)",
            cityTransfer: "$15–20 (Havaist bus from IST)",
        },
        visa: { forMalaysians: "Visa on arrival / e-Visa", fee: "$50 USD" },
        bestTimeToVisit: "Apr – Jun, Sep – Nov",
        flightFromKL: "$300–600 return",
        tips: [
            "Get an Istanbulkart for all public transport.",
            "Haggle in the Grand Bazaar — starting price is always inflated.",
            "Most mosques are free to enter; dress respectfully.",
        ],
    },
    {
        placeId: 106,
        name: "Dubai",
        country: "UAE",
        currency: "AED (UAE Dirham)",
        budgetPerDay: { budget: 70, mid: 150, luxury: 500 },
        typicalCosts: {
            hostel: "$20–35/night",
            midHotel: "$80–180/night",
            streetFood: "$3–7/meal (shawarma, falafel)",
            restaurant: "$15–50/meal",
            localTransport: "$1–3 (Metro/RTA bus)",
            cityTransfer: "$15–25 (Metro from DXB)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (30 days)" },
        bestTimeToVisit: "Nov – Mar (pleasant weather)",
        flightFromKL: "$300–600 return",
        tips: [
            "The Metro is cheap and efficient — use the Nol card.",
            "Visit the Burj Khalifa at sunset; book 'At the Top' in advance.",
            "Eat at Al Rigga or Deira for authentic, affordable Middle Eastern food.",
        ],
    },

    // ── Europe ───────────────────────────────────────────────────────────────────
    {
        placeId: 18,
        name: "Athens",
        country: "Greece",
        currency: "EUR (Euro)",
        budgetPerDay: { budget: 50, mid: 100, luxury: 280 },
        typicalCosts: {
            hostel: "$15–25/night",
            midHotel: "$60–130/night",
            streetFood: "$3–6/meal (souvlaki)",
            restaurant: "$12–35/meal",
            localTransport: "$1.20 (metro/bus)",
            cityTransfer: "$40–50 (taxi from ATH)",
        },
        visa: { forMalaysians: "Schengen Visa required", fee: "€80 (~$85)" },
        bestTimeToVisit: "Apr – Jun, Sep – Oct",
        flightFromKL: "$380–700 return",
        tips: [
            "The Acropolis Museum is as impressive as the Acropolis itself.",
            "Visit Monastiraki flea market on Sunday mornings.",
            "Buy a combo ticket for all major archaeological sites.",
        ],
    },
    {
        placeId: 19,
        name: "Rome",
        country: "Italy",
        currency: "EUR (Euro)",
        budgetPerDay: { budget: 60, mid: 120, luxury: 350 },
        typicalCosts: {
            hostel: "$20–35/night",
            midHotel: "$80–180/night",
            streetFood: "$2–5/meal (pizza al taglio)",
            restaurant: "$15–40/meal",
            localTransport: "$1.50 (bus/metro)",
            cityTransfer: "$50–60 (taxi from FCO)",
        },
        visa: { forMalaysians: "Schengen Visa required", fee: "€80 (~$85)" },
        bestTimeToVisit: "Apr – May, Sep – Oct",
        flightFromKL: "$400–750 return",
        tips: [
            "Book Vatican and Colosseum tickets weeks in advance — lines are brutal.",
            "Never pay for water at restaurants — ask for 'acqua del rubinetto' (tap water).",
            "Walk everywhere in the historic centre — it's the best way to discover hidden piazzas.",
        ],
    },
    {
        placeId: 107,
        name: "Barcelona",
        country: "Spain",
        currency: "EUR (Euro)",
        budgetPerDay: { budget: 55, mid: 110, luxury: 300 },
        typicalCosts: {
            hostel: "$18–30/night",
            midHotel: "$70–160/night",
            streetFood: "$3–6/meal (bocadillo, patatas bravas)",
            restaurant: "$12–35/meal",
            localTransport: "$1.50 (Metro/bus)",
            cityTransfer: "$6 (Aerobús from BCN)",
        },
        visa: { forMalaysians: "Schengen Visa required", fee: "€80 (~$85)" },
        bestTimeToVisit: "May – Jun, Sep – Oct",
        flightFromKL: "$500–950 return",
        tips: [
            "Book Sagrada Família tickets weeks ahead — no walk-ins.",
            "Lunch menus (menú del día) offer 3 courses for €12–15.",
            "Walk or cycle along the beach to Barceloneta — it's free and beautiful.",
        ],
    },
    {
        placeId: 108,
        name: "Prague",
        country: "Czech Republic",
        currency: "CZK (Czech Koruna)",
        budgetPerDay: { budget: 40, mid: 80, luxury: 220 },
        typicalCosts: {
            hostel: "$12–20/night",
            midHotel: "$40–90/night",
            streetFood: "$2–5/meal (trdelník, sausages)",
            restaurant: "$8–20/meal",
            localTransport: "$1.20 (tram/metro)",
            cityTransfer: "$8–12 (airport bus)",
        },
        visa: { forMalaysians: "Schengen Visa required", fee: "€80 (~$85)" },
        bestTimeToVisit: "May – Sep (warm), Dec (Christmas markets)",
        flightFromKL: "$450–800 return",
        tips: [
            "Prague Old Town is compact — walk everywhere and skip pricey cabs.",
            "Beer is cheaper than water here — Czech lager is world-class.",
            "Take a free walking tour to get your bearings on day one.",
        ],
    },
    {
        placeId: 109,
        name: "Budapest",
        country: "Hungary",
        currency: "HUF (Hungarian Forint)",
        budgetPerDay: { budget: 35, mid: 75, luxury: 200 },
        typicalCosts: {
            hostel: "$10–18/night",
            midHotel: "$40–90/night",
            streetFood: "$2–5/meal (lángos, kürtőskalács)",
            restaurant: "$8–20/meal",
            localTransport: "$1.20 (metro/tram)",
            cityTransfer: "$12–18 (100E bus from BUD)",
        },
        visa: { forMalaysians: "Schengen Visa required", fee: "€80 (~$85)" },
        bestTimeToVisit: "May – Sep",
        flightFromKL: "$450–850 return",
        tips: [
            "Spend an evening at a thermal bath (Széchenyi or Gellért) — truly unique.",
            "Ruin bars like Szimpla Kert are Budapest's signature nightlife experience.",
            "The city is stunning at night — walk across Chain Bridge after dark.",
        ],
    },
    {
        placeId: 110,
        name: "London",
        country: "United Kingdom",
        currency: "GBP (British Pound)",
        budgetPerDay: { budget: 80, mid: 160, luxury: 450 },
        typicalCosts: {
            hostel: "$25–45/night",
            midHotel: "$100–220/night",
            streetFood: "$8–15/meal (market stalls)",
            restaurant: "$20–60/meal",
            localTransport: "$3–5 (Tube)",
            cityTransfer: "$30–35 (Heathrow Express / TfL Rail)",
        },
        visa: { forMalaysians: "UK ETA required", fee: "£10 (~$13)" },
        bestTimeToVisit: "May – Sep (warmest & sunniest)",
        flightFromKL: "$500–900 return",
        tips: [
            "Get an Oyster card or use contactless for cheap Tube fares.",
            "Most world-class museums (British Museum, V&A, Tate) are free.",
            "Borough Market on Friday/Saturday is a must for food lovers.",
        ],
    },
    {
        placeId: 23,
        name: "Lucerne",
        country: "Switzerland",
        currency: "CHF (Swiss Franc)",
        budgetPerDay: { budget: 100, mid: 200, luxury: 500 },
        typicalCosts: {
            hostel: "$40–60/night",
            midHotel: "$150–300/night",
            streetFood: "$8–14/meal",
            restaurant: "$25–60/meal",
            localTransport: "$3–5 (tram/bus)",
            cityTransfer: "$30–40 (train from ZRH)",
        },
        visa: { forMalaysians: "Schengen Visa required", fee: "€80 (~$85)" },
        bestTimeToVisit: "Jun – Sep (clear mountains), Dec – Feb (winter snow)",
        flightFromKL: "$500–900 return",
        tips: [
            "Get the Swiss Travel Pass if visiting multiple cities — it pays for itself.",
            "Take the Rigi or Pilatus mountain trips for stunning views.",
            "Supermarkets like Migros/Lidl have much cheaper food than restaurants.",
        ],
    },
    {
        placeId: 27,
        name: "Sarajevo",
        country: "Bosnia and Herzegovina",
        currency: "BAM (Convertible Mark)",
        budgetPerDay: { budget: 30, mid: 60, luxury: 150 },
        typicalCosts: {
            hostel: "$10–18/night",
            midHotel: "$30–65/night",
            streetFood: "$2–4/meal (ćevapi)",
            restaurant: "$8–20/meal",
            localTransport: "$0.60 (tram)",
            cityTransfer: "$15–20 (taxi from SJJ)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (90 days)" },
        bestTimeToVisit: "May – Sep",
        flightFromKL: "$480–850 return",
        tips: [
            "Sarajevo is one of Europe's most underrated cities — budget at least 2 full days.",
            "Try ćevapi at Ćevabdžinica Hodžić — the best in the city.",
            "Walk the Trebević Mountain cable car for a panoramic city view.",
        ],
    },

    // ── Africa ───────────────────────────────────────────────────────────────────
    {
        placeId: 111,
        name: "Cape Town",
        country: "South Africa",
        currency: "ZAR (South African Rand)",
        budgetPerDay: { budget: 40, mid: 90, luxury: 250 },
        typicalCosts: {
            hostel: "$12–22/night",
            midHotel: "$50–120/night",
            streetFood: "$2–5/meal (bunny chow, biltong)",
            restaurant: "$10–30/meal",
            localTransport: "$1–3 (MyCiTi bus)",
            cityTransfer: "$15–25 (Uber from CPT)",
        },
        visa: { forMalaysians: "Visa-free", fee: "Free (30 days)" },
        bestTimeToVisit: "Nov – Apr (summer/dry)",
        flightFromKL: "$600–1000 return",
        tips: [
            "Use Uber instead of taxis — safer and considerably cheaper.",
            "Table Mountain is best visited on a clear morning; book the cable car online.",
            "Braai (BBQ) culture is central to South African life — embrace it.",
        ],
    },
];

export const toolCategories = [
    { id: "flights",       label: "Flights",     icon: "plane"       },
    { id: "accommodation", label: "Stay",         icon: "hotel"       },
    { id: "transport",     label: "Transport",    icon: "train"       },
    { id: "connectivity",  label: "Money & SIM",  icon: "smartphone"  },
    { id: "insurance",     label: "Insurance",    icon: "shield-check"},
    { id: "planning",      label: "Planning",     icon: "calendar"    },
] as const;
