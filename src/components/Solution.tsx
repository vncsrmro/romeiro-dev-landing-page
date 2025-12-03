"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Feather, Code2, ShieldCheck } from "lucide-react";

const solutions = [
    {
        icon: Zap,
        title: "Velocidade e Performance",
        description: "Experiências digitais ultra-rápidas para encantar seus usuários e o Google.",
    },
    {
        icon: Feather,
        title: "Leveza e Modernidade",
        description: "Design limpo, intuitivo e com a sensação de flutuar – uma interface que seus clientes vão amar.",
    },
    {
        icon: Code2,
        title: "Sistemas Sob Medida",
        description: "Desenvolvimento customizado, eliminando gargalos e otimizando sua rotina.",
    },
    {
        icon: ShieldCheck,
        title: "Segurança Robusta",
        description: "Soluções blindadas, construídas com a modernidade e segurança que você espera.",
    },
];

export function Solution() {
    return (
        <section id="solution" className="py-24 bg-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
                        >
                            A Tecnologia <span className="text-primary">Antigravidade</span> que seu Projeto Precisa.
                        </motion.h2>

                        <div className="space-y-8">
                            {solutions.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl absolute inset-0 animate-pulse" />
                            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    <div className="h-8 w-3/4 bg-white/10 rounded animate-pulse" />
                                    <div className="h-4 w-full bg-white/5 rounded animate-pulse delay-75" />
                                    <div className="h-4 w-5/6 bg-white/5 rounded animate-pulse delay-150" />
                                    <div className="h-40 w-full bg-white/5 rounded mt-8 animate-pulse delay-200" />
                                </div>

                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-secondary/50 animate-bounce">
                                    <span className="text-2xl font-bold text-white">100%</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
