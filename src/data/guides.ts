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
    quickDescription:
      "Kuala Lumpur is a lively city where modern skyscrapers meet rich culture and amazing food. You’ll find iconic towers, colorful temples, and some of the best street food in Southeast Asia. It’s perfect for first-time travelers and food lovers.",
    heroImage:
      "https://res.cloudinary.com/drpxke63n/image/upload/v1772525949/DJI_20260225172008_0239_D_ntijjg.jpg",
    howToGetThere: {
      nearestAirport: "Kuala Lumpur International Airport (KLIA)",
      transportation: "KLIA Express Train, Grab, Taxi, Airport Bus",
      visa: "Visa-free for many ASEAN countries (check based on passport)",
    },
    whereToStay: {
      budget: {
        name: "The Bed KLCC",
        why: "Affordable, clean, and near major attractions.",
      },
      midRange: {
        name: "Impiana KLCC Hotel",
        why: "Great location near KLCC and comfortable rooms.",
      },
      luxury: {
        name: "Mandarin Oriental Kuala Lumpur",
        why: "5-star comfort with Petronas Twin Towers view.",
      },
    },
    thingsToDo: [
      {
        name: "Petronas Twin Towers",
        why: "Malaysia’s most iconic landmark with stunning skyline views.",
        fee: "Paid (Skybridge access)",
        bestTime: "Evening before sunset",
      },
      {
        name: "Batu Caves",
        why: "Colorful stairs and impressive cave temple.",
        fee: "Free (some areas may charge)",
        bestTime: "Early morning",
      },
      {
        name: "Bukit Bintang",
        why: "Shopping, food, and nightlife hub.",
        fee: "Free",
        bestTime: "Evening",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Village Park Restaurant",
          typeAndPrice: "Malaysian local food (Budget)",
        },
        { name: "Jalan Alor", typeAndPrice: "Street food (Budget)" },
      ],
      mustTryDish: "Nasi Lemak",
    },
    gettingAround: {
      publicTransport: "LRT, MRT, Monorail, Bus",
      apps: ["Grab"],
      dailyBudget: "$5–$10",
    },
    dailyBudget: {
      accommodation: "$20–$120",
      food: "$10–$25",
      transportation: "$5–$10",
      activities: "$10–$30",
      total: "$45–$185",
    },
    whatToPack: {
      clothing: "Light breathable clothes, comfortable shoes",
      documents: "Passport, printed hotel booking",
      gadgets: "Power bank, universal adapter",
      other: "Umbrella (sudden rain), sunscreen",
    },
    travelTips: {
      safety: "Be mindful of pickpockets in crowded areas.",
      money: "Use public transport instead of taxis.",
      etiquette: "Dress modestly when visiting temples.",
      reminder: "The weather is hot and humid year-round.",
    },
    photoSpots: [
      "KLCC Park (Petronas background)",
      "Batu Caves stairs",
      "Bukit Bintang night lights",
    ],
    itinerary: [
      {
        day: 1,
        focus: "City Icons & Street Food",
        morning: "Visit Petronas Twin Towers",
        afternoon: "Explore KLCC mall",
        evening: "Dinner at Jalan Alor",
      },
      {
        day: 2,
        focus: "Culture & Colors",
        morning: "Batu Caves",
        afternoon: "Central Market",
        evening: "Bukit Bintang",
      },
      {
        day: 3,
        focus: "Temples & Views",
        morning: "Thean Hou Temple",
        afternoon: "Shopping",
        evening: "Rooftop dinner",
      },
    ],
  },
  {
    id: "singapore",
    destinationName: "Singapore",
    country: "Singapore",
    bestTime: "February–April",
    lengthOfStay: "3–4 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "Singapore is modern, clean, and packed with attractions. From futuristic gardens to theme parks and hawker centers, it’s small but full of exciting experiences.",
    heroImage:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Singapore Changi Airport",
      transportation: "MRT, Taxi, Grab",
      visa: "Visa-free for many ASEAN passports",
    },
    whereToStay: {
      budget: {
        name: "Hotel Boss",
        why: "Affordable and centrally located.",
      },
      midRange: {
        name: "V Hotel Lavender",
        why: "Near MRT and comfortable rooms.",
      },
      luxury: {
        name: "Marina Bay Sands",
        why: "Famous infinity pool and skyline views.",
      },
    },
    thingsToDo: [
      {
        name: "Gardens by the Bay",
        why: "Beautiful Supertree light show.",
        fee: "Free (domes are paid)",
        bestTime: "Evening",
        image:
          "https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Sentosa Island",
        why: "Beaches and attractions.",
        fee: "Free entry (attractions paid)",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Merlion Park",
        why: "Iconic Singapore photo spot.",
        fee: "Free",
        bestTime: "Sunset",
        image:
          "https://images.unsplash.com/photo-1536489435342-9f33afcf688b?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        { name: "Lau Pa Sat", typeAndPrice: "Hawker food (Budget)" },
        { name: "Maxwell Food Centre", typeAndPrice: "Local dishes (Budget)" },
      ],
      mustTryDish: "Hainanese Chicken Rice",
    },
    gettingAround: {
      publicTransport: "MRT, Bus",
      apps: ["Grab"],
      dailyBudget: "$5–$10",
    },
    dailyBudget: {
      accommodation: "$80–$300",
      food: "$15–$30",
      transportation: "$5–$10",
      activities: "$20–$60",
      total: "$120–$400",
    },
    whatToPack: {
      clothing: "Light clothes, comfy shoes",
      documents: "Passport",
      gadgets: "Universal adapter",
      other: "Reusable water bottle",
    },
    travelTips: {
      safety: "Singapore is very safe but follow strict laws.",
      money: "Eat at hawker centers.",
      etiquette: "No littering or jaywalking.",
      reminder: "Bring extra budget for attractions.",
    },
    photoSpots: ["Merlion Park", "Gardens by the Bay", "Marina Bay skyline"],
    itinerary: [
      {
        day: 1,
        focus: "City Icons & Gardens",
        morning: "Merlion Park",
        afternoon: "Marina Bay Sands area",
        evening: "Gardens by the Bay",
      },
      {
        day: 2,
        focus: "Theme Parks & Nightlife",
        morning: "Sentosa Island",
        afternoon: "Universal Studios",
        evening: "Clarke Quay",
      },
      {
        day: 3,
        focus: "Culture & Shopping",
        morning: "Chinatown",
        afternoon: "Orchard Road",
        evening: "Jewel Changi",
      },
    ],
  },
  {
    id: "taipei",
    destinationName: "Taipei",
    country: "Taiwan",
    bestTime: "October–April",
    lengthOfStay: "3–4 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Taipei is a vibrant city that blends modern skyscrapers with traditional temples and night markets. It’s friendly, safe, and a paradise for food lovers. You’ll enjoy city views, cultural landmarks, and delicious street food all in one place.",
    heroImage:
      "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Taiwan Taoyuan International Airport",
      transportation: "Airport MRT, Bus, Taxi",
      visa: "Visa-free for many countries (check based on passport)",
    },
    whereToStay: {
      budget: {
        name: "Meander Taipei Hostel",
        why: "Affordable, clean, and great for meeting other travelers.",
      },
      midRange: {
        name: "CityInn Hotel Plus Ximending",
        why: "Central location near shopping and MRT.",
      },
      luxury: {
        name: "Grand Hyatt Taipei",
        why: "5-star comfort near Taipei 101.",
      },
    },
    thingsToDo: [
      {
        name: "Taipei 101",
        why: "Iconic landmark with amazing city views from the observatory.",
        fee: "Paid (observatory ticket)",
        bestTime: "Late afternoon before sunset",
        image:
          "https://images.unsplash.com/photo-1493106819501-66d381c466f1?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Chiang Kai-shek Memorial Hall",
        why: "Historic site with impressive architecture and open plaza.",
        fee: "Free",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1583354316021-f050fd7122a6?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Shilin Night Market",
        why: "One of the largest night markets full of street food.",
        fee: "Free",
        bestTime: "Evening",
        image:
          "https://images.unsplash.com/photo-1549590680-e8869c944813?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        { name: "Din Tai Fung", typeAndPrice: "Taiwanese cuisine (Mid-range)" },
        {
          name: "Ay-Chung Flour Rice Noodle",
          typeAndPrice: "Street food (Budget)",
        },
      ],
      mustTryDish: "Beef Noodle Soup",
    },
    gettingAround: {
      publicTransport: "MRT, Bus",
      apps: ["Uber", "local taxi apps"],
      dailyBudget: "$5–$10",
    },
    dailyBudget: {
      accommodation: "$25–$150",
      food: "$10–$30",
      transportation: "$5–$10",
      activities: "$10–$30",
      total: "$50–$220",
    },
    whatToPack: {
      clothing: "Light clothes, jacket (cool evenings), comfy shoes",
      documents: "Passport, hotel booking copy",
      gadgets: "Power bank, universal adapter",
      other: "EasyCard (for transport), umbrella",
    },
    travelTips: {
      safety: "Taipei is very safe, but always keep belongings secure.",
      money: "Use MRT instead of taxis.",
      etiquette: "Be quiet and respectful on public transport.",
      reminder: "Many shops prefer cash, so carry some local currency.",
    },
    photoSpots: [
      "Taipei 101 Observatory",
      "Chiang Kai-shek Memorial Hall plaza",
      "Elephant Mountain (city view)",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Landmarks & Night Markets",
        morning: "Chiang Kai-shek Memorial Hall",
        afternoon: "Taipei 101",
        evening: "Ximending & Shilin Night Market",
      },
      {
        day: 2,
        focus: "Nature & Culture",
        morning: "Elephant Mountain hike",
        afternoon: "National Palace Museum",
        evening: "Raohe Night Market",
      },
      {
        day: 3,
        focus: "Hot Springs & Sunsets",
        morning: "Beitou Hot Springs",
        afternoon: "Tamsui Old Street",
        evening: "Sunset at Fisherman’s Wharf",
      },
    ],
  },
  {
    id: "taichung",
    destinationName: "Taichung",
    country: "Taiwan",
    bestTime: "October–April",
    lengthOfStay: "2–3 days",
    budgetRange: "Budget",
    quickDescription:
      "Taichung is a relaxed and creative city known for colorful art villages, scenic wetlands, and large night markets. It’s less crowded than Taipei and perfect if you want a slower, chill vibe.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467513/DSCF2960_cwyjuj.jpg",
    howToGetThere: {
      nearestAirport: "Taichung International Airport",
      transportation: "Bus, Taxi",
      visa: "Same as Taiwan entry rules",
    },
    whereToStay: {
      budget: {
        name: "Kiwi Express Hotel",
        why: "Affordable and centrally located.",
      },
      midRange: {
        name: "53 Hotel Taichung",
        why: "Clean rooms near Taichung Station.",
      },
      luxury: {
        name: "The Lin Hotel",
        why: "Modern hotel with rooftop pool.",
      },
    },
    thingsToDo: [
      {
        name: "Rainbow Village",
        why: "Colorful murals perfect for photos.",
        fee: "Free",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Gaomei Wetlands",
        why: "Beautiful sunset and wind turbines view.",
        fee: "Free",
        bestTime: "Late afternoon",
        image:
          "https://images.unsplash.com/photo-1571401835393-8c5f3b39c6ec?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Fengjia Night Market",
        why: "One of Taiwan’s biggest night markets.",
        fee: "Free",
        bestTime: "Evening",
        image:
          "https://images.unsplash.com/photo-1624225233481-06727143e227?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Fengjia Night Market stalls",
          typeAndPrice: "Street food (Budget)",
        },
        {
          name: "Chun Shui Tang",
          typeAndPrice: "Taiwanese cuisine (Mid-range)",
        },
      ],
      mustTryDish: "Bubble Milk Tea",
    },
    gettingAround: {
      publicTransport: "Bus",
      apps: ["Uber"],
      dailyBudget: "$5–$10",
    },
    dailyBudget: {
      accommodation: "$20–$120",
      food: "$10–$25",
      transportation: "$5–$10",
      activities: "$5–$20",
      total: "$40–$175",
    },
    whatToPack: {
      clothing: "Light clothes, comfy shoes",
      documents: "Passport",
      gadgets: "Power bank",
      other: "Sunscreen, small backpack",
    },
    travelTips: {
      safety: "Roads can be busy with scooters — stay alert.",
      money: "Night markets are affordable for meals.",
      etiquette: "Line up properly when waiting.",
      reminder: "Some attractions are far apart — plan transport ahead.",
    },
    photoSpots: [
      "Rainbow Village (Colorful murals)",
      "Gaomei Wetlands (Sunset & wind turbines)",
      "National Taichung Theater (Modern architecture)",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Art & Night Markets",
        morning: "Visit Rainbow Village",
        afternoon: "National Taichung Theater & cafes",
        evening: "Fengjia Night Market",
      },
      {
        day: 2,
        focus: "Culture & Nature",
        morning: "Relax at Calligraphy Greenway",
        afternoon: "Miyahara Ice Cream & shopping",
        evening: "Sunset at Gaomei Wetlands",
      },
      {
        day: 3,
        focus: "Leisure & Heritage",
        morning: "Visit Lavender Cottage or nearby nature park",
        afternoon: "Taichung Cultural Heritage Park",
        evening: "Local hotpot restaurant",
      },
    ],
  },
  {
    id: "kota-kinabalu",
    destinationName: "Kota Kinabalu",
    country: "Malaysia",
    bestTime: "March–October",
    lengthOfStay: "3–4 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Kota Kinabalu is perfect for beach lovers and nature enthusiasts. You’ll enjoy island hopping, beautiful sunsets, and fresh seafood. It’s more relaxed compared to Kuala Lumpur and ideal for a tropical escape.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467508/DSCF3008_dcpiyj.jpg",
    howToGetThere: {
      nearestAirport: "Kota Kinabalu International Airport",
      transportation: "Taxi, Grab",
      visa: "Visa-free for many ASEAN passports",
    },
    whereToStay: {
      budget: {
        name: "Escape Backpackers KK",
        why: "Affordable and near the waterfront.",
      },
      midRange: {
        name: "The Klagan Hotel",
        why: "Comfortable rooms near shopping malls.",
      },
      luxury: {
        name: "Shangri-La Tanjung Aru",
        why: "Beachfront resort with amazing sunset views.",
      },
    },
    thingsToDo: [
      {
        name: "Tunku Abdul Rahman Marine Park",
        why: "Island hopping, snorkeling, clear waters.",
        fee: "Small conservation fee",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1544919931-314227183e8b?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Mount Kinabalu",
        why: "UNESCO-listed mountain and nature park.",
        fee: "Park fee required",
        bestTime: "Early morning",
        image:
          "https://images.unsplash.com/photo-1596483484501-8314ba63510e?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Kota Kinabalu Waterfront",
        why: "Sunset views and seafood dining.",
        fee: "Free",
        bestTime: "Evening",
        image:
          "https://images.unsplash.com/photo-1589458925432-613dced2775a?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Welcome Seafood Restaurant",
          typeAndPrice: "Seafood (Mid-range)",
        },
        {
          name: "Gaya Street Night Market",
          typeAndPrice: "Street food (Budget)",
        },
      ],
      mustTryDish: "Grilled seafood",
    },
    gettingAround: {
      publicTransport: "Bus, Minivan",
      apps: ["Grab"],
      dailyBudget: "$5–$15",
    },
    dailyBudget: {
      accommodation: "$25–$200",
      food: "$15–$30",
      transportation: "$5–$15",
      activities: "$15–$50",
      total: "$60–$295",
    },
    whatToPack: {
      clothing: "Swimwear, light clothes, sandals",
      documents: "Passport",
      gadgets: "Waterproof phone case",
      other: "Sunscreen, insect repellent",
    },
    travelTips: {
      safety: "Follow safety guidelines when island hopping.",
      money: "Book island packages locally.",
      etiquette: "Respect nature and marine life.",
      reminder: "Weather can change quickly.",
    },
    photoSpots: [
      "Tunku Abdul Rahman Islands",
      "Kota Kinabalu Waterfront sunset",
      "Mount Kinabalu viewpoint",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Islands & Sunset",
        morning: "Island hopping",
        afternoon: "Snorkeling",
        evening: "Waterfront seafood dinner",
      },
      {
        day: 2,
        focus: "Nature & Local Life",
        morning: "Kinabalu Park",
        afternoon: "Desa Dairy Farm",
        evening: "Night market",
      },
      {
        day: 3,
        focus: "Culture & City",
        morning: "Mari Mari Cultural Village",
        afternoon: "Shopping at Suria Sabah",
        evening: "Sunset cruise",
      },
    ],
  },
  {
    id: "brunei",
    destinationName: "Bandar Seri Begawan",
    country: "Brunei",
    bestTime: "January–May",
    lengthOfStay: "2–3 days",
    budgetRange: "Mid-range",
    quickDescription:
      "Brunei is peaceful, clean, and rich in Islamic culture. It’s known for beautiful mosques and royal heritage. A great short trip for cultural exploration.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468344/DJI_20251119165434_0025_D_qaenr1.jpg",
    howToGetThere: {
      nearestAirport: "Brunei International Airport",
      transportation: "Taxi",
      visa: "Visa-free for many ASEAN nationals",
    },
    whereToStay: {
      budget: {
        name: "Higher Hotel",
        why: "Affordable and central.",
      },
      midRange: {
        name: "Radisson Hotel Brunei",
        why: "Comfortable and near attractions.",
      },
      luxury: {
        name: "The Empire Brunei",
        why: "Grand resort experience.",
      },
    },
    thingsToDo: [
      {
        name: "Sultan Omar Ali Saifuddien Mosque",
        why: "Stunning golden dome and lagoon setting.",
        fee: "Free",
        bestTime: "Late afternoon",
        image:
          "https://images.unsplash.com/photo-1621259500099-2a91901869e5?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Kampong Ayer",
        why: "Traditional water village experience.",
        fee: "Free",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1589458925432-613dced2775a?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Jame'Asr Hassanil Bolkiah Mosque",
        why: "Largest mosque in Brunei.",
        fee: "Free",
        bestTime: "Sunset",
        image:
          "https://images.unsplash.com/photo-1590731782201-900898835843?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Aminah Arif Restaurant",
          typeAndPrice: "Local cuisine (Mid-range)",
        },
        { name: "Tamu Kianggeh", typeAndPrice: "Local market food (Budget)" },
      ],
      mustTryDish: "Ambuyat",
    },
    gettingAround: {
      publicTransport: "Limited buses",
      apps: ["Dart"],
      dailyBudget: "$10–$20",
    },
    dailyBudget: {
      accommodation: "$40–$250",
      food: "$15–$30",
      transportation: "$10–$20",
      activities: "Mostly free",
      total: "$65–$300",
    },
    whatToPack: {
      clothing: "Modest clothing",
      documents: "Passport",
      gadgets: "Power adapter",
      other: "Light scarf (for mosque visits)",
    },
    travelTips: {
      safety: "Very safe country.",
      money: "Many attractions are free.",
      etiquette: "Dress modestly.",
      reminder: "No alcohol allowed.",
    },
    photoSpots: [
      "Sultan Omar Ali Saifuddien Mosque",
      "Kampong Ayer",
      "Jame'Asr Hassanil Bolkiah Mosque",
    ],
    itinerary: [
      {
        day: 1,
        focus: "City Heritage",
        morning: "Sultan Omar Ali Saifuddien Mosque",
        afternoon: "Kampong Ayer",
        evening: "Gadong Night Market",
      },
      {
        day: 2,
        focus: "Mosques & Museums",
        morning: "Jame'Asr Mosque",
        afternoon: "Royal Regalia Museum",
        evening: "Waterfront stroll",
      },
      {
        day: 3,
        focus: "Nature & Leisure",
        morning: "Ulu Temburong National Park",
        afternoon: "Relax at hotel",
        evening: "Local dining",
      },
    ],
  },
  //   {
  //     id: "bangkok",
  //     destinationName: "Bangkok",
  //     country: "Thailand",
  //     bestTime: "November–February",
  //     lengthOfStay: "3–4 days",
  //     budgetRange: "Budget / Mid-range",
  //     quickDescription:
  //       "Bangkok is vibrant, busy, and full of culture. From golden temples and floating markets to rooftop bars and street food, there’s always something exciting to explore. It’s a perfect mix of tradition and modern city life.",
  //     heroImage:
  //       "https://images.unsplash.com/photo-1508009603885-50cf7c579367?q=80&w=2000&auto=format&fit=crop",
  //     howToGetThere: {
  //       nearestAirport: "Suvarnabhumi Airport (BKK)",
  //       transportation: "Airport Rail Link, Taxi, Grab",
  //       visa: "Visa-free for many ASEAN and selected countries (check based on passport)",
  //     },
  //     whereToStay: {
  //       budget: {
  //         name: "Lub d Bangkok Siam",
  //         why: "Affordable, modern, and near BTS station.",
  //       },
  //       midRange: {
  //         name: "Amara Bangkok Hotel",
  //         why: "Comfortable rooms with rooftop pool.",
  //       },
  //       luxury: {
  //         name: "Mandarin Oriental Bangkok",
  //         why: "5-star luxury along the Chao Phraya River.",
  //       },
  //     },
  //     thingsToDo: [
  //       {
  //         name: "Grand Palace",
  //         why: "Thailand’s most famous royal landmark.",
  //         fee: "Paid",
  //         bestTime: "Morning",
  //         image:
  //           "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1000&auto=format&fit=crop",
  //       },
  //       {
  //         name: "Wat Arun",
  //         why: "Beautiful riverside temple with stunning design.",
  //         fee: "Small fee",
  //         bestTime: "Sunset",
  //         image:
  //           "https://images.unsplash.com/photo-1543888514-94f4a3861218?q=80&w=1000&auto=format&fit=crop",
  //       },
  //       {
  //         name: "Chatuchak Weekend Market",
  //         why: "One of the largest markets in the world.",
  //         fee: "Free",
  //         bestTime: "Weekend morning",
  //         image:
  //           "https://images.unsplash.com/photo-1562602802-08dcd370460c?q=80&w=1000&auto=format&fit=crop",
  //       },
  //     ],
  //     whereToEat: {
  //       restaurants: [
  //         { name: "Thip Samai", typeAndPrice: "Pad Thai (Mid-range)" },
  //         {
  //           name: "Jay Fai",
  //           typeAndPrice: "Michelin street food (Mid to high range)",
  //         },
  //       ],
  //       mustTryDish: "Pad Thai",
  //     },
  //     gettingAround: {
  //       publicTransport: "BTS Skytrain, MRT, River boats",
  //       apps: ["Grab", "Bolt"],
  //       dailyBudget: "$5–$15",
  //     },
  //     dailyBudget: {
  //       accommodation: "$20–$250",
  //       food: "$10–$40",
  //       transportation: "$5–$15",
  //       activities: "$10–$40",
  //       total: "$45–$345",
  //     },
  //     whatToPack: {
  //       clothing: "Light clothes, modest outfit for temples",
  //       documents: "Passport, hotel booking copy",
  //       gadgets: "Power bank",
  //       other: "Temple-appropriate clothing (covered shoulders & knees)",
  //     },
  //     travelTips: {
  //       safety: "Beware of common tourist scams near temples.",
  //       money: "Use BTS instead of taxis during rush hour.",
  //       etiquette: "Remove shoes before entering temples.",
  //       reminder: "Dress modestly when visiting religious sites.",
  //     },
  //     photoSpots: ["Grand Palace", "Wat Arun riverside", "Mahanakhon Skywalk"],
  //     itinerary: [
  //       {
  //         day: 1,
  //         focus: "Palaces & River",
  //         morning: "Grand Palace",
  //         afternoon: "Wat Pho & river cruise",
  //         evening: "Asiatique Riverfront",
  //       },
  //       {
  //         day: 2,
  //         focus: "Market & Shopping",
  //         morning: "Chatuchak Market",
  //         afternoon: "Siam Paragon shopping",
  //         evening: "Rooftop bar experience",
  //       },
  //       {
  //         day: 3,
  //         focus: "Floats & Culture",
  //         morning: "Damnoen Saduak Floating Market",
  //         afternoon: "Jim Thompson House",
  //         evening: "Chinatown food trip",
  //       },
  //     ],
  //   },
  //   {
  //     id: "phuket",
  //     destinationName: "Phuket",
  //     country: "Thailand",
  //     bestTime: "November–April",
  //     lengthOfStay: "3–4 days",
  //     budgetRange: "Budget / Mid-range",
  //     quickDescription:
  //       "Phuket is Thailand’s largest island, known for its white-sand beaches and island hopping tours. It’s perfect for relaxation, snorkeling, and enjoying beautiful tropical sunsets.",
  //     heroImage:
  //       "https://images.unsplash.com/photo-1589394815804-964ed9be2eb3?q=80&w=2000&auto=format&fit=crop",
  //     howToGetThere: {
  //       nearestAirport: "Phuket International Airport",
  //       transportation: "Taxi, Grab, Airport Bus",
  //       visa: "Same Thailand visa rules (visa-free for many countries)",
  //     },
  //     whereToStay: {
  //       budget: {
  //         name: "Lub d Phuket Patong",
  //         why: "Affordable and close to Patong Beach.",
  //       },
  //       midRange: {
  //         name: "Holiday Inn Resort Phuket",
  //         why: "Great location near the beach and nightlife.",
  //       },
  //       luxury: {
  //         name: "The Shore at Katathani",
  //         why: "Private villas with ocean views.",
  //       },
  //     },
  //     thingsToDo: [
  //       {
  //         name: "Phi Phi Islands",
  //         why: "Crystal-clear water and stunning limestone cliffs.",
  //         fee: "Tour fee required",
  //         bestTime: "Early morning",
  //         image:
  //           "https://images.unsplash.com/photo-1528181304800-2f1408198f2f?q=80&w=1000&auto=format&fit=crop",
  //       },
  //       {
  //         name: "Big Buddha Phuket",
  //         why: "Panoramic island views.",
  //         fee: "Free",
  //         bestTime: "Late afternoon",
  //         image:
  //           "https://images.unsplash.com/photo-1583354316021-f050fd7122a6?q=80&w=1000&auto=format&fit=crop",
  //       },
  //       {
  //         name: "Patong Beach",
  //         why: "Famous beach with lively nightlife.",
  //         fee: "Free",
  //         bestTime: "Sunset",
  //         image:
  //           "https://images.unsplash.com/photo-1549419163-146313364f7b?q=80&w=1000&auto=format&fit=crop",
  //       },
  //     ],
  //     whereToEat: {
  //       restaurants: [
  //         { name: "Kan Eang @ Pier", typeAndPrice: "Seafood (Mid-range)" },
  //         { name: "No.6 Restaurant", typeAndPrice: "Thai food (Budget)" },
  //       ],
  //       mustTryDish: "Tom Yum Goong",
  //     },
  //     gettingAround: {
  //       publicTransport: "Songthaew (local bus), Taxi",
  //       apps: ["Grab"],
  //       dailyBudget: "$10–$20",
  //     },
  //     dailyBudget: {
  //       accommodation: "$25–$400",
  //       food: "$15–$40",
  //       transportation: "$10–$20",
  //       activities: "$20–$60",
  //       total: "$70–$520",
  //     },
  //     whatToPack: {
  //       clothing: "Swimwear, light clothes, sandals",
  //       documents: "Passport",
  //       gadgets: "Waterproof pouch",
  //       other: "Sunscreen, sunglasses",
  //     },
  //     travelTips: {
  //       safety: "Check weather conditions before island tours.",
  //       money: "Book island tours as group packages.",
  //       etiquette: "Dress respectfully at temples.",
  //       reminder: "Sea conditions can change quickly during monsoon season.",
  //     },
  //     photoSpots: [
  //       "Big Buddha viewpoint",
  //       "Phi Phi Islands",
  //       "Promthep Cape sunset",
  //     ],
  //     itinerary: [
  //       {
  //         day: 1,
  //         focus: "Islands & Beach",
  //         morning: "Phi Phi Island tour",
  //         afternoon: "Snorkeling",
  //         evening: "Patong Beach",
  //       },
  //       {
  //         day: 2,
  //         focus: "Views & Culture",
  //         morning: "Big Buddha",
  //         afternoon: "Old Phuket Town",
  //         evening: "Night market",
  //       },
  //       {
  //         day: 3,
  //         focus: "Relax & Sunset",
  //         morning: "Relax at Kata Beach",
  //         afternoon: "Spa or massage",
  //         evening: "Sunset at Promthep Cape",
  //       },
  //     ],
  //   },
  //   {
  //     id: "phnom-penh",
  //     destinationName: "Phnom Penh",
  //     country: "Cambodia",
  //     bestTime: "November–February",
  //     lengthOfStay: "2–3 days",
  //     budgetRange: "Budget / Mid-range",
  //     quickDescription:
  //       "Phnom Penh is Cambodia’s capital, rich in history and culture. You’ll find royal palaces, riverside views, and important historical museums. It’s a meaningful and educational destination.",
  //     heroImage:
  //       "https://images.unsplash.com/photo-1590731782201-900898835843?q=80&w=2000&auto=format&fit=crop",
  //     howToGetThere: {
  //       nearestAirport: "Phnom Penh International Airport",
  //       transportation: "Taxi, Grab, Tuk-tuk",
  //       visa: "Visa on arrival for many nationalities (check before travel)",
  //     },
  //     whereToStay: {
  //       budget: {
  //         name: "The Big Easy Phnom Penh",
  //         why: "Affordable and central location.",
  //       },
  //       midRange: {
  //         name: "Plantation Urban Resort",
  //         why: "Stylish hotel near Royal Palace.",
  //       },
  //       luxury: {
  //         name: "Raffles Hotel Le Royal",
  //         why: "Historic 5-star colonial hotel.",
  //       },
  //     },
  //     thingsToDo: [
  //       {
  //         name: "Royal Palace Phnom Penh",
  //         why: "Beautiful Khmer architecture and Silver Pagoda.",
  //         fee: "Paid",
  //         bestTime: "Morning",
  //         image:
  //           "https://images.unsplash.com/photo-1621259500099-2a91901869e5?q=80&w=1000&auto=format&fit=crop",
  //       },
  //       {
  //         name: "Tuol Sleng Genocide Museum",
  //         why: "Important historical site.",
  //         fee: "Paid",
  //         bestTime: "Morning",
  //         image:
  //           "https://images.unsplash.com/photo-1589458925432-613dced2775a?q=80&w=1000&auto=format&fit=crop",
  //       },
  //       {
  //         name: "Choeung Ek Genocidal Center",
  //         why: "Learn about Cambodia’s history.",
  //         fee: "Paid",
  //         bestTime: "Morning",
  //         image:
  //           "https://images.unsplash.com/photo-1590731782201-900898835843?q=80&w=1000&auto=format&fit=crop",
  //       },
  //     ],
  //     whereToEat: {
  //       restaurants: [
  //         {
  //           name: "Friends the Restaurant",
  //           typeAndPrice: "Cambodian cuisine (Mid-range)",
  //         },
  //         { name: "Russian Market stalls", typeAndPrice: "Local food (Budget)" },
  //       ],
  //       mustTryDish: "Fish Amok",
  //     },
  //     gettingAround: {
  //       publicTransport: "Tuk-tuk, Taxi",
  //       apps: ["Grab"],
  //       dailyBudget: "$5–$15",
  //     },
  //     dailyBudget: {
  //       accommodation: "$15–$250",
  //       food: "$10–$25",
  //       transportation: "$5–$15",
  //       activities: "$10–$30",
  //       total: "$40–$320",
  //     },
  //     whatToPack: {
  //       clothing: "Light clothes, modest outfit for temples",
  //       documents: "Passport, visa copy",
  //       gadgets: "Power bank",
  //       other: "Sunscreen",
  //     },
  //     travelTips: {
  //       safety: "Stay alert in crowded markets.",
  //       money: "Negotiate tuk-tuk fares.",
  //       etiquette: "Dress respectfully at temples.",
  //       reminder: "US dollars widely accepted.",
  //     },
  //     photoSpots: [
  //       "Royal Palace",
  //       "Riverside promenade",
  //       "Independence Monument",
  //     ],
  //     itinerary: [
  //       {
  //         day: 1,
  //         focus: "Palace & Riverside",
  //         morning: "Royal Palace",
  //         afternoon: "National Museum",
  //         evening: "Riverside walk",
  //       },
  //       {
  //         day: 2,
  //         focus: "History & Culture",
  //         morning: "Tuol Sleng",
  //         afternoon: "Killing Fields",
  //         evening: "Night market",
  //       },
  //       {
  //         day: 3,
  //         focus: "Leisure & Markets",
  //         morning: "Wat Phnom",
  //         afternoon: "Russian Market",
  //         evening: "Sunset cruise",
  //       },
  //     ],
  //   },
  {
    id: "ho-chi-minh-city",
    destinationName: "Ho Chi Minh City",
    country: "Vietnam",
    bestTime: "December–April",
    lengthOfStay: "3 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Ho Chi Minh City (Saigon) is energetic, modern, and full of history. You’ll find war museums, French colonial buildings, and amazing street food. It’s a great mix of culture and city life.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468512/IMG_20230917_195820_ma5aqt.jpg",
    howToGetThere: {
      nearestAirport: "Tan Son Nhat International Airport",
      transportation: "Taxi, Grab, Airport Bus",
      visa: "E-visa available for many nationalities (check before travel)",
    },
    whereToStay: {
      budget: {
        name: "The Hideout Hostel",
        why: "Affordable and social atmosphere.",
      },
      midRange: {
        name: "Silverland Yen Hotel",
        why: "Comfortable rooms near Ben Thanh Market.",
      },
      luxury: {
        name: "The Reverie Saigon",
        why: "5-star luxury in central district.",
      },
    },
    thingsToDo: [
      {
        name: "War Remnants Museum",
        why: "Learn about Vietnam War history.",
        fee: "Paid",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c8707?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Ben Thanh Market",
        why: "Shopping and street food.",
        fee: "Free",
        bestTime: "Afternoon",
        image:
          "https://images.unsplash.com/photo-1559592440-7f1533241f67?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Cu Chi Tunnels",
        why: "Explore underground war tunnels.",
        fee: "Paid",
        bestTime: "Morning tour",
        image:
          "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        { name: "Pho Hoa", typeAndPrice: "Vietnamese noodles (Budget)" },
        {
          name: "Secret Garden",
          typeAndPrice: "Traditional Vietnamese (Mid-range)",
        },
      ],
      mustTryDish: "Pho",
    },
    gettingAround: {
      publicTransport: "Bus",
      apps: ["Grab"],
      dailyBudget: "$5–$15",
    },
    dailyBudget: {
      accommodation: "$15–$300",
      food: "$10–$30",
      transportation: "$5–$15",
      activities: "$10–$40",
      total: "$40–$385",
    },
    whatToPack: {
      clothing: "Light breathable clothes",
      documents: "Passport, visa copy",
      gadgets: "Power bank",
      other: "Small backpack",
    },
    travelTips: {
      safety: "Watch for motorbikes when crossing streets.",
      money: "Use Grab instead of taxis.",
      etiquette: "Greet politely and smile.",
      reminder: "Traffic can be busy and chaotic.",
    },
    photoSpots: [
      "Notre-Dame Cathedral Basilica of Saigon",
      "Saigon Central Post Office",
      "Bitexco Skydeck",
    ],
    itinerary: [
      {
        day: 1,
        focus: "City History",
        morning: "War Remnants Museum",
        afternoon: "Notre-Dame Cathedral & Post Office",
        evening: "Ben Thanh Market",
      },
      {
        day: 2,
        focus: "Adventure & Views",
        morning: "Cu Chi Tunnels",
        afternoon: "Bitexco Skydeck",
        evening: "Dinner cruise",
      },
      {
        day: 3,
        focus: "Culture & Vibes",
        morning: "Coffee shop hopping",
        afternoon: "Chinatown (District 5)",
        evening: "Night market",
      },
    ],
  },
  {
    id: "hanoi",
    destinationName: "Hanoi",
    country: "Vietnam",
    bestTime: "October–April",
    lengthOfStay: "3–4 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Hanoi is charming, cultural, and full of history. The Old Quarter is lively with narrow streets and street food stalls. It’s also the gateway to Halong Bay.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468552/IMG20231001233813_p2ny0q.jpg",
    howToGetThere: {
      nearestAirport: "Noi Bai International Airport",
      transportation: "Taxi, Grab, Airport Bus",
      visa: "E-visa available for many travelers",
    },
    whereToStay: {
      budget: {
        name: "Hanoi Buffalo Hostel",
        why: "Affordable and great location in Old Quarter.",
      },
      midRange: {
        name: "La Siesta Hotel",
        why: "Comfortable and central.",
      },
      luxury: {
        name: "Sofitel Legend Metropole Hanoi",
        why: "Historic 5-star French colonial hotel.",
      },
    },
    thingsToDo: [
      {
        name: "Hoan Kiem Lake",
        why: "Relaxing area in the city center.",
        fee: "Free",
        bestTime: "Early morning",
        image:
          "https://images.unsplash.com/photo-1509030450996-93efa58eb3d6?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Ho Chi Minh Mausoleum",
        why: "Important national landmark.",
        fee: "Free",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Old Quarter Hanoi",
        why: "Street food and shopping.",
        fee: "Free",
        bestTime: "Evening",
        image:
          "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        { name: "Bun Cha Huong Lien", typeAndPrice: "Vietnamese BBQ (Budget)" },
        {
          name: "Cha Ca Thang Long",
          typeAndPrice: "Local specialty (Mid-range)",
        },
      ],
      mustTryDish: "Bun Cha",
    },
    gettingAround: {
      publicTransport: "Bus",
      apps: ["Grab"],
      dailyBudget: "$5–$15",
    },
    dailyBudget: {
      accommodation: "$15–$350",
      food: "$10–$30",
      transportation: "$5–$15",
      activities: "$10–$50",
      total: "$40–$445",
    },
    whatToPack: {
      clothing: "Light clothes, light jacket (cool season)",
      documents: "Passport",
      gadgets: "Camera",
      other: "Comfortable walking shoes",
    },
    travelTips: {
      safety: "Be cautious when crossing busy streets.",
      money: "Book Halong Bay tours locally.",
      etiquette: "Remove shoes when entering homes.",
      reminder: "Winter months can be chilly.",
    },
    photoSpots: ["Hoan Kiem Lake", "Train Street", "Long Bien Bridge"],
    itinerary: [
      {
        day: 1,
        focus: "City Heritage",
        morning: "Ho Chi Minh Mausoleum",
        afternoon: "Temple of Literature",
        evening: "Old Quarter food trip",
      },
      {
        day: 2,
        focus: "Halong Bay",
        morning: "Halong Bay cruise (Early start)",
        afternoon: "Cruising & Caves",
        evening: "Return to Hanoi",
      },
      {
        day: 3,
        focus: "Life & Lakes",
        morning: "Hoan Kiem Lake",
        afternoon: "Train Street",
        evening: "Water puppet show",
      },
    ],
  },
  {
    id: "indonesia",
    destinationName: "Indonesia",
    country: "Indonesia",
    bestTime: "May–September (Dry Season)",
    lengthOfStay: "10–14 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Indonesia is a breathtaking mosaic of over 17,000 islands, offering everything from the spiritual serenity of Bali’s temples to the raw volcanic beauty of Java. It is a world-class destination for surfers, hikers, and culture seekers alike.",
    heroImage:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport:
        "Soekarno–Hatta International (CGK) or Ngurah Rai International (DPS)",
      transportation:
        "Blue Bird Taxi, Grab/Gojek, DAMRI Bus, Railink (Jakarta)",
      visa: "Visa on Arrival (VoA) for many countries (approx. 500,000 IDR)",
    },
    whereToStay: {
      budget: {
        name: "Wonderloft Hostel (Jakarta/Bali)",
        why: "Trendy, social atmosphere, and very affordable for backpackers.",
      },
      midRange: {
        name: "Alaya Resort Ubud",
        why: "Stunning rice field views and authentic Balinese hospitality.",
      },
      luxury: {
        name: "Ayana Estate (Bali)",
        why: "Home to the world-famous Rock Bar and elite private villas.",
      },
    },
    thingsToDo: [
      {
        name: "Borobudur Temple",
        why: "The largest Buddhist temple in the world and a UNESCO site.",
        fee: "~450,000 IDR",
        bestTime: "Sunrise",
        image:
          "https://images.unsplash.com/photo-1588668214407-6ec97cb006c8?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Uluwatu Temple",
        why: "Dramatic cliffside views and the Kecak Fire Dance at sunset.",
        fee: "50,000 IDR",
        bestTime: "5:00 PM",
        image:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Mount Bromo",
        why: "An otherworldly volcanic landscape that feels like another planet.",
        fee: "~220,000 IDR",
        bestTime: "3:00 AM",
        image:
          "https://images.unsplash.com/photo-1588582042217-062e08610cc4?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Warung Made (Bali)",
          typeAndPrice: "Traditional Balinese (Budget)",
        },
        {
          name: "Lara Djonggrang (Jakarta)",
          typeAndPrice: "High-end Indonesian history & food (Mid-range)",
        },
      ],
      mustTryDish: "Beef Rendang",
    },
    gettingAround: {
      publicTransport: "TransJakarta, KRL Commuter, Gojek (Bike/Car)",
      apps: ["Grab", "Gojek"],
      dailyBudget: "$10–$20",
    },
    dailyBudget: {
      accommodation: "$15–$150",
      food: "$10–$40",
      transportation: "$5–$20",
      activities: "$15–$50",
      total: "$45–$260",
    },
    whatToPack: {
      clothing: "Light fabrics, a sarong for temples, hiking shoes",
      documents: "Passport, E-VOA printout, Customs declaration QR",
      gadgets: "Universal adapter (Type C), Power bank",
      other: "Sunscreen, Insect repellent",
    },
    travelTips: {
      safety:
        "Only use Blue Bird or Silver Bird taxis for safety and fair pricing.",
      money:
        "Eat at local 'Warungs' for authentic food at a fraction of the cost.",
      etiquette: "Never use your left hand to give or receive items.",
      reminder:
        "Do not drink the tap water; always buy bottled or filtered water.",
    },
    photoSpots: [
      "Tegalalang Rice Terrace (Bali)",
      "Gates of Heaven (Lempuyang Temple)",
      "Mount Bromo Crater Rim",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Ubud Culture",
        morning: "Explore Ubud Monkey Forest",
        afternoon: "Tegalalang Rice Terrace",
        evening: "Dinner in Ubud center",
      },
      {
        day: 2,
        focus: "Cliffs & Coasts",
        morning: "Travel to Uluwatu",
        afternoon: "Relax at Padang Padang Beach",
        evening: "Kecak Dance at Uluwatu Temple",
      },
      {
        day: 3,
        focus: "Surf & Sunset",
        morning: "Surfing lesson at Canggu",
        afternoon: "Cafe hopping",
        evening: "Sunset at Tanah Lot",
      },
    ],
  },
  {
    id: "japan",
    destinationName: "Japan (Multi-City)",
    country: "Japan",
    bestTime: "March–May (Cherry Blossoms), October–November (Autumn)",
    lengthOfStay: "10–14 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "Japan is a seamless blend of hyper-modern technology and ancient tradition. From the neon lights of Tokyo to the tranquil zen gardens of Kyoto, it offers a travel experience that is safe, organized, and endlessly fascinating.",
    heroImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport:
        "Narita (NRT) / Haneda (HND) for Tokyo; Kansai (KIX) for Osaka/Kyoto",
      transportation: "Narita Express, Haruka Express, Limousine Bus",
      visa: "Visa-free for many; e-Visa available for others (check Visit Japan Web)",
    },
    whereToStay: {
      budget: {
        name: "Nine Hours Capsule Hotel (Multiple locations)",
        why: "Iconic Japanese experience, clean, and very cheap.",
      },
      midRange: {
        name: "Mitsui Garden Hotel (Kyoto/Osaka)",
        why: "Reliable quality, great locations, and modern design.",
      },
      luxury: {
        name: "Aman Tokyo or Hoshinoya Kyoto",
        why: "Unparalleled luxury and traditional Ryokan experiences.",
      },
    },
    thingsToDo: [
      {
        name: "Shibuya Crossing (Tokyo)",
        why: "The busiest pedestrian intersection in the world.",
        fee: "Free",
        bestTime: "Evening",
        image:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Fushimi Inari Shrine (Kyoto)",
        why: "Walk through thousands of iconic vermillion torii gates.",
        fee: "Free",
        bestTime: "Early morning (6:00 AM)",
        image:
          "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Dotonbori (Osaka)",
        why: "The neon-lit heart of Japan’s street food culture.",
        fee: "Free",
        bestTime: "Night",
        image:
          "https://images.unsplash.com/photo-1590259692208-a15830005297?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Ichiran Ramen",
          typeAndPrice: "Classic Tonkotsu ramen (Budget)",
        },
        {
          name: "Kobe Plaisir (Kobe)",
          typeAndPrice: "High-grade Kobe Beef (Luxury)",
        },
      ],
      mustTryDish: "Sushi or Takoyaki",
    },
    gettingAround: {
      publicTransport: "Shinkansen (Bullet Train), Metro, JR Lines",
      apps: ["Google Maps", "Japan Transit", "Grodin (Local info)"],
      dailyBudget: "$15–$40",
    },
    dailyBudget: {
      accommodation: "$40–$300",
      food: "$30–$80",
      transportation: "$15–$50",
      activities: "$20–$60",
      total: "$105–$490",
    },
    whatToPack: {
      clothing: "Comfortable walking shoes, layered clothing",
      documents: "Passport, Suica/Pasmo card (digital or physical)",
      gadgets: "Pocket Wi-Fi or eSIM, Power bank",
      other: "Small coin purse (Japan uses many coins)",
    },
    travelTips: {
      safety:
        "Japan is extremely safe, but always keep your hotel address in Japanese.",
      money:
        "Buy food at 'Konbini' (7-Eleven/Lawson) for high-quality, cheap meals.",
      etiquette: "Do not eat while walking and keep quiet on trains.",
      reminder: "Many places are still cash-only; keep Yen on hand.",
    },
    photoSpots: [
      "Chureito Pagoda (Fuji view)",
      "Arashiyama Bamboo Grove (Kyoto)",
      "Himeji Castle",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Tokyo Highlights",
        morning: "Tsukiji Outer Market",
        afternoon: "Harajuku/Meiji Shrine",
        evening: "Shibuya Sky",
      },
      {
        day: 2,
        focus: "Kyoto Tradition",
        morning: "Fushimi Inari",
        afternoon: "Kiyomizu-dera",
        evening: "Gion District",
      },
      {
        day: 3,
        focus: "Osaka & Nara",
        morning: "Nara Deer Park",
        afternoon: "Osaka Castle",
        evening: "Street food in Dotonbori",
      },
    ],
  },
  {
    id: "tokyo",
    destinationName: "Tokyo",
    country: "Japan",
    bestTime: "March–April (Sakura) or October–November (Autumn)",
    lengthOfStay: "5–7 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "Tokyo is a sensory-overload city where ancient shrines sit in the shadow of neon skyscrapers. It offers world-class dining, quirky subcultures, and the most efficient train system on Earth.",
    heroImage:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Narita (NRT) or Haneda (HND)",
      transportation: "Narita Express (N'EX), Keisei Skyliner, Limousine Bus",
      visa: "Visa-free for many (US, UK, EU, ASEAN); check current e-Visa status.",
    },
    whereToStay: {
      budget: {
        name: "The Millennials Shibuya",
        why: "High-tech, stylish capsule pods.",
      },
      midRange: {
        name: "Hotel Sunroute Plaza Shinjuku",
        why: "Incredible location near the station.",
      },
      luxury: {
        name: "Park Hyatt Tokyo",
        why: "Iconic 'Lost in Translation' views.",
      },
    },
    thingsToDo: [
      {
        name: "Shibuya Crossing & Shibuya Sky",
        why: "The world's busiest crossing and a 360-degree open-air deck.",
        fee: "Free (Crossing) / ~¥2,500 (Sky)",
        bestTime: "Sunset/Night",
        image:
          "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Senso-ji Temple (Asakusa)",
        why: "Tokyo’s oldest and most atmospheric temple.",
        fee: "Free",
        bestTime: "Early morning (before 8:00 AM)",
        image:
          "https://images.unsplash.com/photo-1545642194-969408b04964?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Akihabara Electric Town",
        why: "The heart of anime, gaming, and electronics culture.",
        fee: "Free",
        bestTime: "Sunday afternoon (Pedestrian zone)",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Ichiran Shinjuku",
          typeAndPrice: "Classic Tonkotsu Ramen (Budget)",
        },
        {
          name: "Tsukiji Outer Market",
          typeAndPrice: "Fresh Seafood/Sushi (Mid-range)",
        },
      ],
      mustTryDish: "Edomae Sushi",
    },
    gettingAround: {
      publicTransport: "JR Yamanote Line, Tokyo Metro, Toei Subway",
      apps: ["Google Maps", "Japan Transit"],
      dailyBudget: "$20–$40",
    },
    dailyBudget: {
      accommodation: "$50–$400",
      food: "$40–$100",
      transportation: "$15–$30",
      activities: "$20–$80",
      total: "$120–$610",
    },
    whatToPack: {
      clothing: "Layered clothing, comfortable shoes",
      documents: "Passport, IC Card (Suica/Pasmo)",
      gadgets: "eSIM/Pocket WiFi",
      other: "Mobile battery",
    },
    travelTips: {
      safety: "Very safe; late night trains are standard.",
      money: "Suica can be used for most purchases.",
      etiquette: "Keep backpacks in front on crowded trains.",
      reminder: "Last train is usually around midnight.",
    },
    photoSpots: ["Shibuya Sky", "TeamLab Borderless", "Shinjuku Gyoen"],
    itinerary: [
      {
        day: 1,
        focus: "Old & New",
        morning: "Asakusa Senso-ji",
        afternoon: "Akihabara",
        evening: "Shibuya Crossing",
      },
      {
        day: 2,
        focus: "Culture & Style",
        morning: "Meiji Shrine",
        afternoon: "Harajuku Takeshita Street",
        evening: "Shinjuku Golden Gai",
      },
      {
        day: 3,
        focus: "Gardens & Views",
        morning: "Imperial Palace Gardens",
        afternoon: "Roppongi Hills",
        evening: "Tokyo Tower sunset",
      },
    ],
  },
  {
    id: "kyoto",
    destinationName: "Kyoto",
    country: "Japan",
    bestTime: "April (Spring) or November (Autumn foliage)",
    lengthOfStay: "3–4 days",
    budgetRange: "Mid-range",
    quickDescription:
      "Kyoto is the soul of traditional Japan, home to over 2,000 temples and shrines. It is the best place to witness Geisha culture, tea ceremonies, and stunning Zen gardens.",
    heroImage:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Kansai International (KIX) or Itami (ITM)",
      transportation: "Haruka Express train from KIX or Shinkansen from Tokyo.",
      visa: "Same as Japan entry rules.",
    },
    whereToStay: {
      budget: {
        name: "Piece Hostel Kyoto",
        why: "Modern, clean, and very social.",
      },
      midRange: {
        name: "Cross Hotel Kyoto",
        why: "Stylish rooms near the Gion/Kawaramachi area.",
      },
      luxury: {
        name: "Hoshinoya Kyoto",
        why: "A riverside luxury ryokan accessible only by boat.",
      },
    },
    thingsToDo: [
      {
        name: "Fushimi Inari Shrine",
        why: "The famous 10,000 vermillion torii gates winding up the mountain.",
        fee: "Free",
        bestTime: "Dawn (to avoid massive crowds)",
        image:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Kinkaku-ji (The Golden Pavilion)",
        why: "A Zen temple covered in shimmering gold leaf.",
        fee: "~¥500",
        bestTime: "Late afternoon for the 'golden' reflection",
        image:
          "https://images.unsplash.com/photo-1528360983277-13d401ca1869?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Arashiyama Bamboo Grove",
        why: "A towering green 'forest' of bamboo that feels otherworldly.",
        fee: "Free",
        bestTime: "7:00 AM",
        image:
          "https://images.unsplash.com/photo-1576431711204-7a3297a7f457?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Nishiki Market",
          typeAndPrice: "Kyoto's Kitchen street food (Budget)",
        },
        {
          name: "Gion Karyo",
          typeAndPrice: "Authentic Kaiseki multi-course meal (Luxury)",
        },
      ],
      mustTryDish: "Matcha Soba or Kaiseki Ryori",
    },
    gettingAround: {
      publicTransport: "City Bus, Kyoto Subway, Hankyu Line",
      apps: ["Google Maps"],
      dailyBudget: "$10–$20",
    },
    dailyBudget: {
      accommodation: "$40–$250",
      food: "$30–$80",
      transportation: "$10–$20",
      activities: "$20–$50",
      total: "$100–$400",
    },
    whatToPack: {
      clothing: "Modest clothes for temples, walking shoes",
      documents: "Passport",
      gadgets: "Camera",
      other: "Hand towel (for temples)",
    },
    travelTips: {
      safety: "Quiet and safe; respect temple rules.",
      money: "Cash is often required at small shrines.",
      etiquette: "Do not touch Geisha/Maiko in Gion.",
      reminder: "Buses can be very crowded.",
    },
    photoSpots: ["Yasaka Pagoda", "Kiyomizu-dera balcony", "Pontocho Alley"],
    itinerary: [
      {
        day: 1,
        focus: "Eastern Kyoto",
        morning: "Kiyomizu-dera",
        afternoon: "Sannenzaka & Ninenzaka",
        evening: "Gion District",
      },
      {
        day: 2,
        focus: "North & West",
        morning: "Kinkaku-ji",
        afternoon: "Arashiyama Bamboo Grove",
        evening: "Pontocho dinner",
      },
      {
        day: 3,
        focus: "Southern Shrine",
        morning: "Fushimi Inari",
        afternoon: "Nishiki Market",
        evening: "Kyoto Station skywalk",
      },
    ],
  },
  {
    id: "osaka",
    destinationName: "Osaka",
    country: "Japan",
    bestTime: "March–May, October–November",
    lengthOfStay: "2–3 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Osaka is Japan’s outgoing, food-obsessed younger brother. It is famous for its 'Kuidaore' (eat until you drop) culture and vibrant nightlife.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773491941/170313121409-osaka-street-scene_arz9di.jpg",
    howToGetThere: {
      nearestAirport: "Kansai International (KIX)",
      transportation: "Nankai Rap:t, Haruka Express, Airport Bus",
      visa: "Same as Japan entry rules.",
    },
    whereToStay: {
      budget: {
        name: "Ark Hotel Osaka Shinsaibashi",
        why: "Affordable and central.",
      },
      midRange: {
        name: "Hotel Nikko Osaka",
        why: "Located directly on the Midosuji Boulevard.",
      },
      luxury: {
        name: "Conrad Osaka",
        why: " 'Your Address in the Sky' with stunning views.",
      },
    },
    thingsToDo: [
      {
        name: "Dotonbori District",
        why: "Giant neon signs (Glico Man) and endless street food.",
        fee: "Free",
        bestTime: "Night",
        image:
          "https://images.unsplash.com/photo-1571536802807-30451e411121?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Osaka Castle",
        why: "A magnificent landmark surrounded by a massive park and moat.",
        fee: "~¥1,200 (Tower)",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1590559899731-43d37a1a7071?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Universal Studios Japan (USJ)",
        why: "Super Nintendo World and The Wizarding World of Harry Potter.",
        fee: "~¥8,900–¥14,000 (Dynamic pricing)",
        bestTime: "Weekdays",
        image:
          "https://images.unsplash.com/photo-1621319206132-7ade251c890a?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        { name: "Mizuno", typeAndPrice: "Famous for Okonomiyaki (Mid-range)" },
        { name: "Kushikatsu Daruma", typeAndPrice: "Fried skewers (Budget)" },
      ],
      mustTryDish: "Takoyaki (Octopus Balls)",
    },
    gettingAround: {
      publicTransport: "JR Loop Line, Midosuji Line",
      apps: ["Google Maps"],
      dailyBudget: "$10–$25",
    },
    dailyBudget: {
      accommodation: "$30–$200",
      food: "$40–$100",
      transportation: "$10–$25",
      activities: "$30–$100",
      total: "$110–$425",
    },
    whatToPack: {
      clothing: "Casual comfortable clothes",
      documents: "Passport",
      gadgets: "Power bank",
      other: "Stretchable pants (for all the food!)",
    },
    travelTips: {
      safety: "Lively and safe; locals are friendly.",
      money: "Cards widely accepted in malls.",
      etiquette: "Stand on the right on escalators (unlike Tokyo).",
      reminder: "Standard street food prices are very affordable.",
    },
    photoSpots: [
      "Glico Running Man sign",
      "Umeda Sky Building",
      "Shinsekai area",
    ],
    itinerary: [
      {
        day: 1,
        focus: "The Soul of Osaka",
        morning: "Osaka Castle",
        afternoon: "Shinsaibashi shopping",
        evening: "Dotonbori food crawl",
      },
      {
        day: 2,
        focus: "Entertainment",
        morning: "Universal Studios Japan (Full day)",
        afternoon: "USJ Attractions",
        evening: "Umeda dinner",
      },
      {
        day: 3,
        focus: "Retro Osaka",
        morning: "Kuromon Market",
        afternoon: "Shinsekai & Tsutenkaku Tower",
        evening: "Last minute shopping",
      },
    ],
  },
  {
    id: "kobe",
    destinationName: "Kobe",
    country: "Japan",
    bestTime: "March–May, October–November",
    lengthOfStay: "1-2 days",
    budgetRange: "Mid-range",
    quickDescription:
      "A sophisticated port city squeezed between the sea and the Rokko mountain range. Famous globally for its premium beef and international history.",
    heroImage:
      "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Kansai International (KIX)",
      transportation:
        "JR Special Rapid Service from Osaka (20 mins) or Shinkansen to Shin-Kobe.",
      visa: "Same as Japan entry rules.",
    },
    whereToStay: {
      budget: {
        name: "Kobe Capsule Hotel",
        why: "Affordable and central in Sannomiya.",
      },
      midRange: {
        name: "Hotel Okura Kobe",
        why: "Iconic hotel with great harbor views.",
      },
      luxury: {
        name: "Oriental Hotel Kobe",
        why: "Historic luxury in the heart of the old settlement.",
      },
    },
    thingsToDo: [
      {
        name: "Kobe Harborland & Meriken Park",
        why: "Iconic red Port Tower and waterfront shopping at Mosaic.",
        fee: "Free (Park) / ~¥1,000 (Tower)",
        bestTime: "Evening",
        image:
          "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Kitano Ijinkan-gai",
        why: "Historic district with 19th-century Western-style mansions.",
        fee: "~¥500–¥1,000 (Per house)",
        bestTime: "Afternoon",
        image:
          "https://images.unsplash.com/photo-1590259692208-a15830005297?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Mount Rokko / Nunobiki Ropeway",
        why: "Incredible '10-million dollar' night view of the bay.",
        fee: "~¥2,000 (Ropeway roundtrip)",
        bestTime: "Evening",
        image:
          "https://images.unsplash.com/photo-1590259692208-a15830005297?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Steakland Kobe",
          typeAndPrice:
            "Most popular spot for affordable Kobe Beef (Mid-range)",
        },
        {
          name: "Mouriya",
          typeAndPrice: "Premium Kobe Beef Teppanyaki (Luxury)",
        },
      ],
      mustTryDish: "Kobe Beef Teppanyaki",
    },
    gettingAround: {
      publicTransport: "City Loop Bus, Kobe Subway, JR Lines",
      apps: ["Google Maps"],
      dailyBudget: "$10–$25",
    },
    dailyBudget: {
      accommodation: "$40–$200",
      food: "$40–$150",
      transportation: "$10–$20",
      activities: "$20–$50",
      total: "$110–$420",
    },
    whatToPack: {
      clothing: "Smart casual for beef restaurants, comfortable walking shoes",
      documents: "Passport",
      gadgets: "Camera",
      other: "Light jacket for Mt. Rokko",
    },
    travelTips: {
      safety: "Safe and well-organized port city.",
      money: "Cards widely accepted in malls and steak houses.",
      etiquette: "Dress slightly up for high-end beef restaurants.",
      reminder: "Last train back to Osaka/Kyoto is around midnight.",
    },
    photoSpots: [
      "Kobe Port Tower",
      "BE KOBE sign at Meriken Park",
      "Ten-Million Dollar Night View from Mt. Maya",
    ],
    itinerary: [
      {
        day: 1,
        focus: "History & Views",
        morning: "Kitano Ijinkan-gai houses",
        afternoon: "Nunobiki Ropeway",
        evening: "Kobe Beef dinner at Sannomiya",
      },
      {
        day: 2,
        focus: "Harbor & Night",
        morning: "Meriken Park walk",
        afternoon: "Harborland shopping",
        evening: "Night view from Mt. Rokko",
      },
    ],
  },
  {
    id: "nara",
    destinationName: "Nara",
    country: "Japan",
    bestTime: "March–May, October–November",
    lengthOfStay: "1 day (usually a day trip)",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Japan's first permanent capital. It is most famous for its giant bronze Buddha and the hundreds of free-roaming deer that bow for crackers.",
    heroImage:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Kansai International (KIX)",
      transportation:
        "JR Nara Line from Kyoto (45 mins) or Kintetsu Line from Osaka (40 mins).",
      visa: "Same as Japan entry rules.",
    },
    whereToStay: {
      budget: {
        name: "Nara Guesthouse",
        why: "Social and traditional atmosphere.",
      },
      midRange: {
        name: "Hotel Nikko Nara",
        why: "Directly connected to JR Nara Station.",
      },
      luxury: {
        name: "Nara Hotel",
        why: "Historic 5-star hotel with traditional architecture.",
      },
    },
    thingsToDo: [
      {
        name: "Nara Park (Deer Park)",
        why: "Feed the deer and enjoy the massive park grounds.",
        fee: "Free",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1549111494-046637300c19?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Todai-ji Temple",
        why: "Houses the Daibutsu (Great Buddha), one of the largest bronze statues in the world.",
        fee: "~¥600",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Kasuga Taisha",
        why: "A forest shrine famous for thousands of bronze and stone lanterns.",
        fee: "~¥500 (Inner area)",
        bestTime: "Afternoon",
        image:
          "https://images.unsplash.com/photo-1555921015-5532091f6006?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Maguro Koya",
          typeAndPrice: "Fresh tuna specialties (Budget)",
        },
        {
          name: "Edogawa Naramachi",
          typeAndPrice: "Grilled eel in traditional house (Mid-range)",
        },
      ],
      mustTryDish: "Mochi (from Nakatanidou)",
    },
    gettingAround: {
      publicTransport: "Loop Bus, Walking",
      apps: ["Google Maps"],
      dailyBudget: "$5–$15",
    },
    dailyBudget: {
      accommodation: "$30–$150",
      food: "$20–$50",
      transportation: "$5–$15",
      activities: "$10–$30",
      total: "$65–$245",
    },
    whatToPack: {
      clothing: "Walking shoes",
      documents: "Passport",
      gadgets: "Camera",
      other: "Nothing special (deer crackers sold everywhere!)",
    },
    travelTips: {
      safety: "Very safe; watch your fingers with the deer!",
      money: "Cash is better for temple fees.",
      etiquette: "Bow to the deer (they might bow back).",
      reminder: "Last entrance to temples is often 4pm or 5pm.",
    },
    photoSpots: [
      "Great Buddha at Todai-ji",
      "Deer in Nara Park",
      "Lanterns at Kasuga Taisha",
    ],
    itinerary: [
      {
        day: 1,
        focus: "History & Nature",
        morning: "Todai-ji Temple",
        afternoon: "Nara Park & Kasuga Taisha",
        evening: "Naramachi old town walk",
      },
    ],
  },
  {
    id: "hakone",
    destinationName: "Hakone",
    country: "Japan",
    bestTime: "March–May, October–November",
    lengthOfStay: "1–2 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "A mountainous resort town famous for hot springs, art museums, and some of the best views of Mount Fuji across Lake Ashi.",
    heroImage:
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Narita (NRT) or Haneda (HND)",
      transportation: "Odakyu 'Romancecar' from Shinjuku Station (85 mins).",
      visa: "Same as Japan entry rules.",
    },
    whereToStay: {
      budget: {
        name: "Hakone Guesthouse",
        why: "Affordable and cozy with shared onsen.",
      },
      midRange: {
        name: "Hakone Hotel",
        why: "Great views across Lake Ashi.",
      },
      luxury: {
        name: "Gora Kadan",
        why: "One of Japan's most prestigious luxury ryokans.",
      },
    },
    thingsToDo: [
      {
        name: "Hakone Ropeway & Owakudani",
        why: "Active volcanic valley with sulfur vents and 'Black Eggs'.",
        fee: "Included in Hakone Free Pass (~¥6,100 for 2 days)",
        bestTime: "Morning (clear Fuji views)",
        image:
          "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Lake Ashi Sightseeing Cruise",
        why: " 'Pirate Ship' cruise with views of the floating Torii gate.",
        fee: "Included in Hakone Free Pass",
        bestTime: "Afternoon",
        image:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Hakone Open-Air Museum",
        why: "World-class sculptures set against a stunning mountain backdrop.",
        fee: "~¥1,600",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1528360983277-13d401ca1869?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Hakone Akatsukian",
          typeAndPrice: "Handmade Soba noodles (Budget)",
        },
        {
          name: "Itoyama",
          typeAndPrice: "Fine dining with lake views (Mid-range)",
        },
      ],
      mustTryDish: "Black Eggs (Kuro-tamago) from Owakudani",
    },
    gettingAround: {
      publicTransport: "Hakone Ropeway, Cable Car, Tozan Railway, Cruise ship",
      apps: ["Google Maps"],
      dailyBudget: "$20–$50",
    },
    dailyBudget: {
      accommodation: "$50–$400",
      food: "$30–$100",
      transportation: "$20–$40",
      activities: "$20–$50",
      total: "$120–$590",
    },
    whatToPack: {
      clothing:
        "Layers (mountain weather is cool), swimwear (if needed for onsen)",
      documents: "Passport, Hakone Free Pass",
      gadgets: "Camera",
      other: "None",
    },
    travelTips: {
      safety: "Safe mountain area; follow volcanic alerts.",
      money: "Hakone Free Pass covers almost all transport.",
      etiquette: "Follow onsen etiquette (wash before entering).",
      reminder: "Onsen use usually requires being completely naked.",
    },
    photoSpots: [
      "Floating Torii gate from Lake Ashi",
      "Mount Fuji from Owakudani",
      "Open-Air Museum sculptures",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Mountains & Fuji",
        morning: "Tozan Railway to Gora",
        afternoon: "Ropeway to Owakudani",
        evening: "Relax in Ryokan Onsen",
      },
      {
        day: 2,
        focus: "Lake & Art",
        morning: "Lake Ashi cruise",
        afternoon: "Hakone Open-Air Museum",
        evening: "Return to Shinjuku",
      },
    ],
  },
  {
    id: "himeji",
    destinationName: "Himeji",
    country: "Japan",
    bestTime: "March–May, October–November",
    lengthOfStay: "Half-day to 1 day",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Home to Japan’s most spectacular and best-preserved feudal castle, nicknamed 'The White Heron' for its elegant white exterior.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773492029/Himeji-Castle-Himeji-City-Guide-featured_xpganh.jpg",
    howToGetThere: {
      nearestAirport: "Kansai International (KIX)",
      transportation: "Shinkansen from Osaka (30 mins) or Kyoto (50 mins).",
      visa: "Same as Japan entry rules.",
    },
    whereToStay: {
      budget: {
        name: "Himeji Castle Hostel",
        why: "Cheap and near the castle.",
      },
      midRange: {
        name: "Daiwa Roynet Hotel Himeji",
        why: "Modern and professional.",
      },
      luxury: {
        name: "Hotel Nikko Himeji",
        why: "Classic luxury near Himeji Station.",
      },
    },
    thingsToDo: [
      {
        name: "Himeji Castle",
        why: "A UNESCO site and a National Treasure; the finest surviving castle in Japan.",
        fee: "¥2,500 (Price increase for tourists starting March 2026)",
        bestTime: "9:00 AM",
        image:
          "https://images.unsplash.com/photo-1588668214407-6ec97cb006c8?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Kokoen Garden",
        why: "Nine beautiful Japanese gardens located right next to the castle.",
        fee: "~¥310 (or combo ticket with castle)",
        bestTime: "Afternoon",
        image:
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Mount Shosha (Engyo-ji Temple)",
        why: "A quiet mountain temple used as a filming location for The Last Samurai.",
        fee: "~¥1,000 (Ropeway)",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Koba & More",
          typeAndPrice: "Affordable Bento & Curry (Budget)",
        },
        {
          name: "Kappo Himeji",
          typeAndPrice: "Local seafood specialties (Mid-range)",
        },
      ],
      mustTryDish: "Himeji Oden (with ginger soy sauce)",
    },
    gettingAround: {
      publicTransport: "Loop Bus, Shinkansen",
      apps: ["Google Maps"],
      dailyBudget: "$5–$15",
    },
    dailyBudget: {
      accommodation: "$30–$200",
      food: "$20–$50",
      transportation: "$5–$15",
      activities: "$20–$40",
      total: "$75–$305",
    },
    whatToPack: {
      clothing: "Walking shoes (castle climb is steep)",
      documents: "Passport",
      gadgets: "Camera",
      other: "None",
    },
    travelTips: {
      safety: "Safe city with easy layout.",
      money: "Castle entrance accepts credit cards.",
      etiquette: "Take off shoes when entering the castle keep.",
      reminder:
        "Climbing to the top of the castle involves very steep wooden stairs.",
    },
    photoSpots: [
      "Himeji Castle from the main lawn",
      "Kokoen Garden reflection",
      "Main gate looking up at the keep",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Castles & Gardens",
        morning: "Himeji Castle exploration",
        afternoon: "Kokoen Garden lunch",
        evening: "Mt. Shosha temple visit",
      },
    ],
  },
  {
    id: "hong-kong",
    destinationName: "Hong Kong",
    country: "China (SAR)",
    bestTime: "October–December (Cool and dry)",
    lengthOfStay: "3–4 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "Hong Kong is a high-octane fusion of East and West, where neon-lit skyscrapers tower over traditional street markets. It is a city of stunning harbor views, world-class shopping, and an incredible culinary scene that ranges from humble dim sum to Michelin-starred fine dining.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467482/IMG20241005110952_dbcsui.jpg",
    howToGetThere: {
      nearestAirport: "Hong Kong International Airport (HKG)",
      transportation:
        "Airport Express Train (24 mins to Central), Public Bus (A-routes), Taxi",
      visa: "Visa-free for many nationalities including US, UK, EU, and ASEAN for 7–180 days.",
    },
    whereToStay: {
      budget: {
        name: "Yesinn @YMT (Yau Ma Tei)",
        why: "Clean, modern, and located in the heart of the local market district.",
      },
      midRange: {
        name: "The Charterhouse Causeway Bay",
        why: "Strategic location near shopping hubs and efficient transport links.",
      },
      luxury: {
        name: "The Peninsula Hong Kong",
        why: "The 'Grande Dame of the Far East' offering unmatched colonial elegance and harbor views.",
      },
    },
    thingsToDo: [
      {
        name: "Victoria Peak (The Peak)",
        why: "Unbeatable panoramic views of the city skyline and Victoria Harbour.",
        fee: "~HK$88 (Peak Tram Return)",
        bestTime: "Sunset",
        image:
          "https://images.unsplash.com/photo-1543165365-07232ed12abd?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Tian Tan Buddha (Big Buddha)",
        why: "A massive bronze Buddha statue reachable by a scenic cable car ride.",
        fee: "Free (Buddha) / ~HK$270+ (Cable Car)",
        bestTime: "Morning (10:00 AM)",
        image:
          "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Avenue of Stars & Symphony of Lights",
        why: "Tribute to HK cinema with the world's largest light and sound show.",
        fee: "Free",
        bestTime: "8:00 PM (Show start time)",
        image:
          "https://images.unsplash.com/photo-1506353323425-46fd209fc28d?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Tim Ho Wan",
          typeAndPrice: "Famous dim sum (Budget/Mid-range)",
        },
        {
          name: "Tsim Chai Kee",
          typeAndPrice: "Legendary wonton noodles (Budget)",
        },
      ],
      mustTryDish: "Egg Waffles (Gai Daan Jai) or Roast Goose",
    },
    gettingAround: {
      publicTransport: "MTR (Subway), Star Ferry, Tram ('Ding Ding')",
      apps: ["Google Maps", "MTR Mobile"],
      dailyBudget: "$5–$15",
    },
    dailyBudget: {
      accommodation: "$40–$250",
      food: "$20–$60",
      transportation: "$5–$15",
      activities: "$15–$80",
      total: "$80–$405",
    },
    whatToPack: {
      clothing: "Light layers, comfortable walking shoes",
      documents: "Passport, Octopus Card",
      gadgets: "Universal adapter (Type G), Power bank",
      other: "Compact umbrella",
    },
    travelTips: {
      safety: "Stay alert in crowded markets like Mong Kok.",
      money: "Octopus Card is essential for transport and shops.",
      etiquette: "Escalator: Stand on the right, walk on the left.",
      reminder: "Most restaurants add 10% service charge.",
    },
    photoSpots: [
      "Choi Hung Estate",
      "Monster Building (Quarry Bay)",
      "Victoria Harbour waterfront",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Skyline & Harbour",
        morning: "Victoria Peak",
        afternoon: "Central/Old Town Central",
        evening: "Star Ferry to Tsim Sha Tsui",
      },
      {
        day: 2,
        focus: "Nature & Culture",
        morning: "Lantau Island (Big Buddha)",
        afternoon: "Tai O Fishing Village",
        evening: "Mong Kok Night Markets",
      },
      {
        day: 3,
        focus: "City Gardens & Shopping",
        morning: "Nan Lian Garden",
        afternoon: "Causeway Bay shopping",
        evening: "Sky100 or Rooftop bar",
      },
    ],
  },
  {
    id: "macau",
    destinationName: "Macau",
    country: "China (SAR)",
    bestTime: "October–December",
    lengthOfStay: "1–2 days (often a day trip from HK)",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "Macau is a fascinating blend of Portuguese colonial history and glitzy, modern casino resorts. You can walk through cobblestone European squares in the morning and visit the world's largest casinos in the afternoon.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467411/IMG20240930205702_etkiyf.jpg",
    howToGetThere: {
      nearestAirport: "Macau International Airport (MFM)",
      transportation: "Free Hotel Shuttle Buses, Taxi, Public Bus, or LRT.",
      visa: "Similar to Hong Kong; most Western and ASEAN passports are visa-free.",
    },
    whereToStay: {
      budget: {
        name: "San Va Hospedaria",
        why: "Historic, no-frills guest house featured in many films; located in the old town.",
      },
      midRange: {
        name: "Hotel Royal Macau",
        why: "Near the city center with great service and an indoor pool.",
      },
      luxury: {
        name: "The Venetian Macao or The Londoner",
        why: "Massive integrated resorts with themed canals and world-class entertainment.",
      },
    },
    thingsToDo: [
      {
        name: "Ruins of St. Paul's",
        why: "The iconic stone facade of a 17th-century Portuguese church.",
        fee: "Free",
        bestTime: "Before 9:00 AM",
        image:
          "https://images.unsplash.com/photo-1590333247333-826040742d4a?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Senado Square",
        why: "The heart of the historic center with beautiful mosaic tiles and colonial buildings.",
        fee: "Free",
        bestTime: "Late afternoon",
        image:
          "https://images.unsplash.com/photo-1616484173745-af9077977609?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "The Cotai Strip",
        why: "To see the spectacular scale of casinos like The Venetian and Parisian.",
        fee: "Free to enter resorts",
        bestTime: "Night (for the lights)",
        image:
          "https://images.unsplash.com/photo-1590333247504-0370884638fa?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Lord Stow’s Bakery",
          typeAndPrice: "Portuguese Egg Tarts (Budget)",
        },
        {
          name: "Restaurante Litoral",
          typeAndPrice: "Authentic Macanese/Portuguese (Mid-range)",
        },
      ],
      mustTryDish: "Portuguese Egg Tart or Pork Chop Bun",
    },
    gettingAround: {
      publicTransport: "Public Buses, LRT, Free Hotel Shuttles",
      apps: ["Bus Macau"],
      dailyBudget: "$0–$10",
    },
    dailyBudget: {
      accommodation: "$50–$400",
      food: "$20–$80",
      transportation: "$0–$15",
      activities: "$0–$100",
      total: "$70–$595",
    },
    whatToPack: {
      clothing: "Smart casual, comfortable walking shoes",
      documents: "Passport, Ferry tickets",
      gadgets: "Universal adapter (Type G), Power bank",
      other: "Macau Pass (optional)",
    },
    travelTips: {
      safety: "Stick to well-lit areas in the old town at night.",
      money: "HKD is accepted everywhere 1:1.",
      etiquette: "Photography strictly prohibited inside gaming areas.",
      reminder: "Use free shuttle buses to save money.",
    },
    photoSpots: [
      "Ruins of St. Paul's",
      "The Parisian Macao (Eiffel Tower)",
      "Fisherman’s Wharf",
    ],
    itinerary: [
      {
        day: 1,
        focus: "History & Heritage",
        morning: "Senado Square & Ruins of St. Paul's",
        afternoon: "Monte Fort",
        evening: "Dinner in the historic center",
      },
      {
        day: 2,
        focus: "The Glitz & Glam",
        morning: "Taipa Village",
        afternoon: "Cotai Strip resort hopping",
        evening: "The House of Dancing Water show",
      },
      {
        day: 3,
        focus: "Quiet Villages",
        morning: "Coloane Village",
        afternoon: "Hac Sa Beach",
        evening: "Macau Tower",
      },
    ],
  },
  {
    id: "hong-kong-trip-2",
    destinationName: "Hong Kong (Local Soul)",
    country: "China (SAR)",
    bestTime: "October–December (Cool/Dry)",
    lengthOfStay: "3–4 days",
    budgetRange: "Mid-range",
    quickDescription:
      "A deep dive into HK's heritage, featuring traditional fishing villages, world-class modern art, and local 'Insta-famous' architecture.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467478/IMG20241003183156_xazhy7.jpg",
    howToGetThere: {
      nearestAirport: "Hong Kong International Airport (HKG)",
      transportation: "Airport Express, Bus A21, Red Taxi.",
      visa: "Visa-free for many (US, UK, ASEAN).",
    },
    whereToStay: {
      budget: {
        name: "Mei Ho House",
        why: "Heritage hostel in Sham Shui Po.",
      },
      midRange: {
        name: "Page148",
        why: "Boutique hotel in the heart of Tsim Sha Tsui.",
      },
      luxury: {
        name: "The Rosewood",
        why: "Ultra-luxury hotel at Victoria Dockside.",
      },
    },
    thingsToDo: [
      {
        name: "M+ Museum",
        why: "World-class modern art and design at West Kowloon.",
        fee: "~HK$190",
        bestTime: "Weekday morning",
        image:
          "https://images.unsplash.com/photo-1543165365-07232ed12abd?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Tai O Village",
        why: "Historic fishing village with traditional stilt houses.",
        fee: "Free",
        bestTime: "Late afternoon",
        image:
          "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Dragon’s Back (Hiking)",
        why: "Popular trail with spectacular coastal views.",
        fee: "Free",
        bestTime: "Early morning",
        image:
          "https://images.unsplash.com/photo-1543165365-07232ed12abd?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        { name: "Kung Wo Tofu", typeAndPrice: "Tofu snacks (Budget)" },
        {
          name: "Under Bridge Spicy Crab",
          typeAndPrice: "Seafood (Mid-range)",
        },
      ],
      mustTryDish: "Claypot Rice",
    },
    gettingAround: {
      publicTransport: "MTR, 'Ding Ding' Tram, Star Ferry",
      apps: ["MTR Mobile", "Citymapper"],
      dailyBudget: "$10",
    },
    dailyBudget: {
      accommodation: "$60",
      food: "$40",
      transportation: "$10",
      activities: "$25",
      total: "$135",
    },
    whatToPack: {
      clothing: "Light layers, non-slip shoes",
      documents: "Passport, Octopus Card",
      gadgets: "Type G adapter, Power bank",
      other: "Compact umbrella",
    },
    travelTips: {
      safety: "Watch for pickpockets in crowded markets.",
      money: "Use Octopus for 90% of transactions.",
      etiquette: "Stand on the right on escalators.",
      reminder: "No eating/drinking on the MTR.",
    },
    photoSpots: [
      "Lok Wah South Estate (Blue circles)",
      "Choi Hung Estate (Rainbow)",
      "Sai Wan Swimming Shed",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Art & History",
        morning: "M+ Museum at West Kowloon",
        afternoon: "Heritage walk in Sham Shui Po",
        evening: "Skyline views from West Kowloon Art Park",
      },
      {
        day: 2,
        focus: "Nature & Local Life",
        morning: "Hike Dragon's Back",
        afternoon: "Seafood lunch and stilt houses at Tai O Village",
        evening: "Dinner in trendy Kennedy Town",
      },
      {
        day: 3,
        focus: "Islands & Estates",
        morning: "Ferry to Cheung Chau Island for street food",
        afternoon: "Photo ops at Choi Hung & Lok Wah Estates",
        evening: "Rooftop drinks in Causeway Bay",
      },
    ],
  },
  {
    id: "almaty",
    destinationName: "Almaty",
    country: "Kazakhstan",
    bestTime: "June–Sept (Hiking) / Dec–Feb (Ski)",
    lengthOfStay: "4–5 Days",
    budgetRange: "Budget-Friendly",
    quickDescription:
      "A sophisticated Eurasian city at the foot of the mountains, blending Soviet history with trendy café culture and stunning alpine scenery.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466190/DJI_20251105125104_0022_D_wuyy5t.jpg",
    howToGetThere: {
      nearestAirport: "Almaty (ALA)",
      transportation: "Yandex Go (App), Bus 92.",
      visa: "Visa-free (30 days) for many (inc. Philippines).",
    },
    whereToStay: {
      budget: {
        name: "My Hostel Almaty",
        why: "Highly rated, social and clean.",
      },
      midRange: {
        name: "Hotel Kazakhstan",
        why: "Iconic Soviet-era skyscraper with great views.",
      },
      luxury: {
        name: "Ritz-Carlton Almaty",
        why: "Stunning views from the Esentai Tower.",
      },
    },
    thingsToDo: [
      {
        name: "Shymbulak/Medeu",
        why: "Alpine scenery, world-class skating rink, and skiing peaks.",
        fee: "Free (Cable Car ~¥12)",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Charyn Canyon",
        why: "Known as the 'Little Grand Canyon' of Central Asia.",
        fee: "~$3",
        bestTime: "Full-day trip",
        image:
          "https://images.unsplash.com/photo-1628102431718-e30129dc370f?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Zenkov Cathedral",
        why: "Colorful 19th-century wooden church built without nails.",
        fee: "Free",
        bestTime: "Afternoon",
        image:
          "https://images.unsplash.com/photo-1579737194883-75f8f8ed945c?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Green Bazaar",
          typeAndPrice: "Local snacks and street food (Budget)",
        },
        {
          name: "Navat",
          typeAndPrice: "Traditional Central Asian tea house (Mid-range)",
        },
      ],
      mustTryDish: "Beshbarmak (Meat & Pasta)",
    },
    gettingAround: {
      publicTransport: "Metro, Bus, Yandex Go",
      apps: ["Yandex Go"],
      dailyBudget: "$5",
    },
    dailyBudget: {
      accommodation: "$25",
      food: "$20",
      transportation: "$5",
      activities: "$15",
      total: "$65",
    },
    whatToPack: {
      clothing: "Hiking gear or heavy winter wear (seasonal)",
      documents: "Passport",
      gadgets: "Type C/F adapter, Power bank",
      other: "Lip balm (dry air)",
    },
    travelTips: {
      safety: "Stick to registered apps (Yandex) for taxis.",
      money: "Exchange USD/EUR to Tenge (KZT) in town.",
      etiquette: "Remove shoes when entering homes.",
      reminder: "Download offline Google Maps.",
    },
    photoSpots: ["Shymbulak Peaks", "Zenkov Cathedral", "Kok Tobe City Views"],
    itinerary: [
      {
        day: 1,
        focus: "City Highlights",
        morning: "Zenkov Cathedral and Panfilov Park",
        afternoon: "Shopping at Green Bazaar",
        evening: "Kok Tobe Hill for sunset city views",
      },
      {
        day: 2,
        focus: "The High Mountains",
        morning: "Medeu Skating Rink",
        afternoon: "Cable car to Shymbulak Ski Resort",
        evening: "Dinner at a traditional cafe in the city center",
      },
      {
        day: 3,
        focus: "Nature Escape",
        morning: "Full-day excursion to Charyn Canyon",
        afternoon: "Hiking the 'Valley of Castles'",
        evening: "Return to Almaty for a spa session at Arasan Baths",
      },
    ],
  },
  {
    id: "tashkent",
    destinationName: "Tashkent",
    country: "Uzbekistan",
    bestTime: "March–June and September–October",
    lengthOfStay: "2–3 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Tashkent is a fascinating mix of Soviet-era architecture, modern skyscrapers, and ancient Silk Road history. It is the greenest city in Central Asia, known for its museum-like metro stations and world-famous Plov.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468423/DJI_20251115160545_0040_D_j5eoy1.jpg",
    howToGetThere: {
      nearestAirport: "Tashkent International Airport (TAS)",
      transportation: "Yandex Go app, Taxi, or Public Bus.",
      visa: "e-Visa required for many (~$20); Visa-free for EU, UK, and US.",
    },
    whereToStay: {
      budget: {
        name: "Jahongir B&B",
        why: "Authentic local feel, family-run, and near Chorsu Bazaar.",
      },
      midRange: {
        name: "Lotte City Hotel Tashkent Palace",
        why: "Stunning classic architecture and prime central location.",
      },
      luxury: {
        name: "Hyatt Regency Tashkent",
        why: "World-class 5-star amenities in the modern heart of the city.",
      },
    },
    thingsToDo: [
      {
        name: "Chorsu Bazaar",
        why: "A massive blue-domed traditional market; the heart of local life.",
        fee: "Free",
        bestTime: "Morning (9:00 AM)",
        image:
          "https://images.unsplash.com/photo-1528642463367-7cb9a826702c?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Hazrati Imam Complex",
        why: "Spiritual center housing the world's oldest Quran (7th century).",
        fee: "Free (Small fee for library)",
        bestTime: "Early afternoon",
        image:
          "https://images.unsplash.com/photo-1589405234141-86a073584852?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Tashkent Metro Tour",
        why: "Every station is an art gallery (e.g., Kosmonavtlar).",
        fee: "~$0.15 per ride",
        bestTime: "Mid-day (avoid rush hour)",
        image:
          "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Besh Qozon",
          typeAndPrice: "Central Asian Plov Center (Budget: ~$4)",
        },
        {
          name: "Navat",
          typeAndPrice: "Traditional decor and local menu (Mid-range: ~$15)",
        },
      ],
      mustTryDish: "Tashkent Plov (Rice, meat, and carrots) and Samsa",
    },
    gettingAround: {
      publicTransport: "Metro, Buses, Shared Taxis",
      apps: ["Yandex Go"],
      dailyBudget: "$5–$10",
    },
    dailyBudget: {
      accommodation: "$20–$120",
      food: "$10–$30",
      transportation: "$3–$10",
      activities: "$5–$15",
      total: "$38–$175",
    },
    whatToPack: {
      clothing: "Modest clothing, light layers for desert nights",
      documents: "Passport, e-Visa printout, Hotel registration slips",
      gadgets: "Power bank, Type C/F adapter",
      other: "Cash (USD for exchange)",
    },
    travelTips: {
      safety: "Stick to Yandex Go rather than street-hailing.",
      money: "Use the Metro; it’s one of the cheapest in the world.",
      etiquette: "Always break bread by hand; never put it face-down.",
      reminder: "Declare prescription medications upon arrival.",
    },
    photoSpots: [
      "Blue domes of Chorsu Bazaar",
      "Kosmonavtlar Metro Station",
      "Hotel Uzbekistan (Soviet-brutalist)",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Market & Tradition",
        morning: "Chorsu Bazaar",
        afternoon: "Kukeldash Madrasah",
        evening: "Dinner at Plov Center",
      },
      {
        day: 2,
        focus: "Spirituality & Art",
        morning: "Hazrati Imam Complex",
        afternoon: "Metro hopping tour",
        evening: "Tashkent City Park fountains",
      },
      {
        day: 3,
        focus: "History & Parks",
        morning: "Museum of Applied Arts",
        afternoon: "Independence Square",
        evening: "Farewell dinner at Navat",
      },
    ],
  },
  {
    id: "samarkand",
    destinationName: "Samarkand",
    country: "Uzbekistan",
    bestTime: "April–May and September–October",
    lengthOfStay: "2–3 days",
    budgetRange: "Mid-range",
    quickDescription:
      "Often called the 'Pearl of the East,' Samarkand is home to some of the most breathtaking Islamic architecture in the world. It is a city defined by massive turquoise domes, intricate mosaic tiles, and the legendary history of the conqueror Amir Timur.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468496/DJI_20251110162400_0049_D_dgkbll.jpg",
    howToGetThere: {
      nearestAirport: "Samarkand International Airport (SKD)",
      transportation: "Yandex Go, Public Bus, or private transfers.",
      visa: "e-Visa required for many (~$20); Visa-free for EU, UK, and US.",
    },
    whereToStay: {
      budget: {
        name: "Amir Hostel",
        why: "Extremely close to Registan Square and popular with backpackers.",
      },
      midRange: {
        name: "Bibi-Khanym Hotel",
        why: "Traditional decor with a rooftop view facing the Bibi-Khanym Mosque.",
      },
      luxury: {
        name: "Sangzor Boutique Hotel",
        why: "High-end comfort close to the historic heart.",
      },
    },
    thingsToDo: [
      {
        name: "Registan Square",
        why: "The most iconic square in Central Asia, flanked by three massive Madrasahs.",
        fee: "~100,000 UZS (~$8)",
        bestTime: "Sunset / Night Show",
        image:
          "https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Shah-i-Zinda",
        why: "A narrow 'street' of tombs featuring the most intense blue tilework in the world.",
        fee: "~50,000 UZS (~$4)",
        bestTime: "Early morning",
        image:
          "https://images.unsplash.com/photo-1589405234141-86a073584852?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Gur-e-Amir (Amir Timur’s Mausoleum)",
        why: "The final resting place of Tamerlane; interior covered in real gold leaf and jade.",
        fee: "~75,000 UZS (~$6)",
        bestTime: "Late evening",
        image:
          "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Ikrom Shashlik",
          typeAndPrice: "Famous for best kebabs (Budget: ~$1 per skewer)",
        },
        {
          name: "Platan",
          typeAndPrice:
            "Mix of Uzbek and European cuisine (Mid-range: ~$15–$25)",
        },
      ],
      mustTryDish: "Samarkand Plov and Samarkand Bread",
    },
    gettingAround: {
      publicTransport: "Taxis, local minibuses (Damas), and Tram",
      apps: ["Yandex Go"],
      dailyBudget: "$3–$8",
    },
    dailyBudget: {
      accommodation: "$20–$100",
      food: "$10–$30",
      transportation: "$2–$5",
      activities: "$15–$25",
      total: "$47–$160",
    },
    whatToPack: {
      clothing: "Modest attire, comfortable walking shoes",
      documents: "Passport, e-Visa, high-speed train tickets",
      gadgets: "Universal 2-pin adapter, high-quality camera",
      other: "Cash (New crisp USD bills)",
    },
    travelTips: {
      safety: "The old city is very safe; watch for uneven sidewalks.",
      money: "Registan light show has a free viewing platform.",
      etiquette: "Never place bread face-down; it's disrespectful.",
      reminder: "Book high-speed train tickets 4-6 weeks in advance.",
    },
    photoSpots: [
      "Tilya-Kori Madrasah gold ceiling",
      "Blue Corridor of Shah-i-Zinda",
      "Bibi-Khanym Mosque facade",
    ],
    itinerary: [
      {
        day: 1,
        focus: "The Icons",
        morning: "Registan Square",
        afternoon: "Siyob Bazaar & Bibi-Khanym Mosque",
        evening: "Registan Light Show",
      },
      {
        day: 2,
        focus: "History & Culture",
        morning: "Shah-i-Zinda Necropolis",
        afternoon: "Ulugh Beg Observatory",
        evening: "Dinner at a local's home",
      },
      {
        day: 3,
        focus: "Heritage & Craft",
        morning: "Gur-e-Amir Mausoleum",
        afternoon: "Paper Mill at Konigil Village",
        evening: "Stroll along University Boulevard",
      },
    ],
  },
  {
    id: "bukhara",
    destinationName: "Bukhara",
    country: "Uzbekistan",
    bestTime: "April–May and September–October",
    lengthOfStay: "2 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Bukhara is an ancient oasis that feels like an open-air museum with over 2,000 years of history. Unlike the grand scale of Samarkand, Bukhara is compact and walkable, filled with mud-brick labyrinthine streets and blue-tiled mosques.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468445/DJI_20251115183110_0109_D_m4rlkk.jpg",
    howToGetThere: {
      nearestAirport: "Bukhara International Airport (BHK)",
      transportation:
        "Yandex Go, Taxi, or Public Bus. Most arrive via Afrosiyob train.",
      visa: "e-Visa required for many (~$20); Visa-free for EU, UK, and US.",
    },
    whereToStay: {
      budget: {
        name: "Rumi Hotel",
        why: "Affordable, cozy, and located in the heart of the historic Old City.",
      },
      midRange: {
        name: "Komil Bukhara Boutique Hotel",
        why: "Famous for its stunning 19th-century traditional dining room.",
      },
      luxury: {
        name: "Mercure Bukhara Old Town",
        why: "Modern 5-star luxury located just a short walk from historic landmarks.",
      },
    },
    thingsToDo: [
      {
        name: "Po-i-Kalyan Complex",
        why: "Home to the Kalyan Minaret, which Genghis Khan spared from destruction.",
        fee: "Free to walk; ~$3 for Madrasah interiors",
        bestTime: "Sunset",
        image:
          "https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "The Ark of Bukhara",
        why: "A massive 5th-century fortress that served as the residence of the Emirs.",
        fee: "~40,000 UZS (~$3)",
        bestTime: "Early morning",
        image:
          "https://images.unsplash.com/photo-1589405234141-86a073584852?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Chor Minor",
        why: "A charming gatehouse with four blue-domed towers representing different religions.",
        fee: "Free",
        bestTime: "Afternoon",
        image:
          "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "The Old House (Adras)",
          typeAndPrice:
            "Traditional food in a beautiful historic courtyard (Mid-range: ~$15)",
        },
        {
          name: "Ayvan Design",
          typeAndPrice: "Modern twist on Uzbek classics (Mid-range: ~$20)",
        },
      ],
      mustTryDish: "Bukhara Plov (Oshi Sofi)",
    },
    gettingAround: {
      publicTransport:
        "Taxis and small buses. Old City is best explored on foot.",
      apps: ["Yandex Go"],
      dailyBudget: "$2–$5",
    },
    dailyBudget: {
      accommodation: "$20–$90",
      food: "$10–$25",
      transportation: "$2–$5",
      activities: "$10–$20",
      total: "$42–$140",
    },
    whatToPack: {
      clothing: "Modest clothes, wide-brimmed hat, sturdy walking shoes",
      documents: "Passport, e-Visa, Afrosiyob train tickets",
      gadgets: "Power bank and Type C/F adapter",
      other: "Cash (UZS) for the bazaars",
    },
    travelTips: {
      safety: "Be mindful of your footing on uneven ancient brick paths.",
      money: "Bargaining is expected in the Trading Domes (Bazaars).",
      etiquette: "Bukhara can be hotter than Tashkent; stay hydrated.",
      reminder: "Most major sights are free to view from the outside.",
    },
    photoSpots: [
      "Lyabi-Hauz reflecting pool at night",
      "Kalyan Minaret from cafe balconies",
      "Four towers of Chor Minor",
    ],
    itinerary: [
      {
        day: 1,
        focus: "The Old City",
        morning: "Po-i-Kalyan Complex",
        afternoon: "Shopping in the Trading Domes",
        evening: "Dinner at Lyabi-Hauz",
      },
      {
        day: 2,
        focus: "Fortress & Gates",
        morning: "The Ark Fortress & Bolo Haouz Mosque",
        afternoon: "Chor Minor",
        evening: "Traditional puppet show",
      },
      {
        day: 3,
        focus: "Summer Palace",
        morning: "Sitorai Mokhi-Khosa",
        afternoon: "Bahoutdin Naqshband Mausoleum",
        evening: "Departure via train",
      },
    ],
  },
  {
    id: "dushanbe",
    destinationName: "Dushanbe",
    country: "Tajikistan",
    bestTime: "April–June and September–October",
    lengthOfStay: "2–3 days",
    budgetRange: "Budget",
    quickDescription:
      "Dushanbe (meaning 'Monday' in Tajik) is a city of grand monuments, neoclassical Soviet architecture, and massive public parks. It serves as a sophisticated, tranquil gateway to the wild mountains of the Pamirs and the Fann range.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468286/DJI_20251119171759_0062_D_h5u5mc.jpg",
    howToGetThere: {
      nearestAirport: "Dushanbe International Airport (DYU)",
      transportation: "Yandex Go, local Trolleybus #4, or Marshrutka.",
      visa: "Visa-free for many (30 days) including Philippines, US, UK, and EU.",
    },
    whereToStay: {
      budget: {
        name: "Greenhouse Hostel",
        why: "Social hub for travelers, very clean, and offers help with GBAO permits.",
      },
      midRange: {
        name: "Hotel Atlas",
        why: "Comfortable, traditional hospitality and central location.",
      },
      luxury: {
        name: "Hyatt Regency Dushanbe",
        why: "Top-tier 5-star luxury near the main city park.",
      },
    },
    thingsToDo: [
      {
        name: "National Museum of Tajikistan",
        why: "Features the famous 13-meter sleeping Buddha.",
        fee: "~35 TJS (~$3)",
        bestTime: "Morning (10:00 AM)",
        image:
          "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Ismoil Somoni Statue & Rudaki Park",
        why: "The heart of the city featuring one of the world's tallest flagpoles.",
        fee: "Free",
        bestTime: "Sunset",
        image:
          "https://images.unsplash.com/photo-1579737194883-75f8f8ed945c?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Mehrgon Bazaar",
        why: "A beautifully designed 'palace' bazaar with incredible displays.",
        fee: "Free",
        bestTime: "Early morning",
        image:
          "https://images.unsplash.com/photo-1528642463367-7cb9a826702c?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Rohat Chaikhona",
          typeAndPrice: "Most famous traditional teahouse (Budget: ~$5)",
        },
        {
          name: "Toqi",
          typeAndPrice:
            "Authentic Tajik cuisine with outdoor terrace (Mid-range: ~$10–$15)",
        },
      ],
      mustTryDish: "Qurutob (National dish: bread, yogurt sauce, and onions)",
    },
    gettingAround: {
      publicTransport: "Marshrutkas, Trolleybuses, and shared taxis",
      apps: ["Yandex Go"],
      dailyBudget: "$2–$6",
    },
    dailyBudget: {
      accommodation: "$10–$150",
      food: "$8–$25",
      transportation: "$2–$10",
      activities: "$5–$15",
      total: "$25–$200",
    },
    whatToPack: {
      clothing: "Modest clothing, light layers",
      documents: "Passport, GBAO permit",
      gadgets: "Power bank, Type C/F adapter",
      other: "High-SPF sunscreen",
    },
    travelTips: {
      safety: "Dushanbe is very safe; keep your passport copy on you.",
      money: "Eat at 'Chaikhonas' for high-quality, low-cost meals.",
      etiquette: "Never put bread face-down; always break it by hand.",
      reminder: "ATMs can run out of cash; keep a small USD/EUR backup.",
    },
    photoSpots: [
      "Ismoil Somoni Monument",
      "Atrium of Mehrgon Bazaar",
      "Kokhi Navruz (Navruz Palace)",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Park & Monument",
        morning: "Rudaki Park & Somoni Statue",
        afternoon: "National Museum of Tajikistan",
        evening: "Dinner at Rohat Chaikhona",
      },
      {
        day: 2,
        focus: "Market & Garden",
        morning: "Mehrgon Bazaar",
        afternoon: "Botanical Garden (Bogi Iram)",
        evening: "Victory Park for panoramic view",
      },
      {
        day: 3,
        focus: "Fortress & Palace",
        morning: "Excursion to Hissar Fortress",
        afternoon: "Kokhi Navruz Palace tour",
        evening: "Relax at a local spa",
      },
    ],
  },
  {
    id: "tbilisi",
    destinationName: "Tbilisi",
    country: "Georgia",
    bestTime: "May–June or September–October",
    lengthOfStay: "3–4 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "A city where ancient history meets a bohemian, modern spirit. Tbilisi is famous for its colorful carved balconies, sulfur baths, a world-class wine scene, and a skyline that blends medieval fortresses with futuristic architecture.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467225/DJI_20251127162710_0249_D_ft76cv.jpg",
    howToGetThere: {
      nearestAirport: "Tbilisi International Airport (TBS)",
      transportation: "Bolt app, Airport Bus #337, or Taxi.",
      visa: "e-Visa required for Filipinos (~$20); Visa-free for US, UK, EU, and many others.",
    },
    whereToStay: {
      budget: {
        name: "Fabrika Hostel",
        why: "A converted Soviet sewing factory that is now the city's coolest social hub.",
      },
      midRange: {
        name: "Rooms Hotel Tbilisi",
        why: "Industrial-chic design in the heart of the Vera district.",
      },
      luxury: {
        name: "The Stamba Hotel",
        why: "High-end luxury with stunning interiors and a prime location.",
      },
    },
    thingsToDo: [
      {
        name: "Narikala Fortress & Cable Car",
        why: "For the best panoramic views of the city and the 'Mother of Georgia' statue.",
        fee: "Fortress is Free; Cable car is 2.5 GEL (~$1)",
        bestTime: "Sunset",
        image:
          "https://images.unsplash.com/photo-1523585045050-0229875e5264?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Holy Trinity Cathedral (Sameba)",
        why: "One of the tallest Orthodox churches in the world; a massive landmark.",
        fee: "Free",
        bestTime: "Late afternoon",
        image:
          "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Abanotubani (Sulfur Baths)",
        why: "Historic brick-domed bathhouses where the city was founded.",
        fee: "Public ~$5; Private $20–$100/hr",
        bestTime: "Evening",
        image:
          "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Mapshalia",
          typeAndPrice: "Authentic Megrelian food (Budget: ~$5)",
        },
        {
          name: "Shavi Lomi",
          typeAndPrice: "Creative Georgian fusion (Mid-range: ~$15)",
        },
      ],
      mustTryDish: "Khachapuri Adjaruli (Cheese-filled bread boat with an egg)",
    },
    gettingAround: {
      publicTransport: "Metro and Buses (Metromoney card)",
      apps: ["Bolt"],
      dailyBudget: "$3–$7",
    },
    dailyBudget: {
      accommodation: "Varies",
      food: "Varies",
      transportation: "$3–$7",
      activities: "Varies",
      total: "$40–$150",
    },
    whatToPack: {
      clothing: "Comfortable shoes, layers, scarf for churches",
      documents: "Passport, health insurance, e-Visa",
      gadgets: "Type C/F travel adapter, Bolt app",
      other: "Refillable water bottle, umbrella",
    },
    travelTips: {
      safety:
        "Use Bolt to avoid overcharging. Be wary of bar invitation scams.",
      money: "Metromoney card is essential for cheap transport.",
      etiquette: "Take a sip if offered wine. Wait for the Tamada's toast.",
      reminder: "Mandatory health insurance ($30k GEL) required as of 2026.",
    },
    photoSpots: [
      "Gabriadze Clock Tower",
      "Sololaki District wooden balconies",
      "The Chronicles of Georgia (Stonehenge of Georgia)",
    ],
    itinerary: [
      {
        day: 1,
        focus: "City Views & Baths",
        morning: "Rudaki Park & Somoni Statue",
        afternoon: "Narikala Fortress & Cable Car",
        evening: "Sulfur Baths & Dinner",
      },
      {
        day: 2,
        focus: "History & Landmarks",
        morning: "Holy Trinity Cathedral",
        afternoon: "Sololaki Explorations",
        evening: "The Chronicles of Georgia",
      },
      {
        day: 3,
        focus: "Day Trips",
        morning: "Kazbegi (Stepantsminda)",
        afternoon: "Mtskheta (Old Capital)",
        evening: "Farewell dinner at Shavi Lomi",
      },
    ],
  },
  {
    id: "kazbegi",
    destinationName: "Kazbegi (Stepantsminda)",
    country: "Georgia",
    bestTime: "June–September (Green) or Jan–Feb (Snow)",
    lengthOfStay: "1–2 days",
    budgetRange: "Mid-range",
    quickDescription:
      "The quintessential Georgian mountain escape. It is home to the iconic Gergeti Trinity Church, perched against the backdrop of the massive 5,047m Mount Kazbek.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773467060/DJI_20251202153830_0017_D_dam0vo.jpg",
    howToGetThere: {
      nearestAirport: "Tbilisi (TBS), then overland.",
      transportation: "Marshrutka, Shared Taxi, or Private Transfer.",
      visa: "Common Georgian entry (same as Tbilisi).",
    },
    whereToStay: {
      budget: {
        name: "Camp Kuzburi",
        why: "Warm hospitality and delicious home-cooked meals.",
      },
      midRange: {
        name: "Hotel Terrace Kazbegi",
        why: "Modern rooms with huge balconies facing the mountains.",
      },
      luxury: {
        name: "Rooms Hotel Kazbegi",
        why: "Famous for its breathtaking terrace views and world-class design.",
      },
    },
    thingsToDo: [
      {
        name: "Gergeti Trinity Church",
        why: "A 14th-century church surrounded by high peaks; the most famous photo spot.",
        fee: "Free (4WD Taxi to top ~15-20 GEL)",
        bestTime: "Sunrise",
        image:
          "https://images.unsplash.com/photo-1523585045050-0229875e5264?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Gveleti Waterfalls",
        why: "Beautiful easy hike to two powerful waterfalls in a deep gorge.",
        fee: "Free",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Dariali Gorge",
        why: "Rugged landscapes near the border with a modern monastery.",
        fee: "Free",
        bestTime: "Mid-day",
        image:
          "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Shorena’s Bar",
          typeAndPrice: "Mountain staples in center (Budget: ~$8)",
        },
        {
          name: "Rooms Hotel Restaurant",
          typeAndPrice:
            "High-end dining with the best view (Mid-range/Luxury: ~$30)",
        },
      ],
      mustTryDish: "Mountain Khinkali (Lamb or beef dumplings)",
    },
    gettingAround: {
      publicTransport: "Walking and 4WD Delica Taxis",
      apps: ["Bolt (in Tbilisi to get here)"],
      dailyBudget: "$10–$20",
    },
    dailyBudget: {
      accommodation: "Varies",
      food: "Varies",
      transportation: "$10–$20",
      activities: "Varies",
      total: "$50–$200",
    },
    whatToPack: {
      clothing: "Windbreaker, fleece, sturdy hiking boots",
      documents: "Passport",
      gadgets: "Camera, Power bank",
      other: "High-SPF Sunscreen",
    },
    travelTips: {
      safety: "Military Road is safe but winding; use professional drivers.",
      money: "Marshrutka is 1/5th the price of a taxi from Tbilisi.",
      etiquette: "Cover heads and wear skirts in churches.",
      reminder: "Mountain weather changes extremely fast; be prepared.",
    },
    photoSpots: [
      "Mount Kazbek at Sunrise",
      "Gergeti Trinity Church facade",
      "Rooms Hotel Terrace view",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Arrival & Views",
        morning: "Travel from Tbilisi",
        afternoon: "Check-in & Terrace chill",
        evening: "Sunset at Gergeti Trinity",
      },
      {
        day: 2,
        focus: "Nature & Hike",
        morning: "Hike to Gveleti Waterfalls",
        afternoon: "Dariali Gorge excursion",
        evening: "Traditional dinner",
      },
      {
        day: 3,
        focus: "Relaxation",
        morning: "Breakfast with a view",
        afternoon: "Return to Tbilisi",
        evening: "Farewell in the capital",
      },
    ],
  },
  {
    id: "yerevan",
    destinationName: "Yerevan",
    country: "Armenia",
    bestTime: "May–June, September–October",
    lengthOfStay: "3–5 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Yerevan is one of the world's oldest inhabited cities, known as the 'Pink City' for its beautiful rosy volcanic stone architecture. It blends Soviet-era grandiosity with a hip, modern cafe culture, offering incredible mountain views and world-class hospitality.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466351/DJI_20251207105218_0012_D_rz4ksl.jpg",
    howToGetThere: {
      nearestAirport: "Zvartnots International Airport (EVN)",
      transportation: "GG (Local App), Yandex Go, Airport Express Bus.",
      visa: "Visa-free for many (US, EU, UK); e-visa available for others.",
    },
    whereToStay: {
      budget: {
        name: "Envoy Hostel",
        why: "Highly rated, social vibe, and located right in the city center.",
      },
      midRange: {
        name: "Republica Hotel Yerevan",
        why: "Stylish boutique hotel located just steps from Republic Square.",
      },
      luxury: {
        name: "The Alexander",
        why: "The city's premier luxury address with a world-class spa.",
      },
    },
    thingsToDo: [
      {
        name: "The Cascade Complex",
        why: "A massive limestone stairway with art exhibits and views of Mount Ararat.",
        fee: "Free",
        bestTime: "Sunset",
        image:
          "https://images.unsplash.com/photo-1549413233-066ec0407a97?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Republic Square",
        why: "The heart of the city featuring the 'Dancing Fountains' show.",
        fee: "Free",
        bestTime: "Evening (8:00 PM)",
        image:
          "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Vernissage Market",
        why: "Large open-air market for handmade crafts and Soviet antiques.",
        fee: "Free",
        bestTime: "Weekend mornings",
        image:
          "https://images.unsplash.com/photo-1528642463367-7cb9a826702c?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Lavash Restaurant",
          typeAndPrice: "Traditional Armenian (Mid-range)",
        },
        {
          name: "Tavern Yerevan",
          typeAndPrice: "Authentic BBQ/Khorovats (Mid-range)",
        },
      ],
      mustTryDish: "Tolma (Minced meat wrapped in grape leaves)",
    },
    gettingAround: {
      publicTransport: "Metro, Marshrutka, Buses",
      apps: ["GG", "Yandex Go"],
      dailyBudget: "$3–$8",
    },
    dailyBudget: {
      accommodation: "$15–$150",
      food: "$12–$35",
      transportation: "$3–$10",
      activities: "$5–$25",
      total: "$35–$220",
    },
    whatToPack: {
      clothing: "Modest layers for churches, comfortable walking shoes",
      documents: "Passport, Travel Insurance",
      gadgets: "Power bank, Type C/F adapter",
      other: "Refillable water bottle, Sunscreen",
    },
    travelTips: {
      safety: "Very safe at night; use official apps for taxis.",
      money: "Drink from the 'Pulpulaks'—free mountain water fountains.",
      etiquette: "Always remove shoes when entering an Armenian home.",
      reminder: "City comes alive after 8:00 PM; many places stay open late.",
    },
    photoSpots: [
      "Top of the Cascade",
      "Blue Mosque tile work",
      "Northern Avenue modern architecture",
    ],
    itinerary: [
      {
        day: 1,
        focus: "City Centers & Sunsets",
        morning: "Explore Republic Square",
        afternoon: "Walk Northern Avenue",
        evening: "Sunset at The Cascade",
      },
      {
        day: 2,
        focus: "History & Souvenirs",
        morning: "Genocide Memorial",
        afternoon: "Shopping at Vernissage",
        evening: "Brandy Tasting at Ararat Factory",
      },
      {
        day: 3,
        focus: "Ancient Outskirts",
        morning: "Garni Temple & Geghard Monastery",
        afternoon: "Hike Symphony of Stones",
        evening: "Farewell dinner at Sherep",
      },
    ],
  },
  {
    id: "tbilisi-beyond",
    destinationName: "Tbilisi & Beyond",
    country: "Georgia",
    bestTime: "May–June (Wildflowers) or Sept–October (Wine Harvest)",
    lengthOfStay: "4–5 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Georgia is the birthplace of wine and a crossroads of Europe and Asia. Tbilisi, its capital, is famous for its dramatic setting in a river valley, ancient sulfur baths, and a food scene that is legendary for its richness and hospitality.",
    heroImage:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Tbilisi International Airport (TBS)",
      transportation: "Bolt or Yandex Go app, Airport Bus #337.",
      visa: "Visa-free for 90+ countries (including US, EU, GCC) for 1 year. Health insurance mandatory for 2026.",
    },
    whereToStay: {
      budget: {
        name: "Fabrika Hostel & Suites",
        why: "A former Soviet sewing factory turned into the city's coolest social hub.",
      },
      midRange: {
        name: "Rooms Hotel Tbilisi",
        why: "Housed in an old publishing house, offering an 'industrial chic' vibe.",
      },
      luxury: {
        name: "Stamba Hotel",
        why: "High-concept luxury with soaring ceilings and an indoor jungle.",
      },
    },
    thingsToDo: [
      {
        name: "Old Town & Sulfur Baths",
        why: "Soak in historic domed brick bathhouses and see hidden waterfalls.",
        fee: "Free to walk; Baths 50–150 GEL/hr",
        bestTime: "Afternoon",
        image:
          "https://images.unsplash.com/photo-1523585045050-0229875e5264?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Gergeti Trinity Church",
        why: "The most iconic image of Georgia sitting against the backdrop of Mt. Kazbek.",
        fee: "Free (4x4 taxi ~20-30 GEL)",
        bestTime: "Early morning",
        image:
          "https://images.unsplash.com/photo-1548680601-0906236ee3de?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Chronicle of Georgia",
        why: "Known as the 'Stonehenge of Tbilisi,' offering surreal views and history.",
        fee: "Free",
        bestTime: "Golden Hour",
        image:
          "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Shavi Lomi",
          typeAndPrice: "Creative Georgian fusion (Mid-range: $$)",
        },
        {
          name: "Mapshalia",
          typeAndPrice: "Authentic Megrelian food (Budget: $)",
        },
      ],
      mustTryDish: "Adjaruli Khachapuri (Cheese-filled bread boat with an egg)",
    },
    gettingAround: {
      publicTransport: "Metro, Blue Buses, and Marshrutkas",
      apps: ["Bolt", "GoTrip.ge"],
      dailyBudget: "$5–$15",
    },
    dailyBudget: {
      accommodation: "$15–$120",
      food: "$15–$30",
      transportation: "$5–$15",
      activities: "$10–$25",
      total: "$45–$190",
    },
    whatToPack: {
      clothing: "Scarf/Long skirt (women), long pants (men), mountain layers",
      documents: "Passport, Proof of Health Insurance",
      gadgets: "Power bank, European Type C/F adapter",
      other: "Activated charcoal",
    },
    travelTips: {
      safety: "Be aggressive when crossing roads; drivers rarely stop.",
      money: "Use GoTrip.ge for day trips for fixed-price flexibility.",
      etiquette: "Wait for the Tamada (toastmaster) to finish before drinking.",
      reminder: "Don't drink the wine too fast! It's stronger than it tastes.",
    },
    photoSpots: [
      "Peace Bridge at night",
      "Kaleidoscope balcony on Betlemi Street",
      "Holy Trinity Cathedral (Sameba) at night",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Spirit of Tbilisi",
        morning: "Old Town & Clock Tower",
        afternoon: "Narikala Fortress & Cable Car",
        evening: "Traditional dinner & Sulfur Baths",
      },
      {
        day: 2,
        focus: "High Caucasus",
        morning: "Georgian Military Highway",
        afternoon: "Gergeti Trinity Church in Kazbegi",
        evening: "Khinkali dinner in Tbilisi",
      },
      {
        day: 3,
        focus: "Roots & Wine",
        morning: "Mtskheta & Jvari Monastery",
        afternoon: "Dry Bridge Flea Market",
        evening: "Wine tasting at 8000 Vintages",
      },
    ],
  },
  {
    id: "istanbul",
    destinationName: "Istanbul",
    country: "Turkey (Türkiye)",
    bestTime: "March–May or September–October",
    lengthOfStay: "3–5 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Istanbul is the only city in the world straddling two continents, Europe and Asia. It is a mesmerizing mix of Byzantine churches, Ottoman mosques, and bustling bazaars, all connected by the sparkling Bosphorus Strait.",
    heroImage:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Istanbul Airport (IST) or Sabiha Gökçen (SAW)",
      transportation: "Havaist Shuttle, Metro (M11), or Taxis.",
      visa: "e-Visa required for most (apply via official portal); some nationalities visa-free.",
    },
    whereToStay: {
      budget: {
        name: "Sultanahmet Inn Hotel",
        why: "Perfectly located in the historic heart, within walking distance to major sights.",
      },
      midRange: {
        name: "White House Hotel Istanbul",
        why: "Consistently top-rated for its Turkish Hospitality and Ottoman-style charm.",
      },
      luxury: {
        name: "Pera Palace Hotel",
        why: "A historic landmark where Agatha Christie stayed; offers old-world glamour.",
      },
    },
    thingsToDo: [
      {
        name: "Hagia Sophia (Ayasofya)",
        why: "A 1,500-year-old architectural marvel that has served as a cathedral, museum, and mosque.",
        fee: "Paid (~€25 for foreign tourists)",
        bestTime: "Early morning (9:00 AM)",
        image:
          "https://images.unsplash.com/photo-1543949806-2c9935e6838d?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Basilica Cistern (Yerebatan Sarnıcı)",
        why: "A hauntingly beautiful subterranean reservoir with Medusa heads.",
        fee: "~1,300 TL",
        bestTime: "Late afternoon",
        image:
          "https://images.unsplash.com/photo-1563911531102-4fd24bb56972?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Bosphorus Sunset Cruise",
        why: "See palaces, fortresses, and the city skyline while traveling between two continents.",
        fee: "30–50 TL (Ferry) or $30–$50 (Private)",
        bestTime: "One hour before sunset",
        image:
          "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Hafiz Mustafa 1864",
          typeAndPrice: "Baklava and Turkish delight (Mid-range)",
        },
        {
          name: "Tarihi Sultanahmet Köftecisi",
          typeAndPrice: "Iconic meatballs since 1920 (Budget)",
        },
      ],
      mustTryDish:
        "Balık Ekmek (Grilled fish sandwich from the boats in Eminönü)",
    },
    gettingAround: {
      publicTransport: "Trams (T1), Metros, and yellow Ferries",
      apps: ["BiTaksi", "Uber"],
      dailyBudget: "$5–$10",
    },
    dailyBudget: {
      accommodation: "$25–$200",
      food: "$15–$45",
      transportation: "$5–$12",
      activities: "$20–$60",
      total: "$65–$317",
    },
    whatToPack: {
      clothing: "Scarf (women), modest dress, comfortable walking shoes",
      documents: "E-visa printout, Passport, Istanbulkart",
      gadgets: "Universal adapter (Type C/F), Power bank",
      other: "Umbrella (unpredictable weather)",
    },
    travelTips: {
      safety: "Use BiTaksi to avoid street-hail scams and ensure tracking.",
      money: "Use the Muzekart (Museum Pass) for high-value savings.",
      etiquette: "Remove shoes when entering mosques or local homes.",
      reminder:
        "Most shops and cafes stay open late; city comes alive after 8PM.",
    },
    photoSpots: [
      "Seven Hills Restaurant Rooftop",
      "Colorful houses of Balat",
      "Ortaköy Pier with Bosphorus Bridge background",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Imperial History",
        morning: "Hagia Sophia & Blue Mosque",
        afternoon: "Topkapi Palace & Harem",
        evening: "Grand Bazaar exploration",
      },
      {
        day: 2,
        focus: "Continents & Water",
        morning: "Basilica Cistern",
        afternoon: "Ferry to Kadıköy (Asian Side)",
        evening: "Sunset Bosphorus Cruise",
      },
      {
        day: 3,
        focus: "Modern Vibe",
        morning: "Galata Tower views",
        afternoon: "Istiklal Avenue walk",
        evening: "Whirling Dervish show",
      },
    ],
  },
  {
    id: "cappadocia",
    destinationName: "Cappadocia (Göreme, Uchisar, and Ürgüp)",
    country: "Turkey (Türkiye)",
    bestTime: "April–June or September–October",
    lengthOfStay: "2–3 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "Cappadocia is a geological wonderland of 'fairy chimneys,' ancient cave dwellings, and underground cities. It is world-famous for its sunrise sky filled with hundreds of hot air balloons and its unique landscape carved from soft volcanic tuff.",
    heroImage:
      "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport:
        "Nevşehir Kapadokya Airport (NAV) or Kayseri Erkilet (ASR)",
      transportation:
        "Shared Shuttle, Private Transfer, or pre-booked hotel pick-up.",
      visa: "Same as Istanbul (e-Visa required for many).",
    },
    whereToStay: {
      budget: {
        name: "Homestay Cave Hostel",
        why: "Budget-friendly cave dorms and rooms in the heart of Göreme with a great terrace.",
      },
      midRange: {
        name: "Sultan Cave Suites",
        why: "Famous for its iconic rooftop view of the balloons; authentic cave rooms.",
      },
      luxury: {
        name: "Museum Hotel",
        why: "A living museum with heated pools and 180-degree valley views.",
      },
    },
    thingsToDo: [
      {
        name: "Hot Air Balloon Flight",
        why: "Floating over the valleys at sunrise; the quintessential Cappadocia experience.",
        fee: "€150–€300",
        bestTime: "Sunrise",
        image:
          "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Göreme Open Air Museum",
        why: "UNESCO site with rock-cut churches and 10th-century Byzantine frescoes.",
        fee: "~480 TL",
        bestTime: "Early morning (8:00 AM)",
        image:
          "https://images.unsplash.com/photo-1570737197266-4d7078347285?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Derinkuyu Underground City",
        why: "An ancient multi-level city once capable of housing 20,000 people.",
        fee: "~300 TL",
        bestTime: "Mid-day (stays cool)",
        image:
          "https://images.unsplash.com/photo-1623946258019-9f6043ee7d80?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Dibek",
          typeAndPrice:
            "Traditional home-cooked food in historic building (Mid-range)",
        },
        {
          name: "Topdeck Cave Restaurant",
          typeAndPrice: "Mezes and slow-cooked meats (Mid-range)",
        },
      ],
      mustTryDish: "Testi Kebab (Pottery Kebab cooked in a sealed clay pot)",
    },
    gettingAround: {
      publicTransport: "Limited local 'Dolmuş' buses",
      apps: ["BiTaksi (limited)", "Uber (limited)"],
      dailyBudget: "$30–$60",
    },
    dailyBudget: {
      accommodation: "$40–$350",
      food: "$20–$50",
      transportation: "$10–$40",
      activities: "$50–$300",
      total: "$120–$740",
    },
    whatToPack: {
      clothing: "Warm layers (freezing at sunrise), sturdy hiking boots, hat",
      documents: "Passport, Balloon flight confirmation",
      gadgets: "Action camera (GoPro), Power bank",
      other: "Lip balm and moisturizer (dry and dusty air)",
    },
    travelTips: {
      safety:
        "Balloon flights are wind-dependent; book for your first morning as backup.",
      money:
        "Watch balloons for free from 'Lover's Hill' sunset point in Göreme.",
      etiquette: "Never use flash photography in rock-cut churches.",
      reminder:
        "Involves a lot of uphill walking and tight spaces; mind claustrophobia.",
    },
    photoSpots: [
      "Hotel terrace at sunrise with balloons",
      "Love Valley 'fairy chimney' formations",
      "Uchisar Castle panoramic view",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Classics (Red Tour)",
        morning: "Sunrise Hot Air Balloon flight",
        afternoon: "Göreme Open Air Museum & Pasabag",
        evening: "Sunset at Rose Valley",
      },
      {
        day: 2,
        focus: "History (Green Tour)",
        morning: "Derinkuyu Underground City",
        afternoon: "Hike through Ihlara Valley",
        evening: "Whirling Dervish ceremony",
      },
      {
        day: 3,
        focus: "Hidden Gems",
        morning: "Pottery workshop in Avanos",
        afternoon: "ATV tour through Sword Valley",
        evening: "Farewell dinner in Uchisar",
      },
    ],
  },
  {
    id: "athens",
    destinationName: "Athens",
    country: "Greece",
    bestTime: "April–June or September–October",
    lengthOfStay: "3–4 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Athens is the cradle of Western civilization, where 2,500-year-old temples stand guard over a bustling, modern metropolis. It is a city of layers, offering world-class museums, vibrant rooftop bars with Acropolis views, and some of the best street food in Europe.",
    heroImage:
      "https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport:
        "Athens International Airport 'Eleftherios Venizelos' (ATH)",
      transportation: "Metro Line 3 (Blue), X95 Express Bus, or Taxi.",
      visa: "Schengen Area rules. New for 2026: ETIAS required for visa-exempt countries.",
    },
    whereToStay: {
      budget: {
        name: "Bedbox Hostel",
        why: "Trendy, clean, and located in Psirri/Monastiraki, within walking distance of ruins.",
      },
      midRange: {
        name: "A for Athens",
        why: "Famous for its rooftop bar; rooms overlook Monastiraki Square and the Acropolis.",
      },
      luxury: {
        name: "Hotel Grande Bretagne",
        why: "A historic landmark on Syntagma Square offering old-world European elegance.",
      },
    },
    thingsToDo: [
      {
        name: "The Acropolis & Parthenon",
        why: "The iconic symbol of Ancient Greece; the most famous historic site in the country.",
        fee: "€20 (Apr-Oct) / €10 (Nov-Mar)",
        bestTime: "8:00 AM sharp",
        image:
          "https://images.unsplash.com/photo-1603566030512-7067b57fd14c?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Plaka District",
        why: "The 'Neighborhood of the Gods,' a maze of narrow streets and neoclassical houses.",
        fee: "Free",
        bestTime: "Late afternoon",
        image:
          "https://images.unsplash.com/photo-1543731068-7e0f5beff43a?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Panathenaic Stadium",
        why: "The only stadium built entirely of marble; site of the first modern Olympics.",
        fee: "€10",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1555990548-732386fd6599?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "O Thanasis",
          typeAndPrice: "Kebab and Souvlaki specialist (Budget)",
        },
        {
          name: "Karamanlidika fanis",
          typeAndPrice: "Deli-style tavern with cured meats (Mid-range)",
        },
      ],
      mustTryDish:
        "Moussaka (Layered eggplant, potato, and spiced meat topped with béchamel)",
    },
    gettingAround: {
      publicTransport: "Metro, Tram, and Bus network",
      apps: ["FreeNow", "Uber"],
      dailyBudget: "$5–$12",
    },
    dailyBudget: {
      accommodation: "$30–$180",
      food: "$25–$60",
      transportation: "$5–$15",
      activities: "$15–$40",
      total: "$75–$295",
    },
    whatToPack: {
      clothing:
        "Light linens, sun hat, high-traction shoes (marble is slippery!)",
      documents: "Passport, ETIAS approval, reserved time-slot tickets",
      gadgets: "Power bank, wide-angle lens",
      other: "High-SPF sunscreen, Reusable water bottle",
    },
    travelTips: {
      safety:
        "Be vigilant against pickpockets on Metro Line 3 and in Monastiraki Square.",
      money:
        "Buy the 'Athens Combo Ticket' (€30) for the Acropolis and 6 other sites.",
      etiquette: "Dinner starts late—restaurants fill up after 9:00 PM.",
      reminder:
        "Pre-book Acropolis entry time; daily caps are strictly enforced in 2026.",
    },
    photoSpots: [
      "Areopagus Hill at sunset",
      "Anafiotika neighborhood in Plaka",
      "Lycabettus Hill panoramic view",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Ancient Wonders",
        morning: "Acropolis & Acropolis Museum",
        afternoon: "Ancient Agora & Temple of Hephaestus",
        evening: "Sunset drinks in Monastiraki",
      },
      {
        day: 2,
        focus: "City Vibes",
        morning: "Changing of the Guard at Syntagma",
        afternoon: "National Gardens & Panathenaic Stadium",
        evening: "Explore edges of Psirri neighborhood",
      },
      {
        day: 3,
        focus: "Coastal Escape",
        morning: "Tram to Athens Riviera beach",
        afternoon: "Stavros Niarchos Cultural Center",
        evening: "Farewell dinner in Plaka",
      },
    ],
  },
  {
    id: "santorini",
    destinationName: "Santorini",
    country: "Greece",
    bestTime: "May–June or September–early October",
    lengthOfStay: "2–3 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "Santorini is the crown jewel of the Cyclades, famous for its dramatic caldera views, whitewashed villages, and blue-domed churches. Formed by a massive volcanic eruption, it offers some of the most spectacular sunsets and unique volcanic beaches in the world.",
    heroImage:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Santorini (Thira) International Airport (JTR)",
      transportation:
        "Local KTEL Bus, Pre-booked Shuttle, or High-speed Ferry.",
      visa: "Schengen Area rules. ETIAS required for visa-exempt countries from 2026.",
    },
    whereToStay: {
      budget: {
        name: "Fira Backpackers Place",
        why: "Located in the transport hub; affordable and social without the caldera price tag.",
      },
      midRange: {
        name: "Afroessa (Imerovigli)",
        why: "Located at the highest point of the caldera; stunning views and a quieter vibe.",
      },
      luxury: {
        name: "Canaves Oia Boutique Hotel",
        why: "World-class 'cave style' luxury with private infinity pools overlooking the Aegean.",
      },
    },
    thingsToDo: [
      {
        name: "Fira to Oia Hike",
        why: "A breathtaking 10km trail along the caldera rim passing through four villages.",
        fee: "Free",
        bestTime: "7:30 AM (beat the heat)",
        image:
          "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Akrotiri Archaeological Site",
        why: "The 'Minoan Pompeii'—a sophisticated prehistoric city preserved under volcanic ash.",
        fee: "€12",
        bestTime: "Mid-day (Indoor/AC)",
        image:
          "https://images.unsplash.com/photo-1615555620953-ad41577759ad?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Sunset in Oia",
        why: "The most famous sunset in the world with iconic windmills and blue domes.",
        fee: "Free",
        bestTime: "2 hours before sunset",
        image:
          "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Lucky’s Souvlakis",
          typeAndPrice: "Best quick, cheap Gyros on the island (Budget)",
        },
        {
          name: "Metaxi Mas",
          typeAndPrice: "Authentic Cretan-Santorinian fusion (Mid-range)",
        },
      ],
      mustTryDish:
        "Tomato Geftedes (Tomato fritters made with local cherry tomatoes)",
    },
    gettingAround: {
      publicTransport: "KTEL Buses (hub in Fira)",
      apps: ["No Uber/Grab"],
      dailyBudget: "$5 (Bus) – $50 (ATV Rental)",
    },
    dailyBudget: {
      accommodation: "$40–$600+",
      food: "$30–$80",
      transportation: "$5–$55",
      activities: "$20–$150",
      total: "$95–$800+",
    },
    whatToPack: {
      clothing: "Dressy-casual evening wear, swimwear, shoes with good grip",
      documents: "Passport, ETIAS approval, Ferry tickets, IDP (for rentals)",
      gadgets: "Camera, Gimbal for stairs",
      other: "High-SPF sunscreen, Windbreaker",
    },
    travelTips: {
      safety: "Use the Cable Car instead of donkeys at the Old Port.",
      money:
        "Enjoy the sunset from public walls with supermarket wine for savings.",
      etiquette:
        "Do not climb on roofs of blue-domed churches; they are active worship places.",
      reminder:
        "Do not flush toilet paper; use the bins provided due to old infrastructure.",
    },
    photoSpots: [
      "Three Blue Domes of Oia",
      "Skaros Rock in Imerovigli",
      "The Red Beach volcanic cliffs",
    ],
    itinerary: [
      {
        day: 1,
        focus: "The Caldera Experience",
        morning: "Hike from Fira to Imerovigli",
        afternoon: "Explore shops in Oia",
        evening: "Sunset from Oia Castle",
      },
      {
        day: 2,
        focus: "History & Wine",
        morning: "Visit Akrotiri & Red Beach",
        afternoon: "Wine tasting at Santo Wines",
        evening: "Open-air cinema in Kamari",
      },
      {
        day: 3,
        focus: "Volcanic Sea",
        morning: "Catamaran Cruise & Hot Springs",
        afternoon: "Black Sand Beach (Perissa)",
        evening: "Farewell dinner in Pyrgos",
      },
    ],
  },
  {
    id: "rome",
    destinationName: "Rome",
    country: "Italy",
    bestTime: "April–May or September–October",
    lengthOfStay: "3–5 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "Known as the 'Eternal City,' Rome is a living museum where nearly 3,000 years of art, architecture, and culture are on display. From the colossal ruins of the Roman Empire to the spiritual grandeur of Vatican City, it is a city that rewards those who explore its cobblestone streets.",
    heroImage:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Leonardo da Vinci–Fiumicino (FCO) or Ciampino (CIA)",
      transportation: "Leonardo Express train, Terravision Bus, or Taxi.",
      visa: "Schengen Area rules. ETIAS required for visa-exempt countries from 2026.",
    },
    whereToStay: {
      budget: {
        name: "The Beehive",
        why: "Highly rated, clean, and social atmosphere near Termini Station.",
      },
      midRange: {
        name: "Hotel IQ Roma",
        why: "Modern, centrally located near the Opera House with a great rooftop terrace.",
      },
      luxury: {
        name: "Hotel Hassler Roma",
        why: "Located at the top of the Spanish Steps; one of the world's most iconic luxury hotels.",
      },
    },
    thingsToDo: [
      {
        name: "The Colosseum & Roman Forum",
        why: "The ultimate symbol of the Roman Empire and architectural marvel.",
        fee: "€18–€24+",
        bestTime: "8:30 AM (Opening)",
        image:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Vatican Museums",
        why: "Home to the Sistine Chapel and significant collection of Renaissance art.",
        fee: "€20+",
        bestTime: "Late afternoon (3:00 PM)",
        image:
          "https://images.unsplash.com/photo-1542820229-081e0c12af0b?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Trevi Fountain & Pantheon",
        why: "World's most famous fountain and largest unreinforced concrete dome.",
        fee: "Trevi (Free); Pantheon (€5)",
        bestTime: "Very early morning (6:30 AM)",
        image:
          "https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Pizzarium Bonci",
          typeAndPrice: "Legendary pizza by the slice near Vatican (Budget)",
        },
        {
          name: "Tonnarello",
          typeAndPrice: "Handmade pasta in lively Trastevere (Mid-range)",
        },
      ],
      mustTryDish:
        "Pasta Carbonara (Guanciale, pecorino romano, egg, and black pepper)",
    },
    gettingAround: {
      publicTransport:
        "Metro (Lines A, B, C), Trams, and extensive Bus network",
      apps: ["FreeNow", "Google Maps"],
      dailyBudget: "$7–$15",
    },
    dailyBudget: {
      accommodation: "$40–$300+",
      food: "$30–$70",
      transportation: "$7–$15",
      activities: "$20–$60",
      total: "$97–$445+",
    },
    whatToPack: {
      clothing:
        "Shoulders/knees covered for churches, comfortable walking shoes",
      documents: "Passport, ETIAS approval, pre-booked attraction tickets",
      gadgets: "Power bank, Reusable water bottle",
      other: "Crossbody bag for safety",
    },
    travelTips: {
      safety:
        "Be very careful with belongings in crowded Metro areas and landmarks.",
      money: "Avoid 'Tourist Menu' traps directly facing major landmarks.",
      etiquette:
        "Never order a Cappuccino after 11:00 AM; order Espresso instead.",
      reminder:
        "Pre-book Colosseum and Vatican weeks in advance; they sell out fast.",
    },
    photoSpots: [
      "Terrazza Viale del Belvedere (St. Peter's Dome views)",
      "Ponte Sant'Angelo with the castle",
      "Janiculum Hill panoramic skyline",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Ancient Rome",
        morning: "Colosseum, Palatine Hill, and Forum",
        afternoon: "Pantheon walk",
        evening: "Trevi Fountain & Piazza Navona",
      },
      {
        day: 2,
        focus: "Vatican & Trastevere",
        morning: "Vatican Museums & Sistine Chapel",
        afternoon: "St. Peter's Basilica & Dome",
        evening: "Dinner and nightlife in Trastevere",
      },
      {
        day: 3,
        focus: "Renaissance Squares",
        morning: "Borghese Gallery & Gardens",
        afternoon: "Spanish Steps & Via del Corso shopping",
        evening: "Sunset at Pincio Terrace & Jewish Ghetto dinner",
      },
    ],
  },
  {
    id: "vatican-city",
    destinationName: "Vatican City",
    country: "Vatican City (Independent City-State)",
    bestTime: "Tuesday or Thursday (Avoid Monday/Weekends)",
    lengthOfStay: "1 day",
    budgetRange: "Mid-range",
    quickDescription:
      "The smallest country in the world is a powerhouse of art, faith, and history. Home to the Pope and the headquarters of the Roman Catholic Church, it contains the world’s most famous frescoes in the Sistine Chapel and the colossal architectural wonder of St. Peter’s Basilica.",
    heroImage:
      "https://images.unsplash.com/photo-1542820229-081e0c12af0b?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Rome Fiumicino (FCO)",
      transportation:
        "Metro Line A (Orange) to Ottaviano or Cipro, or walking from Rome.",
      visa: "No border controls with Italy; if you can enter Italy, you can enter the Vatican.",
    },
    whereToStay: {
      budget: {
        name: "Comic’s Guesthouse (Prati)",
        why: "Fun, themed hostel in the neighboring Prati district, 10 min walk from Museums.",
      },
      midRange: {
        name: "Hotel OTTOVINO",
        why: "Modern boutique hotel located right next to the Vatican walls.",
      },
      luxury: {
        name: "Gran Meliá Rome",
        why: "Resort-style luxury just outside the walls with direct views of St. Peter's.",
      },
    },
    thingsToDo: [
      {
        name: "Vatican Museums & Sistine Chapel",
        why: "To see the Raphael Rooms and Michelangelo’s masterpiece on the Sistine Chapel ceiling.",
        fee: "€25 total (incl. booking fee)",
        bestTime: "8:00 AM or after 3:00 PM",
        image:
          "https://images.unsplash.com/photo-1542820229-081e0c12af0b?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "St. Peter’s Basilica",
        why: "One of the largest churches in Christendom, housing the Pietà by Michelangelo.",
        fee: "Free",
        bestTime: "7:00 AM sharp",
        image:
          "https://images.unsplash.com/photo-1510255502695-10826958440d?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "St. Peter’s Dome Climb",
        why: "For the absolute best 360-degree view of Rome and the Vatican Gardens.",
        fee: "€8 (Stairs) or €10 (Elevator)",
        bestTime: "Immediately after visiting the Basilica",
        image:
          "https://images.unsplash.com/photo-1529154036614-a60975f5c760?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Pizzarium Bonci",
          typeAndPrice: "Legendary Roman pizza near Cipro Metro ($)",
        },
        {
          name: "Sciascia Caffè 1919",
          typeAndPrice: "Historic café famous for chocolate coffee ($$)",
        },
      ],
      mustTryDish: "Suppli (Roman fried rice ball with mozzarella)",
    },
    gettingAround: {
      publicTransport: "Entirely walkable",
      apps: ["Google Maps"],
      dailyBudget: "$3 (Metro fare)",
    },
    dailyBudget: {
      accommodation: "$100–$250",
      food: "$30–$60",
      transportation: "$3–$10",
      activities: "$35–$120",
      total: "$168–$440",
    },
    whatToPack: {
      clothing: "STRICT DRESS CODE: Shoulders and knees must be covered",
      documents: "Passport (for security), Printed/Digital tickets",
      gadgets: "Power bank, Pair of good walking shoes",
      other: "Reusable water bottle",
    },
    travelTips: {
      safety:
        "Beware of 'ticket touts' outside the walls; only buy from official website.",
      money: "Free entry on last Sunday of month, but crowds are extreme.",
      etiquette: "Silence mandatory and no photos in the Sistine Chapel.",
      reminder:
        "St. Peter's Basilica usually closed Wed mornings due to Papal Audience.",
    },
    photoSpots: [
      "Center of St. Peter’s Square obelisk alignment",
      "Bramante Staircase in Vatican Museums",
      "Top of the Dome looking down at the square",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Spiritual & Artistic",
        morning: "St. Peter's Basilica (7:00 AM) & Dome Climb",
        afternoon: "Vatican Museums & Sistine Chapel",
        evening: "Sunset walk to Castel Sant'Angelo",
      },
    ],
  },
  {
    id: "vienna",
    destinationName: "Vienna",
    country: "Austria",
    bestTime: "May–June (flowers) or December (Christmas markets)",
    lengthOfStay: "3–4 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "Vienna is a city of imperial grandeur, classical music, and a legendary coffee house culture. As the former seat of the Habsburg Empire, it boasts opulent palaces, clean cobblestone streets, and an artistic legacy that spans from Mozart to Klimt.",
    heroImage:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Vienna International Airport (VIE)",
      transportation: "City Airport Train (CAT), S7 S-Bahn, or Railjet (ÖBB).",
      visa: "Schengen Area rules. ETIAS required for visa-exempt countries from 2026.",
    },
    whereToStay: {
      budget: {
        name: "Wombat’s City Hostel Vienna",
        why: "Among the best hostels in Europe, located next to Naschmarkt food market.",
      },
      midRange: {
        name: "Hotel Motel One Wien-Staatsoper",
        why: "Designer hotel with incredible value, steps from the State Opera House.",
      },
      luxury: {
        name: "Hotel Sacher Wien",
        why: "Historic institution famous for Sacher-Torte and peak Viennese elegance.",
      },
    },
    thingsToDo: [
      {
        name: "Schönbrunn Palace",
        why: "Former Habsburg summer residence with massive gardens and the world’s oldest zoo.",
        fee: "€22–€32",
        bestTime: "8:00 AM (for gardens)",
        image:
          "https://images.unsplash.com/photo-1573075173516-77864ddae31c?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "St. Stephen’s Cathedral",
        why: "Symbol of Vienna with a colorful tiled roof and massive tower.",
        fee: "General (Free); Tower (€6–€7)",
        bestTime: "Late afternoon",
        image:
          "https://images.unsplash.com/photo-1616493231406-8dce493c04d4?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "The Belvedere",
        why: "Home to Gustav Klimt’s 'The Kiss' in a stunning Baroque palace.",
        fee: "€17–€20",
        bestTime: "Mid-morning",
        image:
          "https://images.unsplash.com/photo-1541323331668-54e7c37cc0b5?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Figlmüller",
          typeAndPrice: "Home of the original Wiener Schnitzel (Mid-range)",
        },
        {
          name: "Café Central",
          typeAndPrice: "Historic coffee house for Freud and Trotsky ($$)",
        },
      ],
      mustTryDish:
        "Wiener Schnitzel (Thin, breaded, and fried veal or pork cutlet)",
    },
    gettingAround: {
      publicTransport: "U-Bahn (Metro), Trams ('Bim'), and Buses",
      apps: ["WienMobil"],
      dailyBudget: "$6–$10",
    },
    dailyBudget: {
      accommodation: "$35–$250+",
      food: "$30–$80",
      transportation: "$6–$15",
      activities: "$20–$55",
      total: "$91–$400+",
    },
    whatToPack: {
      clothing:
        "Smart-casual for Opera, comfortable walking shoes, heavy winter coat",
      documents: "Passport, ETIAS approval, map of Innere Stadt",
      gadgets: "Power bank, Camera with good zoom",
      other: "Umbrella (shifty weather)",
    },
    travelTips: {
      safety:
        "Very safe; avoid unofficial 'Mozart' ticket sellers in the street.",
      money: "Shops closed Sundays; use Vienna City Card for discounts.",
      etiquette:
        "Take your time in coffee houses; it's okay to sit for hours with one cup.",
      reminder: "Tipping is customary (around 5-10% or rounding up).",
    },
    photoSpots: [
      "Gloriette hill at Schönbrunn",
      "Hundertwasserhaus colorful architecture",
      "Prater Park giant Ferris wheel at sunset",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Imperial Traditions",
        morning: "St. Stephen’s Cathedral & Innere Stadt walk",
        afternoon: "Hofburg Palace (Sisi Museum)",
        evening: "Café Sacher & State Opera performance",
      },
      {
        day: 2,
        focus: "Art & Gardens",
        morning: "Schönbrunn Palace & Zoo",
        afternoon: "Naschmarkt lunch & Belvedere Museum",
        evening: "Heuriger wine tavern in Grinzing",
      },
      {
        day: 3,
        focus: "Modern Vienna",
        morning: "Museumsquartier (Leopold/MUMOK)",
        afternoon: "Prater Amusement Park ride",
        evening: "Danube Canal sunset walk",
      },
    ],
  },
  {
    id: "attnang-puchheim",
    destinationName: "Attnang-Puchheim",
    country: "Austria",
    bestTime: "May–September (lakes) or December (winter tranquility)",
    lengthOfStay: "1–2 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Attnang-Puchheim is a major railway junction in Upper Austria, often seen as the gateway to the stunning Lake District (Salzkammergut). While it is an industrial and transit hub, it offers a peaceful, authentic Austrian atmosphere with beautiful nearby nature and the historic Maria Puchheim Basilica.",
    heroImage:
      "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Linz Airport (LNZ) or Salzburg Airport (SZG)",
      transportation:
        "Train (ÖBB/Westbahn) is the best way; major rail stop on Vienna-Salzburg line.",
      visa: "Schengen Area rules. ETIAS required for visa-exempt countries from 2026.",
    },
    whereToStay: {
      budget: {
        name: "Gasthof Weissl",
        why: "Traditional Austrian inn with a local feel, walking distance from the station.",
      },
      midRange: {
        name: "eee Hotel Eberstalzell (Nearby)",
        why: "Modern, automated hotel concept offering great value and comfort.",
      },
      luxury: {
        name: "Post am See (Traunkirchen)",
        why: "Nearby lakeside luxury spa hotel with incredible views of Lake Traunsee.",
      },
    },
    thingsToDo: [
      {
        name: "Maria Puchheim Basilica",
        why: "A beautiful 19th-century pilgrimage church with impressive architecture.",
        fee: "Free",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Traunfall Waterfall",
        why: "A wide, scenic waterfall on the Traun river; great for light hiking.",
        fee: "Free",
        bestTime: "Afternoon",
        image:
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Gmunden & Traunsee Day Trip",
        why: "Visit the lakeside town featuring the famous Schloss Ort castle on the water.",
        fee: "Free/Small fee for museum",
        bestTime: "Full day",
        image:
          "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Wirtshaus Post",
          typeAndPrice: "Hearty, local Upper Austrian cuisine ($$)",
        },
        {
          name: "Cafe-Konditorei Eisner",
          typeAndPrice: "Classic Austrian coffee and cake break ($)",
        },
      ],
      mustTryDish: "Linzer Torte (Nutty shortcake with redcurrant jam)",
    },
    gettingAround: {
      publicTransport:
        "ÖBB Train (excellent connections to Hallstatt/Salzburg)",
      apps: ["ÖBB Scotty"],
      dailyBudget: "$10–$25",
    },
    dailyBudget: {
      accommodation: "$45–$110",
      food: "$25–$50",
      transportation: "$10–$30",
      activities: "$5–$20",
      total: "$85–$210",
    },
    whatToPack: {
      clothing:
        "Waterproof light jacket (for schnürlregen), comfortable walking shoes",
      documents: "Passport, ETIAS approval",
      gadgets: "Power bank, Camera for landscapes",
      other: "Reusable water bottle (great tap water)",
    },
    travelTips: {
      safety:
        "Be mindful of platform numbers; it's a large and busy rail junction.",
      money:
        "Look into the Einfach-Raus-Ticket for group train travel savings.",
      etiquette: "A friendly 'Grüß Gott' is the preferred local greeting.",
      reminder:
        "Shops close early on Saturdays (6 PM) and are closed on Sundays.",
    },
    photoSpots: [
      "Maria Puchheim Basilica exterior at sunset",
      "Traunfall footbridge view over waterfall",
      "Alps in the distance from town heights",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Local Heritage",
        morning: "Maria Puchheim Basilica visit",
        afternoon: "Hike or cycle to Traunfall waterfall",
        evening: "Traditional dinner at Wirtshaus Post",
      },
      {
        day: 2,
        focus: "Lake Gateway",
        morning: "Train trip to Gmunden (Schloss Ort)",
        afternoon: "Continue to Hallstatt for alpine views",
        evening: "Quiet evening at a local café",
      },
    ],
  },
  {
    id: "hallstatt",
    destinationName: "Hallstatt",
    country: "Austria",
    bestTime: "May–June or December",
    lengthOfStay: "1–2 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "Often called 'the most Instagrammable town in the world,' Hallstatt is a UNESCO World Heritage site perched between the Dachstein mountains and Lake Hallstatt. It is famous for its 7,000-year-old salt mine, pastel-colored houses, and stunning alpine scenery.",
    heroImage:
      "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Salzburg Airport (SZG)",
      transportation:
        "Train from Salzburg (via Attnang-Puchheim), followed by a scenic ferry across the lake.",
      visa: "Schengen Area rules. ETIAS required for visa-exempt countries from 2026.",
    },
    whereToStay: {
      budget: {
        name: "Heritage Hotel Hallstatt (Annex)",
        why: "Non-lake-view rooms in historic annexes offer a more affordable entry to the town center.",
      },
      midRange: {
        name: "Gasthof Pension Grüner Anger",
        why: "Cozy, family-run atmosphere with great breakfast, a short walk from the center.",
      },
      luxury: {
        name: "Seehotel Grüner Baum",
        why: "Iconic hotel on the market square with private balconies overhanging the lake.",
      },
    },
    thingsToDo: [
      {
        name: "Hallstatt Salt Mine (Salzwelten)",
        why: "The world's oldest salt mine; includes funicular, slides, and an underground lake.",
        fee: "€40",
        bestTime: "First tour of the morning",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Skywalk World Heritage View",
        why: "350m high platform for a breathtaking 'birds-eye' view of the lake.",
        fee: "€22 (Funicular only)",
        bestTime: "Mid-morning",
        image:
          "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Lake Hallstatt Boat Rental",
        why: "Rent an electric or 'swan' pedal boat to see the village from the water.",
        fee: "€20–€30 per hour",
        bestTime: "Late afternoon",
        image:
          "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Braugasthof am Hallstättersee",
          typeAndPrice: "Traditional food with lakeside beer garden ($$)",
        },
        {
          name: "Maislinger Bakery",
          typeAndPrice: "Cheap snacks, fresh pretzels, and pastries ($)",
        },
      ],
      mustTryDish: "Reinanke (Freshly caught whitefish from Lake Hallstatt)",
    },
    gettingAround: {
      publicTransport: "Entirely pedestrianized; walking is mandatory",
      apps: ["ÖBB Scotty"],
      dailyBudget: "$5–$10",
    },
    dailyBudget: {
      accommodation: "$120–$400",
      food: "$35–$70",
      transportation: "$10",
      activities: "$45",
      total: "$210–$525",
    },
    whatToPack: {
      clothing:
        "Comfortable walking shoes, warm jacket (salt mine is 8°C even in summer)",
      documents: "Passport, ETIAS approval",
      gadgets: "Extra camera batteries/memory cards",
      other: "Cash (preferred by small shops and the ferry)",
    },
    travelTips: {
      safety: "Roads and stairs can be slippery; wear shoes with good tread.",
      money:
        "Stay in nearby Obertraun for significantly cheaper accommodation.",
      etiquette:
        "Do not enter private gardens or use drones; respect locals' privacy.",
      reminder:
        "Most day-trippers leave by 5 PM; staying overnight offers silent streets.",
    },
    photoSpots: [
      "The Classic Postcard View (Gosaumühlstraße 67)",
      "Market Square flower-covered buildings",
      "The Bone House (Beinhaus) hand-painted skulls",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Alpine Fairytale",
        morning: "Salt Mine tour and Skywalk view",
        afternoon: "Bone House and Catholic Church visit",
        evening: "Sunset boat rental and quiet village walk",
      },
    ],
  },
  {
    id: "brussels",
    destinationName: "Brussels",
    country: "Belgium",
    bestTime: "April–June or December",
    lengthOfStay: "2–3 days",
    budgetRange: "Mid-range",
    quickDescription:
      "The 'Capital of Europe' is a surreal mix of medieval majesty, Art Nouveau elegance, and quirky comic strip art. It’s a city that doesn't take itself too seriously—home to both the grandest square in Europe and a small statue of a peeing boy.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466914/DJI_20251220160644_0208_D_vn5gwz.jpg",
    howToGetThere: {
      nearestAirport: "Brussels Airport (BRU) or Charleroi (CRL)",
      transportation:
        "Train from BRU (17 mins), STIB Bus #12, or Flibco Shuttle from CRL.",
      visa: "Schengen Area rules. ETIAS required for visa-exempt countries from late 2026.",
    },
    whereToStay: {
      budget: {
        name: "Sleep Well Youth Hostel",
        why: "Clean, eco-friendly, central, and famous for its free breakfast.",
      },
      midRange: {
        name: "Motel One Brussels",
        why: "High-end design at an affordable price point near the Royal Park.",
      },
      luxury: {
        name: "Hotel Amigo",
        why: "Rocco Forte luxury located just behind the Grand Place in a historic setting.",
      },
    },
    thingsToDo: [
      {
        name: "Grand Place (Grote Markt)",
        why: "Widely considered the most beautiful town square in the world.",
        fee: "Free",
        bestTime: "At night (illuminated)",
        image:
          "https://images.unsplash.com/photo-1563249007-88902507851d?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "The Atomium & Mini-Europe",
        why: "An iconic 1958 World's Fair landmark and a park of miniature European monuments.",
        fee: "€17–€30 (Combo)",
        bestTime: "Sunset",
        image:
          "https://images.unsplash.com/photo-1579711654877-e0750ba42c0b?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Comic Strip Walk",
        why: "Explore hidden neighborhoods and over 50 giant comic murals on city walls.",
        fee: "Free",
        bestTime: "Anytime",
        image:
          "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Fin de Siècle",
          typeAndPrice: "Hearty Belgian classics in a bustling hall ($$)",
        },
        {
          name: "Frit Flagey",
          typeAndPrice: "Arguably the best authentic frites in the city ($)",
        },
      ],
      mustTryDish:
        "Moules-Frites (Mussels cooked in white wine/celery with crispy fries)",
    },
    gettingAround: {
      publicTransport: "Integrated Metro, Tram, and Bus network",
      apps: ["STIB-MIVB app", "Contactless tapping"],
      dailyBudget: "$8–$12",
    },
    dailyBudget: {
      accommodation: "$35–$250",
      food: "$30–$70",
      transportation: "$8–$15",
      activities: "$15–$40",
      total: "$88–$375",
    },
    whatToPack: {
      clothing: "Layers and a sturdy umbrella (weather is fickle)",
      documents: "Passport, ETIAS approval",
      gadgets: "Wide-angle lens for architecture",
      other: "Appetite for chocolate and strong beer",
    },
    travelTips: {
      safety:
        "Avoid areas around Brussels-Midi and North stations late at night.",
      money: "Free entry at many museums on the first Wednesday afternoon.",
      etiquette:
        "They are 'Belgian Fries', not French! Also, sip strong beers slowly.",
      reminder: "Belgian beer is very strong (8-12%); eat something hearty.",
    },
    photoSpots: [
      "Mont des Arts city garden view",
      "Galeries Royales Saint-Hubert glazed arcade",
      "Manneken Pis (check for daily costumes)",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Historic Heart",
        morning: "Grand Place and local chocolatiers",
        afternoon: "Magritte Museum & Mont des Arts",
        evening: "Beer tasting at Delirium Café",
      },
      {
        day: 2,
        focus: "Surreal Brussels",
        morning: "Atomium & Mini-Europe",
        afternoon: "Comic Strip Center Mural Route",
        evening: "Marolles district dinner",
      },
      {
        day: 3,
        focus: "Bridge to Bruges",
        morning: "Train to Bruges ('Venice of the North')",
        afternoon: "Canal boat tour & Belfry climb",
        evening: "Waffles at Maison Dandoy back in Brussels",
      },
    ],
  },
  {
    id: "zurich",
    destinationName: "Zurich",
    country: "Switzerland",
    bestTime: "June–August or December",
    lengthOfStay: "2–3 days",
    budgetRange: "Luxury",
    quickDescription:
      "Zurich is a global center for banking and finance that manages to be incredibly scenic and historic. Situated where the Limmat River meets Lake Zurich, it offers pristine nature, high-end shopping on Bahnhofstrasse, and a surprisingly trendy nightlife in the industrial Zurich West district.",
    heroImage:
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Zurich Airport (ZRH)",
      transportation:
        "Frequent trains run to Zurich Hauptbahnhof (HB) in just 10–12 mins, or Tram #10.",
      visa: "Schengen Area rules. ETIAS required for visa-exempt countries from 2026.",
    },
    whereToStay: {
      budget: {
        name: "Oldtown Hostel Otter",
        why: "Located in the heart of the Old Town (Niederdorf); quirky, clean, and has a trendy bar.",
      },
      midRange: {
        name: "25hours Hotel Langstrasse",
        why: "Stylish, modern, near the station, and offers free bike rentals.",
      },
      luxury: {
        name: "Baur au Lac",
        why: "Iconic luxury hotel with private park views of the lake and impeccable service.",
      },
    },
    thingsToDo: [
      {
        name: "Lake Zurich (Zürichsee)",
        why: "The heart of the city's recreation with swimming in 'Badis' or year-round steamship cruises.",
        fee: "Walk (Free); Cruise (CHF 9–25)",
        bestTime: "Sunset",
        image:
          "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Grossmünster & Fraumünster",
        why: "Iconic dual-towered church and a church featuring Marc Chagall stained-glass windows.",
        fee: "Church (Free); Tower (CHF 5)",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1543336791-7f9996d91f24?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Lindt Home of Chocolate",
        why: "Includes the world's tallest chocolate fountain and an interactive museum.",
        fee: "CHF 15–17",
        bestTime: "Afternoon",
        image:
          "https://images.unsplash.com/photo-1504933350103-e840ede978d4?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Zeughauskeller",
          typeAndPrice:
            "Hearty Swiss dishes in a historic 15th-century hall ($$$)",
        },
        {
          name: "Sternen Grill",
          typeAndPrice:
            "Famous for bratwurst; perfect for a quick, 'budget' lunch ($)",
        },
      ],
      mustTryDish:
        "Zürcher Geschnetzeltes (Sliced veal in creamy mushroom sauce with crispy Rösti)",
    },
    gettingAround: {
      publicTransport: "World-class Trams, Trains, and local Boats",
      apps: ["SBB Mobile", "ZVV", "EasyRide"],
      dailyBudget: "$15–$30",
    },
    dailyBudget: {
      accommodation: "$60–$400+",
      food: "$40–$100",
      transportation: "$15–$30",
      activities: "$20–$50",
      total: "$135–$580+",
    },
    whatToPack: {
      clothing:
        "Smart-casual wear (Zurich is well-dressed), swimwear, warm fleece for mountains",
      documents: "Passport, ETIAS approval",
      gadgets: "Type J adapter (or Type C 2-pin)",
      other: "Reusable water bottle for city fountains",
    },
    travelTips: {
      safety: "Exceptionally safe; Langstrasse can be rowdy on weekends.",
      money:
        "Tap water is high-quality Alpine water; consider the Zürich Card for museum savings.",
      etiquette:
        "Don't be late; 5 minutes early is considered 'on time' in Switzerland.",
      reminder: "Most shops are closed Sundays (except station/airport).",
    },
    photoSpots: [
      "Lindenhof Hill overview of the Old Town",
      "Münsterbrücke bridge for church shots",
      "Zürich West industrial Viadukt area",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Old Town & Lake",
        morning: "Walking tour of Niederdorf & Grossmünster",
        afternoon: "Bahnhofstrasse shopping & Lake Cruise",
        evening: "Fondue at Frau Gerolds Garten",
      },
      {
        day: 2,
        focus: "Chocolate & Art",
        morning: "Lindt Home of Chocolate visit",
        afternoon: "Kunsthaus Museum exploration",
        evening: "Trendy Zürich West drinks",
      },
      {
        day: 3,
        focus: "The Peak of Zurich",
        morning: "Train hike to Uetliberg Mountain",
        afternoon: "Relax at a Badi or visit FIFA Museum",
        evening: "Historic Schipfe river dinner",
      },
    ],
  },
  {
    id: "grindelwald",
    destinationName: "Grindelwald",
    country: "Switzerland",
    bestTime: "January–March (skiing) or July–September (hiking)",
    lengthOfStay: "2–3 days",
    budgetRange: "Luxury",
    quickDescription:
      "Known as the 'Eiger Village,' Grindelwald is a stunning glacier village tucked in a valley surrounded by the towering peaks of the Eiger, Mönch, and Jungfrau. It is the ultimate playground for outdoor enthusiasts, offering world-famous hiking trails, high-altitude adventure parks, and access to the 'Top of Europe.'",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773468093/DJI_20251222145214_0435_D_i4chkk.jpg",
    howToGetThere: {
      nearestAirport: "Zurich Airport (ZRH) or Bern Airport (BRN)",
      transportation:
        "Train to Interlaken Ost, then transfer to the Bernese Oberland Railway (BOB) to Grindelwald.",
      visa: "Schengen Area rules. ETIAS required for visa-exempt countries from late 2026.",
    },
    whereToStay: {
      budget: {
        name: "Downtown Lodge",
        why: "One of the few affordable spots in town; clean, central, and popular with younger travelers.",
      },
      midRange: {
        name: "Hotel Glacier",
        why: "Incredible views of the Eiger North Face with modern design and an excellent spa.",
      },
      luxury: {
        name: "Romantik Hotel Schweizerhof",
        why: "Traditional Swiss luxury experience with a large wellness area and premium service.",
      },
    },
    thingsToDo: [
      {
        name: "Jungfraujoch (Top of Europe)",
        why: "Europe's highest railway station at 3,454m, featuring an Ice Palace and Sphinx Observatory.",
        fee: "CHF 190–235",
        bestTime: "First train of the morning",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "First Cliff Walk by Tissot",
        why: "A thrilling walkway clinging to the side of a cliff with 45m views over the abyss.",
        fee: "Free (with cable car ticket)",
        bestTime: "Mid-morning",
        image:
          "https://images.unsplash.com/photo-1596409618035-716447c21041?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Bachalpsee Hike",
        why: "The 'Blue Jewel' of the Alps—a reflective mountain lake with spectacular views.",
        fee: "Free",
        bestTime: "Early afternoon",
        image:
          "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Barry’s",
          typeAndPrice:
            "Cozy, traditional Swiss atmosphere with fondues and meats ($$$)",
        },
        {
          name: "Bäckerei Konditorei Ringgenberg",
          typeAndPrice: "Perfect for sandwiches and pastries before a hike ($)",
        },
      ],
      mustTryDish:
        "Rösti (Grated and pan-fried potatoes, often topped with melted cheese, ham, or a fried egg)",
    },
    gettingAround: {
      publicTransport:
        "Local 'Grindelwald Bus' and various cable cars (Eiger Express, Firstbahn)",
      apps: ["SBB Mobile"],
      dailyBudget: "$40–$100",
    },
    dailyBudget: {
      accommodation: "$80–$450+",
      food: "$40–$90",
      transportation: "$50–$200",
      activities: "$20–$60",
      total: "$190–$800+",
    },
    whatToPack: {
      clothing:
        "Sturdy hiking boots, windproof/waterproof shell, thermal layers (always cold at Jungfraujoch)",
      documents: "Passport, ETIAS approval, Jungfrau Travel Pass",
      gadgets: "High-quality sunglasses (snow glare), power bank",
      other: "High-SPF sunscreen (intense high-altitude sun)",
    },
    travelTips: {
      safety: "Check live mountain webcams before buying cable car tickets.",
      money: "Buy the Jungfrau Travel Pass if staying more than 3 days.",
      etiquette: "Say 'Grüezi' (hello) to fellow hikers on the trails.",
      reminder:
        "Eiger Express is the fastest way to get to Eigergletscher station.",
    },
    photoSpots: [
      "Top of First Cliff Walk looking into the valley",
      "Reflection of mountains in Bachalpsee Lake",
      "Balconies facing the Eiger North Face",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Top of Europe",
        morning: "Eiger Express to Jungfraujoch",
        afternoon: "Ice Palace & Mönchsjochhütte hike",
        evening: "Traditional Fondue dinner",
      },
      {
        day: 2,
        focus: "Adventure & Lakes",
        morning: "Grindelwald First & Cliff Walk",
        afternoon: "Hike to Bachalpsee & First Flyer returns",
        evening: "Relax at hotel spa",
      },
      {
        day: 3,
        focus: "Panoramic Ridges",
        morning: "Cable car to Männlichen",
        afternoon: "Royal Walk or Panorama Trail",
        evening: "Farewell dinner at a mountain hut",
      },
    ],
  },
  {
    id: "interlaken",
    destinationName: "Interlaken",
    country: "Switzerland",
    bestTime: "June–September or December–February",
    lengthOfStay: "3–4 days",
    budgetRange: "Mid-range / Luxury",
    quickDescription:
      "True to its name, Interlaken sits 'between lakes' (Thun and Brienz). It serves as the world's 'Adventure Capital' and the primary gateway to the massive peaks of the Jungfrau region, offering a perfect blend of charm and adrenaline.",
    heroImage:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Zurich Airport (ZRH) or Bern Airport (BRN)",
      transportation:
        "Direct Train (IC 81) from Zurich Airport (2h 10m) or the panoramic Luzern-Interlaken Express.",
      visa: "Schengen Area rules. ETIAS required for visa-exempt countries from 2026.",
    },
    whereToStay: {
      budget: {
        name: "Backpackers Villa Sonnenhof",
        why: "Highly rated, clean, free breakfast, and includes a Guest Card for free local buses.",
      },
      midRange: {
        name: "Hotel Interlaken",
        why: "Historic hotel next to the Japanese Garden and Interlaken Ost station.",
      },
      luxury: {
        name: "Victoria-Jungfrau Grand Hotel & Spa",
        why: "Prestigious hotel with world-class spa facilities and iconic Jungfrau views.",
      },
    },
    thingsToDo: [
      {
        name: "Harder Kulm",
        why: "Funicular ride to a viewing platform with panoramic views of both lakes and the high peaks.",
        fee: "CHF 34–40",
        bestTime: "Sunset",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Paragliding",
        why: "Take off from Beatenberg and land in the heart of town at Höhematte Park.",
        fee: "Approx. CHF 170–190",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Lake Brienz or Thun Cruise",
        why: "Relaxing way to see lakeside castles, emerald waters, and the Giessbach Falls.",
        fee: "Day pass approx. CHF 74 (Free with Swiss Travel Pass)",
        bestTime: "Lunch cruise",
        image:
          "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Husi Bierhaus",
          typeAndPrice: "Vast beer selection and hearty local specialties ($$)",
        },
        {
          name: "Velo Café",
          typeAndPrice:
            "Trendy, bike-themed spot for brunch and specialty coffee ($)",
        },
      ],
      mustTryDish: "Cheese Fondue (try it at Des Alpes or Restaurant Taverne)",
    },
    gettingAround: {
      publicTransport:
        "Excellent local buses (Free with Interlaken Guest Card)",
      apps: ["SBB Mobile"],
      dailyBudget: "$0–$60",
    },
    dailyBudget: {
      accommodation: "$45–$500+",
      food: "$40–$90",
      transportation: "$15–$80",
      activities: "$40–$250",
      total: "$140–$900+",
    },
    whatToPack: {
      clothing:
        "Layers (mountain peaks are cold), windbreaker, comfortable walking shoes",
      documents: "Passport, ETIAS approval, Swiss Travel Pass",
      gadgets: "Action camera (GoPro) for adventure sports",
      other: "High-quality sunglasses for snow glare",
    },
    travelTips: {
      safety: "Check live webcams before buying high-altitude tickets.",
      money:
        "Shop at Coop Supermarket for high-quality, affordable picnic supplies.",
      etiquette:
        "Don't stand in the middle of Höhematte Park; it's a paraglider landing zone!",
      reminder:
        "Know the difference between Interlaken Ost (mountains) and West (old town) stations.",
    },
    photoSpots: [
      "Two Lakes Bridge at Harder Kulm",
      "Höhematte Park with paragliders and the Victoria-Jungfrau",
      "Iseltwald (the 'Crash Landing on You' filming location)",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Lake & Heights",
        morning: "Boat cruise on Lake Brienz to Giessbach Falls",
        afternoon: "Funicular up to Harder Kulm for sunset",
        evening: "Dinner and drinks at Husi Bierhaus",
      },
      {
        day: 2,
        focus: "Adventure Day",
        morning: "Tandem Paragliding flight",
        afternoon: "Explore St. Beatus Caves or visit Thun",
        evening: "Swiss Fondue feast in the Old Town",
      },
      {
        day: 3,
        focus: "Gateway to Peaks",
        morning: "Train to Lauterbrunnen (72 waterfalls)",
        afternoon: "Continue to Mürren or Grindelwald for hiking",
        evening: "Sunset walk along the Aare River",
      },
    ],
  },
  {
    id: "barcelona",
    destinationName: "Barcelona",
    country: "Spain",
    bestTime: "April–June or September–October",
    lengthOfStay: "3–5 days",
    budgetRange: "Mid-range",
    quickDescription:
      "A Mediterranean powerhouse where surreal Gaudí architecture meets sun-drenched beaches. Barcelona is a city of distinct 'barrios,' from the labyrinthine Gothic Quarter to the chic, grid-like Eixample, all fueled by a world-class tapas culture and late-night energy.",
    heroImage:
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2000&auto=format&fit=crop",
    howToGetThere: {
      nearestAirport: "Josep Tarradellas Barcelona-El Prat Airport (BCN)",
      transportation:
        "Aerobús (A1/A2) to Plaça de Catalunya every 5–10 mins, R2 North Train, or Metro Line L9 South.",
      visa: "Schengen Area rules. ETIAS required for visa-exempt countries from 2026.",
    },
    whereToStay: {
      budget: {
        name: "Yeah Hostel Barcelona",
        why: "Top-rated for socialize vibe, communal dinners, and walking distance to La Pedrera.",
      },
      midRange: {
        name: "Hotel 1898",
        why: "Colonial-style elegance on La Rambla with a stunning rooftop pool and historic spa.",
      },
      luxury: {
        name: "Majestic Hotel & Spa",
        why: "Historic landmark on Passeig de Gràcia with Michelin-star dining and iconic views.",
      },
    },
    thingsToDo: [
      {
        name: "Sagrada Família",
        why: "Gaudí's unfinished masterpiece with forest-like interior and incredible stained-glass light play.",
        fee: "€26–€40",
        bestTime: "Late afternoon (Golden Hour)",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Park Güell",
        why: "Whimsical park with mosaic lizards and gingerbread houses and panoramic sea views.",
        fee: "€10",
        bestTime: "8:00 AM (to beat crowds)",
        image:
          "https://images.unsplash.com/photo-1523531294919-fbabb7c385f1?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Gothic Quarter (Barri Gòtic)",
        why: "Medieval stone alleys, the Barcelona Cathedral, and hidden plazas.",
        fee: "Free to wander",
        bestTime: "Early morning or late night",
        image:
          "https://images.unsplash.com/photo-1512918728675-ed7a9c7921d1?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Cervecería Catalana",
          typeAndPrice: "The gold standard for tapas and montaditos ($$)",
        },
        {
          name: "Can Paixano (La Xampanyeria)",
          typeAndPrice:
            "Standing-room favorite for Cava and chorizo sandwiches ($)",
        },
      ],
      mustTryDish: "Paella (best at lunch) and Patatas Bravas",
    },
    gettingAround: {
      publicTransport: "Extensive Metro, Bus, and Tram network",
      apps: ["TMB App"],
      dailyBudget: "$10–$15",
    },
    dailyBudget: {
      accommodation: "$40–$350+",
      food: "$35–$80",
      transportation: "$5–$15",
      activities: "$25–$60",
      total: "$105–$505+",
    },
    whatToPack: {
      clothing:
        "Stylish walking shoes, theft-proof crossbody bag, smart-casual dinner attire",
      documents: "Passport, ETIAS approval",
      gadgets: "Portable power bank, wide-angle lens for architecture",
      other: "High-SPF sunscreen (deceptive sun)",
    },
    travelTips: {
      safety: "Beware of pickpockets, especially on La Rambla and the Metro.",
      money:
        "Free entry at many museums (like Picasso Museum) on the first Sunday.",
      etiquette:
        "Dinner starts late (9 PM+). Don't ask for 'French Fries'—they are Belgian!",
      reminder:
        "Paella is traditionally a lunch dish; avoid 'tourist trap' evening versions.",
    },
    photoSpots: [
      "Bunkers del Carmel for 360° sunset views",
      "Pont del Bisbe neo-Gothic bridge",
      "Casa Batlló 'Dragon's Back' rooftop",
    ],
    itinerary: [
      {
        day: 1,
        focus: "Gaudí & Modernism",
        morning: "Sagrada Família (Inside & Towers)",
        afternoon: "Passeig de Gràcia to Casa Batlló & La Pedrera",
        evening: "Tapas crawl in Eixample",
      },
      {
        day: 2,
        focus: "Old City & Sea",
        morning: "Gothic Quarter & Picasso Museum",
        afternoon: "El Born to Barceloneta Beach",
        evening: "Seafood dinner & Magic Fountain show",
      },
      {
        day: 3,
        focus: "Views & Culture",
        morning: "Park Güell & Gràcia lunch",
        afternoon: "Montjuïc cable car, castle & Olympic ring",
        evening: "Sunset picnic at Bunkers del Carmel",
      },
    ],
  },
  {
    id: "tirana",
    destinationName: "Tirana",
    country: "Albania",
    bestTime: "May–June or September–October",
    lengthOfStay: "2–3 days",
    budgetRange: "Budget / Mid-range",
    quickDescription:
      "Tirana is one of Europe's most colorful and transformed capitals. Once a grey, communist stronghold, it is now a bustling city known for its 'Blloku' nightlife, vibrant painted buildings, and sobering history museums housed in former nuclear bunkers. It offers an incredible mix of Ottoman heritage, Italian architecture, and modern Balkan energy at a fraction of the cost of Western Europe.",
    heroImage:
      "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773466829/DJI_20251227151820_0618_D_ogy151.jpg",
    howToGetThere: {
      nearestAirport: "Tirana International Airport Nënë Tereza (TIA)",
      transportation:
        "Rinas Express Bus departs every hour (24/7) to the city center, or take an official airport taxi.",
      visa: "Visa-free for many nationalities (US, EU, UK, etc.) for up to 90 days. Not in Schengen Area yet.",
    },
    whereToStay: {
      budget: {
        name: "Trip’n’Hostel",
        why: "Social, quirky hostel in a traditional building near the New Bazaar with a friendly vibe.",
      },
      midRange: {
        name: "Hotel Opera",
        why: "Perfectly located right on Skanderbeg Square with elegant rooms and an affordable price.",
      },
      luxury: {
        name: "The Plaza Tirana",
        why: "Sleek 5-star skyscraper offering city views, spa facilities, and world-class service.",
      },
    },
    thingsToDo: [
      {
        name: "Bunk’Art 2",
        why: "Former secret nuclear bunker turned into a museum about communist police and surveillance.",
        fee: "500 ALL",
        bestTime: "Morning",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Dajti Ekspres (Cable Car)",
        why: "Longest cable car in the Balkans leading to panoramic views from Mount Dajti.",
        fee: "1000 ALL",
        bestTime: "Hour before sunset",
        image:
          "https://images.unsplash.com/photo-1511739003486-6bfe10ce785f?q=80&w=1000&auto=format&fit=crop",
      },
      {
        name: "Skanderbeg Square",
        why: "The massive cultural heart of the city, featuring museums, mosques, and a clock tower.",
        fee: "Free to wander",
        bestTime: "Early evening (Xhiro stroll)",
        image:
          "https://images.unsplash.com/photo-1574044536225-182daabc940b?q=80&w=1000&auto=format&fit=crop",
      },
    ],
    whereToEat: {
      restaurants: [
        {
          name: "Oda",
          typeAndPrice:
            "Rustic, traditional house serving authentic Albanian classics ($)",
        },
        {
          name: "Mullixhiu",
          typeAndPrice:
            "Fine dining using local farm ingredients near Grand Park ($$$)",
        },
      ],
      mustTryDish: "Tavë Kosi (Baked lamb with yogurt and rice)",
    },
    gettingAround: {
      publicTransport: "Local buses with tickets bought on board (40 ALL).",
      apps: ["Speed Taxi", "Lux Taxi"],
      dailyBudget: "$2–$15",
    },
    dailyBudget: {
      accommodation: "$15–$150+",
      food: "$15–$40",
      transportation: "$1–$10",
      activities: "$10–$30",
      total: "$41–$230+",
    },
    whatToPack: {
      clothing: "Comfortable walking shoes, modest outfit for mosques",
      documents: "Passport, Travel Insurance copy",
      gadgets: "European Type C/F plug adapter",
      other: "Cash (Albanian Lek) for cafes and buses",
    },
    travelTips: {
      safety:
        "Very safe, but be careful with chaotic traffic even at green lights.",
      money: "Coffee is world-class and very affordable (under $1).",
      etiquette:
        "Traditional head shaking/nodding for 'yes' and 'no' can be a quirk!",
      reminder:
        "Visit the New Bazaar (Pazari i Ri) on Sunday for a great atmosphere.",
    },
    photoSpots: [
      "Pyramid of Tirana stairs for city views",
      "Colorfully painted buildings along Lana River",
      "Enver Hoxha’s former villa in Blloku",
    ],
    itinerary: [
      {
        day: 1,
        focus: "History & Bunkers",
        morning: "Skanderbeg Square and Bunk’Art 2",
        afternoon: "New Bazaar lunch at Oda",
        evening: "Dinner in trendy Blloku district",
      },
      {
        day: 2,
        focus: "Views & Nature",
        morning: "Dajti Ekspres cable car",
        afternoon: "Bunk’Art 1 military bunker experience",
        evening: "Sunset walk around Grand Park lake",
      },
      {
        day: 3,
        focus: "Kruja Day Trip",
        morning: "House of Leaves museum visit",
        afternoon: "Short trip to Kruja Castle and historical bazaar",
        evening: "Farewell dinner at a traditional 'Zgara'",
      },
    ],
  },
