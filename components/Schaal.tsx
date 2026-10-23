const treden = ["Klein terrasje", "Pad", "Klein of groot terras", "Heel bedrijventerrein"];

/** Van terrasje tot terrein: hun eigen schaal, als oplopende klinkerbanen. */
export default function Schaal() {
  return (
    <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {treden.map((trede, index) => (
        <li key={trede} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
          <div className="mb-4 flex items-end gap-1" aria-hidden>
            {Array.from({ length: index + 2 }, (_, i) => (
              <span
                key={i}
                className="rounded-[2px] bg-sand"
                style={{ width: 14, height: 8 + i * 6, transform: `rotate(${i % 2 ? 8 : -8}deg)` }}
              />
            ))}
          </div>
          <p className="font-display text-xl font-extrabold text-white">{trede}</p>
        </li>
      ))}
    </ol>
  );
}
