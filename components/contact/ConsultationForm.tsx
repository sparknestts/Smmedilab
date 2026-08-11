"use client";

import { useState } from "react";
import { formSubjects } from "@/data/contact";

export default function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send inquiry");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-[28px] md:rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-12 text-center">
        <div className="bg-[#e7f9ee] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-[#28a745]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-[#002b5c] mb-3">
          Inquiry Sent Successfully
        </h3>
        <p className="text-gray-500">
          Our lab concierge will contact you within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[20px] md:rounded-[24px] shadow-sm border border-gray-100 p-6 md:p-10 lg:p-12">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#191C1D] mb-3">
          Request a Consultation
        </h2>
        <p className="text-[#424752] text-sm md:text-base leading-relaxed">
          Complete the form below, and our lab concierge will contact you within 2 business hours.
        </p>
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-600 text-sm font-medium">{error}</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          <div className="space-y-2 field-hairline">
            <label
              htmlFor="fullName"
              className="text-sm font-bold text-[#424752]"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3.5 text-gray-700 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>
          <div className="space-y-2 field-hairline">
            <label
              htmlFor="email"
              className="text-sm font-bold text-[#424752]"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3.5 text-gray-700 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          <div className="space-y-2 field-hairline">
            <label
              htmlFor="phone"
              className="text-sm font-bold text-[#424752]"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3.5 text-gray-700 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>
          <div className="space-y-2 field-hairline">
            <label
              htmlFor="subject"
              className="text-sm font-bold text-[#424752]"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3.5 text-gray-700 placeholder:text-gray-400 outline-none transition-all"
              defaultValue=""
            >
              <option value="" disabled>
                Select a subject
              </option>
              {formSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2 field-hairline">
          <label
            htmlFor="message"
            className="text-sm font-bold text-[#424752]"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us how we can help you..."
              className="w-full px-4 py-3.5 text-gray-700 placeholder:text-gray-400 outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#002b5c] hover:bg-[#003d7a] text-white font-bold px-8 py-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </div>
  );
}
