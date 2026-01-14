"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Skill = {
    name: string;
    level: number;
};

type SkillsMap = Record<string, Skill[]>;

const skills: SkillsMap = {
    "Frontend Development": [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "TypeScript", level: 75 },
    ],
    "Backend & Tools": [
        { name: "Laravel", level: 70 },
        { name: "Python/Flask", level: 75 },
        { name: "Supabase", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "Git/GitHub", level: 85 },
    ],
    "Design & Other": [
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 85 },
        { name: "Canva", level: 90 },
        { name: "PHP", level: 65 },
        { name: "Java", level: 60 },
    ],
};

const techStack = [
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", color: "from-blue-400 to-indigo-500" },
    { name: "Tailwind", color: "from-teal-400 to-cyan-500" },
    { name: "Laravel", color: "from-red-400 to-orange-500" },
    { name: "Python", color: "from-yellow-400 to-green-500" },
    { name: "Supabase", color: "from-emerald-400 to-green-500" },
    { name: "Figma", color: "from-purple-400 to-pink-500" },
    { name: "Git", color: "from-orange-400 to-red-500" },
];

export default function SkillsSection() {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    return (
        <section
            id="skills"
            ref={ref}
            className="relative overflow-hidden bg-[#080810] py-32"
        >
            {/* Background effects */}
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[150px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-600/5 blur-[150px]" />

            <div className="relative mx-auto max-w-6xl px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : undefined}
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

                {/* Tech badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : undefined}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20 flex flex-wrap justify-center gap-3"
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isInView ? { opacity: 1, y: 0 } : undefined
                            }
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`cursor-default rounded-full bg-linear-to-r ${tech.color} px-5 py-2.5 text-sm font-medium text-white shadow-lg`}
                        >
                            {tech.name}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Skills grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {Object.entries(skills).map(
                        ([category, skillList], categoryIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 40 }}
                                animate={
                                    isInView ? { opacity: 1, y: 0 } : undefined
                                }
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2 + categoryIndex * 0.1,
                                }}
                                className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-8"
                            >
                                <h3 className="mb-6 text-xl font-semibold text-white">
                                    {category}
                                </h3>

                                <div className="space-y-5">
                                    {skillList.map((skill, index) => (
                                        <div key={skill.name}>
                                            <div className="mb-2 flex justify-between">
                                                <span className="text-sm text-gray-400">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-gray-600">
                                                    {skill.level}%
                                                </span>
                                            </div>

                                            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={
                                                        isInView
                                                            ? {
                                                                  width: `${skill.level}%`,
                                                              }
                                                            : undefined
                                                    }
                                                    transition={{
                                                        duration: 1,
                                                        delay:
                                                            0.5 + index * 0.1,
                                                    }}
                                                    className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
