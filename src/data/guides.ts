export interface TravelGuideData {
    id: string; // The slug
    destinationName: string;
    country: string;
    bestTime: string;
    lengthOfStay: string;
    budgetRange: string;
    quickDescription: string;
    heroImage: string;
    howToGetThere: {
        nearestAirport: string;
        transportation: string;
        visa: string;
    };
    whereToStay: {
        budget: { name: string; why: string };
        midRange: { name: string; why: string };
        luxury: { name: string; why: string };
    };
    thingsToDo: Array<{
        name: string;
        why: string;
        fee: string;
        bestTime: string;
        image?: string;
    }>;
    whereToEat: {
        restaurants: Array<{ name: string; typeAndPrice: string }>;
        mustTryDish: string;
    };
    gettingAround: {
        publicTransport: string;
        apps: string[];
        dailyBudget: string;
    };
    dailyBudget: {
        accommodation: string;
        food: string;
        transportation: string;
        activities: string;
        total: string;
    };
    whatToPack: {
        clothing: string;
        documents: string;
        gadgets: string;
        other: string;
    };
    travelTips: {
        safety: string;
        money: string;
        etiquette: string;
        reminder: string;
    };
    photoSpots: string[];
    itinerary?: Array<{
        day: number;
        focus: string;
        morning: string;
        afternoon: string;
        evening: string;
    }>;
}

