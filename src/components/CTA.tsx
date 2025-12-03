"use client";

import { motion } from "framer-motion";
import { Rocket, Mail } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" />

            {/* Animated Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter">
                        Pronto para o <br />
                        <span className="text-gradient-primary">Próximo Nível?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Não deixe sua ideia ser apenas mais uma. Vamos construir algo que desafie a gravidade e domine o mercado.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href={SITE_CONFIG.whatsapp}
                            target="_blank"
                            className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-bold text-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Rocket className="w-6 h-6" />
                                Iniciar Agora
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>

                        <Link
                            href={SITE_CONFIG.email}
                            className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xl hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-sm"
                        >
                            <Mail className="w-6 h-6" />
                            Fale por Email
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
