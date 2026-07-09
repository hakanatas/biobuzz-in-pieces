const SHAPES = [
    {
        name: "Bal Arısı (Buzz)",
        desc: "Doğanın en çalışkan işçisi ve biyoçeşitliliğin temel taşı. BIOBUZZ sezonunun en büyük ilham kaynağı.",
        relation: "Robotlar, arıların polen toplama ve kovanlarına taşıma mekanizmalarını taklit ederek sahada yüksek hızda veri ve element toplar. Takım çalışması ve ortak akıl (hive mind) arılardan esinlenmiştir.",
        accentColor: "var(--accent-gold)",
        accentColorRgb: "var(--accent-gold-rgb)",
        triangles: [
            // Left Wing (0-5) - Vibrant neon cyan, highly visible against dark background
            [[46, 38], [15, 20], [28, 14]],
            [[46, 38], [28, 14], [42, 26]],
            [[46, 38], [15, 20], [12, 30]],
            [[46, 38], [12, 30], [24, 38]],
            [[46, 38], [24, 38], [36, 42]],
            [[15, 20], [12, 30], [20, 27]],

            // Right Wing (6-11) - Vibrant neon cyan
            [[54, 38], [85, 20], [72, 14]],
            [[54, 38], [72, 14], [58, 26]],
            [[54, 38], [85, 20], [88, 30]],
            [[54, 38], [88, 30], [76, 38]],
            [[54, 38], [76, 38], [64, 42]],
            [[85, 20], [88, 30], [80, 27]],

            // Body (12-17) - High contrast gold and warm coppery amber stripes (No dark charcoal)
            [[45, 38], [55, 38], [50, 48]], // Thorax Gold
            [[45, 48], [55, 48], [50, 38]], // Thorax Copper
            [[44, 48], [56, 48], [50, 60]], // Abdomen Gold 1
            [[44, 60], [56, 60], [50, 48]], // Abdomen Copper 1
            [[44, 60], [56, 60], [50, 72]], // Abdomen Gold 2
            [[44, 72], [56, 72], [50, 64]], // Abdomen Copper 2

            // Head & Antennae (18-23) - Warm copper-brown and gold highlights
            [[50, 20], [42, 27], [58, 27]],
            [[50, 20], [42, 27], [50, 35]],
            [[50, 20], [58, 27], [50, 35]],
            [[42, 27], [38, 10], [44, 15]], // L Antenna
            [[58, 27], [62, 10], [56, 15]], // R Antenna
            [[50, 20], [38, 10], [62, 10]],

            // Legs & Stinger (24-29) - Coppery Orange
            [[44, 72], [56, 72], [50, 84]], // Stinger
            [[45, 48], [30, 55], [35, 58]], // Leg L1
            [[55, 48], [70, 55], [65, 58]], // Leg R1
            [[44, 60], [28, 70], [33, 72]], // Leg L2
            [[56, 60], [72, 70], [67, 72]], // Leg R2
            [[50, 84], [48, 90], [52, 90]]  // Stinger Tip
        ],
        colors: [
            // Wings L (Neon Cyan glow)
            "#22d3ee", "#67e8f9", "#06b6d4", "#e0f7fa", "#22d3ee", "#e0f7fa",
            // Wings R
            "#22d3ee", "#67e8f9", "#06b6d4", "#e0f7fa", "#22d3ee", "#e0f7fa",
            // Body (Gold and Orange-Copper)
            "#fbbf24", "#d97706", "#f59e0b", "#b45309", "#fbbf24", "#78350f",
            // Head
            "#78350f", "#451a03", "#78350f", "#fbbf24", "#fbbf24", "#451a03",
            // Legs & Stinger
            "#d97706", "#b45309", "#b45309", "#78350f", "#78350f", "#fbbf24"
        ]
    },
    {
        name: "Polen Çiçeği (Flora)",
        desc: "Ekosistemin kalbi. Kovanı besleyen polenleri barındıran temel yapı taşı.",
        relation: "Çiçek kısmı sapına oranla daha dengeli olacak şekilde küçültülmüş, yeşil gövde sapı ise yere kadar uzatılarak oranları optimize edilmiştir.",
        accentColor: "var(--accent-pink)",
        accentColorRgb: "var(--accent-pink-rgb)",
        triangles: [
            // Left Petals (0-5) - Scaled down and Y centered at 38
            [[50, 38], [28, 28], [24, 38]],
            [[50, 38], [24, 38], [28, 48]],
            [[50, 38], [28, 48], [36, 60]],
            [[50, 38], [36, 60], [50, 65]],
            [[50, 38], [28, 28], [36, 17]],
            [[50, 38], [36, 17], [50, 12]],

            // Right Petals (6-11)
            [[50, 38], [72, 28], [76, 38]],
            [[50, 38], [76, 38], [72, 48]],
            [[50, 38], [72, 48], [64, 60]],
            [[50, 38], [64, 60], [50, 65]],
            [[50, 38], [72, 28], [64, 17]],
            [[50, 38], [64, 17], [50, 12]],

            // Center Pistil (12-17) - Golden Hexagon
            [[50, 38], [50, 30], [56, 34]],
            [[50, 38], [56, 34], [56, 42]],
            [[50, 38], [56, 42], [50, 46]],
            [[50, 38], [50, 46], [44, 42]],
            [[50, 38], [44, 42], [44, 34]],
            [[50, 38], [44, 34], [50, 30]],

            // Upper Petal Tips (18-23)
            [[36, 17], [50, 12], [43, 4]],
            [[64, 17], [50, 12], [57, 4]],
            [[28, 28], [24, 38], [17, 30]],
            [[72, 28], [76, 38], [83, 30]],
            [[28, 48], [36, 60], [27, 57]],
            [[72, 48], [64, 60], [73, 57]],

            // Stem & Leaf (24-29) - Elongated downwards
            [[48, 46], [52, 46], [48, 92]], // Stem L
            [[52, 46], [48, 92], [52, 92]], // Stem R
            [[48, 58], [26, 52], [35, 68]], // Leaf L
            [[52, 64], [74, 58], [64, 74]], // Leaf R
            [[26, 52], [35, 68], [28, 62]], // Leaf L Tip
            [[74, 58], [64, 74], [72, 68]]  // Leaf R Tip
        ],
        colors: [
            // Left Petals
            "#f43f5e", "#fda4af", "#ec4899", "#f472b6", "#f43f5e", "#f97316",
            // Right Petals
            "#f43f5e", "#fda4af", "#ec4899", "#f472b6", "#f43f5e", "#f97316",
            // Center (Yellow/Orange)
            "#f59e0b", "#fbbf24", "#fbbf24", "#f59e0b", "#d97706", "#d97706",
            // Petal Tips
            "#fda4af", "#fda4af", "#f87171", "#f87171", "#f472b6", "#f472b6",
            // Stem & Leaves (Bright spring greens)
            "#10b981", "#34d399", "#059669", "#10b981", "#059669", "#065f46"
        ]
    },
    {
        name: "FTC Robotu",
        desc: "Öğrencilerin tasarladığı, inşa ettiği ve kodladığı akıllı mekanik sistem. Doğayla teknolojinin birleşimi.",
        relation: "Robot yandan profil yerine, tam karşıdan bakış açısıyla; simetrik paletleri, kafa yapısı, öne bakan iki büyük parlak lens gözü ve göğsündeki polen toplama haznesi ile tam bir robot olarak yeniden tasarlanmıştır.",
        accentColor: "var(--accent-teal)",
        accentColorRgb: "var(--accent-teal-rgb)",
        triangles: [
            // Left Drive Track (0-5) - Solid mechanical caterpillar tread
            [[20, 50], [32, 50], [20, 85]],
            [[32, 50], [20, 85], [32, 85]],
            [[20, 50], [20, 85], [15, 68]],
            [[32, 50], [32, 85], [35, 68]],
            [[20, 85], [32, 85], [26, 92]], // bottom roller
            [[20, 50], [32, 50], [26, 43]], // top roller

            // Right Drive Track (6-11)
            [[80, 50], [68, 50], [80, 85]],
            [[68, 50], [80, 85], [68, 85]],
            [[80, 50], [80, 85], [85, 68]],
            [[68, 50], [68, 85], [65, 68]],
            [[80, 85], [68, 85], [74, 92]], // bottom roller
            [[80, 50], [68, 50], [74, 43]], // top roller

            // Central Chassis box (12-15) - Symmetrical core
            [[35, 75], [65, 75], [50, 60]],
            [[35, 45], [65, 45], [50, 60]],
            [[35, 75], [35, 45], [50, 60]],
            [[65, 75], [65, 45], [50, 60]],

            // Glowing Hub Screen (16-17) - Chest status panel
            [[45, 52], [55, 52], [50, 56]],
            [[45, 52], [55, 52], [50, 48]],

            // Neck & Head (18-21) - Symmetrical neck & front head plate
            [[47, 45], [53, 45], [50, 38]], // Neck
            [[40, 20], [60, 20], [50, 38]], // Head Top
            [[40, 20], [45, 35], [50, 38]], // Head Side L
            [[60, 20], [55, 35], [50, 38]], // Head Side R

            // Glowing lens eyes (22-23) - Twin circular rover eyes
            [[40, 20], [50, 20], [45, 29]], // Eye L
            [[60, 20], [50, 20], [55, 29]], // Eye R

            // Manipulator Joints & Central Intake holding a glowing Pollen Sphere (24-29)
            [[35, 55], [20, 60], [25, 45]], // Arm Joint L
            [[65, 55], [80, 60], [75, 45]], // Arm Joint R
            [[42, 75], [58, 75], [50, 85]], // Intake Scoop
            [[42, 75], [58, 75], [50, 68]], // Pollen Base
            [[46, 60], [54, 60], [50, 68]], // Pollen Mid
            [[46, 60], [54, 60], [50, 52]]  // Pollen Top
        ],
        colors: [
            // Left Track (Gunmetal grey)
            "#334155", "#475569", "#1e293b", "#334155", "#1e293b", "#0f172a",
            // Right Track
            "#334155", "#475569", "#1e293b", "#334155", "#1e293b", "#0f172a",
            // Chassis Box (Silver-teal alloy)
            "#0891b2", "#06b6d4", "#334155", "#475569",
            // Screen LED (Bright Cyan)
            "#00f0ff", "#22d3ee",
            // Neck & Head (Industrial grey)
            "#475569", "#334155", "#1e293b", "#1e293b",
            // Eyes L & R (Glowing Orange Lenses)
            "#f97316", "#f97316",
            // Arms & Intake Scoop
            "#334155", "#334155", "#475569",
            // Glowing Yellow Pollen Ball (Centered)
            "#f59e0b", "#fbbf24", "#fbbf24"
        ]
    },
    {
        name: "Kelebek (Canopy)",
        desc: "Orman kanopilerindeki biyoçeşitliliğin ve ekolojik dengenin hassas göstergesi.",
        relation: "Karanlık arka planda kaybolmasını engellemek için, gece kelebeği renkleri yerine biyo-ışımalı tropikal neon tonları (parlak pembe, turkuaz ve altın sarısı) tercih edilmiştir.",
        accentColor: "var(--accent-purple)",
        accentColorRgb: "var(--accent-purple-rgb)",
        triangles: [
            // Left Wing Upper (0-2) - High contrast Neon Pink/Orange
            [[46, 45], [12, 18], [28, 12]],
            [[46, 45], [28, 12], [42, 30]],
            [[46, 45], [12, 18], [8, 32]],
            // Left Wing Lower (3-5) - Turquoise/Gold
            [[46, 45], [8, 32], [18, 48]],
            [[46, 45], [18, 48], [12, 65]],
            [[46, 45], [12, 65], [30, 60]],

            // Right Wing Upper (6-8) - High contrast Neon Pink/Orange
            [[54, 45], [88, 18], [72, 12]],
            [[54, 45], [72, 12], [58, 30]],
            [[54, 45], [88, 18], [92, 32]],
            // Right Wing Lower (9-11) - Turquoise/Gold
            [[54, 45], [92, 32], [82, 48]],
            [[54, 45], [82, 48], [88, 65]],
            [[54, 45], [88, 65], [70, 60]],

            // Body (12-17) - Bright violet and magenta (No dark midnight blue)
            [[48, 30], [52, 30], [50, 40]],
            [[48, 45], [52, 45], [50, 33]],
            [[48, 45], [52, 45], [50, 55]],
            [[48, 58], [52, 58], [50, 48]],
            [[48, 58], [52, 58], [50, 72]],
            [[49, 72], [51, 72], [50, 80]],

            // Head & Antennae (18-23) - Vibrant pink
            [[50, 20], [47, 26], [53, 26]],
            [[47, 26], [36, 7], [42, 12]],
            [[53, 26], [64, 7], [58, 12]],
            [[36, 7], [33, 5], [38, 9]],
            [[64, 7], [67, 5], [62, 9]],
            [[50, 20], [47, 26], [50, 30]],

            // Highlights and tips (24-29) - Glowing white/cyan margins
            [[12, 18], [8, 32], [3, 25]],
            [[88, 18], [92, 32], [97, 25]],
            [[18, 48], [12, 65], [6, 58]],
            [[82, 48], [88, 65], [94, 58]],
            [[28, 12], [42, 30], [33, 6]],
            [[72, 12], [58, 30], [67, 6]]
        ],
        colors: [
            // Left Wing Upper & Lower (Bright Pink, Gold, Turquoise)
            "#f43f5e", "#fbbf24", "#ff7849", "#06b6d4", "#22d3ee", "#fbbf24",
            // Right Wing
            "#f43f5e", "#fbbf24", "#ff7849", "#06b6d4", "#22d3ee", "#fbbf24",
            // Body
            "#8b5cf6", "#a78bfa", "#ec4899", "#f43f5e", "#8b5cf6", "#c084fc",
            // Head
            "#f43f5e", "#ec4899", "#ec4899", "#22d3ee", "#22d3ee", "#8b5cf6",
            // Wing Border Highlights
            "#ffffff", "#ffffff", "#00ffff", "#00ffff", "#fbcfe8", "#fbcfe8"
        ]
    },
    {
        name: "Kanopi Ağacı",
        desc: "Orman kanopisinin yaşam alanı ve biyoçeşitliliğin çatısı. Sezonun ana teması olan Canopy'nin merkezindeki yapı.",
        relation: "Oyun sahasının merkezinde yer alan Kanopi Ağacı, robotların oyun sonu (endgame) sürecinde üzerine tırmanıp kendilerini asarak büyük puanlar kazandığı ana yapıdır.",
        accentColor: "var(--accent-green)",
        accentColorRgb: "var(--accent-green-rgb)",
        triangles: [
            // Center main stem (12-17) - Symmetrical vertical column down X=50
            [[50, 15], [48, 48], [50, 48]],
            [[50, 15], [52, 48], [50, 48]],
            [[50, 48], [48, 76], [50, 76]],
            [[50, 48], [52, 76], [50, 76]],
            [[50, 76], [48, 92], [50, 92]], // lower stem wood
            [[50, 76], [52, 92], [50, 92]],

            // Left Blade panels (0-5) - Symmetrical leaf geometry
            [[50, 15], [32, 22], [50, 32]],
            [[32, 22], [20, 34], [50, 32]],
            [[20, 34], [16, 48], [50, 50]],
            [[20, 34], [50, 32], [50, 50]],
            [[16, 48], [22, 64], [50, 50]],
            [[22, 64], [34, 76], [50, 68]],

            // Right Blade panels (6-11) - Mirrored
            [[50, 15], [68, 22], [50, 32]],
            [[68, 22], [80, 34], [50, 32]],
            [[80, 34], [84, 48], [50, 50]],
            [[80, 34], [50, 32], [50, 50]],
            [[84, 48], [78, 64], [50, 50]],
            [[78, 64], [66, 76], [50, 68]],

            // Upper Tips and serrated edges (18-23) - Bright lime/mint highlights
            [[32, 22], [50, 15], [41, 10]],
            [[68, 22], [50, 15], [59, 10]],
            [[20, 34], [16, 48], [12, 40]],
            [[80, 34], [84, 48], [88, 40]],
            [[50, 68], [50, 80], [34, 76]],
            [[50, 68], [50, 80], [66, 76]],

            // Lower base and filler leaflets (24-29)
            [[22, 64], [34, 76], [25, 74]],
            [[78, 64], [66, 76], [75, 74]],
            [[34, 76], [50, 80], [42, 85]],
            [[66, 76], [50, 80], [58, 85]],
            [[50, 50], [50, 68], [34, 76]], // internal web fill L
            [[50, 50], [50, 68], [66, 76]]  // internal web fill R
        ],
        colors: [
            // Stem (Rich Forest Brown & Deep Green)
            "#78350f", "#451a03", "#047857", "#064e3b", "#78350f", "#047857",
            // Left Blade (Vibrant Greens)
            "#22c55e", "#4ade80", "#16a34a", "#22c55e", "#15803d", "#16a34a",
            // Right Blade
            "#22c55e", "#4ade80", "#16a34a", "#22c55e", "#15803d", "#16a34a",
            // Upper Tips (High contrast Lime)
            "#a3e635", "#a3e635", "#84cc16", "#84cc16", "#bef264", "#bef264",
            // Lower Fillers & shadows
            "#14532d", "#14532d", "#166534", "#166534", "#064e3b", "#064e3b"
        ]
    },
    {
        name: "Su Damlası (Sıvı Döngüsü)",
        desc: "Canopy ekosisteminin can damarı. Biyo-yaşamın ve hidrasyonun temel kaynağı.",
        relation: "Damlanın sivri en alt kısmı yuvarlatılarak form düzeltilmiştir. Sol üst köşedeki beyaz parlamalarla ıslak cam hissi korunmuştur.",
        accentColor: "var(--accent-teal)",
        accentColorRgb: "var(--accent-teal-rgb)",
        triangles: [
            // Center (12-17)
            [[50, 10], [50, 48], [38, 52]],
            [[50, 10], [50, 48], [62, 52]],
            [[50, 48], [38, 52], [50, 74]],
            [[50, 48], [62, 52], [50, 74]],
            [[50, 74], [40, 68], [50, 86]],
            [[50, 74], [60, 68], [50, 86]],

            // Left Curve (0-5)
            [[50, 10], [38, 52], [26, 48]],
            [[38, 52], [26, 48], [22, 62]],
            [[38, 52], [22, 62], [30, 76]],
            [[38, 52], [30, 76], [50, 74]],
            [[50, 74], [30, 76], [40, 84]],
            [[50, 74], [40, 84], [50, 86]],

            // Right Curve (6-11)
            [[50, 10], [62, 52], [74, 48]],
            [[62, 52], [74, 48], [78, 62]],
            [[62, 52], [78, 62], [70, 76]],
            [[62, 52], [70, 76], [50, 74]],
            [[50, 74], [70, 76], [60, 84]],
            [[50, 74], [60, 84], [50, 86]],

            // Highlight & Shadow caps (18-23) - Bright White/Cyan specular
            [[26, 48], [22, 62], [16, 55]], // L Bulge
            [[74, 48], [78, 62], [84, 55]], // R Bulge
            [[30, 76], [40, 84], [30, 87]], // Bottom L
            [[70, 76], [60, 84], [70, 87]], // Bottom R
            [[40, 84], [50, 86], [50, 86]], // Base Tip L (Collapsed into 50, 86)
            [[60, 84], [50, 86], [50, 86]], // Base Tip R (Collapsed into 50, 86)

            // Specular highlights L (24-27) - Pure glassy white gloss
            [[50, 10], [44, 30], [50, 32]], // Gloss 1
            [[50, 10], [56, 30], [50, 32]],
            [[44, 30], [50, 32], [38, 42]], // Gloss 2
            [[56, 30], [50, 32], [62, 42]],

            // Bottom-most pointy tips collapsed (28-29) - Set to (50, 86) to make droplet perfectly rounded at bottom
            [[50, 86], [50, 86], [50, 86]],
            [[50, 86], [50, 86], [50, 86]]
        ],
        colors: [
            // Center (Cyan gradient)
            "#06b6d4", "#0891b2", "#22d3ee", "#0891b2", "#0284c7", "#0369a1",
            // Left Curve
            "#0891b2", "#0e7490", "#0284c7", "#0369a1", "#075985", "#0c4a6e",
            // Right Curve
            "#0891b2", "#0e7490", "#0284c7", "#0369a1", "#075985", "#0c4a6e",
            // Highlights & Bottom Shadows
            "#67e8f9", "#014d64", "#0284c7", "#014d64", "#0c4a6e", "#0c4a6e",
            // Specular Light Gloss (White reflection)
            "#ffffff", "#e0f7fa", "#ffffff", "#b2ebf2",
            // Collapsed bottom triangles
            "transparent", "transparent"
        ]
    },
    {
        name: "Bukalemun (Canameleon)",
        desc: "Orman kanopisinin renk değiştiren gizemli sürüngeni. Uyum yeteneğinin simgesi.",
        relation: "Arka planda kaybolan mor renkler yerine, bukalemunun doğadaki canlı kamuflajını simgeleyen parıl parıl neon fıstık yeşili, parlak turuncu ve turkuaz renkleri kullanılmıştır.",
        accentColor: "var(--accent-purple)",
        accentColorRgb: "var(--accent-purple-rgb)",
        triangles: [
            // Main Body Core (12-17) - Bright lime and turquoise
            [[35, 45], [55, 45], [45, 60]],
            [[55, 45], [45, 60], [58, 58]],
            [[45, 60], [58, 58], [48, 70]],
            [[58, 58], [48, 70], [60, 68]],
            [[48, 70], [60, 68], [55, 78]],
            [[35, 45], [45, 60], [32, 58]],

            // Left Coiled Tail (0-5) - Sunset Orange & Lime spiral
            [[32, 58], [48, 70], [24, 68]],
            [[24, 68], [48, 70], [28, 78]],
            [[28, 78], [48, 70], [40, 80]],
            [[28, 78], [40, 80], [34, 86]],
            [[34, 86], [40, 80], [45, 84]],
            [[24, 68], [28, 78], [18, 74]],

            // Head and Eye (18-23) - Bright lime green and glowing orange iris
            [[55, 45], [74, 40], [62, 56]], // Head main
            [[74, 40], [62, 56], [76, 52]], // Snout
            [[55, 45], [62, 56], [58, 58]], // Jaw
            [[62, 45], [70, 44], [66, 50]], // Eye Outer (Lime)
            [[66, 50], [64, 46], [68, 48]], // Eye Pupil (Sunset Orange)
            [[74, 40], [76, 52], [80, 48]], // Nose tip

            // Branch/Perch (24-29) - Warm wood brown (Contrast)
            [[15, 84], [85, 79], [15, 87]],
            [[85, 79], [15, 87], [85, 82]],
            [[45, 84], [55, 78], [48, 88]], // Leg L
            [[60, 68], [55, 78], [63, 80]], // Leg R
            [[48, 88], [15, 84], [30, 86]], // branch fill
            [[63, 80], [85, 82], [70, 81]],

            // Back Ridge/Spines (6-11) - Alternating Sunset Orange & Lime spines
            [[35, 45], [55, 45], [45, 36]],
            [[35, 45], [45, 36], [28, 44]],
            [[45, 36], [55, 45], [52, 38]],
            [[28, 44], [32, 58], [24, 52]],
            [[52, 38], [74, 40], [64, 35]],
            [[74, 40], [64, 35], [70, 36]]
        ],
        colors: [
            // Tail (Bright Orange/Yellow spiral)
            "#f97316", "#ff8f3d", "#f59e0b", "#fbbf24", "#ea580c", "#ff8f3d",
            // Back Ridge (Neon Spines)
            "#a3e635", "#f97316", "#bef264", "#f59e0b", "#a3e635", "#ff8f3d",
            // Body Core (Vibrant Lime and Turquoise)
            "#84cc16", "#a3e635", "#06b6d4", "#22d3ee", "#84cc16", "#0891b2",
            // Head & Eye (Lime and Sunset Orange)
            "#84cc16", "#a3e635", "#0891b2", "#84cc16", "#f97316", "#a3e635",
            // Wood Branch (Warm brown)
            "#78350f", "#451a03", "#78350f", "#451a03", "#451a03", "#78350f"
        ]
    },
    {
        name: "Bal Peteği (Kovan)",
        desc: "Doğanın en kararlı mühendislik yapısı. Altıgen (hexagonal) hücreler maksimum hacim ve dayanıklılık sunar.",
        relation: "Altıgen hücrelerin kenarları sıkılaştırılarak yapısı düzeltilmiş ve bazı hücrelerin içine parlayan taze bal/polen dolgusu eklenerek kovan teması güçlendirilmiştir.",
        accentColor: "var(--accent-green)",
        accentColorRgb: "var(--accent-green-rgb)",
        triangles: (() => {
            const r = 15.5; // Radius for interlocking grid
            const centers = [
                [50, 50],                                    // Hex 0: Center
                [50 - 1.5 * r, 50 - 0.866025 * r],           // Hex 1: Top-Left
                [50 + 1.5 * r, 50 - 0.866025 * r],           // Hex 2: Top-Right
                [50 - 1.5 * r, 50 + 0.866025 * r],           // Hex 3: Bottom-Left
                [50 + 1.5 * r, 50 + 0.866025 * r]            // Hex 4: Bottom-Right
            ];
            
            const list = [];
            centers.forEach(([cx, cy]) => {
                for (let i = 0; i < 6; i++) {
                    const a1 = (i * 60) * Math.PI / 180;
                    const a2 = ((i + 1) * 60) * Math.PI / 180;
                    list.push([
                        [cx, cy],
                        [cx + r * Math.cos(a1), cy + r * Math.sin(a1)],
                        [cx + r * Math.cos(a2), cy + r * Math.sin(a2)]
                    ]);
                }
            });
            return list;
        })(),
        colors: [
            // Hex 0: Center (Bright Amber honey filled)
            "#fbbf24", "#f59e0b", "#d97706", "#f59e0b", "#fbbf24", "#fbbf24",
            // Hex 1: Top-Left (Empty/Dark frame outline)
            "#10b981", "#059669", "#064e3b", "#064e3b", "#059669", "#10b981",
            // Hex 2: Top-Right (Bright Amber honey filled)
            "#fbbf24", "#f59e0b", "#d97706", "#f59e0b", "#fbbf24", "#fbbf24",
            // Hex 3: Bottom-Left (Empty/Dark frame outline)
            "#10b981", "#059669", "#064e3b", "#064e3b", "#059669", "#10b981",
            // Hex 4: Bottom-Right (Bright Amber honey filled)
            "#fbbf24", "#f59e0b", "#d97706", "#f59e0b", "#fbbf24", "#fbbf24"
        ]
    }
];
