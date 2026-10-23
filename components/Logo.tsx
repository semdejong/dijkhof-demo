const STONES: { x: number; y: number; r: number; w: number; h: number }[] = [
  { x: 50.9, y: 105.6, r: 220, w: 7, h: 10 },
  { x: 45.9, y: 102.9, r: 228.4, w: 6, h: 11 },
  { x: 41.3, y: 99.4, r: 236.8, w: 6, h: 10 },
  { x: 37.1, y: 95, r: 245.2, w: 7, h: 11 },
  { x: 33.5, y: 89.9, r: 253.6, w: 6, h: 10 },
  { x: 30.7, y: 84.1, r: 262, w: 6, h: 11 },
  { x: 28.7, y: 77.6, r: 270.5, w: 7, h: 10 },
  { x: 27.7, y: 70.8, r: 278.9, w: 6, h: 11 },
  { x: 27.8, y: 63.6, r: 287.3, w: 6, h: 10 },
  { x: 29, y: 56.4, r: 295.7, w: 7, h: 11 },
  { x: 31.4, y: 49.2, r: 304.1, w: 6, h: 10 },
  { x: 34.9, y: 42.2, r: 312.5, w: 6, h: 11 },
  { x: 39.6, y: 35.7, r: 320.9, w: 7, h: 10 },
  { x: 45.4, y: 29.8, r: 329.3, w: 6, h: 11 },
  { x: 52.2, y: 24.7, r: 337.7, w: 6, h: 10 },
  { x: 59.8, y: 20.5, r: 346.1, w: 7, h: 11 },
  { x: 68.2, y: 17.5, r: 354.5, w: 6, h: 10 },
  { x: 77.2, y: 15.8, r: 363, w: 6, h: 11 },
  { x: 86.6, y: 15.4, r: 371.4, w: 7, h: 10 },
  { x: 96.1, y: 16.5, r: 379.8, w: 6, h: 11 },
  { x: 105.6, y: 19, r: 388.2, w: 6, h: 10 },
  { x: 114.8, y: 23, r: 396.6, w: 7, h: 11 },
  { x: 123.5, y: 28.5, r: 405, w: 6, h: 10 },
];

const ON_CIRCLE = [
  { x: 86, y: 68, r: 28 },
  { x: 96, y: 76, r: 8 },
  { x: 108, y: 78, r: -8 },
  { x: 118, y: 70, r: -24 },
  { x: 122, y: 58, r: -40 },
];

const WAVES = [
  "M150 36 C170 28 190 44 210 36 S250 28 274 36",
  "M150 50 C170 42 190 58 210 50 S250 42 274 50",
  "M150 64 C170 56 190 72 210 64 S250 56 274 64",
];

type LogoProps = {
  className?: string;
  /** dark = zandkleurig woordmerk op een donkere achtergrond */
  tone?: "light" | "dark";
  labelled?: boolean;
};

export default function Logo({ className, tone = "light", labelled = true }: LogoProps) {
  const word = tone === "dark" ? "#D6C6A7" : "#16245B";
  const waveLine = tone === "dark" ? "#D6C6A7" : "#F7F3EA";

  return (
    <svg
      viewBox="0 0 520 148"
      className={className}
      role={labelled ? "img" : undefined}
      aria-hidden={labelled ? undefined : true}
      aria-label={labelled ? "Hoveniersbedrijf G. Dijkhof" : undefined}
    >
      {STONES.map((stone) => (
        <rect
          key={`${stone.x}-${stone.y}`}
          x={stone.x - stone.w / 2}
          y={stone.y - stone.h / 2}
          width={stone.w}
          height={stone.h}
          rx={1.6}
          fill="#A5A6A2"
          transform={`rotate(${stone.r} ${stone.x} ${stone.y})`}
        />
      ))}
      <circle cx="108" cy="54" r="33" fill="#569A1C" />
      {ON_CIRCLE.map((stone) => (
        <rect
          key={`c-${stone.x}`}
          x={stone.x - 2.4}
          y={stone.y - 4}
          width="4.8"
          height="8"
          rx="1.2"
          fill="#D9DAD6"
          transform={`rotate(${stone.r} ${stone.x} ${stone.y})`}
        />
      ))}
      {WAVES.map((d) => (
        <g key={d}>
          <path d={d} fill="none" stroke="#16245B" strokeWidth="5" strokeLinecap="round" />
          <path d={d} fill="none" stroke={waveLine} strokeWidth="1.35" strokeLinecap="round" />
        </g>
      ))}
      <text fill={word} style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}>
        <tspan x="148" y="112" fontSize="36" fontWeight="800">
          G. DIJKHOF
        </tspan>
        <tspan x="148" y="134" fontSize="14" fontWeight="700">
          HOVENIERSBEDRIJF
        </tspan>
      </text>
    </svg>
  );
}
