"use client";

import { motion } from "framer-motion";
import { Rocket, Mail } from "lucide-react";
import Link from "next/link";

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto glass-panel p-12 rounded-3xl border border-white/10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Pronto para Dar um <span className="text-primary">Salto de Qualidade</span>?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Vamos transformar sua ideia em uma realidade digital antigravidade.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="https://wa.me/yournumber"
                            target="_blank"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                        >
                            <Rocket className="w-5 h-5" />
                            Fale Comigo no WhatsApp
                        </Link>
                        <Link
                            href="mailto:contato@romeiro.dev"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            Envie um Email
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
