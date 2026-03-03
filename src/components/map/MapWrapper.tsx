"use client";

import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("./InteractiveMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center bg-[#f9f6f1]">
            <div className="flex flex-col items-center gap-4">
                <div
                    className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
                    style={{ borderColor: "#9E414C", borderTopColor: "transparent" }}
                />
                <p
                    className="text-sm tracking-widest uppercase"
                    style={{ color: "#9E414C", fontFamily: "'Inter', sans-serif" }}
                >
                    Loading map…
                </p>
            </div>
        </div>
    ),
});

export default InteractiveMap;