//   {
//     id: "podgorica",
//     destinationName: "Podgorica",
//     country: "Montenegro",
//     bestTime: "May–June or September–October",
//     lengthOfStay: "1–2 days",
//     budgetRange: "Budget / Mid-range",
//     quickDescription:
//       "Often overlooked for the coast, Podgorica is a unique blend of Ottoman history, brutalist Socialist architecture, and modern greenery. It is a city of rivers and bridges, offering a laid-back Balkan vibe and the best value for money in the country.",
//     heroImage:
//       "https://images.unsplash.com/photo-1574044536225-182daabc940b?q=80&w=2000&auto=format&fit=crop",
//     howToGetThere: {
//       nearestAirport: "Podgorica Airport (TGD)",
//       transportation:
//         "Taxi is the most reliable (~€12–€15), or take an infrequent train from 'Aerodrom' stop.",
//       visa: "Visa-free for most for up to 90 days. Not in the Schengen Area.",
//     },
//     whereToStay: {
//       budget: {
//         name: "Hostel Montenegro",
//         why: "Central, affordable, and run by locals who know the regional bus system.",
//       },
//       midRange: {
//         name: "Hotel Hemera",
//         why: "Stylish boutique hotel with a library-themed design and excellent restaurant.",
//       },
//       luxury: {
//         name: "Hilton Podgorica Crna Gora",
//         why: "Historic landmark building with a high-end spa and rooftop bar.",
//       },
//     },
//     thingsToDo: [
//       {
//         name: "Cathedral of the Resurrection of Christ",
//         why: "One of the most stunning Orthodox churches in the Balkans with gold-leaf frescoes.",
//         fee: "Free",
//         bestTime: "Morning",
//         image:
//           "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Millennium Bridge",
//         why: "The architectural symbol of modern Podgorica spanning the Morača River.",
//         fee: "Free",
//         bestTime: "Sunset/Evening",
//         image:
//           "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Stara Varoš (Old Ottoman Town)",
//         why: "Last remaining bits of the Ottoman Empire, including the Clock Tower.",
//         fee: "Free",
//         bestTime: "Afternoon",
//         image:
//           "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=1000&auto=format&fit=crop",
//       },
//     ],
//     whereToEat: {
//       restaurants: [
//         {
//           name: "Pod Volat",
//           typeAndPrice:
//             "Carnivore spot famous for Ćevapi and grilled meats ($)",
//         },
//         {
//           name: "Lanterna",
//           typeAndPrice:
//             "Traditional Montenegrin food in a stone-walled tavern ($$)",
//         },
//       ],
//       mustTryDish:
//         "Popeci na podgorički način (Veal steak with cheese and prosciutto)",
//     },
//     gettingAround: {
//       publicTransport:
//         "Limited city buses; taxis are the preferred cheap option.",
//       apps: ["Tesla Taxi", "Naš Taxi"],
//       dailyBudget: "$5–$15",
//     },
//     dailyBudget: {
//       accommodation: "$20–$140+",
//       food: "$15–$35",
//       transportation: "$3–$10",
//       activities: "$5–$15",
//       total: "$43–$200",
//     },
//     whatToPack: {
//       clothing:
//         "Light, breathable fabrics (gets very hot), modest outfit for Cathedral",
//       documents: "Passport, green card (if driving)",
//       gadgets: "European Type C/F adapter",
//       other: "Euro (€)—Montenegro uses it although not in the Eurozone",
//     },
//     travelTips: {
//       safety: "Extremely safe; main risk is the scorching summer sun.",
//       money: "Eat at local 'Pekaras' (bakeries) for giant €1.50 Burek slices.",
//       etiquette: "Smoking is common indoors; choose outdoors if sensitive.",
//       reminder: "Most shops and malls are completely closed on Sundays.",
//     },
//     photoSpots: [
//       "Millennium Bridge from the pedestrian bridge",
//       "Golden interior of the Cathedral",
//       "Nijagara Falls (Montenegro's Niagara)",
//     ],
//     itinerary: [
//       {
//         day: 1,
//         focus: "City Highlights",
//         morning: "Cathedral & Millennium Bridge",
//         afternoon: "Old Town & Clock Tower",
//         evening: "Dinner at Pod Volat & Bokeška street nightlife",
//       },
//       {
//         day: 2,
//         focus: "Nature & Wine",
//         morning: "Nijagara Falls & Cijevna Canyon",
//         afternoon: "Plantaže Wine Cellar tunnel visit",
//         evening: "Sunset walk through Gorica Park",
//       },
//     ],
//   },
//   {
//     id: "kotor",
//     destinationName: "Kotor",
//     country: "Montenegro",
//     bestTime: "May–June or September–early October",
//     lengthOfStay: "2–3 days",
//     budgetRange: "Mid-range",
//     quickDescription:
//       "Kotor is a dramatic, fortified town nestled at the end of Europe’s southernmost fjord (Boka Bay). A UNESCO World Heritage site, it is a maze of Venetian-style squares and narrow alleys guarded by a massive mountain wall and a colony of very famous local cats.",
//     heroImage:
//       "https://images.unsplash.com/photo-1563273118-2e118903c72b?q=80&w=2000&auto=format&fit=crop",
//     howToGetThere: {
//       nearestAirport: "Tivat Airport (TIV) or Podgorica Airport (TGD)",
//       transportation:
//         "Taxi from Tivat (15 mins, ~€15–€20), local buses, or private boat/ferry across the bay.",
//       visa: "Visa-free for most for up to 90 days. Montenegro uses the Euro (€).",
//     },
//     whereToStay: {
//       budget: {
//         name: "Old Town Hostel Kotor",
//         why: "Housed in a 13th-century stone palace with an incredible 'social castle' vibe.",
//       },
//       midRange: {
//         name: "Hotel Marija",
//         why: "Traditional stone-walled rooms located right inside the historic Old Town walls.",
//       },
//       luxury: {
//         name: "Hotel Forza Terra",
//         why: "Upscale waterfront stay just outside Old Town with a private beach and luxury spa.",
//       },
//     },
//     thingsToDo: [
//       {
//         name: "Hike to St. John’s Fortress (San Giovanni)",
//         why: "For the iconic panoramic view of the red-roofed Old Town and the fjord-like bay.",
//         fee: "€15",
//         bestTime: "7:00 AM (to beat heat/crowds)",
//         image:
//           "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Our Lady of the Rocks (Perast)",
//         why: "A boat ride to a tiny man-made island featuring a historic church and museum.",
//         fee: "Boat: €5–€10, Church: €2",
//         bestTime: "Early morning",
//         image:
//           "https://images.unsplash.com/photo-1511739003486-6bfe10ce785f?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Kotor Cats Museum",
//         why: "Quirky museum celebrating the town’s feline protectors through art and history.",
//         fee: "€1",
//         bestTime: "Any time (bring treats!)",
//         image:
//           "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop",
//       },
//     ],
//     whereToEat: {
//       restaurants: [
//         {
//           name: "Tanjga Family Grill",
//           typeAndPrice: "Massive portions of high-quality grilled meats ($)",
//         },
//         {
//           name: "Konoba Scala Santa",
//           typeAndPrice:
//             "One of the oldest seafood restaurants in the city ($$)",
//         },
//       ],
//       mustTryDish: "Black Risotto (Cuttlefish ink) or Njegški Prosciutto",
//     },
//     gettingAround: {
//       publicTransport:
//         "Pedestrianized Old Town; local 'Blue Line' buses to Perast every 30-60 mins.",
//       apps: ["Red Taxi", "MB Taxi"],
//       dailyBudget: "$5–$20",
//     },
//     dailyBudget: {
//       accommodation: "$30–$250+",
//       food: "$20–$60",
//       transportation: "$5–$25",
//       activities: "$15–$50",
//       total: "$70–$385+",
//     },
//     whatToPack: {
//       clothing: "Excellent grip shoes for slippery stone steps, swimwear",
//       documents: "Passport, boat tour confirmations",
//       gadgets: "Wide-angle lens for mountain scale",
//       other: "Cat treats (for feline friends), reusable water bottle",
//     },
//     travelTips: {
//       safety:
//         "Avoid peak cruise ship crowds (10 AM - 4 PM) by planning boat or mountain trips then.",
//       money:
//         "Hike the 'Ladder of Kotor' trail just outside the walls for free for similar views.",
//       etiquette:
//         "Don't feed cats human food; stick to cat-specific snacks or water.",
//       reminder:
//         "Tap water is generally safe but can become salty after heavy rains.",
//     },
//     photoSpots: [
//       "Halfway up St. John Fortress walls for the classic bay shot",
//       "Perast Waterfront looking at the two islands",
//       "Piazza of the Arms in early morning",
//     ],
//     itinerary: [
//       {
//         day: 1,
//         focus: "Walls & Whiskers",
//         morning: "Hike to St. John’s Fortress (San Giovanni)",
//         afternoon: "Explore Old Town, Maritime Museum, and Cats Museum",
//         evening: "Dinner at Tanjga and drinks in hidden stone plazas",
//       },
//       {
//         day: 2,
//         focus: "The Boka Bay",
//         morning: "Speedboat tour to Blue Cave and submarine tunnels",
//         afternoon: "Our Lady of the Rocks and the quiet town of Perast",
//         evening: "Sunset dinner on the Perast waterfront",
//       },
//       {
//         day: 3,
//         focus: "Scenic Heights",
//         morning: "Drive the '25 Serpentines' road to Lovćen National Park",
//         afternoon:
//           "Visit Njegoši village for traditional cheese and prosciutto",
//         evening: "Farewell drinks at an Old Town wine bar",
//       },
//     ],
//   },
//   {
//     id: "budva",
//     destinationName: "Budva",
//     country: "Montenegro",
//     bestTime: "June–September or May/October",
//     lengthOfStay: "2–3 days",
//     budgetRange: "Mid-range",
//     quickDescription:
//       "Known as the 'Miami of Montenegro,' Budva is the country's tourism heart. It perfectly balances a 2,500-year-old medieval Old Town (Stari Grad) with a high-energy coastline of turquoise coves, sleek yachts, and some of the best nightlife in the Balkans.",
//     heroImage:
//       "https://images.unsplash.com/photo-1555990548-6d52f6762391?q=80&w=2000&auto=format&fit=crop",
//     howToGetThere: {
//       nearestAirport: "Tivat Airport (TIV) or Podgorica Airport (TGD)",
//       transportation:
//         "Frequent buses from Podgorica (€6–€9) or taxi transfers from Tivat (25 mins, ~€20–€30) or Podgorica (~€65–€80).",
//       visa: "Visa-free for US, UK, and EU for up to 90 days. Register with the local tourist office within 24 hours.",
//     },
//     whereToStay: {
//       budget: {
//         name: "Freedom Hostel Budva",
//         why: "Located inside Old Town walls; social, affordable, and historic atmosphere.",
//       },
//       midRange: {
//         name: "Katamare Hotel",
//         why: "Modern hotel in Bečići offering a calmer vibe with excellent beach access.",
//       },
//       luxury: {
//         name: "Boutique Hotel Vissi d'Arte",
//         why: "Opera-themed hotel next to the yacht marina with ultra-personalized service.",
//       },
//     },
//     thingsToDo: [
//       {
//         name: "Budva Old Town (Stari Grad)",
//         why: "A mini-Dubrovnik with marble-paved lanes and Venetian walls. Don't miss the Citadel.",
//         fee: "Citadel: €5.50",
//         bestTime: "Early morning or after 8:00 PM",
//         image:
//           "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Mogren Beach",
//         why: "Two beautiful sandy coves connected by a cliff tunnel. Best foot-reachable beach from town.",
//         fee: "Free (Sunbeds €15–€25)",
//         bestTime: "Early morning",
//         image:
//           "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Sveti Stefan Viewpoint",
//         why: "Iconic fortified island-village. Highlights include pink rocks and blue water.",
//         fee: "Free to view",
//         bestTime: "Sunset",
//         image:
//           "https://images.unsplash.com/photo-1511739003486-6bfe10ce785f?q=80&w=1000&auto=format&fit=crop",
//       },
//     ],
//     whereToEat: {
//       restaurants: [
//         {
//           name: "Jadran Kod Krsta",
//           typeAndPrice: "Family-run seafood on the promenade ($$)",
//         },
//         {
//           name: "Kužina",
//           typeAndPrice: "Traditional Montenegrin 'under the bell' cooking ($)",
//         },
//       ],
//       mustTryDish: "Burek from Pekara Radovic",
//     },
//     gettingAround: {
//       publicTransport:
//         "Mediteran Express bus between Budva center, Bečići, and Sveti Stefan.",
//       apps: ["Viber/WhatsApp for Tesla Taxi"],
//       dailyBudget: "$5–$20",
//     },
//     dailyBudget: {
//       accommodation: "$35–$300+",
//       food: "$25–$70",
//       transportation: "$5–$15",
//       activities: "$10–$40",
//       total: "$75–$425+",
//     },
//     whatToPack: {
//       clothing:
//         "Glamorous evening wear, sturdy sandals for slippery marble streets",
//       documents: "Passport, Tourist Tax registration paper",
//       gadgets: "Action camera for cliff jumping or boat trips",
//       other: "High-quality earplugs if staying near the promenade",
//     },
//     travelTips: {
//       safety: "Mogren Beach path can be narrow and slippery when wet.",
//       money:
//         "Walk the pedestrian tunnel to Bečići; it's free and faster in summer traffic.",
//       etiquette: "Every beach legally requires a 50% free zone for towels.",
//       reminder:
//         "Budva is loud in peak season; stay in Bečići for peace and quiet.",
//     },
//     photoSpots: [
//       "Budva Ballerina statue with Old Town walls",
//       "Top of Citadel walls overlooking Sveti Nikola Island",
//       "Sveti Stefan views from the cliffs",
//     ],
//     itinerary: [
//       {
//         day: 1,
//         focus: "Old Town & Coves",
//         morning: "Old Town walls and Citadel visit",
//         afternoon: "Coastal path to Mogren beaches",
//         evening: "Seafood dinner at Porto by the marina",
//       },
//       {
//         day: 2,
//         focus: "Islands & Icons",
//         morning: "Boat taxi to Sveti Nikola Island ('Hawaii')",
//         afternoon: "Sveti Stefan park and photography",
//         evening: "Sunset from Vista Vidikovac",
//       },
//       {
//         day: 3,
//         focus: "Party & Peaks",
//         morning: "Paragliding from Brajići landing on the beach",
//         afternoon: "Relax at Jaz Beach or swim at Mogren",
//         evening: "Night out at Top Hill open-air club",
//       },
//     ],
//   },
//   {
//     id: "mostar",
//     destinationName: "Mostar",
//     country: "Bosnia & Herzegovina",
//     bestTime: "May–June or September–October",
//     lengthOfStay: "1–2 days",
//     budgetRange: "Budget / Mid-range",
//     quickDescription:
//       "Mostar is the soul of the Herzegovina region, famous for its iconic Ottoman-style bridge, Stari Most, which arches over the emerald Neretva River. It is a place where minarets and church spires share the skyline, and history is met with resilience and warm hospitality.",
//     heroImage:
//       "https://images.unsplash.com/photo-1555990548-6d52f6762391?q=80&w=2000&auto=format&fit=crop",
//     howToGetThere: {
//       nearestAirport:
//         "Mostar Airport (OMO) or Sarajevo International Airport (SJJ)",
//       transportation:
//         "Scenic train from Sarajevo (2 hours) or multiple daily buses (~€10).",
//       visa: "Visa-free for many (US, EU, UK, etc.) for up to 90 days. Not in Schengen Area.",
//     },
//     whereToStay: {
//       budget: {
//         name: "Hostel Miran Mostar",
//         why: "Legendary for its 'War Tour' providing deep personal perspective on the city's history.",
//       },
//       midRange: {
//         name: "Hotel-Restaurant Kriva Ćuprija",
//         why: "Heritage hotel by the 'Crooked Bridge' with traditional stone architecture.",
//       },
//       luxury: {
//         name: "Hotel Mepas",
//         why: "Modern 5-star hotel in the business district with a rooftop pool and high-end shopping.",
//       },
//     },
//     thingsToDo: [
//       {
//         name: "Stari Most (The Old Bridge)",
//         why: "UNESCO heart of the city; watch daredevils jump 24 meters into the emerald Neretva.",
//         fee: "Free to cross",
//         bestTime: "Sunset",
//         image:
//           "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Koski Mehmed Pasha Mosque",
//         why: "Best panoramic view of the bridge from the narrow minaret.",
//         fee: "~€6",
//         bestTime: "Mid-morning",
//         image:
//           "https://images.unsplash.com/photo-1511739003486-6bfe10ce785f?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Blagaj Tekke (Day Trip)",
//         why: "16th-century Dervish monastery built into a 200m cliff next to a crystal spring.",
//         fee: "~€5",
//         bestTime: "Early morning",
//         image:
//           "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=1000&auto=format&fit=crop",
//       },
//     ],
//     whereToEat: {
//       restaurants: [
//         {
//           name: "Tima-Irma",
//           typeAndPrice:
//             "Legendary family-run spot for massive grilled meat platters ($)",
//         },
//         {
//           name: "Šadrvan",
//           typeAndPrice:
//             "Traditional dining with servers in national costumes ($$)",
//         },
//       ],
//       mustTryDish: "Ćevapi or Japrak (stuffed grape/kale leaves)",
//     },
//     gettingAround: {
//       publicTransport:
//         "Compact and entirely walkable; local buses for suburbs or Blagaj.",
//       apps: ["Mo Taxi"],
//       dailyBudget: "$2–$10",
//     },
//     dailyBudget: {
//       accommodation: "$15–$120+",
//       food: "$12–$35",
//       transportation: "$2–$10",
//       activities: "$5–$25",
//       total: "$34–$190",
//     },
//     whatToPack: {
//       clothing:
//         "Non-slip sole shoes (bridge stones are incredibly slippery!), layers",
//       documents: "Passport (essential for border/police checks)",
//       gadgets: "High-quality camera for postcard views",
//       other: "Cash (BAM/KM)—better rates and less hassle than using Euros",
//     },
//     travelTips: {
//       safety:
//         "Do not attempt to jump off the bridge; the currents are highly dangerous.",
//       money:
//         "Mostar's Ottoman-style fountains provide fresh, drinkable mountain water.",
//       etiquette:
//         "Bosnian Coffee is a slow ritual; don't stir it or you'll ruin the brew!",
//       reminder:
//         "Mostar is much hotter than Sarajevo; plan sightings early or late in summer.",
//     },
//     photoSpots: [
//       "Riverbank rocks below the bridge for the classic 'looking up' shot",
//       "Koski Mehmed Pasha Mosque minaret for the postcard view",
//       "Lucki Most for a wider perspective of the Old Town",
//     ],
//     itinerary: [
//       {
//         day: 1,
//         focus: "The Heart of the City",
//         morning: "Kujundžiluk Bazaar and Stari Most crossing",
//         afternoon: "Koski Mehmed Pasha Mosque minaret climb",
//         evening: "Traditional dinner at Šadrvan",
//       },
//       {
//         day: 2,
//         focus: "Springs & Falls",
//         morning: "Taxi to Blagaj Tekke to see the Buna Spring",
//         afternoon: "Swimming at the massive Kravica Waterfalls",
//         evening: "Final Bosnian coffee by the river",
//       },
//     ],
//   },
//   {
//     id: "sarajevo",
//     destinationName: "Sarajevo",
//     country: "Bosnia & Herzegovina",
//     bestTime: "May–September (Festivals) or February–March (Skiing)",
//     lengthOfStay: "3–4 days",
//     budgetRange: "Budget / Mid-range",
//     quickDescription:
//       "Known as the 'Jerusalem of Europe,' Sarajevo is a city where East meets West. Within a single block, you can find a mosque, a synagogue, and both Catholic and Orthodox cathedrals. It's defined by its resilience, Ottoman charm, and Austro-Hungarian elegance.",
//     heroImage:
//       "https://images.unsplash.com/photo-1561569062-0e9e99c1e7a1?q=80&w=2000&auto=format&fit=crop",
//     howToGetThere: {
//       nearestAirport: "Sarajevo International Airport (SJJ)",
//       transportation:
//         "Budget-friendly Centrotrans Bus (5 BAM) or official taxis (20–30 BAM) to the center.",
//       visa: "Visa-free for many (US, EU, UK, etc.) for up to 90 days. Not in Schengen Area.",
//     },
//     whereToStay: {
//       budget: {
//         name: "Waterfall Hostel",
//         why: "Highly rated for social atmosphere and walking distance to all major Old Town sights.",
//       },
//       midRange: {
//         name: "Ibis Styles Sarajevo",
//         why: "Modern hotel with design inspired by the city's 1984 Winter Olympic heritage.",
//       },
//       luxury: {
//         name: "Hotel Malak Regency",
//         why: "5-star retreat in the Ilidža area with premium spa facilities and refined dining.",
//       },
//     },
//     thingsToDo: [
//       {
//         name: "Baščaršija (Old Bazaar)",
//         why: "15th-century Ottoman heart featuring copper-smith alleys and the Sebilj fountain.",
//         fee: "Free to explore",
//         bestTime: "Early morning or evening",
//         image:
//           "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "War Childhood Museum",
//         why: "Moving award-winning museum telling stories of the Bosnian War through children's personal items.",
//         fee: "10 BAM",
//         bestTime: "Mid-afternoon",
//         image:
//           "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Trebević Cable Car",
//         why: "Scenic ride to Mount Trebević to see city views and the abandoned Olympic Bobsleigh Track.",
//         fee: "20 BAM (foreigners)",
//         bestTime: "Hour before sunset",
//         image:
//           "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=1000&auto=format&fit=crop",
//       },
//     ],
//     whereToEat: {
//       restaurants: [
//         {
//           name: "Ćevabdžinica Željo",
//           typeAndPrice: "Most famous spot for authentic Ćevapi in Old Town ($)",
//         },
//         {
//           name: "Inat Kuća (House of Spite)",
//           typeAndPrice:
//             "Fascinating history and traditional Bosnian platters by the river ($$)",
//         },
//       ],
//       mustTryDish: "Burek (meat-filled pastry) or Klepe (Bosnian ravioli)",
//     },
//     gettingAround: {
//       publicTransport:
//         "Extensive tram network (most iconic) along with buses and trolleybuses.",
//       apps: ["MojTaxi"],
//       dailyBudget: "$2–$10",
//     },
//     dailyBudget: {
//       accommodation: "$15–$150+",
//       food: "$12–$40",
//       transportation: "$2–$10",
//       activities: "$10–$30",
//       total: "$39–$230+",
//     },
//     whatToPack: {
//       clothing: "Comfortable walking shoes, layers for cool mountain nights",
//       documents: "Passport, Travel Insurance",
//       gadgets: "European Type C/F adapter",
//       other: "Cash (Bosnian Mark - BAM) for small cafes and trams",
//     },
//     travelTips: {
//       safety:
//         "Very safe, but watch for pickpockets on trams and in Baščaršija.",
//       money:
//         "Join a free walking tour for essential context on the city's complex history.",
//       etiquette:
//         "Cover shoulders and knees when visiting mosques (scarves often provided).",
//       reminder:
//         "Respect the 'Sarajevo Roses'—red resin sidewalk memorials; do not step on them.",
//     },
//     photoSpots: [
//       "Yellow Fortress (Žuta Tabija) for the best sunset city view",
//       "Latin Bridge (site of Franz Ferdinand assassination)",
//       "Kazandžiluk Street copper-smith artisans",
//     ],
//     itinerary: [
//       {
//         day: 1,
//         focus: "East Meets West",
//         morning: "Old Town (Baščaršija) walking tour and Cathedral",
//         afternoon: "Gazi Husrev-beg Mosque and war history museums",
//         evening: "Traditional dinner and Bosnian coffee",
//       },
//       {
//         day: 2,
//         focus: "Olympic & War History",
//         morning: "Cable Car to Trebević and Bobsleigh track",
//         afternoon: "Sarajevo Tunnel of Hope (War Tunnel Museum)",
//         evening: "Sunset at the Yellow Fortress",
//       },
//       {
//         day: 3,
//         focus: "Art & Nature",
//         morning: "National Museum (see the Sarajevo Haggadah)",
//         afternoon: "Spring of the Bosna River (Vrelo Bosne) via horse carriage",
//         evening: "Farewell dinner at Kibe Mahala with city views",
//       },
//     ],
//   },
//   {
//     id: "belgrade",
//     destinationName: "Belgrade",
//     country: "Serbia",
//     bestTime: "May–June, September or July–August (River club season)",
//     lengthOfStay: "3–4 days",
//     budgetRange: "Mid-range",
//     quickDescription:
//       "Belgrade is 'The White City' that never sleeps. Gritty, raw, and incredibly charismatic, it balances heavy history—having been destroyed and rebuilt over 40 times—with world-class nightlife and a coffee culture that rivals Italy.",
//     heroImage:
//       "https://images.unsplash.com/photo-1555990548-6d52f6762391?q=80&w=2000&auto=format&fit=crop",
//     howToGetThere: {
//       nearestAirport: "Belgrade Nikola Tesla Airport (BEG)",
//       transportation:
//         "A1 Shuttle to Slavija Square (~400 RSD) or fixed-price taxi voucher (~3,000 RSD) from the arrivals desk.",
//       visa: "Visa-free for US, UK, and EU for up to 90 days. Mandatory police registration within 24 hours.",
//     },
//     whereToStay: {
//       budget: {
//         name: "Hostel Bongo",
//         why: "Modern, social hostel in the city heart (Stari Grad) without being purely party-focused.",
//       },
//       midRange: {
//         name: "Hotel Moskva",
//         why: "Architectural icon and one of the oldest hotels in Serbia; famous for its Moskva Šnit cake.",
//       },
//       luxury: {
//         name: "Saint Ten Hotel",
//         why: "Boutique 5-star experience near Saint Sava Temple with impeccable personalized service.",
//       },
//     },
//     thingsToDo: [
//       {
//         name: "Belgrade Fortress (Kalemegdan)",
//         why: "Massive park and fortress complex overlooking the river confluence; home to the 'Victor' monument.",
//         fee: "Free for park/fortress",
//         bestTime: "Sunset",
//         image:
//           "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Saint Sava Temple (Hram Svetog Save)",
//         why: "One of the world's largest Orthodox churches with a stunning gold-covered crypt.",
//         fee: "Free",
//         bestTime: "Early morning",
//         image:
//           "https://images.unsplash.com/photo-1511739003486-6bfe10ce785f?q=80&w=1000&auto=format&fit=crop",
//       },
//       {
//         name: "Skadarlija (Bohemian Quarter)",
//         why: "Cobblestone street filled with traditional 'kafanas' and live tamburica music.",
//         fee: "Free to walk",
//         bestTime: "Late evening",
//         image:
//           "https://images.unsplash.com/photo-1520114878144-6123749968dd?q=80&w=1000&auto=format&fit=crop",
//       },
//     ],
//     whereToEat: {
//       restaurants: [
//         {
//           name: "Durmitor",
//           typeAndPrice:
//             "Famous traditional spot in New Belgrade; try the veal under the bell ($$)",
//         },
//         {
//           name: "Ćevap kod Dekija",
//           typeAndPrice:
//             "Legendary for the best stuffed Pljeskavica (Serbian burger) ($)",
//         },
//       ],
//       mustTryDish: "Kajmak (creamy dairy spread) on warm lepinja bread",
//     },
//     gettingAround: {
//       publicTransport:
//         "Trams and buses via the Beograd Plus app (simplified central zones).",
//       apps: ["Cargo", "Pink Taxi"],
//       dailyBudget: "$2–$15",
//     },
//     dailyBudget: {
//       accommodation: "$25–$200+",
//       food: "$15–$50",
//       transportation: "$1–$10",
//       activities: "$5–$25",
//       total: "$46–$285+",
//     },
//     whatToPack: {
//       clothing:
//         "Smart casual for evening (Belgraders dress up for coffee!), comfortable walking shoes",
//       documents:
//         "Passport (and a printed copy), Airbnb 'white card' (beli karton) for registration",
//       gadgets: "European Type C/F adapter",
//       other: "Cash (Serbian Dinar - RSD) for traditional kafanas and markets",
//     },
//     travelTips: {
//       safety:
//         "Belgrade is very safe, but avoid heated football rivalries (Red Star vs. Partizan).",
//       money:
//         "Belgrade tap water is safe and delicious; use public fountains to fill up.",
//       etiquette:
//         "Ask for 'Domaća kafa' (Home coffee) rather than 'Turkish Coffee'—it's a local point of pride.",
//       reminder:
//         "Smoking is very common indoors; look for rare non-smoking signs if sensitive.",
//     },
//     photoSpots: [
//       "Confluence of Sava and Danube from Kalemegdan walls",
//       "Zemun Waterfront and Gardoš Tower view",
//       "Knez Mihailova Street vibrant street life",
//     ],
//     itinerary: [
//       {
//         day: 1,
//         focus: "Old City & Bunkers",
//         morning: "Knez Mihailova walking tour and Kalemegdan Fortress",
//         afternoon: "Nikola Tesla Museum (book ahead!)",
//         evening: "Dinner and live music in bohemian Skadarlija",
//       },
//       {
//         day: 2,
//         focus: "Temple & River Clubs",
//         morning: "Saint Sava Temple and Vračar neighborhood",
//         afternoon: "Cross to Zemun for Gardoš Tower views",
//         evening: "Party on a 'Splav' (river club) on the Danube or Sava",
//       },
//       {
//         day: 3,
//         focus: "Modern History & Leisure",
//         morning: "Museum of Yugoslavia and House of Flowers",
//         afternoon: "Relaxing at Ada Ciganlija ('The Belgrade Sea')",
//         evening: "Sunset drinks at Beton Hala waterfront warehouses",
//       },
//     ],
//   },
];
