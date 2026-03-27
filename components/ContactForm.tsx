"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Electrical Repairs & Troubleshooting",
  "Panel Upgrades & Replacements",
  "EV Charger Installation",
  "Lighting Installation",
  "Backup Power & Generators",
  "Remodels & Additions",
  "General Installations",
];

const inputBase =
  "w-full rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-200";
const inputStyle = {
  background: "#0a3444",
  border: "1px solid rgba(238,166,3,0.25)",
};
const inputFocus = {
  background: "#0a3444",
  border: "1px solid #eea603",
  boxShadow: "0 0 0 3px rgba(238,166,3,0.15)",
};

function Field({ label, error, required, children }: {
  label: string; error?: string; required?: boolean; children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-1.5">
        {label}{required && <span style={{ color: "#eea603" }}> *</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs" style={{ color: "#f87171" }}>{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20" style={{ background: "#082933" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#eea603" }}>
              Free Estimate
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-3">
              Get a Free Estimate
            </h2>
            <p className="text-base" style={{ color: "#b7b6b6" }}>
              We respond within 2 hours during business hours. Prefer to call?{" "}
              <a href="tel:7204365746" className="font-bold hover:underline" style={{ color: "#eea603" }}>
                (720) 436-5746
              </a>
            </p>
          </div>

          {submitted ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{ background: "#0a3444", border: "2px solid #eea603" }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(238,166,3,0.2)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eea603" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p style={{ color: "#b7b6b6" }}>
                Thanks — David will be in touch shortly. Need immediate help?{" "}
                <a href="tel:7204365746" className="font-bold hover:underline" style={{ color: "#eea603" }}>
                  Call (720) 436-5746
                </a>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl p-8 space-y-5"
              style={{ background: "#0a3444", border: "1px solid rgba(238,166,3,0.2)" }}
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your Name" error={errors.name?.message} required>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="John Smith"
                    className={inputBase}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                    onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                  />
                </Field>
                <Field label="Phone Number" error={errors.phone?.message} required>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="(720) 555-0100"
                    className={inputBase}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                    onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                  />
                </Field>
              </div>

              <Field label="Email Address" error={errors.email?.message} required>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@example.com"
                  className={inputBase}
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </Field>

              <Field label="Service Needed" error={errors.service?.message} required>
                <select
                  {...register("service")}
                  className={inputBase}
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                  defaultValue=""
                >
                  <option value="" disabled style={{ background: "#0a3444" }}>Select a service...</option>
                  {services.map((s) => (
                    <option key={s} value={s} style={{ background: "#0a3444" }}>{s}</option>
                  ))}
                </select>
              </Field>

              <Field label="Project Details" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Describe your project or electrical issue..."
                  className={inputBase}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocus, resize: "vertical" })}
                  onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, resize: "vertical" })}
                />
              </Field>

              {serverError && (
                <p className="text-sm p-3 rounded-lg" style={{ color: "#f87171", background: "rgba(248,113,113,0.1)" }}>
                  {serverError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full font-bold text-lg py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed shadow-xl"
                style={{ background: "#eea603", color: "#082933" }}
              >
                {submitting ? "Sending..." : "Send My Free Estimate Request →"}
              </button>

              <p className="text-center text-xs" style={{ color: "#b7b6b6" }}>
                Or call David directly:{" "}
                <a href="tel:7204365746" className="font-bold" style={{ color: "#eea603" }}>
                  (720) 436-5746
                </a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