export const travelGuides: TravelGuideData[] = [
    {
        id: "kuala-lumpur",
        destinationName: "Kuala Lumpur",
        country: "Malaysia",
        bestTime: "May–July, December–February",
        lengthOfStay: "3–4 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Kuala Lumpur is a lively city where modern skyscrapers meet rich culture and amazing food. You’ll find iconic towers, colorful temples, and some of the best street food in Southeast Asia. It’s perfect for first-time travelers and food lovers.",
        heroImage: "https://res.cloudinary.com/drpxke63n/image/upload/v1772525949/DJI_20260225172008_0239_D_ntijjg.jpg  ",
        howToGetThere: {
            nearestAirport: "Kuala Lumpur International Airport (KLIA)",
            transportation: "KLIA Express Train, Grab, Taxi, Airport Bus",
            visa: "Visa-free for many ASEAN countries (check based on passport)"
        },
        whereToStay: {
            budget: {
                name: "The Bed KLCC",
                why: "Affordable, clean, and near major attractions."
            },
            midRange: {
                name: "Impiana KLCC Hotel",
                why: "Great location near KLCC and comfortable rooms."
            },
            luxury: {
                name: "Mandarin Oriental Kuala Lumpur",
                why: "5-star comfort with Petronas Twin Towers view."
            }
        },
        thingsToDo: [
            {
                name: "Petronas Twin Towers",
                why: "Malaysia’s most iconic landmark with stunning skyline views.",
                fee: "Paid (Skybridge access)",
                bestTime: "Evening before sunset"
            },
            {
                name: "Batu Caves",
                why: "Colorful stairs and impressive cave temple.",
                fee: "Free (some areas may charge)",
                bestTime: "Early morning"
            },
            {
                name: "Bukit Bintang",
                why: "Shopping, food, and nightlife hub.",
                fee: "Free",
                bestTime: "Evening"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Village Park Restaurant", typeAndPrice: "Malaysian local food (Budget)" },
                { name: "Jalan Alor", typeAndPrice: "Street food (Budget)" }
            ],
            mustTryDish: "Nasi Lemak"
        },
        gettingAround: {
            publicTransport: "LRT, MRT, Monorail, Bus",
            apps: ["Grab"],
            dailyBudget: "$5–$10"
        },
        dailyBudget: {
            accommodation: "$20–$120",
            food: "$10–$25",
            transportation: "$5–$10",
            activities: "$10–$30",
            total: "$45–$185"
        },
        whatToPack: {
            clothing: "Light breathable clothes, comfortable shoes",
            documents: "Passport, printed hotel booking",
            gadgets: "Power bank, universal adapter",
            other: "Umbrella (sudden rain), sunscreen"
        },
        travelTips: {
            safety: "Be mindful of pickpockets in crowded areas.",
            money: "Use public transport instead of taxis.",
            etiquette: "Dress modestly when visiting temples.",
            reminder: "The weather is hot and humid year-round."
        },
        photoSpots: [
            "KLCC Park (Petronas background)",
            "Batu Caves stairs",
            "Bukit Bintang night lights"
        ],
        itinerary: [
            {
                day: 1,
                focus: "City Icons & Street Food",
                morning: "Visit Petronas Twin Towers",
                afternoon: "Explore KLCC mall",
                evening: "Dinner at Jalan Alor"
            },
            {
                day: 2,
                focus: "Culture & Colors",
                morning: "Batu Caves",
                afternoon: "Central Market",
                evening: "Bukit Bintang"
            },
            {
                day: 3,
                focus: "Temples & Views",
                morning: "Thean Hou Temple",
                afternoon: "Shopping",
                evening: "Rooftop dinner"
            }
        ]
    },
    {
        id: "singapore",
        destinationName: "Singapore",
        country: "Singapore",
        bestTime: "February–April",
        lengthOfStay: "3–4 days",
        budgetRange: "Mid-range / Luxury",
        quickDescription: "Singapore is modern, clean, and packed with attractions. From futuristic gardens to theme parks and hawker centers, it’s small but full of exciting experiences.",
        heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Singapore Changi Airport",
            transportation: "MRT, Taxi, Grab",
            visa: "Visa-free for many ASEAN passports"
        },
        whereToStay: {
            budget: {
                name: "Hotel Boss",
                why: "Affordable and centrally located."
            },
            midRange: {
                name: "V Hotel Lavender",
                why: "Near MRT and comfortable rooms."
            },
            luxury: {
                name: "Marina Bay Sands",
                why: "Famous infinity pool and skyline views."
            }
        },
        thingsToDo: [
            {
                name: "Gardens by the Bay",
                why: "Beautiful Supertree light show.",
                fee: "Free (domes are paid)",
                bestTime: "Evening",
                image: "https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Sentosa Island",
                why: "Beaches and attractions.",
                fee: "Free entry (attractions paid)",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Merlion Park",
                why: "Iconic Singapore photo spot.",
                fee: "Free",
                bestTime: "Sunset",
                image: "https://images.unsplash.com/photo-1536489435342-9f33afcf688b?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Lau Pa Sat", typeAndPrice: "Hawker food (Budget)" },
                { name: "Maxwell Food Centre", typeAndPrice: "Local dishes (Budget)" }
            ],
            mustTryDish: "Hainanese Chicken Rice"
        },
        gettingAround: {
            publicTransport: "MRT, Bus",
            apps: ["Grab"],
            dailyBudget: "$5–$10"
        },
        dailyBudget: {
            accommodation: "$80–$300",
            food: "$15–$30",
            transportation: "$5–$10",
            activities: "$20–$60",
            total: "$120–$400"
        },
        whatToPack: {
            clothing: "Light clothes, comfy shoes",
            documents: "Passport",
            gadgets: "Universal adapter",
            other: "Reusable water bottle"
        },
        travelTips: {
            safety: "Singapore is very safe but follow strict laws.",
            money: "Eat at hawker centers.",
            etiquette: "No littering or jaywalking.",
            reminder: "Bring extra budget for attractions."
        },
        photoSpots: [
            "Merlion Park",
            "Gardens by the Bay",
            "Marina Bay skyline"
        ],
        itinerary: [
            {
                day: 1,
                focus: "City Icons & Gardens",
                morning: "Merlion Park",
                afternoon: "Marina Bay Sands area",
                evening: "Gardens by the Bay"
            },
            {
                day: 2,
                focus: "Theme Parks & Nightlife",
                morning: "Sentosa Island",
                afternoon: "Universal Studios",
                evening: "Clarke Quay"
            },
            {
                day: 3,
                focus: "Culture & Shopping",
                morning: "Chinatown",
                afternoon: "Orchard Road",
                evening: "Jewel Changi"
            }
        ]
    },
    {
        id: "taipei",
        destinationName: "Taipei",
        country: "Taiwan",
        bestTime: "October–April",
        lengthOfStay: "3–4 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Taipei is a vibrant city that blends modern skyscrapers with traditional temples and night markets. It’s friendly, safe, and a paradise for food lovers. You’ll enjoy city views, cultural landmarks, and delicious street food all in one place.",
        heroImage: "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Taiwan Taoyuan International Airport",
            transportation: "Airport MRT, Bus, Taxi",
            visa: "Visa-free for many countries (check based on passport)"
        },
        whereToStay: {
            budget: {
                name: "Meander Taipei Hostel",
                why: "Affordable, clean, and great for meeting other travelers."
            },
            midRange: {
                name: "CityInn Hotel Plus Ximending",
                why: "Central location near shopping and MRT."
            },
            luxury: {
                name: "Grand Hyatt Taipei",
                why: "5-star comfort near Taipei 101."
            }
        },
        thingsToDo: [
            {
                name: "Taipei 101",
                why: "Iconic landmark with amazing city views from the observatory.",
                fee: "Paid (observatory ticket)",
                bestTime: "Late afternoon before sunset",
                image: "https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Chiang Kai-shek Memorial Hall",
                why: "Historic site with impressive architecture and open plaza.",
                fee: "Free",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1583354316021-f050fd7122a6?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Shilin Night Market",
                why: "One of the largest night markets full of street food.",
                fee: "Free",
                bestTime: "Evening",
                image: "https://images.unsplash.com/photo-1549590680-e8869c944813?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Din Tai Fung", typeAndPrice: "Taiwanese cuisine (Mid-range)" },
                { name: "Ay-Chung Flour Rice Noodle", typeAndPrice: "Street food (Budget)" }
            ],
            mustTryDish: "Beef Noodle Soup"
        },
        gettingAround: {
            publicTransport: "MRT, Bus",
            apps: ["Uber", "local taxi apps"],
            dailyBudget: "$5–$10"
        },
        dailyBudget: {
            accommodation: "$25–$150",
            food: "$10–$30",
            transportation: "$5–$10",
            activities: "$10–$30",
            total: "$50–$220"
        },
        whatToPack: {
            clothing: "Light clothes, jacket (cool evenings), comfy shoes",
            documents: "Passport, hotel booking copy",
            gadgets: "Power bank, universal adapter",
            other: "EasyCard (for transport), umbrella"
        },
        travelTips: {
            safety: "Taipei is very safe, but always keep belongings secure.",
            money: "Use MRT instead of taxis.",
            etiquette: "Be quiet and respectful on public transport.",
            reminder: "Many shops prefer cash, so carry some local currency."
        },
        photoSpots: [
            "Taipei 101 Observatory",
            "Chiang Kai-shek Memorial Hall plaza",
            "Elephant Mountain (city view)"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Landmarks & Night Markets",
                morning: "Chiang Kai-shek Memorial Hall",
                afternoon: "Taipei 101",
                evening: "Ximending & Shilin Night Market"
            },
            {
                day: 2,
                focus: "Nature & Culture",
                morning: "Elephant Mountain hike",
                afternoon: "National Palace Museum",
                evening: "Raohe Night Market"
            },
            {
                day: 3,
                focus: "Hot Springs & Sunsets",
                morning: "Beitou Hot Springs",
                afternoon: "Tamsui Old Street",
                evening: "Sunset at Fisherman’s Wharf"
            }
        ]
    },
    {
        id: "taichung",
        destinationName: "Taichung",
        country: "Taiwan",
        bestTime: "October–April",
        lengthOfStay: "2–3 days",
        budgetRange: "Budget",
        quickDescription: "Taichung is a relaxed and creative city known for colorful art villages, scenic wetlands, and large night markets. It’s less crowded than Taipei and perfect if you want a slower, chill vibe.",
        heroImage: "https://images.unsplash.com/photo-1596483484501-8314ba63510e?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Taichung International Airport",
            transportation: "Bus, Taxi",
            visa: "Same as Taiwan entry rules"
        },
        whereToStay: {
            budget: {
                name: "Kiwi Express Hotel",
                why: "Affordable and centrally located."
            },
            midRange: {
                name: "53 Hotel Taichung",
                why: "Clean rooms near Taichung Station."
            },
            luxury: {
                name: "The Lin Hotel",
                why: "Modern hotel with rooftop pool."
            }
        },
        thingsToDo: [
            {
                name: "Rainbow Village",
                why: "Colorful murals perfect for photos.",
                fee: "Free",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Gaomei Wetlands",
                why: "Beautiful sunset and wind turbines view.",
                fee: "Free",
                bestTime: "Late afternoon",
                image: "https://images.unsplash.com/photo-1571401835393-8c5f3b39c6ec?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Fengjia Night Market",
                why: "One of Taiwan’s biggest night markets.",
                fee: "Free",
                bestTime: "Evening",
                image: "https://images.unsplash.com/photo-1624225233481-06727143e227?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Fengjia Night Market stalls", typeAndPrice: "Street food (Budget)" },
                { name: "Chun Shui Tang", typeAndPrice: "Taiwanese cuisine (Mid-range)" }
            ],
            mustTryDish: "Bubble Milk Tea"
        },
        gettingAround: {
            publicTransport: "Bus",
            apps: ["Uber"],
            dailyBudget: "$5–$10"
        },
        dailyBudget: {
            accommodation: "$20–$120",
            food: "$10–$25",
            transportation: "$5–$10",
            activities: "$5–$20",
            total: "$40–$175"
        },
        whatToPack: {
            clothing: "Light clothes, comfy shoes",
            documents: "Passport",
            gadgets: "Power bank",
            other: "Sunscreen, small backpack"
        },
        travelTips: {
            safety: "Roads can be busy with scooters — stay alert.",
            money: "Night markets are affordable for meals.",
            etiquette: "Line up properly when waiting.",
            reminder: "Some attractions are far apart — plan transport ahead."
        },
        photoSpots: [
            "Rainbow Village (Colorful murals)",
            "Gaomei Wetlands (Sunset & wind turbines)",
            "National Taichung Theater (Modern architecture)"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Art & Night Markets",
                morning: "Visit Rainbow Village",
                afternoon: "National Taichung Theater & cafes",
                evening: "Fengjia Night Market"
            },
            {
                day: 2,
                focus: "Culture & Nature",
                morning: "Relax at Calligraphy Greenway",
                afternoon: "Miyahara Ice Cream & shopping",
                evening: "Sunset at Gaomei Wetlands"
            },
            {
                day: 3,
                focus: "Leisure & Heritage",
                morning: "Visit Lavender Cottage or nearby nature park",
                afternoon: "Taichung Cultural Heritage Park",
                evening: "Local hotpot restaurant"
            }
        ]
    },
    {
        id: "kota-kinabalu",
        destinationName: "Kota Kinabalu",
        country: "Malaysia",
        bestTime: "March–October",
        lengthOfStay: "3–4 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Kota Kinabalu is perfect for beach lovers and nature enthusiasts. You’ll enjoy island hopping, beautiful sunsets, and fresh seafood. It’s more relaxed compared to Kuala Lumpur and ideal for a tropical escape.",
        heroImage: "https://images.unsplash.com/photo-1543888514-94f4a3861218?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Kota Kinabalu International Airport",
            transportation: "Taxi, Grab",
            visa: "Visa-free for many ASEAN passports"
        },
        whereToStay: {
            budget: {
                name: "Escape Backpackers KK",
                why: "Affordable and near the waterfront."
            },
            midRange: {
                name: "The Klagan Hotel",
                why: "Comfortable rooms near shopping malls."
            },
            luxury: {
                name: "Shangri-La Tanjung Aru",
                why: "Beachfront resort with amazing sunset views."
            }
        },
        thingsToDo: [
            {
                name: "Tunku Abdul Rahman Marine Park",
                why: "Island hopping, snorkeling, clear waters.",
                fee: "Small conservation fee",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1544919931-314227183e8b?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Mount Kinabalu",
                why: "UNESCO-listed mountain and nature park.",
                fee: "Park fee required",
                bestTime: "Early morning",
                image: "https://images.unsplash.com/photo-1596483484501-8314ba63510e?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Kota Kinabalu Waterfront",
                why: "Sunset views and seafood dining.",
                fee: "Free",
                bestTime: "Evening",
                image: "https://images.unsplash.com/photo-1589458925432-613dced2775a?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Welcome Seafood Restaurant", typeAndPrice: "Seafood (Mid-range)" },
                { name: "Gaya Street Night Market", typeAndPrice: "Street food (Budget)" }
            ],
            mustTryDish: "Grilled seafood"
        },
        gettingAround: {
            publicTransport: "Bus, Minivan",
            apps: ["Grab"],
            dailyBudget: "$5–$15"
        },
        dailyBudget: {
            accommodation: "$25–$200",
            food: "$15–$30",
            transportation: "$5–$15",
            activities: "$15–$50",
            total: "$60–$295"
        },
        whatToPack: {
            clothing: "Swimwear, light clothes, sandals",
            documents: "Passport",
            gadgets: "Waterproof phone case",
            other: "Sunscreen, insect repellent"
        },
        travelTips: {
            safety: "Follow safety guidelines when island hopping.",
            money: "Book island packages locally.",
            etiquette: "Respect nature and marine life.",
            reminder: "Weather can change quickly."
        },
        photoSpots: [
            "Tunku Abdul Rahman Islands",
            "Kota Kinabalu Waterfront sunset",
            "Mount Kinabalu viewpoint"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Islands & Sunset",
                morning: "Island hopping",
                afternoon: "Snorkeling",
                evening: "Waterfront seafood dinner"
            },
            {
                day: 2,
                focus: "Nature & Local Life",
                morning: "Kinabalu Park",
                afternoon: "Desa Dairy Farm",
                evening: "Night market"
            },
            {
                day: 3,
                focus: "Culture & City",
                morning: "Mari Mari Cultural Village",
                afternoon: "Shopping at Suria Sabah",
                evening: "Sunset cruise"
            }
        ]
    },
    {
        id: "brunei",
        destinationName: "Bandar Seri Begawan",
        country: "Brunei",
        bestTime: "January–May",
        lengthOfStay: "2–3 days",
        budgetRange: "Mid-range",
        quickDescription: "Brunei is peaceful, clean, and rich in Islamic culture. It’s known for beautiful mosques and royal heritage. A great short trip for cultural exploration.",
        heroImage: "https://images.unsplash.com/photo-1590731782201-900898835843?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Brunei International Airport",
            transportation: "Taxi",
            visa: "Visa-free for many ASEAN nationals"
        },
        whereToStay: {
            budget: {
                name: "Higher Hotel",
                why: "Affordable and central."
            },
            midRange: {
                name: "Radisson Hotel Brunei",
                why: "Comfortable and near attractions."
            },
            luxury: {
                name: "The Empire Brunei",
                why: "Grand resort experience."
            }
        },
        thingsToDo: [
            {
                name: "Sultan Omar Ali Saifuddien Mosque",
                why: "Stunning golden dome and lagoon setting.",
                fee: "Free",
                bestTime: "Late afternoon",
                image: "https://images.unsplash.com/photo-1621259500099-2a91901869e5?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Kampong Ayer",
                why: "Traditional water village experience.",
                fee: "Free",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1589458925432-613dced2775a?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Jame'Asr Hassanil Bolkiah Mosque",
                why: "Largest mosque in Brunei.",
                fee: "Free",
                bestTime: "Sunset",
                image: "https://images.unsplash.com/photo-1590731782201-900898835843?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Aminah Arif Restaurant", typeAndPrice: "Local cuisine (Mid-range)" },
                { name: "Tamu Kianggeh", typeAndPrice: "Local market food (Budget)" }
            ],
            mustTryDish: "Ambuyat"
        },
        gettingAround: {
            publicTransport: "Limited buses",
            apps: ["Dart"],
            dailyBudget: "$10–$20"
        },
        dailyBudget: {
            accommodation: "$40–$250",
            food: "$15–$30",
            transportation: "$10–$20",
            activities: "Mostly free",
            total: "$65–$300"
        },
        whatToPack: {
            clothing: "Modest clothing",
            documents: "Passport",
            gadgets: "Power adapter",
            other: "Light scarf (for mosque visits)"
        },
        travelTips: {
            safety: "Very safe country.",
            money: "Many attractions are free.",
            etiquette: "Dress modestly.",
            reminder: "No alcohol allowed."
        },
        photoSpots: [
            "Sultan Omar Ali Saifuddien Mosque",
            "Kampong Ayer",
            "Jame'Asr Hassanil Bolkiah Mosque"
        ],
        itinerary: [
            {
                day: 1,
                focus: "City Heritage",
                morning: "Sultan Omar Ali Saifuddien Mosque",
                afternoon: "Kampong Ayer",
                evening: "Gadong Night Market"
            },
            {
                day: 2,
                focus: "Mosques & Museums",
                morning: "Jame'Asr Mosque",
                afternoon: "Royal Regalia Museum",
                evening: "Waterfront stroll"
            },
            {
                day: 3,
                focus: "Nature & Leisure",
                morning: "Ulu Temburong National Park",
                afternoon: "Relax at hotel",
                evening: "Local dining"
            }
        ]
    },
    {
        id: "bangkok",
        destinationName: "Bangkok",
        country: "Thailand",
        bestTime: "November–February",
        lengthOfStay: "3–4 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Bangkok is vibrant, busy, and full of culture. From golden temples and floating markets to rooftop bars and street food, there’s always something exciting to explore. It’s a perfect mix of tradition and modern city life.",
        heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579367?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Suvarnabhumi Airport (BKK)",
            transportation: "Airport Rail Link, Taxi, Grab",
            visa: "Visa-free for many ASEAN and selected countries (check based on passport)"
        },
        whereToStay: {
            budget: {
                name: "Lub d Bangkok Siam",
                why: "Affordable, modern, and near BTS station."
            },
            midRange: {
                name: "Amara Bangkok Hotel",
                why: "Comfortable rooms with rooftop pool."
            },
            luxury: {
                name: "Mandarin Oriental Bangkok",
                why: "5-star luxury along the Chao Phraya River."
            }
        },
        thingsToDo: [
            {
                name: "Grand Palace",
                why: "Thailand’s most famous royal landmark.",
                fee: "Paid",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Wat Arun",
                why: "Beautiful riverside temple with stunning design.",
                fee: "Small fee",
                bestTime: "Sunset",
                image: "https://images.unsplash.com/photo-1543888514-94f4a3861218?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Chatuchak Weekend Market",
                why: "One of the largest markets in the world.",
                fee: "Free",
                bestTime: "Weekend morning",
                image: "https://images.unsplash.com/photo-1562602802-08dcd370460c?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Thip Samai", typeAndPrice: "Pad Thai (Mid-range)" },
                { name: "Jay Fai", typeAndPrice: "Michelin street food (Mid to high range)" }
            ],
            mustTryDish: "Pad Thai"
        },
        gettingAround: {
            publicTransport: "BTS Skytrain, MRT, River boats",
            apps: ["Grab", "Bolt"],
            dailyBudget: "$5–$15"
        },
        dailyBudget: {
            accommodation: "$20–$250",
            food: "$10–$40",
            transportation: "$5–$15",
            activities: "$10–$40",
            total: "$45–$345"
        },
        whatToPack: {
            clothing: "Light clothes, modest outfit for temples",
            documents: "Passport, hotel booking copy",
            gadgets: "Power bank",
            other: "Temple-appropriate clothing (covered shoulders & knees)"
        },
        travelTips: {
            safety: "Beware of common tourist scams near temples.",
            money: "Use BTS instead of taxis during rush hour.",
            etiquette: "Remove shoes before entering temples.",
            reminder: "Dress modestly when visiting religious sites."
        },
        photoSpots: [
            "Grand Palace",
            "Wat Arun riverside",
            "Mahanakhon Skywalk"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Palaces & River",
                morning: "Grand Palace",
                afternoon: "Wat Pho & river cruise",
                evening: "Asiatique Riverfront"
            },
            {
                day: 2,
                focus: "Market & Shopping",
                morning: "Chatuchak Market",
                afternoon: "Siam Paragon shopping",
                evening: "Rooftop bar experience"
            },
            {
                day: 3,
                focus: "Floats & Culture",
                morning: "Damnoen Saduak Floating Market",
                afternoon: "Jim Thompson House",
                evening: "Chinatown food trip"
            }
        ]
    },
    {
        id: "phuket",
        destinationName: "Phuket",
        country: "Thailand",
        bestTime: "November–April",
        lengthOfStay: "3–4 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Phuket is Thailand’s largest island, known for its white-sand beaches and island hopping tours. It’s perfect for relaxation, snorkeling, and enjoying beautiful tropical sunsets.",
        heroImage: "https://images.unsplash.com/photo-1589394815804-964ed9be2eb3?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Phuket International Airport",
            transportation: "Taxi, Grab, Airport Bus",
            visa: "Same Thailand visa rules (visa-free for many countries)"
        },
        whereToStay: {
            budget: {
                name: "Lub d Phuket Patong",
                why: "Affordable and close to Patong Beach."
            },
            midRange: {
                name: "Holiday Inn Resort Phuket",
                why: "Great location near the beach and nightlife."
            },
            luxury: {
                name: "The Shore at Katathani",
                why: "Private villas with ocean views."
            }
        },
        thingsToDo: [
            {
                name: "Phi Phi Islands",
                why: "Crystal-clear water and stunning limestone cliffs.",
                fee: "Tour fee required",
                bestTime: "Early morning",
                image: "https://images.unsplash.com/photo-1528181304800-2f1408198f2f?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Big Buddha Phuket",
                why: "Panoramic island views.",
                fee: "Free",
                bestTime: "Late afternoon",
                image: "https://images.unsplash.com/photo-1583354316021-f050fd7122a6?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Patong Beach",
                why: "Famous beach with lively nightlife.",
                fee: "Free",
                bestTime: "Sunset",
                image: "https://images.unsplash.com/photo-1549419163-146313364f7b?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Kan Eang @ Pier", typeAndPrice: "Seafood (Mid-range)" },
                { name: "No.6 Restaurant", typeAndPrice: "Thai food (Budget)" }
            ],
            mustTryDish: "Tom Yum Goong"
        },
        gettingAround: {
            publicTransport: "Songthaew (local bus), Taxi",
            apps: ["Grab"],
            dailyBudget: "$10–$20"
        },
        dailyBudget: {
            accommodation: "$25–$400",
            food: "$15–$40",
            transportation: "$10–$20",
            activities: "$20–$60",
            total: "$70–$520"
        },
        whatToPack: {
            clothing: "Swimwear, light clothes, sandals",
            documents: "Passport",
            gadgets: "Waterproof pouch",
            other: "Sunscreen, sunglasses"
        },
        travelTips: {
            safety: "Check weather conditions before island tours.",
            money: "Book island tours as group packages.",
            etiquette: "Dress respectfully at temples.",
            reminder: "Sea conditions can change quickly during monsoon season."
        },
        photoSpots: [
            "Big Buddha viewpoint",
            "Phi Phi Islands",
            "Promthep Cape sunset"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Islands & Beach",
                morning: "Phi Phi Island tour",
                afternoon: "Snorkeling",
                evening: "Patong Beach"
            },
            {
                day: 2,
                focus: "Views & Culture",
                morning: "Big Buddha",
                afternoon: "Old Phuket Town",
                evening: "Night market"
            },
            {
                day: 3,
                focus: "Relax & Sunset",
                morning: "Relax at Kata Beach",
                afternoon: "Spa or massage",
                evening: "Sunset at Promthep Cape"
            }
        ]
    }
];
