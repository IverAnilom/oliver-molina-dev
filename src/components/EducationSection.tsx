"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function EducationSection() {
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="education"
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
                        Education
                    </span>
                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                        Academic Background
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mx-auto max-w-3xl"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-600/10 via-cyan-600/5 to-purple-600/10 blur-2xl" />

                        <div className="relative rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-10">
                            <div className="flex flex-col gap-8 md:flex-row md:items-start">
                                <div className="shrink-0">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20">
                                        <GraduationCap className="h-10 w-10 text-white" />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="mb-4 flex flex-wrap items-center gap-3">
                                        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                                            Graduated
                                        </span>
                                        <span className="flex items-center gap-1 text-sm text-gray-500">
                                            <Calendar className="h-4 w-4" />
                                            August 2025
                                        </span>
                                    </div>

                                    <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                                        University of Makati
                                    </h3>

                                    <p className="mb-4 text-lg text-gray-300">
                                        Bachelor of Science in Computer Science
                                    </p>

                                    <p className="mb-6 text-gray-500">
                                        Application Development Elective Track
                                    </p>

                                    <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <MapPin className="h-4 w-4 text-blue-400" />
                                            <span>
                                                Makati City, Philippines
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <Award className="h-4 w-4 text-cyan-400" />
                                            <span>App Development Track</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
