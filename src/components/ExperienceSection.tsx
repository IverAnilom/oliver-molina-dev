"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";

interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
}

const experiences: Experience[] = [
    {
        title: "IT Intern",
        company: "Zenith Capital Credit Group Corporation",
        location: "Taguig City, Metro Manila",
        period: "February – May 2025",
        responsibilities: [
            "Assisted in troubleshooting and resolving IT-related issues, including hardware, software, and network concerns",
            "Supported system administration tasks such as user account management and system monitoring",
            "Helped maintain and update internal databases and IT documentation",
            "Participated in the development, testing, and debugging of in-house software solutions",
            "Collaborated with the IT team to optimize infrastructure and improve system performance",
            "Provided technical support to employees and assisted with IT onboarding setup",
            "Researched and recommended improvements for IT processes and automation",
        ],
    },
];

export default function ExperienceSection() {
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="experience"
            ref={ref}
            className="relative bg-[#0a0a0f] py-32"
        >
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="mb-4 block text-sm font-medium tracking-widest text-blue-400 uppercase">
                        Work Experience
                    </span>
                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                        Professional Journey
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-500">
                        Building real-world experience through hands-on work
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute top-0 bottom-0 left-8 w-px bg-linear-to-b from-blue-500/50 via-cyan-500/30 to-transparent md:left-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -50 : 50,
                            }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative mb-12 grid gap-8 md:grid-cols-2"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 md:left-1/2" />

                            <div
                                className={`pl-20 md:col-start-1 md:pl-0 ${
                                    index % 2 === 0
                                        ? "md:pr-16 md:text-right"
                                        : "md:col-start-2 md:pl-16"
                                }`}
                            >
                                <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-8 transition-all duration-500 hover:border-blue-500/30">
                                    <div
                                        className={`mb-4 flex items-center gap-3 ${
                                            index % 2 === 0
                                                ? "md:justify-end"
                                                : ""
                                        }`}
                                    >
                                        <div className="rounded-lg bg-blue-500/10 p-2">
                                            <Building2 className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <span className="font-semibold text-blue-400">
                                            {exp.company}
                                        </span>
                                    </div>

                                    <h3 className="mb-3 text-2xl font-bold text-white">
                                        {exp.title}
                                    </h3>

                                    <div
                                        className={`mb-6 flex items-center gap-4 text-sm text-gray-500 ${
                                            index % 2 === 0
                                                ? "md:justify-end"
                                                : ""
                                        }`}
                                    >
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {exp.period}
                                        </span>
                                        <span>{exp.location}</span>
                                    </div>

                                    <ul
                                        className={`space-y-3 ${
                                            index % 2 === 0
                                                ? "md:text-left"
                                                : ""
                                        }`}
                                    >
                                        {exp.responsibilities.map(
                                            (item: string, i: number) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-sm text-gray-400"
                                                >
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                                                    <span>{item}</span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
