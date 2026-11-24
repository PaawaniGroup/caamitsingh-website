"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { contact, contactPage, services } from "@/data/site";

type Fields = { name: string; phone: string; email: string; service: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", email: "", service: "", message: "" };

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  // Indian mobile (optionally +91 / 0 prefix) or a general 8–15 digit number
  const digits = v.phone.replace(/[\s\-()+]/g, "");
  if (!/^(91|0)?[6-9]\d{9}$/.test(digits) && !/^\d{8,15}$/.test(digits)) e.phone = "Please enter a valid phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.service) e.service = "Please choose a service.";
  if (v.message.trim().length < 10) e.message = "Please write at least a short message (10 characters).";
  return e;
}

/**
 * Contact form with inline validation and a success state.
 * - If NEXT_PUBLIC_CONTACT_FORM_ENDPOINT is set, the form POSTs JSON to it.
 * - Otherwise it opens the visitor's email app with the enquiry prefilled (no message is silently lost).
 */
export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [viaEmail, setViaEmail] = useState(false);

  const set = (k: keyof Fields) => (ev: { target: { value: string } }) => {
    setValues((p) => ({ ...p, [k]: ev.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = new FormData(ev.currentTarget);
    if (form.get("website")) return; // honeypot: bots fill hidden fields
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`f-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    if (contact.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("bad response");
        setViaEmail(false);
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }
    const body = `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\nService: ${values.service}\n\n${values.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Website enquiry: ${values.service}`)}&body=${encodeURIComponent(body)}`;
    setViaEmail(true);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div role="status" className="card flex flex-col items-start gap-4 p-8 md:p-10">
        <CheckCircle2 className="h-10 w-10 text-muted" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="text-2xl">Thank you, {values.name.split(" ")[0]}.</h3>
        <p>
          {viaEmail
            ? `Your email app should now open with your enquiry ready to send to ${contact.email}. If it did not open, please write to us directly at that address.`
            : "Your enquiry has been received. The office will respond in due course."}
        </p>
        <button type="button" className="btn btn-outline" onClick={() => { setValues(empty); setStatus("idle"); }}>
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = "mt-2 w-full rounded-sm border bg-surface px-4 py-3 text-ink placeholder:text-body/60 focus:border-line focus:outline-none focus:ring-2 focus:ring-gold/40";
  const err = (k: keyof Fields) => (errors[k] ? "border-red-600" : "border-line");

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-6 p-6 md:p-10" aria-describedby="form-note">
      <div className="grid gap-6 md:grid-cols-2">
        {([
          ["name", "Full name", "text", "name"],
          ["phone", "Phone number", "tel", "tel"],
        ] as const).map(([k, label, type, auto]) => (
          <div key={k}>
            <label htmlFor={`f-${k}`} className="text-sm font-semibold text-ink">{label}</label>
            <input
              id={`f-${k}`} name={k} type={type} autoComplete={auto} value={values[k]} onChange={set(k)}
              aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined}
              className={`${field} ${err(k)}`}
            />
            {errors[k] && <p id={`e-${k}`} className="mt-1 text-sm text-red-700 dark:text-red-400">{errors[k]}</p>}
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="f-email" className="text-sm font-semibold text-ink">Email address</label>
          <input
            id="f-email" name="email" type="email" autoComplete="email" value={values.email} onChange={set("email")}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} className={`${field} ${err("email")}`}
          />
          {errors.email && <p id="e-email" className="mt-1 text-sm text-red-700 dark:text-red-400">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="f-service" className="text-sm font-semibold text-ink">Service of interest</label>
          <select
            id="f-service" name="service" value={values.service} onChange={set("service")}
            aria-invalid={!!errors.service} aria-describedby={errors.service ? "e-service" : undefined} className={`${field} ${err("service")}`}
          >
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="General information">General information</option>
          </select>
          {errors.service && <p id="e-service" className="mt-1 text-sm text-red-700 dark:text-red-400">{errors.service}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="f-message" className="text-sm font-semibold text-ink">Message</label>
        <textarea
          id="f-message" name="message" rows={5} value={values.message} onChange={set("message")}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "e-message" : undefined} className={`${field} ${err("message")}`}
        />
        {errors.message && <p id="e-message" className="mt-1 text-sm text-red-700 dark:text-red-400">{errors.message}</p>}
      </div>

      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <p id="form-note" className="text-sm">{contactPage.formNote}</p>
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-700 dark:text-red-400">
          Something went wrong while sending. Please try again, or contact the office directly.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending…" : "Submit Enquiry"}
      </button>
    </form>
  );
}
