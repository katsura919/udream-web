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
    },
    {
        id: "phnom-penh",
        destinationName: "Phnom Penh",
        country: "Cambodia",
        bestTime: "November–February",
        lengthOfStay: "2–3 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Phnom Penh is Cambodia’s capital, rich in history and culture. You’ll find royal palaces, riverside views, and important historical museums. It’s a meaningful and educational destination.",
        heroImage: "https://images.unsplash.com/photo-1590731782201-900898835843?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Phnom Penh International Airport",
            transportation: "Taxi, Grab, Tuk-tuk",
            visa: "Visa on arrival for many nationalities (check before travel)"
        },
        whereToStay: {
            budget: {
                name: "The Big Easy Phnom Penh",
                why: "Affordable and central location."
            },
            midRange: {
                name: "Plantation Urban Resort",
                why: "Stylish hotel near Royal Palace."
            },
            luxury: {
                name: "Raffles Hotel Le Royal",
                why: "Historic 5-star colonial hotel."
            }
        },
        thingsToDo: [
            {
                name: "Royal Palace Phnom Penh",
                why: "Beautiful Khmer architecture and Silver Pagoda.",
                fee: "Paid",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1621259500099-2a91901869e5?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Tuol Sleng Genocide Museum",
                why: "Important historical site.",
                fee: "Paid",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1589458925432-613dced2775a?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Choeung Ek Genocidal Center",
                why: "Learn about Cambodia’s history.",
                fee: "Paid",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1590731782201-900898835843?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Friends the Restaurant", typeAndPrice: "Cambodian cuisine (Mid-range)" },
                { name: "Russian Market stalls", typeAndPrice: "Local food (Budget)" }
            ],
            mustTryDish: "Fish Amok"
        },
        gettingAround: {
            publicTransport: "Tuk-tuk, Taxi",
            apps: ["Grab"],
            dailyBudget: "$5–$15"
        },
        dailyBudget: {
            accommodation: "$15–$250",
            food: "$10–$25",
            transportation: "$5–$15",
            activities: "$10–$30",
            total: "$40–$320"
        },
        whatToPack: {
            clothing: "Light clothes, modest outfit for temples",
            documents: "Passport, visa copy",
            gadgets: "Power bank",
            other: "Sunscreen"
        },
        travelTips: {
            safety: "Stay alert in crowded markets.",
            money: "Negotiate tuk-tuk fares.",
            etiquette: "Dress respectfully at temples.",
            reminder: "US dollars widely accepted."
        },
        photoSpots: [
            "Royal Palace",
            "Riverside promenade",
            "Independence Monument"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Palace & Riverside",
                morning: "Royal Palace",
                afternoon: "National Museum",
                evening: "Riverside walk"
            },
            {
                day: 2,
                focus: "History & Culture",
                morning: "Tuol Sleng",
                afternoon: "Killing Fields",
                evening: "Night market"
            },
            {
                day: 3,
                focus: "Leisure & Markets",
                morning: "Wat Phnom",
                afternoon: "Russian Market",
                evening: "Sunset cruise"
            }
        ]
    },
    {
        id: "ho-chi-minh-city",
        destinationName: "Ho Chi Minh City",
        country: "Vietnam",
        bestTime: "December–April",
        lengthOfStay: "3 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Ho Chi Minh City (Saigon) is energetic, modern, and full of history. You’ll find war museums, French colonial buildings, and amazing street food. It’s a great mix of culture and city life.",
        heroImage: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Tan Son Nhat International Airport",
            transportation: "Taxi, Grab, Airport Bus",
            visa: "E-visa available for many nationalities (check before travel)"
        },
        whereToStay: {
            budget: {
                name: "The Hideout Hostel",
                why: "Affordable and social atmosphere."
            },
            midRange: {
                name: "Silverland Yen Hotel",
                why: "Comfortable rooms near Ben Thanh Market."
            },
            luxury: {
                name: "The Reverie Saigon",
                why: "5-star luxury in central district."
            }
        },
        thingsToDo: [
            {
                name: "War Remnants Museum",
                why: "Learn about Vietnam War history.",
                fee: "Paid",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c8707?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Ben Thanh Market",
                why: "Shopping and street food.",
                fee: "Free",
                bestTime: "Afternoon",
                image: "https://images.unsplash.com/photo-1559592440-7f1533241f67?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Cu Chi Tunnels",
                why: "Explore underground war tunnels.",
                fee: "Paid",
                bestTime: "Morning tour",
                image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Pho Hoa", typeAndPrice: "Vietnamese noodles (Budget)" },
                { name: "Secret Garden", typeAndPrice: "Traditional Vietnamese (Mid-range)" }
            ],
            mustTryDish: "Pho"
        },
        gettingAround: {
            publicTransport: "Bus",
            apps: ["Grab"],
            dailyBudget: "$5–$15"
        },
        dailyBudget: {
            accommodation: "$15–$300",
            food: "$10–$30",
            transportation: "$5–$15",
            activities: "$10–$40",
            total: "$40–$385"
        },
        whatToPack: {
            clothing: "Light breathable clothes",
            documents: "Passport, visa copy",
            gadgets: "Power bank",
            other: "Small backpack"
        },
        travelTips: {
            safety: "Watch for motorbikes when crossing streets.",
            money: "Use Grab instead of taxis.",
            etiquette: "Greet politely and smile.",
            reminder: "Traffic can be busy and chaotic."
        },
        photoSpots: [
            "Notre-Dame Cathedral Basilica of Saigon",
            "Saigon Central Post Office",
            "Bitexco Skydeck"
        ],
        itinerary: [
            {
                day: 1,
                focus: "City History",
                morning: "War Remnants Museum",
                afternoon: "Notre-Dame Cathedral & Post Office",
                evening: "Ben Thanh Market"
            },
            {
                day: 2,
                focus: "Adventure & Views",
                morning: "Cu Chi Tunnels",
                afternoon: "Bitexco Skydeck",
                evening: "Dinner cruise"
            },
            {
                day: 3,
                focus: "Culture & Vibes",
                morning: "Coffee shop hopping",
                afternoon: "Chinatown (District 5)",
                evening: "Night market"
            }
        ]
    },
    {
        id: "hanoi",
        destinationName: "Hanoi",
        country: "Vietnam",
        bestTime: "October–April",
        lengthOfStay: "3–4 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Hanoi is charming, cultural, and full of history. The Old Quarter is lively with narrow streets and street food stalls. It’s also the gateway to Halong Bay.",
        heroImage: "https://images.unsplash.com/photo-1555921015-5532091f6006?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Noi Bai International Airport",
            transportation: "Taxi, Grab, Airport Bus",
            visa: "E-visa available for many travelers"
        },
        whereToStay: {
            budget: {
                name: "Hanoi Buffalo Hostel",
                why: "Affordable and great location in Old Quarter."
            },
            midRange: {
                name: "La Siesta Hotel",
                why: "Comfortable and central."
            },
            luxury: {
                name: "Sofitel Legend Metropole Hanoi",
                why: "Historic 5-star French colonial hotel."
            }
        },
        thingsToDo: [
            {
                name: "Hoan Kiem Lake",
                why: "Relaxing area in the city center.",
                fee: "Free",
                bestTime: "Early morning",
                image: "https://images.unsplash.com/photo-1509030450996-93efa58eb3d6?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Ho Chi Minh Mausoleum",
                why: "Important national landmark.",
                fee: "Free",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Old Quarter Hanoi",
                why: "Street food and shopping.",
                fee: "Free",
                bestTime: "Evening",
                image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Bun Cha Huong Lien", typeAndPrice: "Vietnamese BBQ (Budget)" },
                { name: "Cha Ca Thang Long", typeAndPrice: "Local specialty (Mid-range)" }
            ],
            mustTryDish: "Bun Cha"
        },
        gettingAround: {
            publicTransport: "Bus",
            apps: ["Grab"],
            dailyBudget: "$5–$15"
        },
        dailyBudget: {
            accommodation: "$15–$350",
            food: "$10–$30",
            transportation: "$5–$15",
            activities: "$10–$50",
            total: "$40–$445"
        },
        whatToPack: {
            clothing: "Light clothes, light jacket (cool season)",
            documents: "Passport",
            gadgets: "Camera",
            other: "Comfortable walking shoes"
        },
        travelTips: {
            safety: "Be cautious when crossing busy streets.",
            money: "Book Halong Bay tours locally.",
            etiquette: "Remove shoes when entering homes.",
            reminder: "Winter months can be chilly."
        },
        photoSpots: [
            "Hoan Kiem Lake",
            "Train Street",
            "Long Bien Bridge"
        ],
        itinerary: [
            {
                day: 1,
                focus: "City Heritage",
                morning: "Ho Chi Minh Mausoleum",
                afternoon: "Temple of Literature",
                evening: "Old Quarter food trip"
            },
            {
                day: 2,
                focus: "Halong Bay",
                morning: "Halong Bay cruise (Early start)",
                afternoon: "Cruising & Caves",
                evening: "Return to Hanoi"
            },
            {
                day: 3,
                focus: "Life & Lakes",
                morning: "Hoan Kiem Lake",
                afternoon: "Train Street",
                evening: "Water puppet show"
            }
        ]
    },
    {
        id: "indonesia",
        destinationName: "Indonesia",
        country: "Indonesia",
        bestTime: "May–September (Dry Season)",
        lengthOfStay: "10–14 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Indonesia is a breathtaking mosaic of over 17,000 islands, offering everything from the spiritual serenity of Bali’s temples to the raw volcanic beauty of Java. It is a world-class destination for surfers, hikers, and culture seekers alike.",
        heroImage: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Soekarno–Hatta International (CGK) or Ngurah Rai International (DPS)",
            transportation: "Blue Bird Taxi, Grab/Gojek, DAMRI Bus, Railink (Jakarta)",
            visa: "Visa on Arrival (VoA) for many countries (approx. 500,000 IDR)"
        },
        whereToStay: {
            budget: {
                name: "Wonderloft Hostel (Jakarta/Bali)",
                why: "Trendy, social atmosphere, and very affordable for backpackers."
            },
            midRange: {
                name: "Alaya Resort Ubud",
                why: "Stunning rice field views and authentic Balinese hospitality."
            },
            luxury: {
                name: "Ayana Estate (Bali)",
                why: "Home to the world-famous Rock Bar and elite private villas."
            }
        },
        thingsToDo: [
            {
                name: "Borobudur Temple",
                why: "The largest Buddhist temple in the world and a UNESCO site.",
                fee: "~450,000 IDR",
                bestTime: "Sunrise",
                image: "https://images.unsplash.com/photo-1588668214407-6ec97cb006c8?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Uluwatu Temple",
                why: "Dramatic cliffside views and the Kecak Fire Dance at sunset.",
                fee: "50,000 IDR",
                bestTime: "5:00 PM",
                image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Mount Bromo",
                why: "An otherworldly volcanic landscape that feels like another planet.",
                fee: "~220,000 IDR",
                bestTime: "3:00 AM",
                image: "https://images.unsplash.com/photo-1588582042217-062e08610cc4?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Warung Made (Bali)", typeAndPrice: "Traditional Balinese (Budget)" },
                { name: "Lara Djonggrang (Jakarta)", typeAndPrice: "High-end Indonesian history & food (Mid-range)" }
            ],
            mustTryDish: "Beef Rendang"
        },
        gettingAround: {
            publicTransport: "TransJakarta, KRL Commuter, Gojek (Bike/Car)",
            apps: ["Grab", "Gojek"],
            dailyBudget: "$10–$20"
        },
        dailyBudget: {
            accommodation: "$15–$150",
            food: "$10–$40",
            transportation: "$5–$20",
            activities: "$15–$50",
            total: "$45–$260"
        },
        whatToPack: {
            clothing: "Light fabrics, a sarong for temples, hiking shoes",
            documents: "Passport, E-VOA printout, Customs declaration QR",
            gadgets: "Universal adapter (Type C), Power bank",
            other: "Sunscreen, Insect repellent"
        },
        travelTips: {
            safety: "Only use Blue Bird or Silver Bird taxis for safety and fair pricing.",
            money: "Eat at local 'Warungs' for authentic food at a fraction of the cost.",
            etiquette: "Never use your left hand to give or receive items.",
            reminder: "Do not drink the tap water; always buy bottled or filtered water."
        },
        photoSpots: [
            "Tegalalang Rice Terrace (Bali)",
            "Gates of Heaven (Lempuyang Temple)",
            "Mount Bromo Crater Rim"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Ubud Culture",
                morning: "Explore Ubud Monkey Forest",
                afternoon: "Tegalalang Rice Terrace",
                evening: "Dinner in Ubud center"
            },
            {
                day: 2,
                focus: "Cliffs & Coasts",
                morning: "Travel to Uluwatu",
                afternoon: "Relax at Padang Padang Beach",
                evening: "Kecak Dance at Uluwatu Temple"
            },
            {
                day: 3,
                focus: "Surf & Sunset",
                morning: "Surfing lesson at Canggu",
                afternoon: "Cafe hopping",
                evening: "Sunset at Tanah Lot"
            }
        ]
    },
    {
        id: "japan",
        destinationName: "Japan (Multi-City)",
        country: "Japan",
        bestTime: "March–May (Cherry Blossoms), October–November (Autumn)",
        lengthOfStay: "10–14 days",
        budgetRange: "Mid-range / Luxury",
        quickDescription: "Japan is a seamless blend of hyper-modern technology and ancient tradition. From the neon lights of Tokyo to the tranquil zen gardens of Kyoto, it offers a travel experience that is safe, organized, and endlessly fascinating.",
        heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Narita (NRT) / Haneda (HND) for Tokyo; Kansai (KIX) for Osaka/Kyoto",
            transportation: "Narita Express, Haruka Express, Limousine Bus",
            visa: "Visa-free for many; e-Visa available for others (check Visit Japan Web)"
        },
        whereToStay: {
            budget: {
                name: "Nine Hours Capsule Hotel (Multiple locations)",
                why: "Iconic Japanese experience, clean, and very cheap."
            },
            midRange: {
                name: "Mitsui Garden Hotel (Kyoto/Osaka)",
                why: "Reliable quality, great locations, and modern design."
            },
            luxury: {
                name: "Aman Tokyo or Hoshinoya Kyoto",
                why: "Unparalleled luxury and traditional Ryokan experiences."
            }
        },
        thingsToDo: [
            {
                name: "Shibuya Crossing (Tokyo)",
                why: "The busiest pedestrian intersection in the world.",
                fee: "Free",
                bestTime: "Evening",
                image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Fushimi Inari Shrine (Kyoto)",
                why: "Walk through thousands of iconic vermillion torii gates.",
                fee: "Free",
                bestTime: "Early morning (6:00 AM)",
                image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Dotonbori (Osaka)",
                why: "The neon-lit heart of Japan’s street food culture.",
                fee: "Free",
                bestTime: "Night",
                image: "https://images.unsplash.com/photo-1590259692208-a15830005297?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Ichiran Ramen", typeAndPrice: "Classic Tonkotsu ramen (Budget)" },
                { name: "Kobe Plaisir (Kobe)", typeAndPrice: "High-grade Kobe Beef (Luxury)" }
            ],
            mustTryDish: "Sushi or Takoyaki"
        },
        gettingAround: {
            publicTransport: "Shinkansen (Bullet Train), Metro, JR Lines",
            apps: ["Google Maps", "Japan Transit", "Grodin (Local info)"],
            dailyBudget: "$15–$40"
        },
        dailyBudget: {
            accommodation: "$40–$300",
            food: "$30–$80",
            transportation: "$15–$50",
            activities: "$20–$60",
            total: "$105–$490"
        },
        whatToPack: {
            clothing: "Comfortable walking shoes, layered clothing",
            documents: "Passport, Suica/Pasmo card (digital or physical)",
            gadgets: "Pocket Wi-Fi or eSIM, Power bank",
            other: "Small coin purse (Japan uses many coins)"
        },
        travelTips: {
            safety: "Japan is extremely safe, but always keep your hotel address in Japanese.",
            money: "Buy food at 'Konbini' (7-Eleven/Lawson) for high-quality, cheap meals.",
            etiquette: "Do not eat while walking and keep quiet on trains.",
            reminder: "Many places are still cash-only; keep Yen on hand."
        },
        photoSpots: [
            "Chureito Pagoda (Fuji view)",
            "Arashiyama Bamboo Grove (Kyoto)",
            "Himeji Castle"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Tokyo Highlights",
                morning: "Tsukiji Outer Market",
                afternoon: "Harajuku/Meiji Shrine",
                evening: "Shibuya Sky"
            },
            {
                day: 2,
                focus: "Kyoto Tradition",
                morning: "Fushimi Inari",
                afternoon: "Kiyomizu-dera",
                evening: "Gion District"
            },
            {
                day: 3,
                focus: "Osaka & Nara",
                morning: "Nara Deer Park",
                afternoon: "Osaka Castle",
                evening: "Street food in Dotonbori"
            }
        ]
    },
    {
        id: "tokyo",
        destinationName: "Tokyo",
        country: "Japan",
        bestTime: "March–April (Sakura) or October–November (Autumn)",
        lengthOfStay: "5–7 days",
        budgetRange: "Mid-range / Luxury",
        quickDescription: "Tokyo is a sensory-overload city where ancient shrines sit in the shadow of neon skyscrapers. It offers world-class dining, quirky subcultures, and the most efficient train system on Earth.",
        heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Narita (NRT) or Haneda (HND)",
            transportation: "Narita Express (N'EX), Keisei Skyliner, Limousine Bus",
            visa: "Visa-free for many (US, UK, EU, ASEAN); check current e-Visa status."
        },
        whereToStay: {
            budget: {
                name: "The Millennials Shibuya",
                why: "High-tech, stylish capsule pods."
            },
            midRange: {
                name: "Hotel Sunroute Plaza Shinjuku",
                why: "Incredible location near the station."
            },
            luxury: {
                name: "Park Hyatt Tokyo",
                why: "Iconic 'Lost in Translation' views."
            }
        },
        thingsToDo: [
            {
                name: "Shibuya Crossing & Shibuya Sky",
                why: "The world's busiest crossing and a 360-degree open-air deck.",
                fee: "Free (Crossing) / ~¥2,500 (Sky)",
                bestTime: "Sunset/Night",
                image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Senso-ji Temple (Asakusa)",
                why: "Tokyo’s oldest and most atmospheric temple.",
                fee: "Free",
                bestTime: "Early morning (before 8:00 AM)",
                image: "https://images.unsplash.com/photo-1545642194-969408b04964?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Akihabara Electric Town",
                why: "The heart of anime, gaming, and electronics culture.",
                fee: "Free",
                bestTime: "Sunday afternoon (Pedestrian zone)",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Ichiran Shinjuku", typeAndPrice: "Classic Tonkotsu Ramen (Budget)" },
                { name: "Tsukiji Outer Market", typeAndPrice: "Fresh Seafood/Sushi (Mid-range)" }
            ],
            mustTryDish: "Edomae Sushi"
        },
        gettingAround: {
            publicTransport: "JR Yamanote Line, Tokyo Metro, Toei Subway",
            apps: ["Google Maps", "Japan Transit"],
            dailyBudget: "$20–$40"
        },
        dailyBudget: {
            accommodation: "$50–$400",
            food: "$40–$100",
            transportation: "$15–$30",
            activities: "$20–$80",
            total: "$120–$610"
        },
        whatToPack: {
            clothing: "Layered clothing, comfortable shoes",
            documents: "Passport, IC Card (Suica/Pasmo)",
            gadgets: "eSIM/Pocket WiFi",
            other: "Mobile battery"
        },
        travelTips: {
            safety: "Very safe; late night trains are standard.",
            money: "Suica can be used for most purchases.",
            etiquette: "Keep backpacks in front on crowded trains.",
            reminder: "Last train is usually around midnight."
        },
        photoSpots: [
            "Shibuya Sky",
            "TeamLab Borderless",
            "Shinjuku Gyoen"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Old & New",
                morning: "Asakusa Senso-ji",
                afternoon: "Akihabara",
                evening: "Shibuya Crossing"
            },
            {
                day: 2,
                focus: "Culture & Style",
                morning: "Meiji Shrine",
                afternoon: "Harajuku Takeshita Street",
                evening: "Shinjuku Golden Gai"
            },
            {
                day: 3,
                focus: "Gardens & Views",
                morning: "Imperial Palace Gardens",
                afternoon: "Roppongi Hills",
                evening: "Tokyo Tower sunset"
            }
        ]
    },
    {
        id: "kyoto",
        destinationName: "Kyoto",
        country: "Japan",
        bestTime: "April (Spring) or November (Autumn foliage)",
        lengthOfStay: "3–4 days",
        budgetRange: "Mid-range",
        quickDescription: "Kyoto is the soul of traditional Japan, home to over 2,000 temples and shrines. It is the best place to witness Geisha culture, tea ceremonies, and stunning Zen gardens.",
        heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Kansai International (KIX) or Itami (ITM)",
            transportation: "Haruka Express train from KIX or Shinkansen from Tokyo.",
            visa: "Same as Japan entry rules."
        },
        whereToStay: {
            budget: {
                name: "Piece Hostel Kyoto",
                why: "Modern, clean, and very social."
            },
            midRange: {
                name: "Cross Hotel Kyoto",
                why: "Stylish rooms near the Gion/Kawaramachi area."
            },
            luxury: {
                name: "Hoshinoya Kyoto",
                why: "A riverside luxury ryokan accessible only by boat."
            }
        },
        thingsToDo: [
            {
                name: "Fushimi Inari Shrine",
                why: "The famous 10,000 vermillion torii gates winding up the mountain.",
                fee: "Free",
                bestTime: "Dawn (to avoid massive crowds)",
                image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Kinkaku-ji (The Golden Pavilion)",
                why: "A Zen temple covered in shimmering gold leaf.",
                fee: "~¥500",
                bestTime: "Late afternoon for the 'golden' reflection",
                image: "https://images.unsplash.com/photo-1528360983277-13d401ca1869?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Arashiyama Bamboo Grove",
                why: "A towering green 'forest' of bamboo that feels otherworldly.",
                fee: "Free",
                bestTime: "7:00 AM",
                image: "https://images.unsplash.com/photo-1576431711204-7a3297a7f457?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Nishiki Market", typeAndPrice: "Kyoto's Kitchen street food (Budget)" },
                { name: "Gion Karyo", typeAndPrice: "Authentic Kaiseki multi-course meal (Luxury)" }
            ],
            mustTryDish: "Matcha Soba or Kaiseki Ryori"
        },
        gettingAround: {
            publicTransport: "City Bus, Kyoto Subway, Hankyu Line",
            apps: ["Google Maps"],
            dailyBudget: "$10–$20"
        },
        dailyBudget: {
            accommodation: "$40–$250",
            food: "$30–$80",
            transportation: "$10–$20",
            activities: "$20–$50",
            total: "$100–$400"
        },
        whatToPack: {
            clothing: "Modest clothes for temples, walking shoes",
            documents: "Passport",
            gadgets: "Camera",
            other: "Hand towel (for temples)"
        },
        travelTips: {
            safety: "Quiet and safe; respect temple rules.",
            money: "Cash is often required at small shrines.",
            etiquette: "Do not touch Geisha/Maiko in Gion.",
            reminder: "Buses can be very crowded."
        },
        photoSpots: [
            "Yasaka Pagoda",
            "Kiyomizu-dera balcony",
            "Pontocho Alley"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Eastern Kyoto",
                morning: "Kiyomizu-dera",
                afternoon: "Sannenzaka & Ninenzaka",
                evening: "Gion District"
            },
            {
                day: 2,
                focus: "North & West",
                morning: "Kinkaku-ji",
                afternoon: "Arashiyama Bamboo Grove",
                evening: "Pontocho dinner"
            },
            {
                day: 3,
                focus: "Southern Shrine",
                morning: "Fushimi Inari",
                afternoon: "Nishiki Market",
                evening: "Kyoto Station skywalk"
            }
        ]
    },
    {
        id: "osaka",
        destinationName: "Osaka",
        country: "Japan",
        bestTime: "March–May, October–November",
        lengthOfStay: "2–3 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Osaka is Japan’s outgoing, food-obsessed younger brother. It is famous for its 'Kuidaore' (eat until you drop) culture and vibrant nightlife.",
        heroImage: "https://images.unsplash.com/photo-1590259692208-a15830005297?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Kansai International (KIX)",
            transportation: "Nankai Rap:t, Haruka Express, Airport Bus",
            visa: "Same as Japan entry rules."
        },
        whereToStay: {
            budget: {
                name: "Ark Hotel Osaka Shinsaibashi",
                why: "Affordable and central."
            },
            midRange: {
                name: "Hotel Nikko Osaka",
                why: "Located directly on the Midosuji Boulevard."
            },
            luxury: {
                name: "Conrad Osaka",
                why: " 'Your Address in the Sky' with stunning views."
            }
        },
        thingsToDo: [
            {
                name: "Dotonbori District",
                why: "Giant neon signs (Glico Man) and endless street food.",
                fee: "Free",
                bestTime: "Night",
                image: "https://images.unsplash.com/photo-1571536802807-30451e411121?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Osaka Castle",
                why: "A magnificent landmark surrounded by a massive park and moat.",
                fee: "~¥1,200 (Tower)",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1590559899731-43d37a1a7071?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Universal Studios Japan (USJ)",
                why: "Super Nintendo World and The Wizarding World of Harry Potter.",
                fee: "~¥8,900–¥14,000 (Dynamic pricing)",
                bestTime: "Weekdays",
                image: "https://images.unsplash.com/photo-1621319206132-7ade251c890a?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Mizuno", typeAndPrice: "Famous for Okonomiyaki (Mid-range)" },
                { name: "Kushikatsu Daruma", typeAndPrice: "Fried skewers (Budget)" }
            ],
            mustTryDish: "Takoyaki (Octopus Balls)"
        },
        gettingAround: {
            publicTransport: "JR Loop Line, Midosuji Line",
            apps: ["Google Maps"],
            dailyBudget: "$10–$25"
        },
        dailyBudget: {
            accommodation: "$30–$200",
            food: "$40–$100",
            transportation: "$10–$25",
            activities: "$30–$100",
            total: "$110–$425"
        },
        whatToPack: {
            clothing: "Casual comfortable clothes",
            documents: "Passport",
            gadgets: "Power bank",
            other: "Stretchable pants (for all the food!)"
        },
        travelTips: {
            safety: "Lively and safe; locals are friendly.",
            money: "Cards widely accepted in malls.",
            etiquette: "Stand on the right on escalators (unlike Tokyo).",
            reminder: "Standard street food prices are very affordable."
        },
        photoSpots: [
            "Glico Running Man sign",
            "Umeda Sky Building",
            "Shinsekai area"
        ],
        itinerary: [
            {
                day: 1,
                focus: "The Soul of Osaka",
                morning: "Osaka Castle",
                afternoon: "Shinsaibashi shopping",
                evening: "Dotonbori food crawl"
            },
            {
                day: 2,
                focus: "Entertainment",
                morning: "Universal Studios Japan (Full day)",
                afternoon: "USJ Attractions",
                evening: "Umeda dinner"
            },
            {
                day: 3,
                focus: "Retro Osaka",
                morning: "Kuromon Market",
                afternoon: "Shinsekai & Tsutenkaku Tower",
                evening: "Last minute shopping"
            }
        ]
    },
    {
        id: "kobe",
        destinationName: "Kobe",
        country: "Japan",
        bestTime: "March–May, October–November",
        lengthOfStay: "1-2 days",
        budgetRange: "Mid-range",
        quickDescription: "A sophisticated port city squeezed between the sea and the Rokko mountain range. Famous globally for its premium beef and international history.",
        heroImage: "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Kansai International (KIX)",
            transportation: "JR Special Rapid Service from Osaka (20 mins) or Shinkansen to Shin-Kobe.",
            visa: "Same as Japan entry rules."
        },
        whereToStay: {
            budget: {
                name: "Kobe Capsule Hotel",
                why: "Affordable and central in Sannomiya."
            },
            midRange: {
                name: "Hotel Okura Kobe",
                why: "Iconic hotel with great harbor views."
            },
            luxury: {
                name: "Oriental Hotel Kobe",
                why: "Historic luxury in the heart of the old settlement."
            }
        },
        thingsToDo: [
            {
                name: "Kobe Harborland & Meriken Park",
                why: "Iconic red Port Tower and waterfront shopping at Mosaic.",
                fee: "Free (Park) / ~¥1,000 (Tower)",
                bestTime: "Evening",
                image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Kitano Ijinkan-gai",
                why: "Historic district with 19th-century Western-style mansions.",
                fee: "~¥500–¥1,000 (Per house)",
                bestTime: "Afternoon",
                image: "https://images.unsplash.com/photo-1590259692208-a15830005297?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Mount Rokko / Nunobiki Ropeway",
                why: "Incredible '10-million dollar' night view of the bay.",
                fee: "~¥2,000 (Ropeway roundtrip)",
                bestTime: "Evening",
                image: "https://images.unsplash.com/photo-1590259692208-a15830005297?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Steakland Kobe", typeAndPrice: "Most popular spot for affordable Kobe Beef (Mid-range)" },
                { name: "Mouriya", typeAndPrice: "Premium Kobe Beef Teppanyaki (Luxury)" }
            ],
            mustTryDish: "Kobe Beef Teppanyaki"
        },
        gettingAround: {
            publicTransport: "City Loop Bus, Kobe Subway, JR Lines",
            apps: ["Google Maps"],
            dailyBudget: "$10–$25"
        },
        dailyBudget: {
            accommodation: "$40–$200",
            food: "$40–$150",
            transportation: "$10–$20",
            activities: "$20–$50",
            total: "$110–$420"
        },
        whatToPack: {
            clothing: "Smart casual for beef restaurants, comfortable walking shoes",
            documents: "Passport",
            gadgets: "Camera",
            other: "Light jacket for Mt. Rokko"
        },
        travelTips: {
            safety: "Safe and well-organized port city.",
            money: "Cards widely accepted in malls and steak houses.",
            etiquette: "Dress slightly up for high-end beef restaurants.",
            reminder: "Last train back to Osaka/Kyoto is around midnight."
        },
        photoSpots: [
            "Kobe Port Tower",
            "BE KOBE sign at Meriken Park",
            "Ten-Million Dollar Night View from Mt. Maya"
        ],
        itinerary: [
            {
                day: 1,
                focus: "History & Views",
                morning: "Kitano Ijinkan-gai houses",
                afternoon: "Nunobiki Ropeway",
                evening: "Kobe Beef dinner at Sannomiya"
            },
            {
                day: 2,
                focus: "Harbor & Night",
                morning: "Meriken Park walk",
                afternoon: "Harborland shopping",
                evening: "Night view from Mt. Rokko"
            }
        ]
    },
    {
        id: "nara",
        destinationName: "Nara",
        country: "Japan",
        bestTime: "March–May, October–November",
        lengthOfStay: "1 day (usually a day trip)",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Japan's first permanent capital. It is most famous for its giant bronze Buddha and the hundreds of free-roaming deer that bow for crackers.",
        heroImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Kansai International (KIX)",
            transportation: "JR Nara Line from Kyoto (45 mins) or Kintetsu Line from Osaka (40 mins).",
            visa: "Same as Japan entry rules."
        },
        whereToStay: {
            budget: {
                name: "Nara Guesthouse",
                why: "Social and traditional atmosphere."
            },
            midRange: {
                name: "Hotel Nikko Nara",
                why: "Directly connected to JR Nara Station."
            },
            luxury: {
                name: "Nara Hotel",
                why: "Historic 5-star hotel with traditional architecture."
            }
        },
        thingsToDo: [
            {
                name: "Nara Park (Deer Park)",
                why: "Feed the deer and enjoy the massive park grounds.",
                fee: "Free",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1549111494-046637300c19?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Todai-ji Temple",
                why: "Houses the Daibutsu (Great Buddha), one of the largest bronze statues in the world.",
                fee: "~¥600",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Kasuga Taisha",
                why: "A forest shrine famous for thousands of bronze and stone lanterns.",
                fee: "~¥500 (Inner area)",
                bestTime: "Afternoon",
                image: "https://images.unsplash.com/photo-1555921015-5532091f6006?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Maguro Koya", typeAndPrice: "Fresh tuna specialties (Budget)" },
                { name: "Edogawa Naramachi", typeAndPrice: "Grilled eel in traditional house (Mid-range)" }
            ],
            mustTryDish: "Mochi (from Nakatanidou)"
        },
        gettingAround: {
            publicTransport: "Loop Bus, Walking",
            apps: ["Google Maps"],
            dailyBudget: "$5–$15"
        },
        dailyBudget: {
            accommodation: "$30–$150",
            food: "$20–$50",
            transportation: "$5–$15",
            activities: "$10–$30",
            total: "$65–$245"
        },
        whatToPack: {
            clothing: "Walking shoes",
            documents: "Passport",
            gadgets: "Camera",
            other: "Nothing special (deer crackers sold everywhere!)"
        },
        travelTips: {
            safety: "Very safe; watch your fingers with the deer!",
            money: "Cash is better for temple fees.",
            etiquette: "Bow to the deer (they might bow back).",
            reminder: "Last entrance to temples is often 4pm or 5pm."
        },
        photoSpots: [
            "Great Buddha at Todai-ji",
            "Deer in Nara Park",
            "Lanterns at Kasuga Taisha"
        ],
        itinerary: [
            {
                day: 1,
                focus: "History & Nature",
                morning: "Todai-ji Temple",
                afternoon: "Nara Park & Kasuga Taisha",
                evening: "Naramachi old town walk"
            }
        ]
    },
    {
        id: "hakone",
        destinationName: "Hakone",
        country: "Japan",
        bestTime: "March–May, October–November",
        lengthOfStay: "1–2 days",
        budgetRange: "Mid-range / Luxury",
        quickDescription: "A mountainous resort town famous for hot springs, art museums, and some of the best views of Mount Fuji across Lake Ashi.",
        heroImage: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Narita (NRT) or Haneda (HND)",
            transportation: "Odakyu 'Romancecar' from Shinjuku Station (85 mins).",
            visa: "Same as Japan entry rules."
        },
        whereToStay: {
            budget: {
                name: "Hakone Guesthouse",
                why: "Affordable and cozy with shared onsen."
            },
            midRange: {
                name: "Hakone Hotel",
                why: "Great views across Lake Ashi."
            },
            luxury: {
                name: "Gora Kadan",
                why: "One of Japan's most prestigious luxury ryokans."
            }
        },
        thingsToDo: [
            {
                name: "Hakone Ropeway & Owakudani",
                why: "Active volcanic valley with sulfur vents and 'Black Eggs'.",
                fee: "Included in Hakone Free Pass (~¥6,100 for 2 days)",
                bestTime: "Morning (clear Fuji views)",
                image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Lake Ashi Sightseeing Cruise",
                why: " 'Pirate Ship' cruise with views of the floating Torii gate.",
                fee: "Included in Hakone Free Pass",
                bestTime: "Afternoon",
                image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Hakone Open-Air Museum",
                why: "World-class sculptures set against a stunning mountain backdrop.",
                fee: "~¥1,600",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1528360983277-13d401ca1869?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Hakone Akatsukian", typeAndPrice: "Handmade Soba noodles (Budget)" },
                { name: "Itoyama", typeAndPrice: "Fine dining with lake views (Mid-range)" }
            ],
            mustTryDish: "Black Eggs (Kuro-tamago) from Owakudani"
        },
        gettingAround: {
            publicTransport: "Hakone Ropeway, Cable Car, Tozan Railway, Cruise ship",
            apps: ["Google Maps"],
            dailyBudget: "$20–$50"
        },
        dailyBudget: {
            accommodation: "$50–$400",
            food: "$30–$100",
            transportation: "$20–$40",
            activities: "$20–$50",
            total: "$120–$590"
        },
        whatToPack: {
            clothing: "Layers (mountain weather is cool), swimwear (if needed for onsen)",
            documents: "Passport, Hakone Free Pass",
            gadgets: "Camera",
            other: "None"
        },
        travelTips: {
            safety: "Safe mountain area; follow volcanic alerts.",
            money: "Hakone Free Pass covers almost all transport.",
            etiquette: "Follow onsen etiquette (wash before entering).",
            reminder: "Onsen use usually requires being completely naked."
        },
        photoSpots: [
            "Floating Torii gate from Lake Ashi",
            "Mount Fuji from Owakudani",
            "Open-Air Museum sculptures"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Mountains & Fuji",
                morning: "Tozan Railway to Gora",
                afternoon: "Ropeway to Owakudani",
                evening: "Relax in Ryokan Onsen"
            },
            {
                day: 2,
                focus: "Lake & Art",
                morning: "Lake Ashi cruise",
                afternoon: "Hakone Open-Air Museum",
                evening: "Return to Shinjuku"
            }
        ]
    },
    {
        id: "himeji",
        destinationName: "Himeji",
        country: "Japan",
        bestTime: "March–May, October–November",
        lengthOfStay: "Half-day to 1 day",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Home to Japan’s most spectacular and best-preserved feudal castle, nicknamed 'The White Heron' for its elegant white exterior.",
        heroImage: "https://images.unsplash.com/photo-1588668214407-6ec97cb006c8?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Kansai International (KIX)",
            transportation: "Shinkansen from Osaka (30 mins) or Kyoto (50 mins).",
            visa: "Same as Japan entry rules."
        },
        whereToStay: {
            budget: {
                name: "Himeji Castle Hostel",
                why: "Cheap and near the castle."
            },
            midRange: {
                name: "Daiwa Roynet Hotel Himeji",
                why: "Modern and professional."
            },
            luxury: {
                name: "Hotel Nikko Himeji",
                why: "Classic luxury near Himeji Station."
            }
        },
        thingsToDo: [
            {
                name: "Himeji Castle",
                why: "A UNESCO site and a National Treasure; the finest surviving castle in Japan.",
                fee: "¥2,500 (Price increase for tourists starting March 2026)",
                bestTime: "9:00 AM",
                image: "https://images.unsplash.com/photo-1588668214407-6ec97cb006c8?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Kokoen Garden",
                why: "Nine beautiful Japanese gardens located right next to the castle.",
                fee: "~¥310 (or combo ticket with castle)",
                bestTime: "Afternoon",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Mount Shosha (Engyo-ji Temple)",
                why: "A quiet mountain temple used as a filming location for The Last Samurai.",
                fee: "~¥1,000 (Ropeway)",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Koba & More", typeAndPrice: "Affordable Bento & Curry (Budget)" },
                { name: "Kappo Himeji", typeAndPrice: "Local seafood specialties (Mid-range)" }
            ],
            mustTryDish: "Himeji Oden (with ginger soy sauce)"
        },
        gettingAround: {
            publicTransport: "Loop Bus, Shinkansen",
            apps: ["Google Maps"],
            dailyBudget: "$5–$15"
        },
        dailyBudget: {
            accommodation: "$30–$200",
            food: "$20–$50",
            transportation: "$5–$15",
            activities: "$20–$40",
            total: "$75–$305"
        },
        whatToPack: {
            clothing: "Walking shoes (castle climb is steep)",
            documents: "Passport",
            gadgets: "Camera",
            other: "None"
        },
        travelTips: {
            safety: "Safe city with easy layout.",
            money: "Castle entrance accepts credit cards.",
            etiquette: "Take off shoes when entering the castle keep.",
            reminder: "Climbing to the top of the castle involves very steep wooden stairs."
        },
        photoSpots: [
            "Himeji Castle from the main lawn",
            "Kokoen Garden reflection",
            "Main gate looking up at the keep"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Castles & Gardens",
                morning: "Himeji Castle exploration",
                afternoon: "Kokoen Garden lunch",
                evening: "Mt. Shosha temple visit"
            }
        ]
    },
    {
        id: "hong-kong",
        destinationName: "Hong Kong",
        country: "China (SAR)",
        bestTime: "October–December (Cool and dry)",
        lengthOfStay: "3–4 days",
        budgetRange: "Mid-range / Luxury",
        quickDescription: "Hong Kong is a high-octane fusion of East and West, where neon-lit skyscrapers tower over traditional street markets. It is a city of stunning harbor views, world-class shopping, and an incredible culinary scene that ranges from humble dim sum to Michelin-starred fine dining.",
        heroImage: "https://images.unsplash.com/photo-1506353323425-46fd209fc28d?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Hong Kong International Airport (HKG)",
            transportation: "Airport Express Train (24 mins to Central), Public Bus (A-routes), Taxi",
            visa: "Visa-free for many nationalities including US, UK, EU, and ASEAN for 7–180 days."
        },
        whereToStay: {
            budget: {
                name: "Yesinn @YMT (Yau Ma Tei)",
                why: "Clean, modern, and located in the heart of the local market district."
            },
            midRange: {
                name: "The Charterhouse Causeway Bay",
                why: "Strategic location near shopping hubs and efficient transport links."
            },
            luxury: {
                name: "The Peninsula Hong Kong",
                why: "The 'Grande Dame of the Far East' offering unmatched colonial elegance and harbor views."
            }
        },
        thingsToDo: [
            {
                name: "Victoria Peak (The Peak)",
                why: "Unbeatable panoramic views of the city skyline and Victoria Harbour.",
                fee: "~HK$88 (Peak Tram Return)",
                bestTime: "Sunset",
                image: "https://images.unsplash.com/photo-1543165365-07232ed12abd?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Tian Tan Buddha (Big Buddha)",
                why: "A massive bronze Buddha statue reachable by a scenic cable car ride.",
                fee: "Free (Buddha) / ~HK$270+ (Cable Car)",
                bestTime: "Morning (10:00 AM)",
                image: "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Avenue of Stars & Symphony of Lights",
                why: "Tribute to HK cinema with the world's largest light and sound show.",
                fee: "Free",
                bestTime: "8:00 PM (Show start time)",
                image: "https://images.unsplash.com/photo-1506353323425-46fd209fc28d?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Tim Ho Wan", typeAndPrice: "Famous dim sum (Budget/Mid-range)" },
                { name: "Tsim Chai Kee", typeAndPrice: "Legendary wonton noodles (Budget)" }
            ],
            mustTryDish: "Egg Waffles (Gai Daan Jai) or Roast Goose"
        },
        gettingAround: {
            publicTransport: "MTR (Subway), Star Ferry, Tram ('Ding Ding')",
            apps: ["Google Maps", "MTR Mobile"],
            dailyBudget: "$5–$15"
        },
        dailyBudget: {
            accommodation: "$40–$250",
            food: "$20–$60",
            transportation: "$5–$15",
            activities: "$15–$80",
            total: "$80–$405"
        },
        whatToPack: {
            clothing: "Light layers, comfortable walking shoes",
            documents: "Passport, Octopus Card",
            gadgets: "Universal adapter (Type G), Power bank",
            other: "Compact umbrella"
        },
        travelTips: {
            safety: "Stay alert in crowded markets like Mong Kok.",
            money: "Octopus Card is essential for transport and shops.",
            etiquette: "Escalator: Stand on the right, walk on the left.",
            reminder: "Most restaurants add 10% service charge."
        },
        photoSpots: [
            "Choi Hung Estate",
            "Monster Building (Quarry Bay)",
            "Victoria Harbour waterfront"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Skyline & Harbour",
                morning: "Victoria Peak",
                afternoon: "Central/Old Town Central",
                evening: "Star Ferry to Tsim Sha Tsui"
            },
            {
                day: 2,
                focus: "Nature & Culture",
                morning: "Lantau Island (Big Buddha)",
                afternoon: "Tai O Fishing Village",
                evening: "Mong Kok Night Markets"
            },
            {
                day: 3,
                focus: "City Gardens & Shopping",
                morning: "Nan Lian Garden",
                afternoon: "Causeway Bay shopping",
                evening: "Sky100 or Rooftop bar"
            }
        ]
    }
];
