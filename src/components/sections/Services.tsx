"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Server,
  ShoppingBag,
  Briefcase,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData, ServiceItem } from "@/data/services";

const iconMap = {
  Code: Code,
  Wordpress: Globe,
  Server: Server,
  ShoppingBag: ShoppingBag,
  Briefcase: Briefcase,
  Cloud: Cloud,
};

function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  const IconComponent = iconMap[service.iconName] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-3xl p-8 sm:p-9 bg-[#111318] border border-white/5 hover:border-[#B8FF3D]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(184,255,61,0.1)] flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle radial background glow on card hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#B8FF3D]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top row: Number and Icon */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-xs font-bold tracking-widest text-[#9A9DA5] group-hover:text-[#B8FF3D] transition-colors">
            /{service.number}
          </span>
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F5F5F2] group-hover:text-[#08090C] group-hover:bg-[#B8FF3D] group-hover:border-[#B8FF3D] transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
            <IconComponent className="w-5 h-5 transition-transform" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F5F2] group-hover:text-[#B8FF3D] transition-colors mb-3">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#9A9DA5] leading-relaxed font-light mb-6">
          {service.shortDesc}
        </p>
      </div>

      {/* Features bullet list & Bottom Arrow */}
      <div>
        <ul className="space-y-2 mb-6 pt-4 border-t border-white/5">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-xs font-mono text-[#9A9DA5] group-hover:text-white/80 transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-[#B8FF3D]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#9A9DA5] group-hover:text-[#F5F5F2] transition-colors">
          <span>Inquire Service</span>
          <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#B8FF3D] group-hover:text-[#08090C] flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#08090C] relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <SectionHeading
          number="02"
          eyebrow="What I Do"
          title="Engineering Solutions Tailored for"
          titleAccent="Performance & Growth."
          description="From tailored full-stack applications in Laravel to high-conversion custom WordPress block themes, I build solutions engineered to perform seamlessly."
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
