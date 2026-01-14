"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, Code2 } from "lucide-react";

export default function AboutSection() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    return (
        <section id="about" ref={ref} className="relative bg-[#0a0a0f] py-32">
            <div className="mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : undefined}
                    transition={{ duration: 0.8 }}
                    className="grid items-center gap-16 lg:grid-cols-2"
                >
                    {/* Left: Text */}
                    <div>
                        <span className="mb-4 block text-sm font-medium tracking-widest text-blue-400 uppercase">
                            About Me
                        </span>

                        <h2 className="mb-8 text-4xl leading-tight font-bold text-white md:text-5xl">
                            Turning ideas into
                            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                {" "}
                                digital reality
                            </span>
                        </h2>

                        <p className="mb-8 text-lg leading-relaxed text-gray-400">
                            Detail-oriented and client-focused Front-End
                            Developer with hands-on experience in web
                            development, UI design, and IT support. Skilled in
                            React.js, HTML/CSS, and JavaScript, with proficiency
                            in modern development tools.
                        </p>

                        <p className="mb-10 leading-relaxed text-gray-500">
                            Strong communicator with the ability to understand
                            client needs and deliver user-friendly solutions.
                            Passionate about creating seamless digital
                            experiences that make a real impact.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-3 text-gray-400">
                                <div className="rounded-lg bg-blue-500/10 p-2">
                                    <MapPin className="h-5 w-5 text-blue-400" />
                                </div>
                                <span>Taguig City, Philippines</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-400">
                                <div className="rounded-lg bg-cyan-500/10 p-2">
                                    <Calendar className="h-5 w-5 text-cyan-400" />
                                </div>
                                <span>Class of 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stats */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-600/10 to-cyan-600/10 blur-3xl" />

                        <div className="relative grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1 }
                                        : undefined
                                }
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-8 backdrop-blur-sm"
                            >
                                <Code2 className="mb-4 h-8 w-8 text-blue-400" />
                                <div className="mb-2 text-4xl font-bold text-white">
                                    5+
                                </div>
                                <div className="text-sm text-gray-500">
                                    Projects Completed
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1 }
                                        : undefined
                                }
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-8 rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-8 backdrop-blur-sm"
                            >
                                <div className="mb-2 text-4xl font-bold text-white">
                                    3+
                                </div>
                                <div className="text-sm text-gray-500">
                                    Years Learning
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1 }
                                        : undefined
                                }
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-8 backdrop-blur-sm"
                            >
                                <div className="mb-2 text-4xl font-bold text-white">
                                    10+
                                </div>
                                <div className="text-sm text-gray-500">
                                    Technologies
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1 }
                                        : undefined
                                }
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="mt-8 rounded-2xl border border-cyan-500/20 bg-linear-to-br from-cyan-600/20 to-blue-600/20 p-8 backdrop-blur-sm"
                            >
                                <div className="mb-2 text-4xl font-bold text-white">
                                    BS
                                </div>
                                <div className="text-sm text-gray-400">
                                    Computer Science
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
