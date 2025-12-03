"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-wide uppercase">
                        Sistemas e Sites Antigravidade
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
                        ROMEIRO<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">.DEV</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Leveza, Velocidade e Conversão para o seu Negócio. Transformo ideias em experiências digitais que desafiam a gravidade.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="https://wa.me/yournumber"
                            target="_blank"
                            className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/25"
                        >
                            <Rocket className="w-5 h-5" />
                            Impulsione seu Projeto
                        </Link>
                        <Link
                            href="#services"
                            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
                        >
                            Ver Serviços
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Element */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 md:mt-24"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-4xl mx-auto h-64 md:h-96 glass-panel rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-10" />
                        <div className="grid grid-cols-3 gap-8 p-8 opacity-30">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="h-32 bg-white/10 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                            ))}
                        </div>
                        <div className="absolute z-20 text-center">
                            <p className="text-2xl font-bold text-white/50">High Performance Zone</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
