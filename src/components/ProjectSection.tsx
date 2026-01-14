"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";

interface Project {
    title: string;
    subtitle: string;
    period: string;
    role: string;
    description: string;
    highlights: string[];
    tech: string[];
    color: string;
    featured: boolean;
}

const projects: Project[] = [
    {
        title: "JC TechSight",
        subtitle: "Brand Identity & Service Showcase",
        period: "November – December 2025",
        role: "Full-Stack Developer",
        description:
            "Developed a high-performance, responsive enterprise platform using React 19, TypeScript, and Vite, featuring a modular architecture designed to showcase complex technical consultancy services.",
        highlights: [
            "Premium UI/UX with dynamic micro-interactions using Framer Motion",
            "Scalable, type-safe foundation with TanStack Query and Supabase",
            "Modular architecture for future SaaS product expansion",
        ],
        tech: [
            "React 19",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "Supabase",
        ],
        color: "from-violet-500 to-purple-600",
        featured: true,
    },
    {
        title: "MoTeRoLe",
        subtitle: "Mother Tongue Writing Tool for Preschoolers",
        period: "August 2024 – May 2025",
        role: "Full-Stack Developer",
        description:
            "An interactive, game-based writing tool designed to improve preschoolers' writing skills in their mother tongue, aligned with the MATATAG Curriculum.",
        highlights: [
            "Real-time tracing with SSIM Algorithm implementation",
            "Adaptive difficulty and personalized feedback system",
            "Promoting early literacy and cultural identity",
        ],
        tech: ["React.js", "Python", "Flask", "Tailwind CSS", "SSIM Algorithm"],
        color: "from-emerald-500 to-teal-600",
        featured: true,
    },
    {
        title: "Document Record System (DRS)",
        subtitle: "Digital Records Management Platform",
        period: "February – May 2025",
        role: "Front-End Developer",
        description:
            "Developed the front end of the Document Record System, creating a responsive and user-friendly interface for managing and organizing digital records.",
        highlights: [
            "Responsive design for all device sizes",
            "User-friendly interface for document management",
            "Efficient organization of digital records",
        ],
        tech: ["React.js", "Tailwind CSS", "JavaScript"],
        color: "from-blue-500 to-cyan-600",
        featured: false,
    },
    {
        title: "Alumni Tracking System",
        subtitle: "Web-based Alumni Management",
        period: "February 2024 – June 2024",
        role: "Full-Stack Developer",
        description:
            "A web-based application to record, manage, and showcase alumni information with public-facing interface and admin panel for data management.",
        highlights: [
            "Public interface for alumni profiles and accomplishments",
            "Admin panel for comprehensive data management",
            "Report generation with detailed summaries and analytics",
        ],
        tech: ["Laravel", "TailwindCSS", "PHP"],
        color: "from-orange-500 to-red-600",
        featured: false,
    },
    {
        title: "Supply Request & Inventory System",
        subtitle: "Rizal Elementary School",
        period: "August 2022 – February 2023",
        role: "Front-End Developer",
        description:
            "Led the front-end development of a web-based system to streamline communication between teachers, administrators, and the purchasing department.",
        highlights: [
            "Responsive interfaces for supply request tracking",
            "Transparent inventory management system",
            "Coordination across all school departments",
        ],
        tech: ["React.js", "Tailwind CSS", "JavaScript"],
        color: "from-pink-500 to-rose-600",
        featured: false,
    },
];

export default function ProjectsSection() {
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [expandedProject, setExpandedProject] = useState<string | null>(null);

    return (
        <section
            id="projects"
            ref={ref}
            className="relative overflow-hidden bg-[#080810] py-32"
        >
            <div className="absolute top-1/2 left-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-purple-600/5 blur-[200px]" />
            <div className="absolute top-1/2 right-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-600/5 blur-[200px]" />

            <div className="relative mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="mb-4 block text-sm font-medium tracking-widest text-blue-400 uppercase">
                        Featured Work
                    </span>
                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                        Projects & Creations
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-500">
                        A collection of projects that showcase my skills and
                        passion for development
                    </p>
                </motion.div>

                <div className="mb-8 grid gap-6 lg:grid-cols-2">
                    {projects
                        .filter((p) => p.featured)
                        .map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2 + index * 0.1,
                                }}
                                className="group relative"
                            >
                                <div
                                    className={`absolute inset-0 bg-linear-to-br ${project.color} rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                                />
                                <div className="relative h-full rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-8 transition-all duration-500 hover:border-white/20">
                                    <div className="mb-6 flex items-start justify-between">
                                        <div>
                                            <div
                                                className={`inline-block rounded-full bg-linear-to-r px-3 py-1 text-xs font-medium ${project.color} mb-4 text-white`}
                                            >
                                                Featured
                                            </div>
                                            <h3 className="mb-2 text-2xl font-bold text-white">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400">
                                                {project.subtitle}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="h-4 w-4" />
                                            {project.period.split(" – ")[0]}
                                        </div>
                                    </div>

                                    <p className="mb-6 text-sm leading-relaxed text-gray-400">
                                        {project.description}
                                    </p>

                                    <div className="mb-6 space-y-2">
                                        {project.highlights.map(
                                            (highlight, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-2 text-sm text-gray-500"
                                                >
                                                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                                                    <span>{highlight}</span>
                                                </div>
                                            ),
                                        )}
                                    </div>

                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {projects
                        .filter((p) => !p.featured)
                        .map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.4 + index * 0.1,
                                }}
                                onClick={() =>
                                    setExpandedProject(
                                        expandedProject === project.title
                                            ? null
                                            : project.title,
                                    )
                                }
                                className="group cursor-pointer"
                            >
                                <div className="relative rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-6 transition-all duration-500 hover:border-white/20">
                                    <div
                                        className={`absolute top-0 right-0 h-20 w-20 bg-linear-to-br ${project.color} rounded-tr-2xl rounded-bl-[100px] opacity-20`}
                                    />

                                    <div className="mb-4 flex items-center gap-2 text-xs text-gray-500">
                                        <Calendar className="h-3 w-3" />
                                        {project.period}
                                    </div>

                                    <h3 className="mb-2 text-lg font-bold text-white">
                                        {project.title}
                                    </h3>
                                    <p className="mb-4 text-sm text-gray-500">
                                        {project.role}
                                    </p>

                                    <AnimatePresence>
                                        {expandedProject === project.title && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    height: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto",
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    height: 0,
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <p className="mb-4 text-sm text-gray-400">
                                                    {project.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech
                                                        .slice(0, 4)
                                                        .map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="rounded-full bg-white/5 px-2 py-1 text-xs text-gray-400"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="mt-4 flex items-center gap-1 text-sm text-blue-400 transition-all group-hover:gap-2">
                                        <span>
                                            {expandedProject === project.title
                                                ? "Less"
                                                : "Learn more"}
                                        </span>
                                        <ChevronRight
                                            className={`h-4 w-4 transition-transform ${
                                                expandedProject ===
                                                project.title
                                                    ? "rotate-90"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
}
