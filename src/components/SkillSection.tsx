"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillTiers = {
    "Core Capabilities": {
        description: "Tools I use daily to build production-ready applications",
        skills: [
            "React.js",
            "Next.js",
            "HTML/CSS",
            "Tailwind CSS",
            "JavaScript",
        ],
        color: "from-blue-500 to-cyan-400",
    },
    "Design & Workflow": {
        description: "Essential tools for design and development workflow",
        skills: ["Git/GitHub", "Figma", "Canva", "Supabase", "UI/UX Design"],
        color: "from-purple-500 to-pink-400",
    },
    "Functional Skills": {
        description: "Technologies I've used in multiple projects",
        skills: ["Python", "Flask", "TypeScript", "Firebase", "Laravel"],
        color: "from-emerald-500 to-teal-400",
    },
    "Familiar With": {
        description: "Technologies I've worked with and can pick up quickly",
        skills: ["PHP", "Java"],
        color: "from-orange-500 to-yellow-400",
    },
};

const techStack = [
    { name: "React / Next", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", color: "from-blue-400 to-indigo-500" },
    { name: "Tailwind", color: "from-teal-400 to-cyan-500" },
    { name: "Laravel", color: "from-red-400 to-orange-500" },
    { name: "Python", color: "from-yellow-400 to-green-500" },
    { name: "Supabase", color: "from-emerald-400 to-green-500" },
    { name: "Figma", color: "from-purple-400 to-pink-500" },
    { name: "Git", color: "from-orange-400 to-red-500" },
];

export default function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative overflow-hidden bg-[#080810] py-32"
        >
            {/* Background elements */}
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[150px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-600/5 blur-[150px]" />

            <div className="relative mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="mb-4 block text-sm font-medium tracking-widest text-blue-400 uppercase">
                        Skills & Expertise
                    </span>
                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                        My Tech Stack
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-500">
                        Technologies and tools I work with to bring ideas to
                        life
                    </p>
                </motion.div>

                {/* Floating tech badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20 flex flex-wrap justify-center gap-3"
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`rounded-full bg-linear-to-r px-5 py-2.5 ${tech.color} cursor-default text-sm font-medium text-white shadow-lg`}
                        >
                            {tech.name}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills grid */}
                <div className="grid gap-8 md:grid-cols-2">
                    {Object.entries(skillTiers).map(
                        ([tier, data], tierIndex) => (
                            <motion.div
                                key={tier}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2 + tierIndex * 0.1,
                                }}
                                className="group relative"
                            >
                                {/* linear background on hover */}
                                <div
                                    className={`absolute inset-0 bg-linear-to-br ${data.color} rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-5`}
                                />

                                <div className="relative h-full rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-8 transition-all duration-500 group-hover:border-white/20">
                                    <div className="mb-4 flex items-start gap-3">
                                        <div
                                            className={`h-12 w-1.5 rounded-full bg-linear-to-b ${data.color}`}
                                        />
                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-white">
                                                {tier}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {data.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {data.skills.map((skill, index) => (
                                            <motion.span
                                                key={skill}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.8,
                                                }}
                                                animate={
                                                    isInView
                                                        ? {
                                                              opacity: 1,
                                                              scale: 1,
                                                          }
                                                        : {}
                                                }
                                                transition={{
                                                    duration: 0.3,
                                                    delay:
                                                        0.4 +
                                                        tierIndex * 0.1 +
                                                        index * 0.05,
                                                }}
                                                whileHover={{
                                                    scale: 1.05,
                                                    y: -2,
                                                }}
                                                className="cursor-default rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all hover:border-white/20 hover:bg-white/10"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
