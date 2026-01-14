"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

export default function HeroSection() {
    const cvUrl =
        "https://docs.google.com/document/d/1Ldli6EpQv11ECSrUs6aOQwDYDJJ_MRLebdUqLq8Pyjs/edit?usp=sharing";

    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0f]"
        >
            {/* Animated linear background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-600/20 blur-[128px]" />
                <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-cyan-500/15 blur-[128px] delay-1000" />
                <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[150px]" />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                        <span className="text-sm text-gray-400">
                            Available for opportunities
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
                >
                    Oliver M.
                    <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Molina
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mx-auto mb-12 max-w-2xl text-xl font-light text-gray-400 md:text-2xl"
                >
                    Front-End Developer & UI Designer
                    <span className="mt-2 block text-lg text-gray-500">
                        Crafting user-friendly digital experiences
                    </span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .querySelector("#contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="group flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                        <Mail className="h-5 w-5" />
                        Get in Touch
                    </a>

                    <a
                        href={cvUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                        <FileText className="h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
                        View CV
                    </a>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/IverAnilom"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                        >
                            <Github className="h-5 w-5 text-gray-400" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/olivermmolina/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                        >
                            <Linkedin className="h-5 w-5 text-gray-400" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="rounded-full border border-white/20 p-2"
                >
                    <ArrowDown className="h-5 w-5 text-gray-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}
