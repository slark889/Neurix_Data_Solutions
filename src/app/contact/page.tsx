"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormErrors];
        return next;
      });
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate form submission (no backend)
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col flex-1">
      {/* ── Hero Section ── */}
      <section className="bg-color-dark py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 font-serif text-3xl sm:text-4xl font-semibold text-white">
            Contact Us
          </h1>
          <p className="text-base text-color-body/80 max-w-xl mx-auto leading-relaxed">
            Have a question, a project idea, or want to learn more about how
            Neurix can help your business? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Contact Section (Form + Details) ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: Contact Form */}
            <div>
              <h2 className="mb-6 font-serif text-2xl sm:text-3xl font-semibold text-color-dark">
                Send Us a Message
              </h2>

              {submitted ? (
                /* Success Message */
                <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-7 w-7 text-green-600"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-color-dark">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-color-body leading-relaxed">
                    Thank you for reaching out. We&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-color-primary px-5 text-sm font-medium text-color-primary transition-colors hover:bg-color-primary hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1.5 text-sm font-medium text-color-dark font-serif"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full rounded-lg border bg-color-bg px-4 py-2.5 text-sm text-color-dark placeholder:text-color-body/60 transition-colors focus:outline-none focus:ring-2 focus:ring-color-primary/40 ${
                        errors.name
                          ? "border-red-400"
                          : "border-color-body/20"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1.5 text-sm font-medium text-color-dark font-serif"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full rounded-lg border bg-color-bg px-4 py-2.5 text-sm text-color-dark placeholder:text-color-body/60 transition-colors focus:outline-none focus:ring-2 focus:ring-color-primary/40 ${
                        errors.email
                          ? "border-red-400"
                          : "border-color-body/20"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-1.5 text-sm font-medium text-color-dark font-serif"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className={`w-full rounded-lg border bg-color-bg px-4 py-2.5 text-sm text-color-dark placeholder:text-color-body/60 transition-colors focus:outline-none focus:ring-2 focus:ring-color-primary/40 ${
                        errors.subject
                          ? "border-red-400"
                          : "border-color-body/20"
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1.5 text-sm font-medium text-color-dark font-serif"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or question..."
                      className={`w-full rounded-lg border bg-color-bg px-4 py-2.5 text-sm text-color-dark placeholder:text-color-body/60 transition-colors focus:outline-none focus:ring-2 focus:ring-color-primary/40 resize-y ${
                        errors.message
                          ? "border-red-400"
                          : "border-color-body/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-color-primary px-8 text-base font-medium text-white transition-colors hover:opacity-90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-5 w-5"
                    >
                      <path
                        d="M22 2L11 13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 2L15 22L11 13L2 9L22 2Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Company Contact Details */}
            <div>
              <h2 className="mb-6 font-serif text-2xl sm:text-3xl font-semibold text-color-dark">
                Get in Touch
              </h2>
              <p className="mb-8 text-sm sm:text-base text-color-body leading-relaxed">
                Prefer to reach out directly? Here&apos;s how you can contact
                our team. We typically respond within one business day.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="group flex items-start gap-4 rounded-lg border border-color-body/15 bg-color-bg p-5 transition-all hover:border-color-primary/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-color-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5 text-color-primary"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13L2 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-base font-semibold text-color-dark">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@neurixdata.com"
                      className="text-sm text-color-body hover:text-color-primary transition-colors"
                    >
                      hello@neurixdata.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start gap-4 rounded-lg border border-color-body/15 bg-color-bg p-5 transition-all hover:border-color-primary/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-color-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5 text-color-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-base font-semibold text-color-dark">
                      Phone
                    </h3>
                    <a
                      href="tel:+15551234567"
                      className="text-sm text-color-body hover:text-color-primary transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="group flex items-start gap-4 rounded-lg border border-color-body/15 bg-color-bg p-5 transition-all hover:border-color-primary/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-color-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5 text-color-primary"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-base font-semibold text-color-dark">
                      Office
                    </h3>
                    <p className="text-sm text-color-body leading-relaxed">
                      451 Data Drive, Suite 200
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="group flex items-start gap-4 rounded-lg border border-color-body/15 bg-color-bg p-5 transition-all hover:border-color-primary/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-color-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5 text-color-primary"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-base font-semibold text-color-dark">
                      Business Hours
                    </h3>
                    <p className="text-sm text-color-body leading-relaxed">
                      Monday – Friday: 9:00 AM – 6:00 PM PST
                      <br />
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-color-bg py-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-2xl sm:text-3xl font-semibold text-color-dark">
            Prefer to Explore First?
          </h2>
          <p className="mb-8 text-base text-color-body max-w-xl mx-auto leading-relaxed">
            Learn more about our services and how we help businesses automate
            their data workflows.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-color-primary px-8 text-base font-medium text-white transition-colors hover:opacity-90"
            >
              View Services
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-solid border-color-body px-8 text-base font-medium text-color-body transition-colors hover:border-color-primary hover:text-color-primary"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
