"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import confetti from "canvas-confetti";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personalData } from "@/data/personal";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.type) setStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit form.");
      }

      // Success state
      setStatus({
        type: "success",
        message:
          "Message sent successfully! Binod will get back to you within 24 hours.",
      });

      // Confetti burst for joyful feedback
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#B8FF3D", "#6FAF20", "#FFFFFF"],
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#08090C] relative">
      <div id="contact-form" className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <SectionHeading
          number="08"
          eyebrow="Direct Connection"
          title="Start a Conversation with"
          titleAccent="Binod Ray."
          description="Whether you have an upcoming project, want to consult on Laravel or WordPress architectures, or discuss engineering roles—reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Info Cards & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#111318] border border-white/10 space-y-6">
              <h3 className="font-display font-bold text-2xl text-[#F5F5F2]">
                Contact Information
              </h3>
              <p className="text-sm text-[#9A9DA5] leading-relaxed font-light">
                Available for freelance projects, technical consulting, and
                full-time web development opportunities.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${personalData.email}`}
                  className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#B8FF3D]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#B8FF3D] group-hover:text-[#08090C] text-[#B8FF3D] flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#9A9DA5] block">
                      Email Address
                    </span>
                    <span className="font-display text-sm sm:text-base font-semibold text-[#F5F5F2] group-hover:text-[#B8FF3D] transition-colors">
                      {personalData.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalData.phone.replace(/[^0-9+]/g, "")}`}
                  className="group flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#B8FF3D]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#B8FF3D] group-hover:text-[#08090C] text-[#B8FF3D] flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#9A9DA5] block">
                      Phone / WhatsApp
                    </span>
                    <span className="font-display text-sm sm:text-base font-semibold text-[#F5F5F2] group-hover:text-[#B8FF3D] transition-colors">
                      {personalData.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-[#B8FF3D] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#9A9DA5] block">
                      Location
                    </span>
                    <span className="font-display text-sm sm:text-base font-semibold text-[#F5F5F2]">
                      {personalData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2.5 text-xs font-mono text-[#9A9DA5]">
                <Clock className="w-4 h-4 text-[#B8FF3D]" />
                <span>Typical response time: Under 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111318] border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#9A9DA5]"
                    >
                      Your Name <span className="text-[#B8FF3D]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-[#B8FF3D] focus:ring-1 focus:ring-[#B8FF3D] text-[#F5F5F2] placeholder-white/20 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#9A9DA5]"
                    >
                      Email Address <span className="text-[#B8FF3D]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-[#B8FF3D] focus:ring-1 focus:ring-[#B8FF3D] text-[#F5F5F2] placeholder-white/20 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-xs font-mono uppercase tracking-wider text-[#9A9DA5]"
                    >
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-[#B8FF3D] focus:ring-1 focus:ring-[#B8FF3D] text-[#F5F5F2] placeholder-white/20 text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-wider text-[#9A9DA5]"
                    >
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="New Web Project / Full-Time Hire"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-[#B8FF3D] focus:ring-1 focus:ring-[#B8FF3D] text-[#F5F5F2] placeholder-white/20 text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#9A9DA5]"
                  >
                    Project Details / Message <span className="text-[#B8FF3D]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your goals, timelines, or technology requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#08090C] border border-white/10 focus:border-[#B8FF3D] focus:ring-1 focus:ring-[#B8FF3D] text-[#F5F5F2] placeholder-white/20 text-sm outline-none transition-colors resize-y"
                  />
                </div>

                {/* Status Alerts */}
                {status.type === "success" && (
                  <div className="p-4 rounded-xl bg-[#B8FF3D]/10 border border-[#B8FF3D]/40 text-[#B8FF3D] flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {status.type === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{status.message}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  data-cursor="cta"
                  className="w-full py-4 rounded-full bg-[#B8FF3D] hover:bg-[#c6ff5c] text-[#08090C] font-display font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(184,255,61,0.25)] hover:shadow-[0_0_30px_rgba(184,255,61,0.45)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-[#08090C]/40 border-t-[#08090C] animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
