"use client";

import { useState } from "react";

const inputClasses =
  "w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Hook this up to your backend / form service (e.g. Formspree, API route).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage/30 bg-sage/10 p-8 text-center">
        <h3 className="font-display text-xl text-navy">Thank you!</h3>
        <p className="mt-2 text-sm text-ink/70">
          We&rsquo;ve received your message and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <input required name="name" placeholder="Full name" className={inputClasses} />
        <input
          required
          type="tel"
          name="phone"
          placeholder="Phone number"
          className={inputClasses}
        />
      </div>
      <input
        required
        type="email"
        name="email"
        placeholder="Email address"
        className={inputClasses}
      />
      <textarea
        required
        name="message"
        placeholder="How can we help?"
        rows={5}
        className={inputClasses}
      />
      <button
        type="submit"
        className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
      >
        Send Message
      </button>
    </form>
  );
}
