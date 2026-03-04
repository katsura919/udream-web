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
    },
    {
        id: "macau",
        destinationName: "Macau",
        country: "China (SAR)",
        bestTime: "October–December",
        lengthOfStay: "1–2 days (often a day trip from HK)",
        budgetRange: "Mid-range / Luxury",
        quickDescription: "Macau is a fascinating blend of Portuguese colonial history and glitzy, modern casino resorts. You can walk through cobblestone European squares in the morning and visit the world's largest casinos in the afternoon.",
        heroImage: "https://images.unsplash.com/photo-1590333247333-826040742d4a?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Macau International Airport (MFM)",
            transportation: "Free Hotel Shuttle Buses, Taxi, Public Bus, or LRT.",
            visa: "Similar to Hong Kong; most Western and ASEAN passports are visa-free."
        },
        whereToStay: {
            budget: {
                name: "San Va Hospedaria",
                why: "Historic, no-frills guest house featured in many films; located in the old town."
            },
            midRange: {
                name: "Hotel Royal Macau",
                why: "Near the city center with great service and an indoor pool."
            },
            luxury: {
                name: "The Venetian Macao or The Londoner",
                why: "Massive integrated resorts with themed canals and world-class entertainment."
            }
        },
        thingsToDo: [
            {
                name: "Ruins of St. Paul's",
                why: "The iconic stone facade of a 17th-century Portuguese church.",
                fee: "Free",
                bestTime: "Before 9:00 AM",
                image: "https://images.unsplash.com/photo-1590333247333-826040742d4a?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Senado Square",
                why: "The heart of the historic center with beautiful mosaic tiles and colonial buildings.",
                fee: "Free",
                bestTime: "Late afternoon",
                image: "https://images.unsplash.com/photo-1616484173745-af9077977609?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "The Cotai Strip",
                why: "To see the spectacular scale of casinos like The Venetian and Parisian.",
                fee: "Free to enter resorts",
                bestTime: "Night (for the lights)",
                image: "https://images.unsplash.com/photo-1590333247504-0370884638fa?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Lord Stow’s Bakery", typeAndPrice: "Portuguese Egg Tarts (Budget)" },
                { name: "Restaurante Litoral", typeAndPrice: "Authentic Macanese/Portuguese (Mid-range)" }
            ],
            mustTryDish: "Portuguese Egg Tart or Pork Chop Bun"
        },
        gettingAround: {
            publicTransport: "Public Buses, LRT, Free Hotel Shuttles",
            apps: ["Bus Macau"],
            dailyBudget: "$0–$10"
        },
        dailyBudget: {
            accommodation: "$50–$400",
            food: "$20–$80",
            transportation: "$0–$15",
            activities: "$0–$100",
            total: "$70–$595"
        },
        whatToPack: {
            clothing: "Smart casual, comfortable walking shoes",
            documents: "Passport, Ferry tickets",
            gadgets: "Universal adapter (Type G), Power bank",
            other: "Macau Pass (optional)"
        },
        travelTips: {
            safety: "Stick to well-lit areas in the old town at night.",
            money: "HKD is accepted everywhere 1:1.",
            etiquette: "Photography strictly prohibited inside gaming areas.",
            reminder: "Use free shuttle buses to save money."
        },
        photoSpots: [
            "Ruins of St. Paul's",
            "The Parisian Macao (Eiffel Tower)",
            "Fisherman’s Wharf"
        ],
        itinerary: [
            {
                day: 1,
                focus: "History & Heritage",
                morning: "Senado Square & Ruins of St. Paul's",
                afternoon: "Monte Fort",
                evening: "Dinner in the historic center"
            },
            {
                day: 2,
                focus: "The Glitz & Glam",
                morning: "Taipa Village",
                afternoon: "Cotai Strip resort hopping",
                evening: "The House of Dancing Water show"
            },
            {
                day: 3,
                focus: "Quiet Villages",
                morning: "Coloane Village",
                afternoon: "Hac Sa Beach",
                evening: "Macau Tower"
            }
        ]
    },
    {
        id: "hong-kong-trip-2",
        destinationName: "Hong Kong (Local Soul)",
        country: "China (SAR)",
        bestTime: "October–December (Cool/Dry)",
        lengthOfStay: "3–4 days",
        budgetRange: "Mid-range",
        quickDescription: "A deep dive into HK's heritage, featuring traditional fishing villages, world-class modern art, and local 'Insta-famous' architecture.",
        heroImage: "https://images.unsplash.com/photo-1543165365-07232ed12abd?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Hong Kong International Airport (HKG)",
            transportation: "Airport Express, Bus A21, Red Taxi.",
            visa: "Visa-free for many (US, UK, ASEAN)."
        },
        whereToStay: {
            budget: {
                name: "Mei Ho House",
                why: "Heritage hostel in Sham Shui Po."
            },
            midRange: {
                name: "Page148",
                why: "Boutique hotel in the heart of Tsim Sha Tsui."
            },
            luxury: {
                name: "The Rosewood",
                why: "Ultra-luxury hotel at Victoria Dockside."
            }
        },
        thingsToDo: [
            {
                name: "M+ Museum",
                why: "World-class modern art and design at West Kowloon.",
                fee: "~HK$190",
                bestTime: "Weekday morning",
                image: "https://images.unsplash.com/photo-1543165365-07232ed12abd?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Tai O Village",
                why: "Historic fishing village with traditional stilt houses.",
                fee: "Free",
                bestTime: "Late afternoon",
                image: "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Dragon’s Back (Hiking)",
                why: "Popular trail with spectacular coastal views.",
                fee: "Free",
                bestTime: "Early morning",
                image: "https://images.unsplash.com/photo-1543165365-07232ed12abd?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Kung Wo Tofu", typeAndPrice: "Tofu snacks (Budget)" },
                { name: "Under Bridge Spicy Crab", typeAndPrice: "Seafood (Mid-range)" }
            ],
            mustTryDish: "Claypot Rice"
        },
        gettingAround: {
            publicTransport: "MTR, 'Ding Ding' Tram, Star Ferry",
            apps: ["MTR Mobile", "Citymapper"],
            dailyBudget: "$10"
        },
        dailyBudget: {
            accommodation: "$60",
            food: "$40",
            transportation: "$10",
            activities: "$25",
            total: "$135"
        },
        whatToPack: {
            clothing: "Light layers, non-slip shoes",
            documents: "Passport, Octopus Card",
            gadgets: "Type G adapter, Power bank",
            other: "Compact umbrella"
        },
        travelTips: {
            safety: "Watch for pickpockets in crowded markets.",
            money: "Use Octopus for 90% of transactions.",
            etiquette: "Stand on the right on escalators.",
            reminder: "No eating/drinking on the MTR."
        },
        photoSpots: [
            "Lok Wah South Estate (Blue circles)",
            "Choi Hung Estate (Rainbow)",
            "Sai Wan Swimming Shed"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Art & History",
                morning: "M+ Museum at West Kowloon",
                afternoon: "Heritage walk in Sham Shui Po",
                evening: "Skyline views from West Kowloon Art Park"
            },
            {
                day: 2,
                focus: "Nature & Local Life",
                morning: "Hike Dragon's Back",
                afternoon: "Seafood lunch and stilt houses at Tai O Village",
                evening: "Dinner in trendy Kennedy Town"
            },
            {
                day: 3,
                focus: "Islands & Estates",
                morning: "Ferry to Cheung Chau Island for street food",
                afternoon: "Photo ops at Choi Hung & Lok Wah Estates",
                evening: "Rooftop drinks in Causeway Bay"
            }
        ]
    },
    {
        id: "almaty",
        destinationName: "Almaty",
        country: "Kazakhstan",
        bestTime: "June–Sept (Hiking) / Dec–Feb (Ski)",
        lengthOfStay: "4–5 Days",
        budgetRange: "Budget-Friendly",
        quickDescription: "A sophisticated Eurasian city at the foot of the mountains, blending Soviet history with trendy café culture and stunning alpine scenery.",
        heroImage: "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Almaty (ALA)",
            transportation: "Yandex Go (App), Bus 92.",
            visa: "Visa-free (30 days) for many (inc. Philippines)."
        },
        whereToStay: {
            budget: {
                name: "My Hostel Almaty",
                why: "Highly rated, social and clean."
            },
            midRange: {
                name: "Hotel Kazakhstan",
                why: "Iconic Soviet-era skyscraper with great views."
            },
            luxury: {
                name: "Ritz-Carlton Almaty",
                why: "Stunning views from the Esentai Tower."
            }
        },
        thingsToDo: [
            {
                name: "Shymbulak/Medeu",
                why: "Alpine scenery, world-class skating rink, and skiing peaks.",
                fee: "Free (Cable Car ~¥12)",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Charyn Canyon",
                why: "Known as the 'Little Grand Canyon' of Central Asia.",
                fee: "~$3",
                bestTime: "Full-day trip",
                image: "https://images.unsplash.com/photo-1628102431718-e30129dc370f?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Zenkov Cathedral",
                why: "Colorful 19th-century wooden church built without nails.",
                fee: "Free",
                bestTime: "Afternoon",
                image: "https://images.unsplash.com/photo-1579737194883-75f8f8ed945c?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Green Bazaar", typeAndPrice: "Local snacks and street food (Budget)" },
                { name: "Navat", typeAndPrice: "Traditional Central Asian tea house (Mid-range)" }
            ],
            mustTryDish: "Beshbarmak (Meat & Pasta)"
        },
        gettingAround: {
            publicTransport: "Metro, Bus, Yandex Go",
            apps: ["Yandex Go"],
            dailyBudget: "$5"
        },
        dailyBudget: {
            accommodation: "$25",
            food: "$20",
            transportation: "$5",
            activities: "$15",
            total: "$65"
        },
        whatToPack: {
            clothing: "Hiking gear or heavy winter wear (seasonal)",
            documents: "Passport",
            gadgets: "Type C/F adapter, Power bank",
            other: "Lip balm (dry air)"
        },
        travelTips: {
            safety: "Stick to registered apps (Yandex) for taxis.",
            money: "Exchange USD/EUR to Tenge (KZT) in town.",
            etiquette: "Remove shoes when entering homes.",
            reminder: "Download offline Google Maps."
        },
        photoSpots: [
            "Shymbulak Peaks",
            "Zenkov Cathedral",
            "Kok Tobe City Views"
        ],
        itinerary: [
            {
                day: 1,
                focus: "City Highlights",
                morning: "Zenkov Cathedral and Panfilov Park",
                afternoon: "Shopping at Green Bazaar",
                evening: "Kok Tobe Hill for sunset city views"
            },
            {
                day: 2,
                focus: "The High Mountains",
                morning: "Medeu Skating Rink",
                afternoon: "Cable car to Shymbulak Ski Resort",
                evening: "Dinner at a traditional cafe in the city center"
            },
            {
                day: 3,
                focus: "Nature Escape",
                morning: "Full-day excursion to Charyn Canyon",
                afternoon: "Hiking the 'Valley of Castles'",
                evening: "Return to Almaty for a spa session at Arasan Baths"
            }
        ]
    },
    {
        id: "tashkent",
        destinationName: "Tashkent",
        country: "Uzbekistan",
        bestTime: "March–June and September–October",
        lengthOfStay: "2–3 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Tashkent is a fascinating mix of Soviet-era architecture, modern skyscrapers, and ancient Silk Road history. It is the greenest city in Central Asia, known for its museum-like metro stations and world-famous Plov.",
        heroImage: "https://images.unsplash.com/photo-1589561454226-728f32ac9108?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Tashkent International Airport (TAS)",
            transportation: "Yandex Go app, Taxi, or Public Bus.",
            visa: "e-Visa required for many (~$20); Visa-free for EU, UK, and US."
        },
        whereToStay: {
            budget: {
                name: "Jahongir B&B",
                why: "Authentic local feel, family-run, and near Chorsu Bazaar."
            },
            midRange: {
                name: "Lotte City Hotel Tashkent Palace",
                why: "Stunning classic architecture and prime central location."
            },
            luxury: {
                name: "Hyatt Regency Tashkent",
                why: "World-class 5-star amenities in the modern heart of the city."
            }
        },
        thingsToDo: [
            {
                name: "Chorsu Bazaar",
                why: "A massive blue-domed traditional market; the heart of local life.",
                fee: "Free",
                bestTime: "Morning (9:00 AM)",
                image: "https://images.unsplash.com/photo-1528642463367-7cb9a826702c?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Hazrati Imam Complex",
                why: "Spiritual center housing the world's oldest Quran (7th century).",
                fee: "Free (Small fee for library)",
                bestTime: "Early afternoon",
                image: "https://images.unsplash.com/photo-1589405234141-86a073584852?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Tashkent Metro Tour",
                why: "Every station is an art gallery (e.g., Kosmonavtlar).",
                fee: "~$0.15 per ride",
                bestTime: "Mid-day (avoid rush hour)",
                image: "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Besh Qozon", typeAndPrice: "Central Asian Plov Center (Budget: ~$4)" },
                { name: "Navat", typeAndPrice: "Traditional decor and local menu (Mid-range: ~$15)" }
            ],
            mustTryDish: "Tashkent Plov (Rice, meat, and carrots) and Samsa"
        },
        gettingAround: {
            publicTransport: "Metro, Buses, Shared Taxis",
            apps: ["Yandex Go"],
            dailyBudget: "$5–$10"
        },
        dailyBudget: {
            accommodation: "$20–$120",
            food: "$10–$30",
            transportation: "$3–$10",
            activities: "$5–$15",
            total: "$38–$175"
        },
        whatToPack: {
            clothing: "Modest clothing, light layers for desert nights",
            documents: "Passport, e-Visa printout, Hotel registration slips",
            gadgets: "Power bank, Type C/F adapter",
            other: "Cash (USD for exchange)"
        },
        travelTips: {
            safety: "Stick to Yandex Go rather than street-hailing.",
            money: "Use the Metro; it’s one of the cheapest in the world.",
            etiquette: "Always break bread by hand; never put it face-down.",
            reminder: "Declare prescription medications upon arrival."
        },
        photoSpots: [
            "Blue domes of Chorsu Bazaar",
            "Kosmonavtlar Metro Station",
            "Hotel Uzbekistan (Soviet-brutalist)"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Market & Tradition",
                morning: "Chorsu Bazaar",
                afternoon: "Kukeldash Madrasah",
                evening: "Dinner at Plov Center"
            },
            {
                day: 2,
                focus: "Spirituality & Art",
                morning: "Hazrati Imam Complex",
                afternoon: "Metro hopping tour",
                evening: "Tashkent City Park fountains"
            },
            {
                day: 3,
                focus: "History & Parks",
                morning: "Museum of Applied Arts",
                afternoon: "Independence Square",
                evening: "Farewell dinner at Navat"
            }
        ]
    },
    {
        id: "samarkand",
        destinationName: "Samarkand",
        country: "Uzbekistan",
        bestTime: "April–May and September–October",
        lengthOfStay: "2–3 days",
        budgetRange: "Mid-range",
        quickDescription: "Often called the 'Pearl of the East,' Samarkand is home to some of the most breathtaking Islamic architecture in the world. It is a city defined by massive turquoise domes, intricate mosaic tiles, and the legendary history of the conqueror Amir Timur.",
        heroImage: "https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Samarkand International Airport (SKD)",
            transportation: "Yandex Go, Public Bus, or private transfers.",
            visa: "e-Visa required for many (~$20); Visa-free for EU, UK, and US."
        },
        whereToStay: {
            budget: {
                name: "Amir Hostel",
                why: "Extremely close to Registan Square and popular with backpackers."
            },
            midRange: {
                name: "Bibi-Khanym Hotel",
                why: "Traditional decor with a rooftop view facing the Bibi-Khanym Mosque."
            },
            luxury: {
                name: "Sangzor Boutique Hotel",
                why: "High-end comfort close to the historic heart."
            }
        },
        thingsToDo: [
            {
                name: "Registan Square",
                why: "The most iconic square in Central Asia, flanked by three massive Madrasahs.",
                fee: "~100,000 UZS (~$8)",
                bestTime: "Sunset / Night Show",
                image: "https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Shah-i-Zinda",
                why: "A narrow 'street' of tombs featuring the most intense blue tilework in the world.",
                fee: "~50,000 UZS (~$4)",
                bestTime: "Early morning",
                image: "https://images.unsplash.com/photo-1589405234141-86a073584852?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Gur-e-Amir (Amir Timur’s Mausoleum)",
                why: "The final resting place of Tamerlane; interior covered in real gold leaf and jade.",
                fee: "~75,000 UZS (~$6)",
                bestTime: "Late evening",
                image: "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Ikrom Shashlik", typeAndPrice: "Famous for best kebabs (Budget: ~$1 per skewer)" },
                { name: "Platan", typeAndPrice: "Mix of Uzbek and European cuisine (Mid-range: ~$15–$25)" }
            ],
            mustTryDish: "Samarkand Plov and Samarkand Bread"
        },
        gettingAround: {
            publicTransport: "Taxis, local minibuses (Damas), and Tram",
            apps: ["Yandex Go"],
            dailyBudget: "$3–$8"
        },
        dailyBudget: {
            accommodation: "$20–$100",
            food: "$10–$30",
            transportation: "$2–$5",
            activities: "$15–$25",
            total: "$47–$160"
        },
        whatToPack: {
            clothing: "Modest attire, comfortable walking shoes",
            documents: "Passport, e-Visa, high-speed train tickets",
            gadgets: "Universal 2-pin adapter, high-quality camera",
            other: "Cash (New crisp USD bills)"
        },
        travelTips: {
            safety: "The old city is very safe; watch for uneven sidewalks.",
            money: "Registan light show has a free viewing platform.",
            etiquette: "Never place bread face-down; it's disrespectful.",
            reminder: "Book high-speed train tickets 4-6 weeks in advance."
        },
        photoSpots: [
            "Tilya-Kori Madrasah gold ceiling",
            "Blue Corridor of Shah-i-Zinda",
            "Bibi-Khanym Mosque facade"
        ],
        itinerary: [
            {
                day: 1,
                focus: "The Icons",
                morning: "Registan Square",
                afternoon: "Siyob Bazaar & Bibi-Khanym Mosque",
                evening: "Registan Light Show"
            },
            {
                day: 2,
                focus: "History & Culture",
                morning: "Shah-i-Zinda Necropolis",
                afternoon: "Ulugh Beg Observatory",
                evening: "Dinner at a local's home"
            },
            {
                day: 3,
                focus: "Heritage & Craft",
                morning: "Gur-e-Amir Mausoleum",
                afternoon: "Paper Mill at Konigil Village",
                evening: "Stroll along University Boulevard"
            }
        ]
    },
    {
        id: "bukhara",
        destinationName: "Bukhara",
        country: "Uzbekistan",
        bestTime: "April–May and September–October",
        lengthOfStay: "2 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Bukhara is an ancient oasis that feels like an open-air museum with over 2,000 years of history. Unlike the grand scale of Samarkand, Bukhara is compact and walkable, filled with mud-brick labyrinthine streets and blue-tiled mosques.",
        heroImage: "https://images.unsplash.com/photo-1589405234237-6784852?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Bukhara International Airport (BHK)",
            transportation: "Yandex Go, Taxi, or Public Bus. Most arrive via Afrosiyob train.",
            visa: "e-Visa required for many (~$20); Visa-free for EU, UK, and US."
        },
        whereToStay: {
            budget: {
                name: "Rumi Hotel",
                why: "Affordable, cozy, and located in the heart of the historic Old City."
            },
            midRange: {
                name: "Komil Bukhara Boutique Hotel",
                why: "Famous for its stunning 19th-century traditional dining room."
            },
            luxury: {
                name: "Mercure Bukhara Old Town",
                why: "Modern 5-star luxury located just a short walk from historic landmarks."
            }
        },
        thingsToDo: [
            {
                name: "Po-i-Kalyan Complex",
                why: "Home to the Kalyan Minaret, which Genghis Khan spared from destruction.",
                fee: "Free to walk; ~$3 for Madrasah interiors",
                bestTime: "Sunset",
                image: "https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "The Ark of Bukhara",
                why: "A massive 5th-century fortress that served as the residence of the Emirs.",
                fee: "~40,000 UZS (~$3)",
                bestTime: "Early morning",
                image: "https://images.unsplash.com/photo-1589405234141-86a073584852?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Chor Minor",
                why: "A charming gatehouse with four blue-domed towers representing different religions.",
                fee: "Free",
                bestTime: "Afternoon",
                image: "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "The Old House (Adras)", typeAndPrice: "Traditional food in a beautiful historic courtyard (Mid-range: ~$15)" },
                { name: "Ayvan Design", typeAndPrice: "Modern twist on Uzbek classics (Mid-range: ~$20)" }
            ],
            mustTryDish: "Bukhara Plov (Oshi Sofi)"
        },
        gettingAround: {
            publicTransport: "Taxis and small buses. Old City is best explored on foot.",
            apps: ["Yandex Go"],
            dailyBudget: "$2–$5"
        },
        dailyBudget: {
            accommodation: "$20–$90",
            food: "$10–$25",
            transportation: "$2–$5",
            activities: "$10–$20",
            total: "$42–$140"
        },
        whatToPack: {
            clothing: "Modest clothes, wide-brimmed hat, sturdy walking shoes",
            documents: "Passport, e-Visa, Afrosiyob train tickets",
            gadgets: "Power bank and Type C/F adapter",
            other: "Cash (UZS) for the bazaars"
        },
        travelTips: {
            safety: "Be mindful of your footing on uneven ancient brick paths.",
            money: "Bargaining is expected in the Trading Domes (Bazaars).",
            etiquette: "Bukhara can be hotter than Tashkent; stay hydrated.",
            reminder: "Most major sights are free to view from the outside."
        },
        photoSpots: [
            "Lyabi-Hauz reflecting pool at night",
            "Kalyan Minaret from cafe balconies",
            "Four towers of Chor Minor"
        ],
        itinerary: [
            {
                day: 1,
                focus: "The Old City",
                morning: "Po-i-Kalyan Complex",
                afternoon: "Shopping in the Trading Domes",
                evening: "Dinner at Lyabi-Hauz"
            },
            {
                day: 2,
                focus: "Fortress & Gates",
                morning: "The Ark Fortress & Bolo Haouz Mosque",
                afternoon: "Chor Minor",
                evening: "Traditional puppet show"
            },
            {
                day: 3,
                focus: "Summer Palace",
                morning: "Sitorai Mokhi-Khosa",
                afternoon: "Bahoutdin Naqshband Mausoleum",
                evening: "Departure via train"
            }
        ]
    },
    {
        id: "dushanbe",
        destinationName: "Dushanbe",
        country: "Tajikistan",
        bestTime: "April–June and September–October",
        lengthOfStay: "2–3 days",
        budgetRange: "Budget",
        quickDescription: "Dushanbe (meaning 'Monday' in Tajik) is a city of grand monuments, neoclassical Soviet architecture, and massive public parks. It serves as a sophisticated, tranquil gateway to the wild mountains of the Pamirs and the Fann range.",
        heroImage: "https://images.unsplash.com/photo-1579737194883-75f8f8ed945c?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Dushanbe International Airport (DYU)",
            transportation: "Yandex Go, local Trolleybus #4, or Marshrutka.",
            visa: "Visa-free for many (30 days) including Philippines, US, UK, and EU."
        },
        whereToStay: {
            budget: {
                name: "Greenhouse Hostel",
                why: "Social hub for travelers, very clean, and offers help with GBAO permits."
            },
            midRange: {
                name: "Hotel Atlas",
                why: "Comfortable, traditional hospitality and central location."
            },
            luxury: {
                name: "Hyatt Regency Dushanbe",
                why: "Top-tier 5-star luxury near the main city park."
            }
        },
        thingsToDo: [
            {
                name: "National Museum of Tajikistan",
                why: "Features the famous 13-meter sleeping Buddha.",
                fee: "~35 TJS (~$3)",
                bestTime: "Morning (10:00 AM)",
                image: "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Ismoil Somoni Statue & Rudaki Park",
                why: "The heart of the city featuring one of the world's tallest flagpoles.",
                fee: "Free",
                bestTime: "Sunset",
                image: "https://images.unsplash.com/photo-1579737194883-75f8f8ed945c?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Mehrgon Bazaar",
                why: "A beautifully designed 'palace' bazaar with incredible displays.",
                fee: "Free",
                bestTime: "Early morning",
                image: "https://images.unsplash.com/photo-1528642463367-7cb9a826702c?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Rohat Chaikhona", typeAndPrice: "Most famous traditional teahouse (Budget: ~$5)" },
                { name: "Toqi", typeAndPrice: "Authentic Tajik cuisine with outdoor terrace (Mid-range: ~$10–$15)" }
            ],
            mustTryDish: "Qurutob (National dish: bread, yogurt sauce, and onions)"
        },
        gettingAround: {
            publicTransport: "Marshrutkas, Trolleybuses, and shared taxis",
            apps: ["Yandex Go"],
            dailyBudget: "$2–$6"
        },
        dailyBudget: {
            accommodation: "$10–$150",
            food: "$8–$25",
            transportation: "$2–$10",
            activities: "$5–$15",
            total: "$25–$200"
        },
        whatToPack: {
            clothing: "Modest clothing, light layers",
            documents: "Passport, GBAO permit",
            gadgets: "Power bank, Type C/F adapter",
            other: "High-SPF sunscreen"
        },
        travelTips: {
            safety: "Dushanbe is very safe; keep your passport copy on you.",
            money: "Eat at 'Chaikhonas' for high-quality, low-cost meals.",
            etiquette: "Never put bread face-down; always break it by hand.",
            reminder: "ATMs can run out of cash; keep a small USD/EUR backup."
        },
        photoSpots: [
            "Ismoil Somoni Monument",
            "Atrium of Mehrgon Bazaar",
            "Kokhi Navruz (Navruz Palace)"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Park & Monument",
                morning: "Rudaki Park & Somoni Statue",
                afternoon: "National Museum of Tajikistan",
                evening: "Dinner at Rohat Chaikhona"
            },
            {
                day: 2,
                focus: "Market & Garden",
                morning: "Mehrgon Bazaar",
                afternoon: "Botanical Garden (Bogi Iram)",
                evening: "Victory Park for panoramic view"
            },
            {
                day: 3,
                focus: "Fortress & Palace",
                morning: "Excursion to Hissar Fortress",
                afternoon: "Kokhi Navruz Palace tour",
                evening: "Relax at a local spa"
            }
        ]
    },
    {
        id: "tbilisi",
        destinationName: "Tbilisi",
        country: "Georgia",
        bestTime: "May–June or September–October",
        lengthOfStay: "3–4 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "A city where ancient history meets a bohemian, modern spirit. Tbilisi is famous for its colorful carved balconies, sulfur baths, a world-class wine scene, and a skyline that blends medieval fortresses with futuristic architecture.",
        heroImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Tbilisi International Airport (TBS)",
            transportation: "Bolt app, Airport Bus #337, or Taxi.",
            visa: "e-Visa required for Filipinos (~$20); Visa-free for US, UK, EU, and many others."
        },
        whereToStay: {
            budget: {
                name: "Fabrika Hostel",
                why: "A converted Soviet sewing factory that is now the city's coolest social hub."
            },
            midRange: {
                name: "Rooms Hotel Tbilisi",
                why: "Industrial-chic design in the heart of the Vera district."
            },
            luxury: {
                name: "The Stamba Hotel",
                why: "High-end luxury with stunning interiors and a prime location."
            }
        },
        thingsToDo: [
            {
                name: "Narikala Fortress & Cable Car",
                why: "For the best panoramic views of the city and the 'Mother of Georgia' statue.",
                fee: "Fortress is Free; Cable car is 2.5 GEL (~$1)",
                bestTime: "Sunset",
                image: "https://images.unsplash.com/photo-1523585045050-0229875e5264?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Holy Trinity Cathedral (Sameba)",
                why: "One of the tallest Orthodox churches in the world; a massive landmark.",
                fee: "Free",
                bestTime: "Late afternoon",
                image: "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Abanotubani (Sulfur Baths)",
                why: "Historic brick-domed bathhouses where the city was founded.",
                fee: "Public ~$5; Private $20–$100/hr",
                bestTime: "Evening",
                image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Mapshalia", typeAndPrice: "Authentic Megrelian food (Budget: ~$5)" },
                { name: "Shavi Lomi", typeAndPrice: "Creative Georgian fusion (Mid-range: ~$15)" }
            ],
            mustTryDish: "Khachapuri Adjaruli (Cheese-filled bread boat with an egg)"
        },
        gettingAround: {
            publicTransport: "Metro and Buses (Metromoney card)",
            apps: ["Bolt"],
            dailyBudget: "$3–$7"
        },
        dailyBudget: {
            accommodation: "Varies",
            food: "Varies",
            transportation: "$3–$7",
            activities: "Varies",
            total: "$40–$150"
        },
        whatToPack: {
            clothing: "Comfortable shoes, layers, scarf for churches",
            documents: "Passport, health insurance, e-Visa",
            gadgets: "Type C/F travel adapter, Bolt app",
            other: "Refillable water bottle, umbrella"
        },
        travelTips: {
            safety: "Use Bolt to avoid overcharging. Be wary of bar invitation scams.",
            money: "Metromoney card is essential for cheap transport.",
            etiquette: "Take a sip if offered wine. Wait for the Tamada's toast.",
            reminder: "Mandatory health insurance ($30k GEL) required as of 2026."
        },
        photoSpots: [
            "Gabriadze Clock Tower",
            "Sololaki District wooden balconies",
            "The Chronicles of Georgia (Stonehenge of Georgia)"
        ],
        itinerary: [
            {
                day: 1,
                focus: "City Views & Baths",
                morning: "Rudaki Park & Somoni Statue",
                afternoon: "Narikala Fortress & Cable Car",
                evening: "Sulfur Baths & Dinner"
            },
            {
                day: 2,
                focus: "History & Landmarks",
                morning: "Holy Trinity Cathedral",
                afternoon: "Sololaki Explorations",
                evening: "The Chronicles of Georgia"
            },
            {
                day: 3,
                focus: "Day Trips",
                morning: "Kazbegi (Stepantsminda)",
                afternoon: "Mtskheta (Old Capital)",
                evening: "Farewell dinner at Shavi Lomi"
            }
        ]
    },
    {
        id: "kazbegi",
        destinationName: "Kazbegi (Stepantsminda)",
        country: "Georgia",
        bestTime: "June–September (Green) or Jan–Feb (Snow)",
        lengthOfStay: "1–2 days",
        budgetRange: "Mid-range",
        quickDescription: "The quintessential Georgian mountain escape. It is home to the iconic Gergeti Trinity Church, perched against the backdrop of the massive 5,047m Mount Kazbek.",
        heroImage: "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Tbilisi (TBS), then overland.",
            transportation: "Marshrutka, Shared Taxi, or Private Transfer.",
            visa: "Common Georgian entry (same as Tbilisi)."
        },
        whereToStay: {
            budget: {
                name: "Camp Kuzburi",
                why: "Warm hospitality and delicious home-cooked meals."
            },
            midRange: {
                name: "Hotel Terrace Kazbegi",
                why: "Modern rooms with huge balconies facing the mountains."
            },
            luxury: {
                name: "Rooms Hotel Kazbegi",
                why: "Famous for its breathtaking terrace views and world-class design."
            }
        },
        thingsToDo: [
            {
                name: "Gergeti Trinity Church",
                why: "A 14th-century church surrounded by high peaks; the most famous photo spot.",
                fee: "Free (4WD Taxi to top ~15-20 GEL)",
                bestTime: "Sunrise",
                image: "https://images.unsplash.com/photo-1523585045050-0229875e5264?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Gveleti Waterfalls",
                why: "Beautiful easy hike to two powerful waterfalls in a deep gorge.",
                fee: "Free",
                bestTime: "Morning",
                image: "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Dariali Gorge",
                why: "Rugged landscapes near the border with a modern monastery.",
                fee: "Free",
                bestTime: "Mid-day",
                image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Shorena’s Bar", typeAndPrice: "Mountain staples in center (Budget: ~$8)" },
                { name: "Rooms Hotel Restaurant", typeAndPrice: "High-end dining with the best view (Mid-range/Luxury: ~$30)" }
            ],
            mustTryDish: "Mountain Khinkali (Lamb or beef dumplings)"
        },
        gettingAround: {
            publicTransport: "Walking and 4WD Delica Taxis",
            apps: ["Bolt (in Tbilisi to get here)"],
            dailyBudget: "$10–$20"
        },
        dailyBudget: {
            accommodation: "Varies",
            food: "Varies",
            transportation: "$10–$20",
            activities: "Varies",
            total: "$50–$200"
        },
        whatToPack: {
            clothing: "Windbreaker, fleece, sturdy hiking boots",
            documents: "Passport",
            gadgets: "Camera, Power bank",
            other: "High-SPF Sunscreen"
        },
        travelTips: {
            safety: "Military Road is safe but winding; use professional drivers.",
            money: "Marshrutka is 1/5th the price of a taxi from Tbilisi.",
            etiquette: "Cover heads and wear skirts in churches.",
            reminder: "Mountain weather changes extremely fast; be prepared."
        },
        photoSpots: [
            "Mount Kazbek at Sunrise",
            "Gergeti Trinity Church facade",
            "Rooms Hotel Terrace view"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Arrival & Views",
                morning: "Travel from Tbilisi",
                afternoon: "Check-in & Terrace chill",
                evening: "Sunset at Gergeti Trinity"
            },
            {
                day: 2,
                focus: "Nature & Hike",
                morning: "Hike to Gveleti Waterfalls",
                afternoon: "Dariali Gorge excursion",
                evening: "Traditional dinner"
            },
            {
                day: 3,
                focus: "Relaxation",
                morning: "Breakfast with a view",
                afternoon: "Return to Tbilisi",
                evening: "Farewell in the capital"
            }
        ]
    },
    {
        id: "yerevan",
        destinationName: "Yerevan",
        country: "Armenia",
        bestTime: "May–June, September–October",
        lengthOfStay: "3–5 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Yerevan is one of the world's oldest inhabited cities, known as the 'Pink City' for its beautiful rosy volcanic stone architecture. It blends Soviet-era grandiosity with a hip, modern cafe culture, offering incredible mountain views and world-class hospitality.",
        heroImage: "https://images.unsplash.com/photo-1549405626-90f779dc059c?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Zvartnots International Airport (EVN)",
            transportation: "GG (Local App), Yandex Go, Airport Express Bus.",
            visa: "Visa-free for many (US, EU, UK); e-visa available for others."
        },
        whereToStay: {
            budget: {
                name: "Envoy Hostel",
                why: "Highly rated, social vibe, and located right in the city center."
            },
            midRange: {
                name: "Republica Hotel Yerevan",
                why: "Stylish boutique hotel located just steps from Republic Square."
            },
            luxury: {
                name: "The Alexander",
                why: "The city's premier luxury address with a world-class spa."
            }
        },
        thingsToDo: [
            {
                name: "The Cascade Complex",
                why: "A massive limestone stairway with art exhibits and views of Mount Ararat.",
                fee: "Free",
                bestTime: "Sunset",
                image: "https://images.unsplash.com/photo-1549413233-066ec0407a97?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Republic Square",
                why: "The heart of the city featuring the 'Dancing Fountains' show.",
                fee: "Free",
                bestTime: "Evening (8:00 PM)",
                image: "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Vernissage Market",
                why: "Large open-air market for handmade crafts and Soviet antiques.",
                fee: "Free",
                bestTime: "Weekend mornings",
                image: "https://images.unsplash.com/photo-1528642463367-7cb9a826702c?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Lavash Restaurant", typeAndPrice: "Traditional Armenian (Mid-range)" },
                { name: "Tavern Yerevan", typeAndPrice: "Authentic BBQ/Khorovats (Mid-range)" }
            ],
            mustTryDish: "Tolma (Minced meat wrapped in grape leaves)"
        },
        gettingAround: {
            publicTransport: "Metro, Marshrutka, Buses",
            apps: ["GG", "Yandex Go"],
            dailyBudget: "$3–$8"
        },
        dailyBudget: {
            accommodation: "$15–$150",
            food: "$12–$35",
            transportation: "$3–$10",
            activities: "$5–$25",
            total: "$35–$220"
        },
        whatToPack: {
            clothing: "Modest layers for churches, comfortable walking shoes",
            documents: "Passport, Travel Insurance",
            gadgets: "Power bank, Type C/F adapter",
            other: "Refillable water bottle, Sunscreen"
        },
        travelTips: {
            safety: "Very safe at night; use official apps for taxis.",
            money: "Drink from the 'Pulpulaks'—free mountain water fountains.",
            etiquette: "Always remove shoes when entering an Armenian home.",
            reminder: "City comes alive after 8:00 PM; many places stay open late."
        },
        photoSpots: [
            "Top of the Cascade",
            "Blue Mosque tile work",
            "Northern Avenue modern architecture"
        ],
        itinerary: [
            {
                day: 1,
                focus: "City Centers & Sunsets",
                morning: "Explore Republic Square",
                afternoon: "Walk Northern Avenue",
                evening: "Sunset at The Cascade"
            },
            {
                day: 2,
                focus: "History & Souvenirs",
                morning: "Genocide Memorial",
                afternoon: "Shopping at Vernissage",
                evening: "Brandy Tasting at Ararat Factory"
            },
            {
                day: 3,
                focus: "Ancient Outskirts",
                morning: "Garni Temple & Geghard Monastery",
                afternoon: "Hike Symphony of Stones",
                evening: "Farewell dinner at Sherep"
            }
        ]
    },
    {
        id: "tbilisi-beyond",
        destinationName: "Tbilisi & Beyond",
        country: "Georgia",
        bestTime: "May–June (Wildflowers) or Sept–October (Wine Harvest)",
        lengthOfStay: "4–5 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Georgia is the birthplace of wine and a crossroads of Europe and Asia. Tbilisi, its capital, is famous for its dramatic setting in a river valley, ancient sulfur baths, and a food scene that is legendary for its richness and hospitality.",
        heroImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Tbilisi International Airport (TBS)",
            transportation: "Bolt or Yandex Go app, Airport Bus #337.",
            visa: "Visa-free for 90+ countries (including US, EU, GCC) for 1 year. Health insurance mandatory for 2026."
        },
        whereToStay: {
            budget: {
                name: "Fabrika Hostel & Suites",
                why: "A former Soviet sewing factory turned into the city's coolest social hub."
            },
            midRange: {
                name: "Rooms Hotel Tbilisi",
                why: "Housed in an old publishing house, offering an 'industrial chic' vibe."
            },
            luxury: {
                name: "Stamba Hotel",
                why: "High-concept luxury with soaring ceilings and an indoor jungle."
            }
        },
        thingsToDo: [
            {
                name: "Old Town & Sulfur Baths",
                why: "Soak in historic domed brick bathhouses and see hidden waterfalls.",
                fee: "Free to walk; Baths 50–150 GEL/hr",
                bestTime: "Afternoon",
                image: "https://images.unsplash.com/photo-1523585045050-0229875e5264?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Gergeti Trinity Church",
                why: "The most iconic image of Georgia sitting against the backdrop of Mt. Kazbek.",
                fee: "Free (4x4 taxi ~20-30 GEL)",
                bestTime: "Early morning",
                image: "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Chronicle of Georgia",
                why: "Known as the 'Stonehenge of Tbilisi,' offering surreal views and history.",
                fee: "Free",
                bestTime: "Golden Hour",
                image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Shavi Lomi", typeAndPrice: "Creative Georgian fusion (Mid-range: $$)" },
                { name: "Mapshalia", typeAndPrice: "Authentic Megrelian food (Budget: $)" }
            ],
            mustTryDish: "Adjaruli Khachapuri (Cheese-filled bread boat with an egg)"
        },
        gettingAround: {
            publicTransport: "Metro, Blue Buses, and Marshrutkas",
            apps: ["Bolt", "GoTrip.ge"],
            dailyBudget: "$5–$15"
        },
        dailyBudget: {
            accommodation: "$15–$120",
            food: "$15–$30",
            transportation: "$5–$15",
            activities: "$10–$25",
            total: "$45–$190"
        },
        whatToPack: {
            clothing: "Scarf/Long skirt (women), long pants (men), mountain layers",
            documents: "Passport, Proof of Health Insurance",
            gadgets: "Power bank, European Type C/F adapter",
            other: "Activated charcoal"
        },
        travelTips: {
            safety: "Be aggressive when crossing roads; drivers rarely stop.",
            money: "Use GoTrip.ge for day trips for fixed-price flexibility.",
            etiquette: "Wait for the Tamada (toastmaster) to finish before drinking.",
            reminder: "Don't drink the wine too fast! It's stronger than it tastes."
        },
        photoSpots: [
            "Peace Bridge at night",
            "Kaleidoscope balcony on Betlemi Street",
            "Holy Trinity Cathedral (Sameba) at night"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Spirit of Tbilisi",
                morning: "Old Town & Clock Tower",
                afternoon: "Narikala Fortress & Cable Car",
                evening: "Traditional dinner & Sulfur Baths"
            },
            {
                day: 2,
                focus: "High Caucasus",
                morning: "Georgian Military Highway",
                afternoon: "Gergeti Trinity Church in Kazbegi",
                evening: "Khinkali dinner in Tbilisi"
            },
            {
                day: 3,
                focus: "Roots & Wine",
                morning: "Mtskheta & Jvari Monastery",
                afternoon: "Dry Bridge Flea Market",
                evening: "Wine tasting at 8000 Vintages"
            }
        ]
    },
    {
        id: "istanbul",
        destinationName: "Istanbul",
        country: "Turkey (Türkiye)",
        bestTime: "March–May or September–October",
        lengthOfStay: "3–5 days",
        budgetRange: "Budget / Mid-range",
        quickDescription: "Istanbul is the only city in the world straddling two continents, Europe and Asia. It is a mesmerizing mix of Byzantine churches, Ottoman mosques, and bustling bazaars, all connected by the sparkling Bosphorus Strait.",
        heroImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000&auto=format&fit=crop",
        howToGetThere: {
            nearestAirport: "Istanbul Airport (IST) or Sabiha Gökçen (SAW)",
            transportation: "Havaist Shuttle, Metro (M11), or Taxis.",
            visa: "e-Visa required for most (apply via official portal); some nationalities visa-free."
        },
        whereToStay: {
            budget: {
                name: "Sultanahmet Inn Hotel",
                why: "Perfectly located in the historic heart, within walking distance to major sights."
            },
            midRange: {
                name: "White House Hotel Istanbul",
                why: "Consistently top-rated for its Turkish Hospitality and Ottoman-style charm."
            },
            luxury: {
                name: "Pera Palace Hotel",
                why: "A historic landmark where Agatha Christie stayed; offers old-world glamour."
            }
        },
        thingsToDo: [
            {
                name: "Hagia Sophia (Ayasofya)",
                why: "A 1,500-year-old architectural marvel that has served as a cathedral, museum, and mosque.",
                fee: "Paid (~€25 for foreign tourists)",
                bestTime: "Early morning (9:00 AM)",
                image: "https://images.unsplash.com/photo-1543949806-2c9935e6838d?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Basilica Cistern (Yerebatan Sarnıcı)",
                why: "A hauntingly beautiful subterranean reservoir with Medusa heads.",
                fee: "~1,300 TL",
                bestTime: "Late afternoon",
                image: "https://images.unsplash.com/photo-1563911531102-4fd24bb56972?q=80&w=1000&auto=format&fit=crop"
            },
            {
                name: "Bosphorus Sunset Cruise",
                why: "See palaces, fortresses, and the city skyline while traveling between two continents.",
                fee: "30–50 TL (Ferry) or $30–$50 (Private)",
                bestTime: "One hour before sunset",
                image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop"
            }
        ],
        whereToEat: {
            restaurants: [
                { name: "Hafiz Mustafa 1864", typeAndPrice: "Baklava and Turkish delight (Mid-range)" },
                { name: "Tarihi Sultanahmet Köftecisi", typeAndPrice: "Iconic meatballs since 1920 (Budget)" }
            ],
            mustTryDish: "Balık Ekmek (Grilled fish sandwich from the boats in Eminönü)"
        },
        gettingAround: {
            publicTransport: "Trams (T1), Metros, and yellow Ferries",
            apps: ["BiTaksi", "Uber"],
            dailyBudget: "$5–$10"
        },
        dailyBudget: {
            accommodation: "$25–$200",
            food: "$15–$45",
            transportation: "$5–$12",
            activities: "$20–$60",
            total: "$65–$317"
        },
        whatToPack: {
            clothing: "Scarf (women), modest dress, comfortable walking shoes",
            documents: "E-visa printout, Passport, Istanbulkart",
            gadgets: "Universal adapter (Type C/F), Power bank",
            other: "Umbrella (unpredictable weather)"
        },
        travelTips: {
            safety: "Use BiTaksi to avoid street-hail scams and ensure tracking.",
            money: "Use the Muzekart (Museum Pass) for high-value savings.",
            etiquette: "Remove shoes when entering mosques or local homes.",
            reminder: "Most shops and cafes stay open late; city comes alive after 8PM."
        },
        photoSpots: [
            "Seven Hills Restaurant Rooftop",
            "Colorful houses of Balat",
            "Ortaköy Pier with Bosphorus Bridge background"
        ],
        itinerary: [
            {
                day: 1,
                focus: "Imperial History",
                morning: "Hagia Sophia & Blue Mosque",
                afternoon: "Topkapi Palace & Harem",
                evening: "Grand Bazaar exploration"
            },
            {
                day: 2,
                focus: "Continents & Water",
                morning: "Basilica Cistern",
                afternoon: "Ferry to Kadıköy (Asian Side)",
                evening: "Sunset Bosphorus Cruise"
            },
            {
                day: 3,
                focus: "Modern Vibe",
                morning: "Galata Tower views",
                afternoon: "Istiklal Avenue walk",
                evening: "Whirling Dervish show"
            }
        ]
    }
];
