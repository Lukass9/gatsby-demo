const price = [
    ["Beauty Shaper",
    "28", "28", "28", 
    "18", "224", "144",
    "15", "336", "180"], 
   
    ["Cavi Shaper",
    "46", "46", "46", 
    "30", "368", "240",
    "25", "552", "300"],

    ["Hifu",
    "500", "900", "1500", 
    "700", "1500", "1900",
    "700-1000", "700-1000", "1500-3000",
    "1000-1500", "2500-3000", "800-1800",
    "500-1000"],

    ["Lipolaser",
    "46", "46", "46", 
    "30", "368", "240",
    "25", "552", "300"],
]
export default price

export const CaviShaperData = {
    deviceName: "Cavi Shaper",
    deviceItem: ["Liposukcja kawitacyjna", "Fala RF na ciało", "Fala RF na twarz 15 minut", "Fala RF na twarz 30 minut"  ],
    deviceEntryForBody: [1,4,8,12],
    deviceEntryForFace: [1,4,6,8],
    price: [ 
        [270, 680, 1200, 1620],
        [270, 680, 1200, 1620],
        [140, 400, 480, 560],
        [170, 480, 600, 680]
    ]
}

export const HifuData = {
    deviceName: "Hifu",
    treatmentPlace: ["Okolice oczu", "Okolice oczu + czoło", "policzek + linia żuchwy",
                    "podbródek", "Podbródek + szyja", "Cała twarz" , 
                    "Szyja" , "Dekolot" , "Brzuch" , 
                    "Cała talia" ,  "Wewnętrzna część ud" , "Uda nad kolanami" ,
                    "Pelikany" ],
    price: ["500", "900", "1500", 
            "700", "1500", "1900",
            "700-1000", "700-1000", "1500-3000",
            "1000-1500", "2500-3000", "800-1800",
            "500-1000"],
}

export const PackageData = {
    packageName: ["Intensywne spalanie", "Pogromca cellulitu", "Detox", "Vacu Shaper + Roll Shaper"],
    packageComposiion: ["Swan Shaper + Vacu Shaper + Roll Shaper", "Swan Shaper + Roll Shaper + Limfodrenaż",
                        "Sauna + Roll Shaper + Limfodrenaż", "Vacu Shaper + Roll Shaper"],
    deviceEntry: [4,8,12],
    price: [ 
        [270, 680, 1200 ],
        [270, 680, 1200 ],
        [140, 400, 480 ],
        [170, 480, 600 ]
    ]
}