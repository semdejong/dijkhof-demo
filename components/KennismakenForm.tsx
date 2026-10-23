"use client";

import { useState, type FormEvent } from "react";
import { content } from "@/content";
import { soortWerk } from "@/lib/copy";

const EMAIL = content.contact.email;

export default function KennismakenForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const naam = String(data.get("naam") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const woonplaats = String(data.get("woonplaats") ?? "").trim();
    const soort = String(data.get("soort") ?? "").trim();
    const plannen = String(data.get("plannen") ?? "").trim();
    const voorkeur = String(data.get("voorkeur") ?? "").trim();

    if (!naam || !telefoon || !email || !woonplaats || !soort || !plannen || !voorkeur) {
      setError("Vul alle velden in, dan kunnen wij u goed te woord staan.");
      setSent(false);
      return;
    }

    const body = [
      "Aanvraag vrijblijvend kennismaken",
      "",
      `Naam: ${naam}`,
      `Telefoonnummer: ${telefoon}`,
      `E-mailadres: ${email}`,
      `Woonplaats: ${woonplaats}`,
      `Soort werk: ${soort}`,
      `Voorkeur voor contact: ${voorkeur}`,
      "",
      "Korte omschrijving van de plannen:",
      plannen,
    ].join("\n");

    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Kennismaken – ${soort}`)}&body=${encodeURIComponent(body)}`;
    setError("");
    setSent(true);
    window.location.href = href;
  }

  return (
    <form data-section="formulier" onSubmit={onSubmit} className="grid gap-4" noValidate>
      <Field label="Naam" name="naam" autoComplete="name" />
      <Field label="Telefoonnummer" name="telefoon" type="tel" autoComplete="tel" />
      <Field label="E-mailadres" name="email" type="email" autoComplete="email" />
      <Field label="Woonplaats" name="woonplaats" autoComplete="address-level2" />
      <label className="grid gap-1 font-semibold text-navy">
        Soort werk
        <select name="soort" defaultValue="" className="field" required>
          <option value="" disabled>
            Kies het soort werk
          </option>
          {soortWerk.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 font-semibold text-navy">
        Korte omschrijving van uw plannen
        <textarea name="plannen" rows={5} className="field" required />
      </label>
      <fieldset className="grid gap-2">
        <legend className="font-semibold text-navy">Voorkeur voor contact</legend>
        <label className="flex min-h-11 items-center gap-3">
          <input type="radio" name="voorkeur" value="Bellen" required /> Bellen
        </label>
        <label className="flex min-h-11 items-center gap-3">
          <input type="radio" name="voorkeur" value="Mailen" /> Mailen
        </label>
      </fieldset>
      {error ? (
        <p role="alert" className="rounded-xl border border-navy/30 bg-white p-3 font-semibold text-navy">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p role="status" className="rounded-xl bg-sand-soft p-4 text-navy">
          Uw e-mailprogramma opent met de ingevulde aanvraag aan {EMAIL}. Gebeurt dat niet, mail ons dan zelf via{" "}
          <a className="font-bold underline" href={content.contact.emailHref}>
            {EMAIL}
          </a>
          .
        </p>
      ) : null}
      <button type="submit" data-cta="offerte" className="btn btn-primary w-full sm:w-auto">
        Verstuur uw aanvraag
      </button>
      <p className="text-[16px] text-navy/80">
        Wij gebruiken uw gegevens alleen om contact met u op te nemen over deze aanvraag.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-1 font-semibold text-navy">
      {label}
      <input name={name} type={type} autoComplete={autoComplete} required className="field" />
    </label>
  );
}
