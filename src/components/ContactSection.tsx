"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactSection() {
    const ref = useRef<HTMLElement | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // TODO: Replace with your actual EmailJS credentials
    // You can get these from https://dashboard.emailjs.com/
    const EMAILJS_SERVICE_ID = "service_hxvmrfh";
    const EMAILJS_TEMPLATE_ID = "template_maag58x";
    const EMAILJS_PUBLIC_KEY = "1z_DtAkGu5Jl_lba1";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        const loadingToast = toast.loading("Sending your message...");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY,
            );
            toast.success(
                "Message sent successfully! I'll get back to you soon.",
                {
                    id: loadingToast,
                },
            );
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.error("Failed to send message. Please try again later.", {
                id: loadingToast,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "oliverm2712@gmail.com",
            href: "mailto:oliverm2712@gmail.com",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+63 967 007 0883",
            href: "tel:+639670070883",
            color: "from-emerald-500 to-teal-500",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Taguig City, Philippines",
            href: null,
            color: "from-purple-500 to-pink-500",
        },
    ];

    return (
        <section
            id="contact"
            ref={ref}
            className="relative overflow-hidden bg-[#080810] py-32"
        >
            <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

            <div className="relative mx-auto max-w-6xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className="mb-4 block text-sm font-medium tracking-widest text-blue-400 uppercase">
                        Get In Touch
                    </span>
                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                        Let&apos;s Work Together
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-500">
                        I&apos;m currently available for freelance work and
                        full-time opportunities. Feel free to reach out if
                        you&apos;d like to collaborate!
                    </p>
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Left: Contact Info */}
                    <div className="space-y-6">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2 + index * 0.1,
                                }}
                            >
                                {item.href ? (
                                    <a href={item.href} className="group block">
                                        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                                            <div
                                                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${item.color} shadow-lg shadow-blue-500/10 transition-transform duration-300 group-hover:scale-110`}
                                            >
                                                <item.icon className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase">
                                                    {item.label}
                                                </p>
                                                <p className="font-medium text-white transition-colors group-hover:text-blue-400">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xs">
                                        <div
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${item.color} shadow-lg shadow-blue-500/10`}
                                        >
                                            <item.icon className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase">
                                                {item.label}
                                            </p>
                                            <p className="font-medium text-white">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex items-center gap-4 pt-4"
                        >
                            <a
                                href="https://github.com/IverAnilom"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                            >
                                <Github className="h-5 w-5 text-gray-400 transition-colors hover:text-white" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/olivermmolina/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                            >
                                <Linkedin className="h-5 w-5 text-gray-400 transition-colors hover:text-white" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                        >
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="user_name"
                                        className="text-sm font-medium text-gray-400"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="user_name"
                                        name="user_name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-0 focus:outline-hidden"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="user_email"
                                        className="text-sm font-medium text-gray-400"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="user_email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-0 focus:outline-hidden"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-medium text-gray-400"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="Project Inquiry"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-0 focus:outline-hidden"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-gray-400"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:ring-0 focus:outline-hidden"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 py-4 font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:hover:shadow-none"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    <>
                                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
