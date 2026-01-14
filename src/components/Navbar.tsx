"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import myprofile from "@/assets/myprofile.svg";

type NavItem = {
    label: string;
    href: string;
    external?: boolean;
};

const navItems: NavItem[] = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
    {
        label: "CV",
        href: "https://docs.google.com/document/d/1Ldli6EpQv11ECSrUs6aOQwDYDJJ_MRLebdUqLq8Pyjs/edit?usp=sharing",
        external: true,
    },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        setIsMobileMenuOpen(false);

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl"
                        : "bg-transparent"
                }`}
            >
                <div className="mx-auto max-w-6xl px-6">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <button
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            className="text-xl font-bold text-white"
                        >
                            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                <Image
                                    src={myprofile}
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    className="rounded-full object-cover object-center"
                                />
                            </span>
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-8 md:flex">
                            {navItems.map((item) =>
                                item.external ? (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                                    </a>
                                ) : (
                                    <button
                                        key={item.label}
                                        onClick={() =>
                                            scrollToSection(item.href)
                                        }
                                        className="group relative text-sm text-gray-400 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                                    </button>
                                ),
                            )}

                            <button
                                onClick={() => scrollToSection("#contact")}
                                className="rounded-full bg-linear-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                            >
                                Hire Me
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                            className="rounded-lg border border-white/10 bg-white/5 p-2 md:hidden"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5 text-white" />
                            ) : (
                                <Menu className="h-5 w-5 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0a0a0f]/95 pt-24 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col items-center gap-6 p-6">
                            {navItems.map((item, index) =>
                                item.external ? (
                                    <motion.a
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xl text-gray-300 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </motion.a>
                                ) : (
                                    <motion.button
                                        key={item.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() =>
                                            scrollToSection(item.href)
                                        }
                                        className="text-xl text-gray-300 transition-colors hover:text-white"
                                    >
                                        {item.label}
                                    </motion.button>
                                ),
                            )}

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                                onClick={() => scrollToSection("#contact")}
                                className="mt-4 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 px-8 py-4 font-medium text-white"
                            >
                                Hire Me
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
