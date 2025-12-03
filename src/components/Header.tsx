"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Problema", href: "#problem" },
    { name: "Solução", href: "#solution" },
    { name: "Serviços", href: "#services" },
    { name: "Planos", href: "#pricing" },
    { name: "Stack", href: "#stack" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "glass-panel py-4" : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="relative w-40 h-10">
                    <img
                        src="/logo.png"
                        alt="INOVASYS"
                        className="w-full h-full object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href={SITE_CONFIG.whatsapp}
                        target="_blank"
                        className="px-6 py-2 rounded-full bg-white text-black font-bold hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        <Rocket className="w-4 h-4" />
                        <span>Fale Comigo</span>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/10 p-4"
                >
                    <nav className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-gray-300 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href={SITE_CONFIG.whatsapp}
                            target="_blank"
                            className="w-full py-3 rounded-lg bg-white text-black text-center font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Fale Comigo
                        </Link>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
}
