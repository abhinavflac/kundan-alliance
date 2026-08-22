'use client';

import { useState, type FormEvent } from "react";
import { queryTypes } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const field =
  "w-full border-b border-ivory/20 bg-transparent py-3 text-[0.95rem] text-ivory placeholder:text-ivory-dim/35 outline-none transition-colors focus:border-brass-lite";

function Field({
  label,
  required,
  children,
  error,
  count,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
  count?: string;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-baseline gap-1.5 text-[9px] uppercase tracking-luxe text-ivory-dim">
          {label}
          {required && <span className="text-brass-lite">*</span>}
        </span>
        {count && <span className="text-[9px] font-mono text-ivory-dim/70">{count}</span>}
      </div>
      {children}
      {error && <span className="mt-1.5 block text-[10px] tracking-wide text-rust">{error}</span>}
    </label>
  );
}

type FormState = {
  name: string;
  agency: string;
  maharera: string;
  mobile: string;
  email: string;
  query: string;
  message: string;
  consent: boolean;
};

const EMPTY: FormState = {
  name: "",
  agency: "",
  maharera: "",
  mobile: "",
  email: "",
  query: queryTypes[0],
  message: "",
  consent: false,
};

export function Secretariat() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const setStr =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k]) {
        setErrors((prev) => ({ ...prev, [k]: undefined }));
      }
    };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) {
      errs.name = "Full name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) {
      errs.name = "Only letters (A-Z, a-z) are allowed.";
    }

    if (!form.agency.trim()) {
      errs.agency = "Agency name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(form.agency.trim())) {
      errs.agency = "Only letters (A-Z, a-z) are allowed.";
    }

    if (!form.maharera.trim()) {
      errs.maharera = "MahaRERA Registration No. is required.";
    } else if (!/^\d+$/.test(form.maharera.trim())) {
      errs.maharera = "Only numeric digits are allowed.";
    }

    if (!form.mobile.trim()) {
      errs.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(form.mobile.trim())) {
      errs.mobile = "Mobile number must be exactly 10 digits.";
    }

    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      errs.message = "Message is required.";
    } else if (form.message.length > 500) {
      errs.message = "Message cannot exceed 500 characters.";
    }

    if (!form.consent) {
      errs.consent = "You must check the consent box before submitting.";
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      setAlert({
        type: "error",
        message: "Submission failed. Please correct the highlighted errors below.",
      });
    } else {
      const refId = `KA/26/${Math.floor(10000 + Math.random() * 89999)}`;
      setAlert({
        type: "success",
        message: `Dossier submitted successfully! Reference: ${refId}`,
      });
    }
  };

  return (
    <section id="secretariat" className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-36">
      <SectionHeading
        index="05"
        eyebrow="Partner Inquiry & Contact Desk"
        kicker="Lodge your interest with the Awards Secretariat. Every enquiry receives a response within one working day."
      >
        Begin Your <span className="text-brass-gradient">Nomination</span>
      </SectionHeading>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* form */}
        <Reveal>
          <div className="relative h-full border border-ivory/10 bg-ink-soft/50 p-7 md:p-10">
            <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-brass-lite/60" />
            <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-brass-lite/60" />

            {alert && (
              <div
                className={`mb-6 flex items-center justify-between border p-4 text-xs font-medium ${
                  alert.type === "error"
                    ? "border-rust/60 bg-rust/15 text-ivory"
                    : "border-brass-lite/60 bg-brass-lite/15 text-brass-lite"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm">{alert.type === "error" ? "⚠" : "✓"}</span>
                  <span>{alert.message}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setAlert(null)}
                  className="text-ivory-dim hover:text-ivory"
                >
                  ✕
                </button>
              </div>
            )}

            <form onSubmit={submit} noValidate>
              <p className="text-[10px] uppercase tracking-luxe text-brass-lite">Enquiry Form</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" required error={errors.name}>
                  <input
                    className={field}
                    value={form.name}
                    onChange={setStr("name")}
                    placeholder="e.g. Vikram Sharma"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Agency Name" required error={errors.agency}>
                  <input
                    className={field}
                    value={form.agency}
                    onChange={setStr("agency")}
                    placeholder="e.g. Prime Realty"
                    autoComplete="organization"
                  />
                </Field>
                <Field label="MahaRERA Registration No." required error={errors.maharera}>
                  <input
                    className={field}
                    value={form.maharera}
                    onChange={setStr("maharera")}
                    placeholder="Numeric digits only e.g. 51900001234"
                  />
                </Field>
                <Field label="Mobile" required error={errors.mobile}>
                  <input
                    className={field}
                    type="tel"
                    maxLength={10}
                    value={form.mobile}
                    onChange={setStr("mobile")}
                    placeholder="10-digit mobile"
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Email" required error={errors.email}>
                  <input
                    className={field}
                    type="email"
                    value={form.email}
                    onChange={setStr("email")}
                    placeholder="name@agency.in"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Query Type" required>
                  <select className={`${field} text-ivory-dim`} value={form.query} onChange={setStr("query")}>
                    {queryTypes.map((q) => (
                      <option key={q} value={q} className="bg-ink">
                        {q}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field
                  label="Message"
                  required
                  error={errors.message}
                  count={`${form.message.length}/500`}
                >
                  <textarea
                    className={`${field} min-h-[120px] resize-y`}
                    maxLength={500}
                    value={form.message}
                    onChange={setStr("message")}
                    placeholder="State your question plainly. Max 500 characters."
                  />
                </Field>
              </div>

              <div className="mt-5">
                <label className="flex cursor-pointer select-none items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, consent: e.target.checked }));
                      if (errors.consent) {
                        setErrors((prev) => ({ ...prev, consent: undefined }));
                      }
                    }}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-ivory/20 bg-ink accent-brass-lite"
                  />
                  <span className="text-xs leading-relaxed text-ivory-dim/90">
                    I consent to third-party verification of sales ledgers and MahaRERA records for
                    nomination eligibility.
                  </span>
                </label>
                {errors.consent && (
                  <span className="mt-1.5 block text-[10px] tracking-wide text-rust">
                    {errors.consent}
                  </span>
                )}
              </div>

              <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <p className="max-w-xs text-[10px] leading-relaxed text-ivory-dim/70">
                  Submission implies consent to verification against MahaRERA records. False entries
                  are struck from the register in print.
                </p>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-brass to-brass-lite px-8 py-3.5 text-[10px] font-semibold uppercase tracking-luxe text-ink transition-all duration-300 hover:-translate-y-0.5"
                >
                  Seal &amp; Submit
                </button>
              </div>
            </form>
          </div>
        </Reveal>

        {/* trust rail */}
        <div className="flex flex-col gap-6">
          <Reveal delay={120}>
            <div className="border border-ivory/10 bg-ink-soft/50 p-7">
              <div className="flex items-center gap-4">
                <svg
                  viewBox="0 0 48 48"
                  className="h-11 w-11 shrink-0 text-brass-lite"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M24 4 8 10v10c0 10 6.5 17.5 16 20 9.5-2.5 16-10 16-20V10L24 4Z" />
                  <path d="m16.5 24 5.5 5.5L32 19.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-[11px] uppercase tracking-luxe text-brass-lite">
                  MahaRERA Verified
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ivory-dim">
                All submissions are strictly verified against MahaRERA records before any nomination
                is admitted to the register. Unverified agencies do not appear in the Alliance
                Edition.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <a
              href="https://wa.me/919822020260?text=Namaste%2C%20Kundan%20Alliance%20Secretariat%20—%20regarding%20Channel%20Partner%20Awards%202026."
              target="_blank"
              rel="noreferrer"
              className="group block border border-ivory/10 bg-ink-soft/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brass-lite/50"
            >
              <div className="flex items-center gap-4">
                <svg
                  viewBox="0 0 24 24"
                  className="h-10 w-10 shrink-0 text-[#25D366] transition-transform duration-500 group-hover:scale-110"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <div>
                  <h3 className="text-[11px] uppercase tracking-luxe text-brass-lite">
                    Secretariat Live Support
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-ivory">+91 98220 20260</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ivory-dim">
                WhatsApp the desk directly for instant assistance.
                <br />
                10:00 – 19:00 IST · Mon – Sat
              </p>
              <span className="mt-4 flex items-center gap-2 text-[9px] uppercase tracking-luxe text-brass-lite">
                Open WhatsApp Chat
                <svg
                  viewBox="0 0 20 20"
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M3 10h13m0 0-4.5-4.5M16 10l-4.5 4.5" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
